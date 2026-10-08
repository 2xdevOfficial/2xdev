import type { ServicePage } from '../types/servicePage';

/**
 * Dedicated landing pages — one per service, each targeting its own search intent
 * (e.g. "website development company UK", "Shopify developer UK", "WordPress developer UK").
 *
 * SEO rules of thumb when editing:
 *  - Keep the main keyword in `seoTitle`, `h1`, the first paragraph of `intro` and at least one `deliverables` title.
 *  - Keep each page's wording unique — never copy paragraphs between service pages.
 *  - Answer real customer questions in `faqs`; they appear on the page and as FAQ structured data.
 */
export const servicePages: ServicePage[] = [
  {
    slug: 'web-development',
    name: 'Custom Web Development',
    shortName: 'Web Development',
    icon: '💻',
    keywords: ['website development company UK', 'custom web development', 'bespoke website development', 'web application development'],
    seoTitle: 'Website Development Company UK — Custom Web Development | 2xdev',
    seoDescription:
      'Bespoke website and web application development from a senior UK team. Fast, SEO-ready React, Angular, Next.js and Laravel builds with a fixed, itemised quote.',
    badge: 'Custom web development · UK',
    h1: 'Website development that’s built to perform.',
    heroSubtitle:
      'We design and develop bespoke websites and web applications from scratch — fast, secure, search-friendly and easy for your team to grow.',
    intro: [
      '2xdev is a UK website development company for businesses that have outgrown templates. Instead of bending a theme to fit, we build exactly what your customers and your team need: marketing sites, customer portals, booking flows, dashboards and full web applications.',
      'Every build is engineered for speed and search from day one — server-rendered or prerendered pages, clean semantic HTML, structured data, optimised images and Core Web Vitals in the green — so your new site is ready to rank, not just ready to launch.',
      'You work directly with the senior engineers writing the code, see progress in weekly demos, and own everything at the end: the repository, the documentation and the hosting accounts. No lock-in, no black box.',
    ],
    idealFor: [
      'Businesses replacing a slow or dated website',
      'Companies that need custom features a theme can’t handle',
      'Teams planning a customer portal or web app',
      'Brands that want a site built properly for SEO',
    ],
    deliverables: [
      { title: 'Bespoke website development', desc: 'Custom-designed, hand-built sites with no bloated page builders — every page fast, accessible and on-brand.' },
      { title: 'Web application development', desc: 'Logged-in portals, booking systems, calculators and dashboards built on React, Angular, Next.js, Laravel or Node.' },
      { title: 'Technical SEO built in', desc: 'Prerendered pages, meta tags, sitemaps, schema markup and clean URLs set up as part of the build — not bolted on later.' },
      { title: 'Performance & Core Web Vitals', desc: 'Optimised images, fonts and code-splitting so pages load quickly on mobile, which helps both rankings and conversions.' },
      { title: 'Responsive & accessible', desc: 'Layouts that work on every screen size and follow accessibility best practice, so more people can use your site.' },
      { title: 'Launch, hosting & support', desc: 'We deploy, set up analytics and Search Console, then stay on hand for maintenance and new features.' },
    ],
    techNames: ['React', 'Angular', 'Next.js', 'Laravel', 'Node.js', 'MySQL'],
    relatedProjects: ['Dairy Farm Products', 'Recruited People'],
    faqs: [
      { q: 'How long does it take to build a custom website?', a: 'It depends on scope. A focused marketing site can launch in a few weeks; larger web applications are delivered in phases, with something usable early on. You get a timeline with your fixed quote before any work starts.' },
      { q: 'How much does website development cost?', a: 'We price each project from its scope and give you a fixed, itemised quote — no hourly surprises. Tell us what you need on the contact page and we’ll come back with a clear price and plan.' },
      { q: 'Will my new website be SEO-friendly?', a: 'Yes. Fast load times, prerendered pages, unique titles and descriptions, structured data, an XML sitemap and clean URLs are part of every build, so search engines can crawl and understand your site from launch.' },
      { q: 'Do I own the code and the website?', a: 'Completely. You get the source code, documentation and admin access to every account. There is no lock-in — you can keep working with us or take the project anywhere.' },
      { q: 'Can you redesign or rebuild our existing website?', a: 'Yes. We can rebuild an existing site on a modern stack while keeping your content and redirecting old URLs, so you don’t lose the search rankings you already have.' },
    ],
  },
  {
    slug: 'ecommerce-development',
    name: 'E-commerce & Shopify Development',
    shortName: 'E-commerce & Shopify',
    icon: '🛒',
    keywords: ['ecommerce website development', 'Shopify developer UK', 'Shopify agency UK', 'custom online store'],
    seoTitle: 'E-commerce Website Development & Shopify Experts UK | 2xdev',
    seoDescription:
      'Conversion-focused online stores from a UK e-commerce development team — Shopify, WooCommerce and fully custom Next.js storefronts with fast checkouts.',
    badge: 'E-commerce & Shopify · UK',
    h1: 'E-commerce development that turns visitors into customers.',
    heroSubtitle:
      'From Shopify stores to fully custom storefronts, we build online shops that load fast, rank well and make checking out effortless.',
    intro: [
      'We’re an e-commerce development team that builds online stores around how your business actually sells — whether that’s a Shopify store you can manage yourself, a WooCommerce shop on WordPress, or a fully custom storefront with no platform fees at all.',
      'Speed and search matter more in e-commerce than anywhere else. We optimise product and category pages for Google, add product structured data so listings can show richer results, and keep pages fast on mobile where most of your customers shop.',
      'For Dairy Farm Products we built a bespoke Next.js grocery store with its own catalogue, 20+ product categories and an admin dashboard — giving the business full control and 0% platform fees.',
    ],
    idealFor: [
      'Brands launching their first online shop',
      'Shopify stores that need custom features or a faster theme',
      'Businesses tired of paying platform and app fees',
      'Retailers moving from marketplaces to their own store',
    ],
    deliverables: [
      { title: 'Shopify store development', desc: 'Custom Shopify themes, sections and app integrations — set up so your team can manage products and content easily.' },
      { title: 'Custom e-commerce websites', desc: 'Bespoke Next.js or Laravel storefronts with your own catalogue, checkout and admin — no per-sale platform fees.' },
      { title: 'WooCommerce development', desc: 'WordPress-based shops for businesses that want content and commerce in one place.' },
      { title: 'E-commerce SEO', desc: 'Optimised category and product pages, product schema markup, clean URLs and fast mobile performance.' },
      { title: 'Payments & fulfilment', desc: 'Stripe, PayPal and Square payments, delivery rules, stock syncing and order notifications.' },
      { title: 'Store migrations', desc: 'Move from another platform with your products, customers and SEO rankings intact, using 301 redirects.' },
    ],
    techNames: ['Shopify', 'Next.js', 'React', 'WordPress', 'Square', 'Laravel'],
    relatedProjects: ['Dairy Farm Products'],
    faqs: [
      { q: 'Should I use Shopify or a custom-built online store?', a: 'Shopify is quick to launch and easy to run, which suits most new stores. A custom store makes sense when you need unusual product logic, want to avoid platform fees at scale, or need deep integration with other systems. We’ll recommend the right option for your products and budget.' },
      { q: 'Can you improve or speed up our existing Shopify store?', a: 'Yes. We regularly audit Shopify stores for speed, theme bloat and conversion issues, then fix them — often by replacing heavy apps with lightweight custom code.' },
      { q: 'Will you help my products rank on Google?', a: 'We build stores with e-commerce SEO in place: unique titles and descriptions, product structured data, crawlable category pages, fast mobile performance and an XML sitemap.' },
      { q: 'Can you migrate my store without losing sales or rankings?', a: 'Yes. We move products, customers and orders, map every old URL to its new page with 301 redirects, and test checkout thoroughly before switching over.' },
    ],
  },
  {
    slug: 'startup-mvp-development',
    name: 'Startup & MVP Development',
    shortName: 'Startup & MVP',
    icon: '🚀',
    keywords: ['MVP development UK', 'startup website development', 'MVP development company', 'startup app development'],
    seoTitle: 'MVP Development & Startup Websites UK | 2xdev',
    seoDescription:
      'Launch your startup faster. 2xdev builds MVPs, SaaS prototypes and launch-ready startup websites in weeks, with senior engineers and a fixed price.',
    badge: 'Startups & MVPs',
    h1: 'MVP development for founders who need to move fast.',
    heroSubtitle:
      'We turn your idea into a working product and a credible launch site — quickly, on a fixed price, with code that can scale when you do.',
    intro: [
      'Early-stage teams need to learn fast without burning their runway. We build minimum viable products (MVPs) and startup websites that get real users in front of your idea in weeks — then help you iterate based on what you learn.',
      'Because we’re a lean, senior-only team, there are no junior hand-offs or account managers slowing things down. You speak directly with the engineers, agree a fixed scope and price, and see working software every week.',
      'We build on proven, scalable stacks such as React, Next.js, Node and Firebase, so your MVP doesn’t have to be thrown away when you raise or start to grow.',
    ],
    idealFor: [
      'Founders validating a new product idea',
      'Startups preparing for a launch or investor demo',
      'Non-technical founders who need a technical partner',
      'Teams replacing a no-code prototype with real software',
    ],
    deliverables: [
      { title: 'MVP development', desc: 'A focused first version of your product with the core features users need — nothing that slows down launch.' },
      { title: 'Startup website development', desc: 'A fast, polished marketing site that explains your product clearly and makes your team look established.' },
      { title: 'Product scoping workshops', desc: 'We help you decide what goes into version one, map user journeys and agree a fixed plan and timeline.' },
      { title: 'SaaS foundations', desc: 'User accounts, subscriptions and payments, admin panels and analytics — built on a stack that scales.' },
      { title: 'Launch SEO & analytics', desc: 'Search-ready pages, analytics and conversion tracking so you can measure what’s working from day one.' },
      { title: 'Iteration after launch', desc: 'Ongoing sprints to ship new features and improvements based on real user feedback.' },
    ],
    techNames: ['React', 'Next.js', 'Node.js', 'Firebase', 'MongoDB', 'WordPress'],
    relatedProjects: ['Dairy Farm Products', 'CNI News'],
    faqs: [
      { q: 'How quickly can you build an MVP?', a: 'Most MVPs are scoped so they can launch within weeks rather than months. We agree the feature list and timeline up front and show you progress in weekly demos.' },
      { q: 'What should be included in an MVP?', a: 'Only the features needed to prove your core idea with real users. We run a short scoping session to separate must-haves from nice-to-haves, which keeps cost and timeline down.' },
      { q: 'Can the MVP grow into a full product?', a: 'Yes. We use the same production-grade stacks we use for larger platforms, so your MVP becomes the foundation of version two rather than something you have to rebuild.' },
      { q: 'Do you work with non-technical founders?', a: 'Often. We explain decisions in plain English, handle the technical choices, and make sure you own the code and accounts so you’re never dependent on us.' },
    ],
  },
  {
    slug: 'management-systems',
    name: 'Management Systems & Custom Software',
    shortName: 'Management Systems',
    icon: '⚙️',
    keywords: ['custom software development UK', 'bespoke CRM development', 'management system development', 'internal tools development'],
    seoTitle: 'Custom Software & Management System Development UK | 2xdev',
    seoDescription:
      'Bespoke CRMs, dashboards, booking and management systems built around your workflow. 2xdev develops secure custom business software for UK companies.',
    badge: 'Custom business software',
    h1: 'Management systems built around the way you work.',
    heroSubtitle:
      'Bespoke CRMs, dashboards and internal tools that replace spreadsheets and repetitive admin — with role-based access, reporting and automation.',
    intro: [
      'Off-the-shelf software rarely fits how a business really operates. We design and develop custom management systems — CRMs, booking platforms, compliance trackers, inventory tools and reporting dashboards — that match your processes instead of forcing you to change them.',
      'For Recruited People, an education recruitment business, we built a platform that handles candidate registration, compliance document tracking (DBS and safeguarding) and interview scheduling in a single dashboard.',
      'Every system includes secure logins, role-based permissions, audit trails and exports, and can connect to the tools you already use — accounting, email, payments and more.',
    ],
    idealFor: [
      'Teams running the business on spreadsheets',
      'Companies paying for several tools that don’t talk to each other',
      'Regulated industries that need compliance tracking',
      'Businesses that want to automate repetitive admin',
    ],
    deliverables: [
      { title: 'Bespoke CRM development', desc: 'Track leads, customers and deals in a CRM designed for your sales process — not someone else’s.' },
      { title: 'Custom dashboards & reporting', desc: 'Live dashboards and reports that pull data together so you can make decisions quickly.' },
      { title: 'Booking & scheduling systems', desc: 'Appointment, interview and resource scheduling with reminders and calendar integration.' },
      { title: 'Compliance & document tracking', desc: 'Store, verify and track expiring documents, with alerts before anything lapses.' },
      { title: 'Workflow automation', desc: 'Automate approvals, notifications and data entry so your team spends time on real work.' },
      { title: 'Secure, role-based access', desc: 'Granular permissions, audit logs and encrypted data, built with security best practice.' },
    ],
    techNames: ['Laravel', 'Node.js', 'React', 'Angular', 'Spring Boot', 'MySQL'],
    relatedProjects: ['Recruited People'],
    faqs: [
      { q: 'Why build custom software instead of buying an off-the-shelf tool?', a: 'Custom software fits your exact workflow, removes per-user licence fees, and can combine several tools into one. It’s the right choice when generic tools force workarounds or no longer scale with your team.' },
      { q: 'Can a custom system integrate with our existing tools?', a: 'Yes. We regularly connect systems to accounting software, email, payment providers, calendars and third-party APIs so data flows automatically.' },
      { q: 'Is our data secure?', a: 'We build with secure authentication, role-based permissions, encrypted connections, audit trails and regular backups, and follow UK data protection good practice.' },
      { q: 'Can you migrate data from our spreadsheets or old system?', a: 'Yes. We clean and import your existing data so your team can start using the new system with everything already in place.' },
    ],
  },
  {
    slug: 'cms-wordpress-development',
    name: 'CMS & WordPress Development',
    shortName: 'CMS & WordPress',
    icon: '📝',
    keywords: ['WordPress developer UK', 'WordPress website development', 'CMS development', 'headless CMS development'],
    seoTitle: 'WordPress Developers & CMS Website Development UK | 2xdev',
    seoDescription:
      'Custom WordPress and headless CMS websites your team can easily update. Fast, secure, SEO-friendly CMS development from a UK engineering team.',
    badge: 'CMS & WordPress',
    h1: 'CMS and WordPress websites your team can actually run.',
    heroSubtitle:
      'Editor-friendly content platforms — custom WordPress themes, headless CMS builds and news sites — that stay fast, secure and easy to update.',
    intro: [
      'A content management system should make publishing easy, not fragile. We build custom WordPress websites and headless CMS platforms with clean, purpose-built templates, so your marketing team can add pages and posts without breaking the design or slowing the site down.',
      'We avoid heavy page builders and plugin sprawl, which keeps sites quick and secure. Every CMS build includes SEO controls for titles, descriptions and social sharing, plus structured data and an automatic XML sitemap.',
      'For CNI News we built a WordPress-powered news platform covering breaking news, video and event listings across a dozen categories — designed for a busy editorial team publishing every day.',
    ],
    idealFor: [
      'Marketing teams that publish content regularly',
      'News, media and community publishers',
      'Businesses stuck with a slow, plugin-heavy WordPress site',
      'Teams that want a headless CMS with a modern front end',
    ],
    deliverables: [
      { title: 'Custom WordPress development', desc: 'Bespoke themes and blocks built for your content — no bloated multipurpose themes.' },
      { title: 'Headless CMS development', desc: 'Manage content in WordPress or a headless CMS while a fast React or Next.js front end serves visitors.' },
      { title: 'News & publishing platforms', desc: 'Categories, authors, video, events and high-traffic performance for editorial teams.' },
      { title: 'WordPress SEO setup', desc: 'Editable meta tags, schema markup, sitemaps, clean permalinks and fast page loads.' },
      { title: 'Speed & security hardening', desc: 'Plugin clean-ups, caching, image optimisation, updates and security monitoring for existing sites.' },
      { title: 'Training & support', desc: 'Simple guides for your editors and ongoing maintenance so the site stays healthy.' },
    ],
    techNames: ['WordPress', 'Next.js', 'React', 'Square', 'MySQL', 'Firebase'],
    relatedProjects: ['CNI News'],
    faqs: [
      { q: 'Is WordPress good for SEO?', a: 'Yes — when it’s built well. A lightweight custom theme, clean permalinks, schema markup, fast hosting and good content give WordPress sites an excellent foundation for search.' },
      { q: 'What is a headless CMS and do I need one?', a: 'A headless CMS separates content editing from the website itself, so the front end can be built with fast modern frameworks. It suits sites that need top performance or publish content to several places; for many businesses, a well-built traditional WordPress site is enough.' },
      { q: 'Can you fix our slow WordPress website?', a: 'Usually, yes. We audit plugins, theme code, images and hosting, then remove what’s slowing the site down — often with a big improvement in Core Web Vitals.' },
      { q: 'Will we be able to edit the website ourselves?', a: 'That’s the point of every CMS we build. Your team gets simple, structured editing screens and a short training session at handover.' },
    ],
  },
  {
    slug: 'api-integrations',
    name: 'API Development & Integrations',
    shortName: 'API & Integrations',
    icon: '🔌',
    keywords: ['API development UK', 'API integration services', 'third-party integrations', 'REST API development'],
    seoTitle: 'API Development & Integration Services UK | 2xdev',
    seoDescription:
      'Custom REST APIs and third-party integrations — payments, CRMs, accounting and more. 2xdev connects your systems so data flows automatically.',
    badge: 'APIs & integrations',
    h1: 'API development that connects your whole stack.',
    heroSubtitle:
      'Robust custom APIs and third-party integrations — payments, data, authentication and automation — so your systems work together.',
    intro: [
      'Most businesses run on several tools that don’t share data. We design and build APIs and integrations that connect them — your website, store, CRM, accounting software, payment provider and internal systems — so information moves automatically and reliably.',
      'Our engineers build secure, well-documented REST APIs on Node.js and Laravel, with authentication, rate limiting, logging and automated tests, so other developers (and future you) can build on them with confidence.',
      'We also integrate popular platforms such as Stripe, PayPal, Square, Shopify, Google Workspace and Microsoft 365, plus industry-specific services, and handle the edge cases that cause off-the-shelf connectors to fail.',
    ],
    idealFor: [
      'Teams copying data between systems by hand',
      'Products that need a public or partner API',
      'Stores and apps adding payments or shipping providers',
      'Businesses replacing fragile no-code automations',
    ],
    deliverables: [
      { title: 'Custom REST API development', desc: 'Secure, versioned and documented APIs for your web app, mobile app or partners.' },
      { title: 'Third-party API integrations', desc: 'Connect CRMs, accounting, marketing, shipping and other platforms to your systems.' },
      { title: 'Payment gateway integration', desc: 'Stripe, PayPal and Square payments, subscriptions, refunds and webhooks done properly.' },
      { title: 'Authentication & SSO', desc: 'Secure login with OAuth, social sign-in and single sign-on for your users and staff.' },
      { title: 'Data sync & automation', desc: 'Scheduled and real-time syncs, webhooks and background jobs with retries and alerts.' },
      { title: 'Monitoring & documentation', desc: 'Logging, error alerts and clear API documentation so integrations stay healthy.' },
    ],
    techNames: ['Node.js', 'Laravel', 'Spring Boot', 'MongoDB', 'MySQL', 'Firebase'],
    relatedProjects: ['Recruited People', 'Dairy Farm Products'],
    faqs: [
      { q: 'What kinds of systems can you integrate?', a: 'If a system has an API, webhooks or a data export, we can usually connect it — payment providers, CRMs, accounting tools, e-commerce platforms, calendars, email services and custom databases.' },
      { q: 'Can you build an API for our mobile app or partners?', a: 'Yes. We design secure, versioned REST APIs with authentication, rate limiting and documentation so your apps and partners can rely on them.' },
      { q: 'What happens if a connected service changes or goes down?', a: 'We build integrations with retries, error logging and alerts, and keep them updated when providers change their APIs as part of ongoing support.' },
      { q: 'Can you replace our Zapier or no-code automations?', a: 'Yes. When automations become business-critical, a custom integration is usually faster, cheaper to run and far easier to monitor.' },
    ],
  },
];

export function getServicePage(slug: string): ServicePage {
  const page = servicePages.find((service) => service.slug === slug);
  if (!page) throw new Error(`Unknown service page: ${slug}`);
  return page;
}

export const servicePath = (slug: string) => `/services/${slug}`;
