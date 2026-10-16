import { faqs, infoCards } from '../data/contactContent';
import { team } from '../data/aboutContent';
import { servicePages, servicePath } from '../data/servicePages';
import { blogPath, blogPosts } from '../data/blogPosts';
import { caseStudies, caseStudyPath } from '../data/caseStudies';

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
export const SITE_URL = 'https://www.2xdev.com';
export const SITE_NAME = '2xdev';
export const DEFAULT_OG_IMAGE = '/og-image.png';
export const LOCALE = 'en_GB';

/**
 * Your official profiles elsewhere on the web. Google uses these (`sameAs`) to connect
 * the 2xdev brand across sites, which strengthens brand searches and the knowledge panel.
 * Add the full URLs of profiles you own, e.g.
 *   'https://www.linkedin.com/company/2xdev',
 *   'https://github.com/2xdev',
 *   'https://clutch.co/profile/2xdev',
 */
export const SOCIAL_PROFILES: string[] = [];

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
  /** Key of the parent page, for nested breadcrumbs. */
  parent?: string;
  /** Include in sitemap.xml */
  sitemap?: { priority: number; changefreq: 'weekly' | 'monthly' | 'yearly' };
  /** Last content change (YYYY-MM-DD) for sitemap <lastmod>; defaults to build date. */
  lastmod?: string;
  /** Open Graph type. */
  ogType?: 'website' | 'article';
}

const staticPages = {
  home: {
    path: '/',
    title: '2xdev — UK Web Development Agency for Startups & Businesses',
    description:
      'UK web development company building custom websites, web apps, Shopify stores, management systems and AI automation. Get a free, fixed-price quote.',
    breadcrumb: 'Home',
    sitemap: { priority: 1.0, changefreq: 'weekly' },
  },
  whatWeDo: {
    path: '/what-we-do',
    title: 'Web Development Services: Apps, Shopify & CMS | 2xdev',
    description:
      'Custom websites, Shopify stores, startup MVPs, management systems, AI automation, WordPress and API integrations from a senior UK engineering team.',
    breadcrumb: 'What We Do',
    sitemap: { priority: 0.9, changefreq: 'monthly' },
  },
  about: {
    path: '/about',
    title: 'About 2xdev — A Senior UK Software Engineering Team',
    description:
      'Meet 2xdev: a senior-only UK engineering team founded in 2022. No account managers or hand-offs — you work directly with the engineers on your product.',
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
      'Tell us about your website or app and get a clear plan, timeline and free fixed-price quote. Email support@2xdev.com — we reply within one business day.',
    breadcrumb: 'Contact',
    sitemap: { priority: 0.8, changefreq: 'yearly' },
  },
  blog: {
    path: '/blog',
    title: 'Web Development Blog — Pricing Guides & Advice | 2xdev',
    description:
      'Honest UK pricing guides and comparisons on websites, e-commerce, MVPs and custom software — written by the senior engineers at 2xdev.',
    breadcrumb: 'Blog',
    sitemap: { priority: 0.7, changefreq: 'weekly' },
  },
  notFound: {
    path: '/404',
    title: 'Page not found | 2xdev',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
} satisfies Record<string, PageSeo>;

type StaticPageKey = keyof typeof staticPages;
export type PageKey = StaticPageKey | `service:${string}` | `post:${string}` | `case:${string}`;

export const serviceKey = (slug: string): PageKey => `service:${slug}`;
export const postKey = (slug: string): PageKey => `post:${slug}`;
export const caseKey = (slug: string): PageKey => `case:${slug}`;

/** Every page on the site, including one landing page per service. */
export const pages: Record<string, PageSeo> = {
  ...staticPages,
  ...Object.fromEntries(
    servicePages.map((service) => [
      serviceKey(service.slug),
      {
        path: servicePath(service.slug),
        title: service.seoTitle,
        description: service.seoDescription,
        breadcrumb: service.shortName,
        parent: 'whatWeDo',
        sitemap: { priority: 0.9, changefreq: 'monthly' },
      } satisfies PageSeo,
    ]),
  ),
  ...Object.fromEntries(
    blogPosts.map((post) => [
      postKey(post.slug),
      {
        path: blogPath(post.slug),
        title: post.seoTitle,
        description: post.seoDescription,
        breadcrumb: post.title,
        parent: 'blog',
        lastmod: post.dateModified,
        ogType: 'article',
        sitemap: { priority: 0.7, changefreq: 'monthly' },
      } satisfies PageSeo,
    ]),
  ),
  ...Object.fromEntries(
    caseStudies.map((study) => [
      caseKey(study.slug),
      {
        path: caseStudyPath(study.slug),
        title: study.seoTitle,
        description: study.seoDescription,
        breadcrumb: study.client,
        parent: 'projects',
        lastmod: study.datePublished,
        ogType: 'article',
        sitemap: { priority: 0.7, changefreq: 'monthly' },
      } satisfies PageSeo,
    ]),
  ),
};


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

const serviceId = (slug: string) => `${absoluteUrl(servicePath(slug))}#service`;

export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: ['2x dev', '2xdev Ltd', '2xdev.com'],
    legalName: '2xdev Ltd',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    slogan: 'Great products aren’t built. They’re engineered.',
    description:
      'UK-based web development company building custom websites, web apps, e-commerce stores, management systems and CMS platforms for startups and growing businesses.',
    email: EMAIL,
    telephone: PHONE,
    foundingDate: '2022',
    founder: team
      .filter((member) => member.role.toLowerCase().includes('founder'))
      .map((member) => ({ '@type': 'Person', name: member.name, jobTitle: member.role })),
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
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
    knowsAbout: [
      'Website development',
      'Web application development',
      'E-commerce development',
      'Shopify development',
      'WordPress development',
      'MVP development',
      'Custom software development',
      'AI automation',
      'AI chatbots',
      'API integration',
      'Technical SEO',
      'React',
      'Angular',
      'Next.js',
      'Laravel',
      'Node.js',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web development services',
      itemListElement: servicePages.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@id': serviceId(service.slug), '@type': 'Service', name: service.name, url: absoluteUrl(servicePath(service.slug)) },
      })),
    },
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

