import { faqs, infoCards } from '../data/contactContent';
import { serviceDetails } from '../data/whatWeDoContent';
import { team } from '../data/aboutContent';

/**
 * Single source of truth for SEO.
 *
 * Used in two places:
 *  - at build time by `scripts/prerender.mjs` (via `src/entry-server.tsx`) to write
 *    real <title>/<meta>/JSON-LD into each page's static HTML, and
 *  - in the browser by the <Seo /> component to keep the head in sync on client-side
 *    navigation.
 *
 * If the production domain ever changes, update SITE_URL here (no trailing slash).
 */
export const SITE_URL = 'https://2xdev.com';
export const SITE_NAME = '2xdev';
export const DEFAULT_OG_IMAGE = '/og-image.png';
export const LOCALE = 'en_GB';

const EMAIL = 'support@2xdev.com';
const PHONE = infoCards.find((card) => card.href.startsWith('tel:'))?.value ?? '+447368165714';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** Set for pages that must not appear in Google (e.g. 404). */
  noindex?: boolean;
  /** Label used in breadcrumbs. */
  breadcrumb?: string;
  /** Include in sitemap.xml */
  sitemap?: { priority: number; changefreq: 'weekly' | 'monthly' | 'yearly' };
}

export const pages = {
  home: {
    path: '/',
    title: '2xdev — UK Web Development Agency for Startups & Businesses',
    description:
      '2xdev is a UK web development company building custom web apps, Shopify & e-commerce stores, management systems and CMS websites. Get a free, fixed-price quote.',
    breadcrumb: 'Home',
    sitemap: { priority: 1.0, changefreq: 'weekly' },
  },
  whatWeDo: {
    path: '/what-we-do',
    title: 'Web Development Services — Custom Apps, Shopify & CMS | 2xdev',
    description:
      'Custom web development, e-commerce & Shopify stores, startup MVPs, management systems, WordPress CMS and API integrations — built by a senior UK engineering team.',
    breadcrumb: 'What We Do',
    sitemap: { priority: 0.9, changefreq: 'monthly' },
  },
  about: {
    path: '/about',
    title: 'About 2xdev — A Senior UK Software Engineering Team',
    description:
      'Meet 2xdev: a lean, senior-only UK engineering team founded in 2022. No account managers or hand-offs — you work directly with the engineers building your product.',
    breadcrumb: 'About',
    sitemap: { priority: 0.7, changefreq: 'monthly' },
  },
  projects: {
    path: '/projects',
    title: 'Our Work — Web App, E-commerce & CMS Case Studies | 2xdev',
    description:
      'See websites and platforms 2xdev has built: a custom Next.js grocery store, an education recruitment management system and a WordPress news platform.',
    breadcrumb: 'Projects',
    sitemap: { priority: 0.8, changefreq: 'monthly' },
  },
  contact: {
    path: '/contact',
    title: 'Contact 2xdev — Get a Free Web Development Quote',
    description:
      'Tell us about your website or app project and get a clear plan, realistic timeline and free fixed-price quote. Email support@2xdev.com — we reply within one business day.',
    breadcrumb: 'Contact',
    sitemap: { priority: 0.8, changefreq: 'yearly' },
  },
  notFound: {
    path: '/404',
    title: 'Page not found | 2xdev',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
} satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof pages;

/** Routes that get their own prerendered HTML file. */
export const indexablePages: PageSeo[] = (Object.values(pages) as PageSeo[]).filter((page) => !page.noindex);

export function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD) — https://developers.google.com/search/docs/appearance/structured-data */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: '2xdev Ltd',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      'UK-based web development company building custom web apps, e-commerce stores, management systems and CMS platforms for startups and growing businesses.',
    email: EMAIL,
    telephone: PHONE,
    foundingDate: '2022',
    founders: team
      .filter((member) => member.role.toLowerCase().includes('founder'))
      .map((member) => ({ '@type': 'Person', name: member.name })),
    address: { '@type': 'PostalAddress', addressCountry: 'GB' },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: EMAIL,
      telephone: PHONE,
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
    knowsAbout: [
      'Web development',
      'E-commerce development',
      'Shopify development',
      'WordPress development',
      'React',
      'Angular',
      'Next.js',
      'Laravel',
      'Node.js',
      'Management systems',
      'API integrations',
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: ['2x dev', '2xdev Ltd'],
    inLanguage: 'en-GB',
    publisher: { '@id': ORG_ID },
  };
}

function breadcrumbSchema(page: PageSeo): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: pages.home.breadcrumb, item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: absoluteUrl(page.path) },
    ],
  };
}

function webPageSchema(page: PageSeo, type = 'WebPage'): JsonLd {
  return {
    '@type': type,
    '@id': `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}

/** JSON-LD graph for a given page (site-wide Organization + WebSite are always included). */
export function structuredDataFor(key: PageKey): JsonLd | null {
  const page: PageSeo = pages[key];
  if (page.noindex) return null;

  const graph: JsonLd[] = [organizationSchema(), websiteSchema()];

  switch (key) {
    case 'home':
      graph.push(webPageSchema(page));
      break;
    case 'about':
      graph.push(webPageSchema(page, 'AboutPage'), breadcrumbSchema(page));
      break;
    case 'projects':
      graph.push(webPageSchema(page, 'CollectionPage'), breadcrumbSchema(page));
      break;
    case 'whatWeDo':
      graph.push(webPageSchema(page), breadcrumbSchema(page), {
        '@type': 'ItemList',
        name: '2xdev web development services',
        itemListElement: serviceDetails.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: service.desc,
            serviceType: service.title,
            provider: { '@id': ORG_ID },
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
          },
        })),
      });
      break;
    case 'contact':
      graph.push(webPageSchema(page, 'ContactPage'), breadcrumbSchema(page), {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      });
      break;
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/* ------------------------------------------------------------------ */
/* Head tags                                                           */
/* ------------------------------------------------------------------ */

export interface HeadTag {
  tag: 'meta' | 'link';
  /** Attribute used to find/replace an existing tag on client navigation. */
  key: string;
  attrs: Record<string, string>;
}

export function headTagsFor(key: PageKey): HeadTag[] {
  const page: PageSeo = pages[key];
  const url = absoluteUrl(page.path);
  const image = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  const meta = (attr: 'name' | 'property', name: string, content: string): HeadTag => ({
    tag: 'meta',
    key: `meta[${attr}="${name}"]`,
    attrs: { [attr]: name, content },
  });

  const tags: HeadTag[] = [
    meta('name', 'description', page.description),
    meta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', LOCALE),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:image', image),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', '2xdev — UK web development agency'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', image),
  ];

  if (!page.noindex) {
    tags.push(meta('property', 'og:url', url));
    tags.push({ tag: 'link', key: 'link[rel="canonical"]', attrs: { rel: 'canonical', href: url } });
  }

  return tags;
}
