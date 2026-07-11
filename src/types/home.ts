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
