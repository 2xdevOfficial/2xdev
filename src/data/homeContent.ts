import type {
  FooterColumn,
  NavLink,
  Project,
  ProcessStep,
  Service,
  Stat,
  Testimonial,
  TechGroup,
  WhyUsItem,
} from "../types/home";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const heroTech: string[] = [
  "Angular",
  "React",
  "Laravel",
  "Node",
  "Shopify",
  "WordPress",
];

export const clientRow: string[] = [
  "Energy West",
  "CNI NEWS",
  "DFP",
  "Recruited People",
  "Nursere Validate",
  "Cobalt Retail",
  "EnergyWest",
  "CNI NEWS",
  "DFP",
  "Recruited People",
  "Nursere Validate",
  "Cobalt Retail",
];

export const stats: Stat[] = [
  { num: "250+", count: 250, suffix: "+", label: "Projects delivered" },
  { num: "8", count: 8, suffix: "", label: "Years in business" },
  { num: "40+", count: 40, suffix: "+", label: "Team members" },
  { num: "98%", count: 98, suffix: "%", label: "Client satisfaction" },
];

export const services: Service[] = [
  {
    no: "01",
    title: "Custom Web Development",
    desc: "Bespoke web apps and sites engineered from scratch for performance, SEO and scale.",
    tags: "Angular · React · Node",
  },
  {
    no: "02",
    title: "E-commerce & Shopify",
    desc: "Conversion-focused stores — from headless Shopify builds to full custom checkouts.",
    tags: "Shopify · WooCommerce",
  },
  {
    no: "03",
    title: "Startup & Business Sites",
    desc: "Launch-ready marketing sites and MVPs that make early-stage teams look enterprise.",
    tags: "React · WordPress",
  },
  {
    no: "04",
    title: "Management Systems",
    desc: "Internal tools, dashboards and CRMs that automate the work your team hates doing.",
    tags: "Laravel · Node",
  },
  {
    no: "05",
    title: "CMS Development",
    desc: "Flexible, editor-friendly content platforms your marketing team can actually run.",
    tags: "WordPress · Square",
  },
  {
    no: "06",
    title: "API & Integrations",
    desc: "Robust APIs and third-party integrations that connect your stack end to end.",
    tags: "Node · Laravel",
  },
];

export const techGroups: TechGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "Angular", mono: "A", color: "#dd0031" },
      { name: "React", mono: "R", color: "#087ea4" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", mono: "L", color: "#f05340" },
      { name: "Node.js", mono: "N", color: "#3c873a" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", mono: "My", color: "#00618a" },
      { name: "MongoDB", mono: "M", color: "#12924f" },
      { name: "Firebase", mono: "Fb", color: "#dd8b0a" },
    ],
  },
  {
    label: "Platforms",
    items: [
      { name: "Shopify", mono: "S", color: "#5a8e3e" },
      { name: "WordPress", mono: "W", color: "#21759b" },
      { name: "Square", mono: "Sq", color: "#2b2b2b" },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "NorthLane Retail",
    cat: "E-commerce",
    desc: "Headless Shopify storefront rebuilt for speed, with a custom bundle-builder checkout.",
    metric: "+64% conversion",
    stack: "Shopify · React",
    bg1: "#5b4ee6",
    bg2: "#6c5ce7",
  },
  {
    name: "Meridian OS",
    cat: "Management System",
    desc: "A multi-tenant operations platform handling scheduling, billing and reporting.",
    metric: "12k daily users",
    stack: "Laravel · Angular",
    bg1: "#0f1b2d",
    bg2: "#1c2c46",
  },
  {
    name: "Founderly",
    cat: "Startup Website",
    desc: "Brand, marketing site and investor MVP shipped end to end in five weeks.",
    metric: "0 → launch in 5 wks",
    stack: "React · WordPress",
    bg1: "#4a3ed1",
    bg2: "#6c5ce7",
  },
];

export const process: ProcessStep[] = [
  {
    n: "01",
    t: "Discover",
    d: "We map goals, users and scope, then agree on a fixed plan and timeline.",
  },
  {
    n: "02",
    t: "Design",
    d: "Wireframes to polished UI — you sign off before a line of code is written.",
  },
  {
    n: "03",
    t: "Build",
    d: "Agile sprints with weekly demos, so you see progress every step of the way.",
  },
  {
    n: "04",
    t: "Launch & Scale",
    d: "We deploy, monitor and keep improving — support that outlasts go-live.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"2xdev rebuilt our store and doubled our checkout speed. Sales followed almost immediately."',
    name: "Sarah Whitfield",
    role: "Founder, NorthLane",
    init: "SW",
    av: "#5b4ee6",
  },
  {
    quote:
      '"They shipped our internal platform in half the time other agencies quoted — and it just works."',
    name: "James Okonkwo",
    role: "COO, Meridian",
    init: "JO",
    av: "#0f1b2d",
  },
  {
    quote:
      '"From brand to launch in five weeks. They felt like part of our team, not a vendor."',
    name: "Priya Nair",
    role: "CEO, Founderly",
    init: "PN",
    av: "#6c5ce7",
  },
];

export const whyUs: WhyUsItem[] = [
  {
    icon: "⚡",
    title: "Twice the pace",
    desc: "Lean senior teams and battle-tested foundations mean you launch in weeks — not quarters.",
  },
  {
    icon: "🛡️",
    title: "Built to last",
    desc: "Clean, tested, documented code you actually own — no lock-in, no mess to inherit later.",
  },
  {
    icon: "🤝",
    title: "A real partner",
    desc: "Weekly demos, direct access to engineers, and support that continues long after launch.",
  },
];

export const footerCols: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "E-commerce", href: "/#services" },
      { label: "Management Systems", href: "/#services" },
      { label: "CMS & WordPress", href: "/#services" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "support@2xdev.com", href: "mailto:support@2xdev.com" },
      { label: "Get a free quote", href: "/contact" },
      { label: "Book a call", href: "/contact" },
      { label: "United Kingdom", href: "/contact" },
    ],
  },
];
