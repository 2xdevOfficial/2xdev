import type { CaseStudy } from '../types/content';

/**
 * One case-study page per real client project (/projects/<slug>).
 * Each targets an industry-specific phrase competitors rarely have a page for
 * (e.g. "grocery website development"), and proves experience for E-E-A-T.
 *
 * TODO for the 2xdev team: add measurable results (orders, hours saved, traffic)
 * and a short client quote to each case study — these make the pages far more
 * convincing for both buyers and Google. Only publish numbers the client has confirmed.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'dairy-farm-products',
    projectName: 'Dairy Farm Products',
    client: 'Dairy Farm Products',
    industry: 'Food & grocery retail',
    location: 'United Kingdom',
    seoTitle: 'Grocery Website Development: Dairy Farm Products | 2xdev',
    seoDescription:
      'How 2xdev built a custom Next.js online grocery store for Dairy Farm Products — 20+ product categories, an admin dashboard and 0% platform fees.',
    primaryKeyword: 'grocery website development',
    h1: 'A custom online grocery store for Dairy Farm Products',
    summary:
      'A fully custom Next.js storefront for fresh milk, cheese, butter and eggs — with its own catalogue, categories and admin dashboard instead of a templated Shopify build.',
    liveUrl: 'https://dairyfarmproduct.co.uk/',
    stack: ['Next.js', 'React'],
    services: ['ecommerce-development', 'web-development'],
    results: [
      { value: 'Custom', label: 'Next.js storefront' },
      { value: '20+', label: 'product categories' },
      { value: '0%', label: 'platform fees' },
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Dairy Farm Products sells fresh dairy and grocery essentials online. Fresh food has needs that generic store templates handle poorly: a large catalogue across many categories that changes often, and a team that needs to update stock and prices quickly without a developer.',
          'They also wanted to avoid the monthly platform plan, app subscriptions and per-order fees that come with hosted e-commerce platforms — costs that add up quickly on lower-margin grocery orders.',
        ],
      },
      {
        heading: 'What we built',
        paragraphs: [
          'Instead of bending a theme, we built a bespoke grocery website on Next.js. Pages are rendered for speed, so the shop loads quickly on mobile — where most grocery shopping happens — and every category and product page is crawlable by Google.',
        ],
        bullets: [
          '**Custom product catalogue** with 20+ categories covering milk, cheese, butter, eggs and more.',
          '**Admin dashboard** so the team can add products, change prices and manage categories themselves.',
          '**Fast, mobile-first storefront** built with Next.js and React.',
          '**SEO-ready structure** — clean category URLs, unique titles and descriptions, and product data search engines can read.',
          '**No platform lock-in** — the business owns the code and pays only for hosting.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'Dairy Farm Products now runs its own online grocery store with full control over the catalogue and no platform fees on any order. Because the store is custom, new features — delivery options, promotions, subscriptions — can be added without hunting for apps.',
          'Thinking about Shopify versus custom for your own shop? Read our [Shopify vs custom e-commerce comparison](/blog/shopify-vs-custom-ecommerce-website).',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a grocery website cost to build?', a: 'A custom online grocery store typically costs £8,000–£30,000+ in the UK depending on catalogue size, delivery logic and integrations. A Shopify-based store costs less up front but has monthly platform and app fees.' },
      { q: 'Can you build an online store for a farm shop or dairy?', a: 'Yes. We build e-commerce sites for food producers, farm shops and local delivery businesses, including product categories, pack sizes, delivery areas and an admin dashboard your team can manage.' },
      { q: 'Why choose a custom grocery website over Shopify?', a: 'Custom builds avoid platform and app fees, load faster and can handle grocery-specific needs like delivery slots, substitutions and subscriptions without third-party apps.' },
    ],
    datePublished: '2026-10-16',
  },
  {
    slug: 'recruited-people',
    projectName: 'Recruited People',
    client: 'Recruited People',
    industry: 'Education recruitment',
    location: 'United Kingdom',
    seoTitle: 'Education Recruitment Software: Recruited People | 2xdev',
    seoDescription:
      'How 2xdev built a custom education recruitment platform: candidate registration, DBS and safeguarding tracking, and interview scheduling.',
    primaryKeyword: 'education recruitment software',
    h1: 'An education recruitment platform for Recruited People',
    summary:
      'A bespoke recruitment management system that brings candidate registration, compliance document tracking (DBS, safeguarding) and interview scheduling into one dashboard.',
    liveUrl: 'https://recruitedpeople.co.uk/',
    stack: ['React', 'Node.js'],
    services: ['management-systems', 'web-development'],
    results: [
      { value: '1', label: 'dashboard for the whole process' },
      { value: 'Full', label: 'compliance tracking' },
      { value: 'Custom', label: 'React & Node build' },
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Placing teachers and support staff in schools means every candidate must be fully vetted before they start. Recruited People needed to track registrations, compliance documents such as DBS and safeguarding checks, and interviews — and generic recruitment CRMs either didn’t cover the education-specific compliance steps or needed spreadsheets alongside them.',
        ],
      },
      {
        heading: 'What we built',
        paragraphs: ['We designed and built a custom recruitment management system on React and Node.js, shaped around how education recruiters actually work.'],
        bullets: [
          '**Candidate registration** — a clean online journey that captures candidate details in a structured way.',
          '**Compliance document tracking** — DBS, safeguarding and other required documents tracked per candidate, so consultants can see who is cleared to place.',
          '**Interview scheduling** — interviews booked and tracked inside the same system.',
          '**One dashboard** — the whole pipeline visible in one place instead of across inboxes and spreadsheets.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'Recruited People runs its candidate pipeline and compliance checks from a single system that fits its process, rather than adapting to a generic tool. Because they own the platform, new workflows can be added as the business grows.',
          'Wondering whether custom software is worth it for your team? Read [what a bespoke CRM costs in the UK](/blog/bespoke-crm-development-cost-uk).',
        ],
      },
    ],
    faqs: [
      { q: 'Can you build custom recruitment software?', a: 'Yes. We build bespoke recruitment CRMs and management systems covering candidate registration, compliance documents, interview scheduling, client portals and reporting.' },
      { q: 'How much does custom recruitment software cost?', a: 'A focused recruitment management system for a UK agency typically costs £15,000–£40,000 for the first version, with further features added in phases.' },
      { q: 'Can a recruitment system track DBS and safeguarding checks?', a: 'Yes. Compliance documents can be tracked per candidate with statuses and expiry reminders, so your team knows who is cleared to work.' },
    ],
    datePublished: '2026-10-16',
  },
  {
    slug: 'cni-news',
    projectName: 'CNI News',
    client: 'CNI News',
    industry: 'News & media',
    seoTitle: 'News Website Development: CNI News (WordPress) | 2xdev',
    seoDescription:
      'How 2xdev built CNI News: a WordPress news platform with breaking news, video and event listings across 12 categories.',
    primaryKeyword: 'news website development',
    h1: 'A WordPress news platform for CNI News',
    summary:
      'A WordPress-powered news website covering Pakistani and British-Pakistani community news — breaking stories, video and event listings across a dozen categories.',
    liveUrl: 'https://cninews.tv/',
    stack: ['WordPress', 'PHP'],
    services: ['cms-wordpress-development', 'web-development'],
    results: [
      { value: '12', label: 'news categories' },
      { value: 'WordPress', label: 'editor-friendly CMS' },
      { value: 'Video', label: '& event listings' },
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'CNI News needed a news website that a small editorial team could publish to quickly — many times a day — across breaking news, video and community events, while keeping pages fast and easy for Google News and search engines to crawl.',
        ],
      },
      {
        heading: 'What we built',
        bullets: [
          '**WordPress newsroom** — simple publishing so editors can post breaking stories in minutes.',
          '**12 news categories** with clear navigation and category archives.',
          '**Video and event listings** alongside written articles.',
          '**SEO foundations** — article structure, categories and clean URLs that search engines understand.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'CNI News publishes community coverage across a dozen categories from one editor-friendly CMS. Need something similar? See our [WordPress and CMS development services](/services/cms-wordpress-development).',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a news website cost to build?', a: 'A WordPress news website typically costs £3,000–£15,000 in the UK depending on design, number of sections, video, membership or advertising features.' },
      { q: 'Is WordPress good for news websites?', a: 'Yes. WordPress is widely used by publishers because editors can publish quickly, and it supports categories, tags, video, scheduling and SEO plugins out of the box.' },
    ],
    datePublished: '2026-10-16',
  },
];

export const caseStudyPath = (slug: string) => `/projects/${slug}`;

export function getCaseStudy(slug: string): CaseStudy {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}

export function caseStudyForProject(projectName: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.projectName === projectName);
}