/** Home › (parent ›) page */
function breadcrumbTrail(page: PageSeo): PageSeo[] {
  const trail: PageSeo[] = [page];
  let parentKey = page.parent;
  while (parentKey) {
    const parent = pages[parentKey];
    trail.unshift(parent);
    parentKey = parent.parent;
  }
  if (trail[0] !== pages.home) trail.unshift(pages.home);
  return trail;
}

function breadcrumbSchema(page: PageSeo): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbTrail(page).map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.breadcrumb,
      item: { '@type': 'WebPage', '@id': absoluteUrl(crumb.path), name: crumb.breadcrumb },
    })),
  };
}

function webPageSchema(page: PageSeo, type = 'WebPage', extra: JsonLd = {}): JsonLd {
  return {
    '@type': type,
    '@id': `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${DEFAULT_OG_IMAGE}`, width: 1200, height: 630 },
    ...extra,
  };
}

function faqSchema(items: { q: string; a: string }[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

/** JSON-LD graph for a given page (site-wide Organization + WebSite are always included). */
export function structuredDataFor(key: PageKey): JsonLd | null {
  const page: PageSeo = pages[key];
  if (page.noindex) return null;

  const graph: JsonLd[] = [organizationSchema(), websiteSchema()];

  if (key.startsWith('service:')) {
    const service = servicePages.find((item) => `service:${item.slug}` === key)!;
    graph.push(
      webPageSchema(page, 'WebPage', { mainEntity: { '@id': serviceId(service.slug) } }),
      breadcrumbSchema(page),
      {
        '@type': 'Service',
        '@id': serviceId(service.slug),
        name: service.name,
        serviceType: service.name,
        alternateName: service.keywords,
        description: service.seoDescription,
        url: absoluteUrl(page.path),
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        audience: { '@type': 'BusinessAudience', audienceType: service.idealFor.join('; ') },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.name} services`,
          itemListElement: service.deliverables.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.desc },
          })),
        },
      },
      faqSchema(service.faqs),
    );
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  if (key.startsWith('post:')) {
    const post = blogPosts.find((item) => `post:${item.slug}` === key)!;
    const url = absoluteUrl(page.path);
    graph.push(
      webPageSchema(page, 'WebPage', { mainEntity: { '@id': `${url}#article` } }),
      breadcrumbSchema(page),
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.seoDescription,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: 'en-GB',
        articleSection: post.category,
        keywords: [post.primaryKeyword, ...post.keywords].join(', '),
        wordCount: post.sections
          .flatMap((section) => [section.heading, ...(section.paragraphs ?? []), ...(section.bullets ?? []), ...(section.after ?? [])])
          .join(' ')
          .split(/\s+/).length,
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: team.find((member) => member.name === post.author)?.role,
          worksFor: { '@id': ORG_ID },
          url: absoluteUrl('/about'),
        },
        publisher: { '@id': ORG_ID },
        about: post.relatedServices.map((slug) => ({ '@id': serviceId(slug) })),
      },
      faqSchema(post.faqs),
    );
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  if (key.startsWith('case:')) {
    const study = caseStudies.find((item) => `case:${item.slug}` === key)!;
    const url = absoluteUrl(page.path);
    graph.push(
      webPageSchema(page, 'WebPage', { mainEntity: { '@id': `${url}#article` } }),
      breadcrumbSchema(page),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: study.h1,
        description: study.seoDescription,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        datePublished: study.datePublished,
        dateModified: study.datePublished,
        inLanguage: 'en-GB',
        articleSection: 'Case studies',
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        about: [
          { '@type': 'Organization', name: study.client, url: study.liveUrl },
          ...study.services.map((slug) => ({ '@id': serviceId(slug) })),
        ],
      },
      faqSchema(study.faqs),
    );
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  switch (key) {
    case 'home':
      graph.push(webPageSchema(page));
      break;
    case 'about':
      graph.push(webPageSchema(page, 'AboutPage'), breadcrumbSchema(page));
      break;
    case 'projects':
      graph.push(webPageSchema(page, 'CollectionPage'), breadcrumbSchema(page), {
        '@type': 'ItemList',
        name: '2xdev case studies',
        itemListElement: caseStudies.map((study, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(caseStudyPath(study.slug)),
          name: study.h1,
        })),
      });
      break;
    case 'blog':
      graph.push(webPageSchema(page, 'CollectionPage'), breadcrumbSchema(page), {
        '@type': 'Blog',
        '@id': `${absoluteUrl(page.path)}#blog`,
        name: '2xdev blog',
        url: absoluteUrl(page.path),
        publisher: { '@id': ORG_ID },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: absoluteUrl(blogPath(post.slug)),
          datePublished: post.datePublished,
        })),
      });
      break;
    case 'whatWeDo':
      graph.push(webPageSchema(page, 'CollectionPage'), breadcrumbSchema(page), {
        '@type': 'ItemList',
        name: '2xdev web development services',
        itemListElement: servicePages.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(servicePath(service.slug)),
          name: service.name,
        })),
      });
      break;
    case 'contact':
      graph.push(webPageSchema(page, 'ContactPage'), breadcrumbSchema(page), faqSchema(faqs));
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
    meta('property', 'og:type', page.ogType ?? 'website'),
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
