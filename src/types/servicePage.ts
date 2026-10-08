import type { Faq } from './contact';

export interface ServicePage {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  /** Search phrases this page targets — used for internal reference and structured data. */
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  badge: string;
  h1: string;
  heroSubtitle: string;
  intro: string[];
  idealFor: string[];
  deliverables: { title: string; desc: string }[];
  /** Names matching entries in aboutTech / techGroups. */
  techNames: string[];
  /** Names matching entries in allProjects. */
  relatedProjects: string[];
  faqs: Faq[];
}
