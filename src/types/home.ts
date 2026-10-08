export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  num: string;
  count: number;
  suffix: string;
  label: string;
}

export interface Service {
  no: string;
  /** Slug of the matching landing page in data/servicePages.ts */
  slug: string;
  title: string;
  desc: string;
  tags: string;
}

export interface TechItem {
  name: string;
  mono: string;
  color: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export interface Project {
  name: string;
  cat: string;
  desc: string;
  metric: string;
  stack: string;
  bg1: string;
  bg2: string;
  /** Real project screenshot. Falls back to the bg1/bg2 gradient when omitted. */
  image?: string;
  /**
   * How the image fills the thumbnail. 'contain' floats it on the gradient
   * (good for transparent product shots), 'cover' fills edge-to-edge
   * (better for dense website screenshots). Defaults to 'contain'.
   */
  imageFit?: 'contain' | 'cover';
  /** Live site URL. When set, the card links out to it instead of /contact. */
  liveUrl?: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  init: string;
  av: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  desc: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
