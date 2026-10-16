import type { Faq } from './contact';

/**
 * Long-form content blocks shared by blog articles and case studies.
 * Paragraph strings support two inline marks:
 *   [link text](/internal-or-https-url)  and  **bold text**
 */
export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][]; caption?: string };
  /** Optional paragraphs rendered after the bullets/table. */
  after?: string[];
}

export interface BlogPost {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag — keep the main keyword near the start, ~60 characters. */
  seoTitle: string;
  /** Meta description — ~150 characters, includes the keyword and a reason to click. */
  seoDescription: string;
  /** The one search phrase this article is built to rank for. */
  primaryKeyword: string;
  keywords: string[];
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  author: string;
  /** Short answer shown first — written to win the featured snippet / AI overview. */
  keyTakeaways: string[];
  sections: ContentSection[];
  faqs: Faq[];
  /** Service page slugs this article supports (internal links + CTA). */
  relatedServices: string[];
  /** Case study slugs to recommend. */
  relatedCaseStudies?: string[];
}

export interface CaseStudy {
  slug: string;
  /** Must match the project name in projectsContent. */
  projectName: string;
  client: string;
  industry: string;
  location?: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  h1: string;
  summary: string;
  liveUrl: string;
  stack: string[];
  /** Service page slugs used on this project. */
  services: string[];
  results: { value: string; label: string }[];
  sections: ContentSection[];
  faqs: Faq[];
  datePublished: string;
}
