import type { BlogPost } from '../types/content';

/**
 * Blog / insights articles. Each article targets ONE low-competition, buyer-intent
 * search phrase (see `primaryKeyword`) and links to the service page that converts it.
 *
 * Writing rules (Google helpful-content guidelines):
 *  - Answer the question in the first 100 words (`keyTakeaways`).
 *  - Use first-hand experience from real 2xdev projects — that's what generic AI content can't copy.
 *  - Update `dateModified` whenever prices or facts change; refresh each article at least yearly.
 *  - Never publish two articles targeting the same phrase.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-a-website-cost-uk',
    title: 'How much does a website cost in the UK? (2026 price guide)',
    seoTitle: 'How Much Does a Website Cost in the UK? 2026 Price Guide',
    seoDescription:
      'Real UK website prices for 2026 — from £500 template sites to £30k+ custom web apps — plus the running costs most quotes leave out. From a UK development team.',
    primaryKeyword: 'how much does a website cost uk',
    keywords: [
      'how much should a website cost uk',
      'how much does a basic website cost uk',
      'how much does a website cost uk per month',
      'website cost for small business uk',
      'custom website cost uk',
    ],
    excerpt:
      'A straight answer on what UK businesses actually pay for a website in 2026 — by type of site, by who builds it, and what it costs every month after launch.',
    category: 'Pricing',
    datePublished: '2026-10-16',
    dateModified: '2026-10-16',
    readingMinutes: 8,
    author: 'Syed Taqi',
    keyTakeaways: [
      'A simple template or DIY website in the UK typically costs £0–£1,500 to set up, plus £15–£40 a month.',
      'A professionally built small-business website usually costs £2,000–£8,000.',
      'A custom e-commerce store usually costs £6,000–£30,000+; a bespoke web app or management system £15,000–£60,000+.',
      'Budget £30–£300 a month for hosting, domain, maintenance and licences — the costs most quotes leave out.',
    ],
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'Most UK small businesses pay between **£2,000 and £8,000** for a professionally built website in 2026. You can spend far less with a website builder, and far more if you need e-commerce, logins, bookings or integrations with other systems.',
          'The price is driven by three things: how many unique page layouts you need, how much custom functionality there is (anything beyond "pages and a contact form"), and who builds it. The tables below break each one down so you can sanity-check any quote you receive.',
        ],
      },
      {
        heading: 'UK website costs by type of website',
        paragraphs: ['These are typical market ranges we see across UK quotes in 2026, not a 2xdev price list:'],
        table: {
          head: ['Type of website', 'Typical one-off cost', 'Typical timeline'],
          rows: [
            ['DIY builder (Wix, Squarespace)', '£0 – £500 + your time', 'Days'],
            ['Template WordPress site set up by a freelancer', '£500 – £2,000', '1–3 weeks'],
            ['Small-business brochure site (5–15 custom pages)', '£2,000 – £8,000', '3–8 weeks'],
            ['Shopify / WooCommerce store', '£3,000 – £15,000', '4–10 weeks'],
            ['Fully custom e-commerce storefront', '£8,000 – £30,000+', '8–16 weeks'],
            ['Startup MVP / web app', '£15,000 – £50,000+', '8–16 weeks for v1'],
            ['Bespoke management system, CRM or portal', '£15,000 – £60,000+', 'Phased over 3–6 months'],
          ],
          caption: 'Typical UK market ranges, 2026. Your quote depends on scope.',
        },
      },
      {
        heading: 'Website costs by who builds it',
        bullets: [
          '**Doing it yourself** — cheapest up front, but you pay with your time and usually with slower pages and weaker SEO.',
          '**Freelancer** — often £25–£60 an hour in the UK. Great for smaller sites; riskier when one person is your only point of failure.',
          '**Small agency or senior studio** — usually £50–£100 an hour or a fixed project price. You get design, development, QA and support from one team.',
          '**Large agency** — £100–£180+ an hour. Worth it for complex enterprise programmes, expensive for most SMEs.',
        ],
        after: [
          'Whatever you choose, ask for a **fixed, itemised quote**. An hourly estimate with no scope document is the most common reason UK website projects go over budget.',
        ],
      },
      {
        heading: 'The monthly costs most quotes leave out',
        paragraphs: ['A website is not a one-off purchase. Budget for these running costs from day one:'],
        table: {
          head: ['Running cost', 'Typical cost'],
          rows: [
            ['Domain name (.co.uk / .com)', '£10 – £20 a year'],
            ['Hosting (shared → managed cloud)', '£5 – £100 a month'],
            ['Website builder or Shopify plan', '£15 – £300 a month'],
            ['Premium plugins, apps and licences', '£0 – £100 a month'],
            ['Maintenance, security updates and backups', '£50 – £250 a month'],
            ['Payment / platform transaction fees (e-commerce)', '0% – 2% of revenue'],
          ],
        },
        after: [
          'Platform and app fees are why some growing shops move to a custom store. When we built [Dairy Farm Products](/projects/dairy-farm-products) as a bespoke Next.js grocery store, the business stopped paying platform fees on every order.',
        ],
      },
      {
        heading: 'What pushes the price up (and what doesn’t)',
        bullets: [
          '**Custom functionality** — logins, bookings, calculators, dashboards and integrations cost more than extra pages.',
          '**Unique designs per page** — five layouts cost less than fifteen, even with the same number of pages.',
          '**Content** — copywriting, photography and product data entry are often quoted separately.',
          '**Integrations** — connecting a CRM, payment provider, stock system or accounting software adds scope. See our [API integration services](/services/api-integrations).',
          '**Migrating an existing site** — moving content and setting up redirects protects your Google rankings, but it’s real work.',
        ],
        after: [
          'What should *not* add much cost in 2026: mobile responsiveness, basic technical SEO (titles, sitemaps, schema), SSL and analytics. These should be part of any professional build.',
        ],
      },
      {
        heading: 'How to avoid overpaying',
        bullets: [
          'Write a one-page brief: goals, must-have features, nice-to-haves and examples of sites you like.',
          'Ask every supplier for the same thing: an itemised fixed quote, a timeline and who owns the code afterwards.',
          'Launch a lean first version, then improve it from real visitor data — the same approach we use for [startup MVPs](/services/startup-mvp-development).',
          'Check that SEO basics and Core Web Vitals are included, not sold later as an extra.',
          'Make sure you own the domain, hosting and code. Lock-in is the most expensive "hidden cost" of all.',
        ],
      },
      {
        heading: 'So, what should your website cost?',
        paragraphs: [
          'If you need a credible site that brings in enquiries, plan for the £2,000–£8,000 range. If your website *is* the business — an online store, a booking platform, a customer portal — plan for a custom build and judge it on the revenue or hours it saves, not just the price.',
          'If you’d like a second opinion on a quote, or a fixed-price quote of your own, [tell us about your project](/contact). We reply within one business day.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a basic website cost in the UK?', a: 'A basic five-page website costs roughly £500–£2,000 using a template, or £2,000–£5,000 for a professionally designed custom build. DIY website builders cost from about £15 a month.' },
      { q: 'How much does a website cost per month in the UK?', a: 'Expect £30–£300 a month in total for hosting, your domain, maintenance, security updates and any software licences. E-commerce platforms can also take a percentage of each sale.' },
      { q: 'Is it cheaper to use Wix or hire a web developer?', a: 'Wix is cheaper up front. A developer usually costs more initially but gives you faster pages, better SEO, custom features and ownership of the code — which tends to pay back if the website needs to generate leads or sales.' },
      { q: 'How long does it take to build a website?', a: 'A small-business website typically takes 3–8 weeks. E-commerce stores take 4–16 weeks and custom web applications are usually delivered in phases over several months.' },
    ],
    relatedServices: ['web-development', 'ecommerce-development', 'cms-wordpress-development'],
    relatedCaseStudies: ['dairy-farm-products'],
  },
  {
    slug: 'shopify-vs-custom-ecommerce-website',
    title: 'Shopify vs a custom e-commerce website: which should you choose?',
    seoTitle: 'Shopify vs Custom E-commerce Website: Which Is Right for You?',
    seoDescription:
      'Shopify or a custom-built online store? An honest comparison of cost, fees, speed, SEO and flexibility — from developers who build both — to help UK retailers choose.',
    primaryKeyword: 'shopify vs custom website',
    keywords: [
      'custom ecommerce website vs shopify',
      'shopify vs custom ecommerce',
      'should i use shopify or build my own website',
      'custom online store development',
    ],
    excerpt:
      'We build both Shopify stores and fully custom storefronts. Here’s when each one wins — with the real costs, fees and trade-offs.',
    category: 'E-commerce',
    datePublished: '2026-10-16',
    dateModified: '2026-10-16',
    readingMinutes: 7,
    author: 'Syed Taqi',
    keyTakeaways: [
      'Choose Shopify if you sell standard products, want to launch fast and prefer predictable monthly costs.',
      'Choose a custom store if you have unusual products, pricing, delivery or subscription logic, or if platform and app fees are eating your margin.',
      'Shopify is cheaper to start; a custom store can be cheaper to run at scale because there are no platform or app fees.',
      'Both can rank well on Google — speed, content and structured data matter more than the platform.',
    ],
    sections: [
      {
        heading: 'The quick verdict',
        paragraphs: [
          'For most new UK online shops, **Shopify is the right first step**: it’s quick to launch, reliable and easy for non-technical teams to run. A **custom e-commerce website** makes sense once your business model doesn’t fit Shopify’s rules, or the monthly app bill and transaction fees start to look like a second rent.',
          'We build both — [Shopify stores and custom storefronts](/services/ecommerce-development) — so this comparison isn’t trying to sell you one.',
        ],
      },
      {
        heading: 'Side-by-side comparison',
        table: {
          head: ['', 'Shopify', 'Custom store (e.g. Next.js)'],
          rows: [
            ['Upfront cost', '£3,000 – £15,000 for a professional build', '£8,000 – £30,000+'],
            ['Monthly platform cost', 'Plan from ~£25 to £2,000+ per month, plus apps', 'Hosting only — typically £20 – £150'],
            ['Transaction fees', 'Extra fee unless you use Shopify Payments', 'Only your payment provider’s fee'],
            ['Time to launch', 'Weeks', 'Months'],
            ['Custom features', 'Limited to themes and apps', 'Anything you can specify'],
            ['Page speed', 'Good, but apps slow it down', 'Excellent when built well'],
            ['SEO control', 'Good, some fixed URL structures', 'Full control over URLs, schema and rendering'],
            ['Who maintains it', 'Shopify handles hosting and security', 'You or your development partner'],
            ['Ownership', 'You rent the platform', 'You own the code'],
          ],
          caption: 'Prices are typical UK ranges in 2026 and change with Shopify’s plans.',
        },
      },
      {
        heading: 'When Shopify is the better choice',
        bullets: [
          'You’re launching your first store and want to validate demand quickly.',
          'Your products, variants and shipping rules are fairly standard.',
          'You don’t have (or want) a developer on call.',
          'You need built-in integrations with marketplaces, POS or social selling.',
        ],
      },
      {
        heading: 'When a custom e-commerce website is the better choice',
        bullets: [
          'You sell things that need custom logic: delivery slots, subscriptions, bundles, trade pricing or made-to-order items.',
          'You’re paying for five or more apps to make Shopify do what you need.',
          'Platform and transaction fees are a meaningful percentage of your margin.',
          'You want the store tightly connected to your own stock, CRM or ERP system.',
          'Page speed and search visibility are a competitive advantage in your market.',
        ],
        after: [
          'That was the situation for [Dairy Farm Products](/projects/dairy-farm-products), a fresh dairy and grocery business. We built them a custom Next.js storefront with 20+ product categories and their own admin dashboard — no monthly platform plan and 0% platform fees on orders.',
        ],
      },
      {
        heading: 'What about SEO?',
        paragraphs: [
          'Both options can rank. Google rewards fast pages, helpful product and category content, clean internal linking and product structured data — none of which is exclusive to one platform.',
          'The difference is control. On a custom store you decide the URL structure, how pages are rendered and exactly which schema is output. On Shopify you work within its conventions (for example, fixed /products/ and /collections/ paths) and every extra app script can cost you speed.',
        ],
      },
      {
        heading: 'A middle path: headless Shopify',
        paragraphs: [
          'If you like Shopify’s checkout and admin but need a faster, more flexible front end, a headless build uses Shopify as the back office while the storefront is custom-built. It costs more than a theme, but it’s a common upgrade route for growing brands. We cover this in our [headless CMS and WordPress services](/services/cms-wordpress-development) too.',
        ],
      },
      {
        heading: 'How to decide in 10 minutes',
        bullets: [
          'List the features you need that Shopify can’t do without an app.',
          'Add up 24 months of Shopify plan, app and transaction fees at your expected revenue.',
          'Compare that against the cost of a custom build plus hosting and support.',
          'If the numbers are close, start with Shopify. If they aren’t — or the features are core to how you sell — go custom.',
        ],
        after: ['Want us to run the numbers for your shop? [Send us your requirements](/contact) and we’ll recommend the option that fits, even if it’s the cheaper one.'],
      },
    ],
    faqs: [
      { q: 'Is Shopify cheaper than a custom website?', a: 'Shopify is cheaper to launch. Over several years a custom store can work out cheaper for larger shops because there are no platform plans, app subscriptions or extra transaction fees.' },
      { q: 'Is Shopify good for SEO?', a: 'Yes, Shopify can rank well. It gives you editable titles, descriptions and sitemaps, though URL structures are fixed and heavy apps can slow pages down. A custom store gives you complete control.' },
      { q: 'Can I move from Shopify to a custom website later?', a: 'Yes. Products, customers and orders can be exported and migrated, and old URLs can be redirected so you keep your Google rankings.' },
      { q: 'How long does a custom e-commerce website take to build?', a: 'Typically 8–16 weeks depending on catalogue size, integrations and custom features such as subscriptions or delivery slots.' },
    ],
    relatedServices: ['ecommerce-development', 'web-development'],
    relatedCaseStudies: ['dairy-farm-products'],
  },
  {
    slug: 'bespoke-crm-development-cost-uk',
    title: 'Bespoke CRM development in the UK: costs, timelines and when it’s worth it',
    seoTitle: 'Bespoke CRM Development UK: Cost, Timeline & When It’s Worth It',
    seoDescription:
      'What does a bespoke CRM or management system cost in the UK? Real price ranges, timelines and a simple test for when custom beats off-the-shelf software.',
    primaryKeyword: 'bespoke crm system cost uk',
    keywords: [
      'bespoke crm uk',
      'bespoke crm system',
      'custom crm development cost',
      'bespoke management system development',
      'custom recruitment crm',
    ],
    excerpt:
      'Off-the-shelf CRMs work until your process doesn’t fit them. Here’s what a bespoke CRM really costs in the UK, how long it takes, and how to tell if you need one.',
    category: 'Software',
    datePublished: '2026-10-16',
    dateModified: '2026-10-16',
    readingMinutes: 7,
    author: 'Syed Taqi',
    keyTakeaways: [
      'A focused bespoke CRM or management system for a UK SME typically costs £15,000–£40,000 for the first version.',
      'Larger multi-team platforms with portals and integrations usually cost £40,000–£100,000+, delivered in phases.',
      'A first usable version usually takes 8–12 weeks; complex systems roll out over 3–6 months.',
      'Custom is worth it when per-seat licences are high, your process is a competitive advantage, or you rely on spreadsheets to fill the gaps.',
    ],
    sections: [
      {
        heading: 'What is a bespoke CRM?',
        paragraphs: [
          'A bespoke CRM (or management system) is software built around your exact workflow — your stages, your documents, your approvals — instead of you adapting to how Salesforce, HubSpot or a sector-specific tool wants you to work.',
          'In practice it’s often more than a CRM: a mix of client records, job or candidate tracking, document storage, scheduling, reporting and a customer portal, all in one place. That’s what we build in our [custom software and management systems](/services/management-systems) service.',
        ],
      },
      {
        heading: 'How much does a bespoke CRM cost in the UK?',
        table: {
          head: ['Scope', 'Typical cost', 'Typical timeline'],
          rows: [
            ['Simple internal tool (one team, one core workflow)', '£8,000 – £15,000', '4–8 weeks'],
            ['Focused SME CRM / management system', '£15,000 – £40,000', '8–12 weeks for v1'],
            ['Multi-team platform with client portal and integrations', '£40,000 – £100,000+', '3–6 months, phased'],
            ['Ongoing support, hosting and improvements', '£250 – £2,000 a month', 'Ongoing'],
          ],
          caption: 'Typical UK market ranges in 2026. Fixed quotes depend on your requirements.',
        },
      },
      {
        heading: 'What drives the cost',
        bullets: [
          '**Number of user roles and permissions** — admin, staff, managers, clients, partners.',
          '**Workflows and automation** — status changes, reminders, approvals, document expiry alerts.',
          '**Integrations** — email, calendars, accounting, payment, e-signature or job boards. See [API integrations](/services/api-integrations).',
          '**Data migration** — importing years of spreadsheets or an old system cleanly.',
          '**Reporting** — dashboards and exports that leadership actually uses.',
          '**Compliance** — GDPR, audit trails and sector rules such as safeguarding checks.',
        ],
      },
      {
        heading: 'Bespoke vs off-the-shelf: a simple test',
        paragraphs: ['Answer these five questions. If you say yes to three or more, a bespoke system is worth pricing up:'],
        bullets: [
          'Are you paying for more than 15–20 seats on a per-user CRM licence?',
          'Do staff keep "shadow" spreadsheets because the CRM can’t track what matters?',
          'Is your process — how you qualify, deliver or comply — part of why clients choose you?',
          'Do you copy data between three or more tools by hand every week?',
          'Have you already paid for customisations or consultants to bend an off-the-shelf tool?',
        ],
      },
      {
        heading: 'A real example: education recruitment',
        paragraphs: [
          'For [Recruited People](/projects/recruited-people), an education recruitment business, generic recruitment CRMs didn’t handle the compliance side of placing staff in schools. We built a platform that combines candidate registration, compliance document tracking (DBS and safeguarding checks) and interview scheduling in one dashboard — so consultants can see at a glance who is ready to place.',
        ],
      },
      {
        heading: 'How a bespoke CRM project runs',
        bullets: [
          '**Discovery (1–2 weeks)** — map your current process, pain points and must-haves; agree a fixed scope and price.',
          '**Design (1–3 weeks)** — clickable screens your team signs off before development starts.',
          '**Build in sprints** — weekly demos so you can steer as it takes shape.',
          '**Migrate and train** — import your data and get the team confident.',
          '**Launch and improve** — add phase-two features based on real usage.',
        ],
      },
      {
        heading: 'Keeping the cost under control',
        bullets: [
          'Start with the one workflow that costs you the most time today.',
          'Keep using off-the-shelf tools for commodity jobs (email, accounting) and integrate them.',
          'Insist on owning the code, the database and the hosting account.',
          'Ask for a fixed price per phase rather than open-ended hourly billing.',
        ],
        after: ['If you’d like a ballpark for your own system, [tell us how your team works today](/contact) and we’ll come back with a phased plan and a fixed quote.'],
      },
    ],
    faqs: [
      { q: 'How much does a bespoke CRM cost in the UK?', a: 'A focused bespoke CRM for a small or medium UK business typically costs £15,000–£40,000 for the first version. Larger platforms with portals and integrations cost £40,000–£100,000 or more, usually delivered in phases.' },
      { q: 'How long does it take to build a custom CRM?', a: 'A first usable version usually takes 8–12 weeks. More complex systems are rolled out in phases over three to six months.' },
      { q: 'Is a bespoke CRM better than Salesforce or HubSpot?', a: 'Not always. Off-the-shelf CRMs are better for standard sales pipelines. A bespoke CRM wins when your workflow is unusual, you need many seats, or you rely on spreadsheets to fill gaps.' },
      { q: 'Who owns a bespoke CRM?', a: 'You should. With 2xdev you own the source code, database and hosting accounts, so you are never locked in to one supplier.' },
    ],
    relatedServices: ['management-systems', 'api-integrations'],
    relatedCaseStudies: ['recruited-people'],
  },
];

export const blogPath = (slug: string) => `/blog/${slug}`;

export function getBlogPost(slug: string): BlogPost {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}
