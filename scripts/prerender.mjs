/**
 * Build-time prerendering for SEO.
 *
 * Runs after `vite build` (browser bundle → dist/) and
 * `vite build --ssr src/entry-server.tsx` (server bundle → dist-ssr/).
 *
 * For every public route it writes a real HTML file (dist/about/index.html, …)
 * containing the fully rendered page content plus that page's <title>, meta
 * description, canonical URL, Open Graph tags and JSON-LD structured data —
 * so Google and social networks see everything without running JavaScript.
 *
 * It also writes dist/404.html (noindex) and dist/sitemap.xml.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const ssrEntry = ['entry-server.js', 'entry-server.mjs']
  .map((file) => path.join(ssrDir, file))
  .find((file) => fs.existsSync(file));
if (!ssrEntry) throw new Error('Server bundle not found in dist-ssr/. Did `vite build --ssr` run?');

const { render, pages, indexablePages, headTagsFor, structuredDataFor, absoluteUrl } = await import(
  pathToFileURL(ssrEntry).href
);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// JSON inside <script> must not be able to close the tag.
const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

// Preload the self-hosted fonts so text renders sooner (better Core Web Vitals).
const fontPreloads = fs
  .readdirSync(path.join(distDir, 'assets'))
  .filter((file) => file.endsWith('.woff2'))
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');

function headFor(key) {
  const page = pages[key];
  const tags = headTagsFor(key).map(({ tag, attrs }) => {
    const attrString = Object.entries(attrs)
      .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
      .join(' ');
    return `<${tag} ${attrString} />`;
  });
  const data = structuredDataFor(key);

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    ...tags,
    data ? `<script type="application/ld+json" id="structured-data">${safeJson(data)}</script>` : '',
    fontPreloads,
  ]
    .filter(Boolean)
    .join('\n    ');
}

function buildPage(key, url) {
  const head = headFor(key);
  const appHtml = render(url);

  const html = template
    .replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, head)
    .replace('<!--app-html-->', appHtml);

  if (html.includes('seo:start') || !html.includes(appHtml.slice(0, 50))) {
    throw new Error(`Prerender failed to inject content for ${url}`);
  }
  return html;
}

const keyByPath = Object.fromEntries(Object.entries(pages).map(([key, page]) => [page.path, key]));

for (const page of indexablePages) {
  const key = keyByPath[page.path];
  const outFile =
    page.path === '/' ? path.join(distDir, 'index.html') : path.join(distDir, page.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, buildPage(key, page.path));
  console.log(`  prerendered ${page.path.padEnd(14)} → ${path.relative(root, outFile)}`);
}

// 404 page — most static hosts (Netlify, Vercel, Cloudflare Pages, GitHub Pages) serve this automatically.
fs.writeFileSync(path.join(distDir, '404.html'), buildPage('notFound', '/__not-found__'));
console.log('  prerendered 404            → dist/404.html');

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePages
  .map(
    (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.sitemap.changefreq}</changefreq>
    <priority>${page.sitemap.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`  wrote sitemap.xml (${indexablePages.length} URLs)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
