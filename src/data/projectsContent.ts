import type { Project } from '../types/home';
import type { FeaturedProject } from '../types/projects';
import type { StatItem } from '../types/shared';
import dairyFarmProductsShot from '../assets/images/projects/dairy-farm-products.webp';
import cniNewsShot from '../assets/images/projects/cni-news-shot.webp';

const DAIRY_FARM_PRODUCTS_URL = 'https://dairyfarmproduct.co.uk/';
const RECRUITED_PEOPLE_URL = 'https://recruitedpeople.co.uk/';
const CNI_NEWS_URL = 'https://cninews.tv/';

export const projectStats: StatItem[] = [
  { num: '50+', label: 'Projects delivered' },
  { num: '98%', label: 'Client satisfaction' },
  { num: '5+', label: 'Team members' },
  { num: '4', label: 'Years in business' },
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
  liveUrl: DAIRY_FARM_PRODUCTS_URL,
};

export const projectCategories: string[] = ['All', 'E-commerce', 'Management System', 'CMS'];

export const allProjects: Project[] = [
  { name: 'Dairy Farm Products', cat: 'E-commerce', desc: 'Custom-built online grocery storefront for fresh milk, cheese, butter and eggs — no Shopify, just a bespoke Next.js build with its own catalog and admin dashboard.', metric: '0% platform fees', stack: 'Next.js · React', bg1: '#1f8a6f', bg2: '#30b3a3', image: dairyFarmProductsShot, liveUrl: DAIRY_FARM_PRODUCTS_URL },
  { name: 'Recruited People', cat: 'Management System', desc: 'An education recruitment platform — candidate registration, compliance document tracking (DBS, safeguarding) and interview scheduling in one dashboard.', metric: 'Full compliance tracking', stack: 'React · Node', bg1: '#243b4a', bg2: '#5b8fb9', liveUrl: RECRUITED_PEOPLE_URL },
  { name: 'CNI News', cat: 'CMS', desc: 'A WordPress-powered news platform for Pakistani and British-Pakistani community coverage — breaking news, video and event listings across a dozen categories.', metric: '12 news categories', stack: 'WordPress · PHP', bg1: '#0d1b4d', bg2: '#dc2626', image: cniNewsShot, imageFit: 'cover', liveUrl: CNI_NEWS_URL },
];
