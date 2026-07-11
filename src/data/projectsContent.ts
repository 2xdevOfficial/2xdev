import type { Project } from '../types/home';
import type { FeaturedProject } from '../types/projects';
import type { StatItem } from '../types/shared';

export const projectStats: StatItem[] = [
  { num: '250+', label: 'Projects delivered' },
  { num: '98%', label: 'Client satisfaction' },
  { num: '40+', label: 'Team members' },
  { num: '8', label: 'Years in business' },
];

export const featuredProject: FeaturedProject = {
  tag: 'Featured case study',
  name: 'NorthLane Retail',
  desc: 'A headless Shopify storefront rebuilt from the ground up for speed, with a custom bundle-builder checkout that lifted average order value.',
  metrics: [
    { value: '+64%', label: 'conversion' },
    { value: '1.2s', label: 'load time' },
    { value: '6 wks', label: 'to launch' },
  ],
};

export const projectCategories: string[] = [
  'All',
  'E-commerce',
  'Management System',
  'Startup Website',
  'CMS',
];

export const allProjects: Project[] = [
  { name: 'NorthLane Retail', cat: 'E-commerce', desc: 'Headless Shopify storefront rebuilt for speed, with a custom bundle-builder checkout.', metric: '+64% conversion', stack: 'Shopify · React', bg1: '#5b4ee6', bg2: '#6c5ce7' },
  { name: 'Meridian OS', cat: 'Management System', desc: 'A multi-tenant operations platform handling scheduling, billing and reporting.', metric: '12k daily users', stack: 'Laravel · Angular', bg1: '#0f1b2d', bg2: '#1c2c46' },
  { name: 'Founderly', cat: 'Startup Website', desc: 'Brand, marketing site and investor MVP shipped end to end in five weeks.', metric: '0 → launch in 5 wks', stack: 'React · WordPress', bg1: '#4a3ed1', bg2: '#6c5ce7' },
  { name: 'Cobalt Retail', cat: 'E-commerce', desc: 'Multi-region storefront with localised pricing, currencies and fulfilment.', metric: '+38% AOV', stack: 'Shopify · Node', bg1: '#6c5ce7', bg2: '#8b7dff' },
  { name: 'Brightwave CRM', cat: 'Management System', desc: 'Custom CRM and pipeline dashboard replacing three legacy spreadsheets.', metric: '9h saved / week', stack: 'Laravel · Vue', bg1: '#1c2c46', bg2: '#2a3f63' },
  { name: 'Halcyon Health', cat: 'Startup Website', desc: 'Accessible marketing site and booking MVP for a wellbeing startup.', metric: '4.9 Lighthouse', stack: 'React · Node', bg1: '#4a3ed1', bg2: '#5b4ee6' },
  { name: 'Ledger CMS', cat: 'CMS', desc: 'Editor-friendly headless CMS powering a 500-page publication.', metric: '3× faster edits', stack: 'WordPress · Node', bg1: '#21759b', bg2: '#2a8fbb' },
  { name: 'Square Pay Portal', cat: 'CMS', desc: 'Square-powered payments and content portal for a services business.', metric: '99.98% uptime', stack: 'Square · Laravel', bg1: '#0f1b2d', bg2: '#2b2b2b' },
  { name: 'Verge Analytics', cat: 'Management System', desc: 'Real-time analytics dashboard with role-based access and exports.', metric: '2M events/day', stack: 'Angular · Node', bg1: '#5b4ee6', bg2: '#4a3ed1' },
];
