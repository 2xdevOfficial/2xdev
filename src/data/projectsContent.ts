import type { Project } from '../types/home';
import type { FeaturedProject } from '../types/projects';
import type { StatItem } from '../types/shared';
import dairyFarmProductsShot from '../assets/images/projects/dairy-farm-products.webp';

export const projectStats: StatItem[] = [
  { num: '250+', label: 'Projects delivered' },
  { num: '98%', label: 'Client satisfaction' },
  { num: '40+', label: 'Team members' },
  { num: '8', label: 'Years in business' },
];

export const featuredProject: FeaturedProject = {
  tag: 'Featured case study',
  name: 'Dairy Farm Products',
  desc: 'A fully custom online grocery storefront for fresh milk, cheese, butter and eggs — built from scratch on Next.js with its own product catalog, categories and admin dashboard, instead of a templated Shopify build.',
  metrics: [
    { value: 'Custom', label: 'Next.js build' },
    { value: '20+', label: 'product categories' },
    { value: '0%', label: 'platform fees' },
  ],
  image: dairyFarmProductsShot,
};

export const projectCategories: string[] = [
  'All',
  'E-commerce',
  'Management System',
  'Startup Website',
  'CMS',
];

export const allProjects: Project[] = [
  { name: 'Dairy Farm Products', cat: 'E-commerce', desc: 'Custom-built online grocery storefront for fresh milk, cheese, butter and eggs — no Shopify, just a bespoke Next.js build with its own catalog and admin dashboard.', metric: '0% platform fees', stack: 'Next.js · React', bg1: '#1f8a6f', bg2: '#30b3a3', image: dairyFarmProductsShot },
  { name: 'Meridian OS', cat: 'Management System', desc: 'A multi-tenant operations platform handling scheduling, billing and reporting.', metric: '12k daily users', stack: 'Laravel · Angular', bg1: '#0f1b2d', bg2: '#1c2c46' },
  { name: 'Founderly', cat: 'Startup Website', desc: 'Brand, marketing site and investor MVP shipped end to end in five weeks.', metric: '0 → launch in 5 wks', stack: 'React · WordPress', bg1: '#4a3ed1', bg2: '#6c5ce7' },
  { name: 'Cobalt Retail', cat: 'E-commerce', desc: 'Multi-region storefront with localised pricing, currencies and fulfilment.', metric: '+38% AOV', stack: 'Shopify · Node', bg1: '#6c5ce7', bg2: '#8b7dff' },
  { name: 'Brightwave CRM', cat: 'Management System', desc: 'Custom CRM and pipeline dashboard replacing three legacy spreadsheets.', metric: '9h saved / week', stack: 'Laravel · Vue', bg1: '#1c2c46', bg2: '#2a3f63' },
  { name: 'Halcyon Health', cat: 'Startup Website', desc: 'Accessible marketing site and booking MVP for a wellbeing startup.', metric: '4.9 Lighthouse', stack: 'React · Node', bg1: '#4a3ed1', bg2: '#5b4ee6' },
  { name: 'Ledger CMS', cat: 'CMS', desc: 'Editor-friendly headless CMS powering a 500-page publication.', metric: '3× faster edits', stack: 'WordPress · Node', bg1: '#21759b', bg2: '#2a8fbb' },
  { name: 'Square Pay Portal', cat: 'CMS', desc: 'Square-powered payments and content portal for a services business.', metric: '99.98% uptime', stack: 'Square · Laravel', bg1: '#0f1b2d', bg2: '#2b2b2b' },
  { name: 'Verge Analytics', cat: 'Management System', desc: 'Real-time analytics dashboard with role-based access and exports.', metric: '2M events/day', stack: 'Angular · Node', bg1: '#5b4ee6', bg2: '#4a3ed1' },
];
