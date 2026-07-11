export interface FeaturedMetric {
  value: string;
  label: string;
}

export interface FeaturedProject {
  tag: string;
  name: string;
  desc: string;
  metrics: FeaturedMetric[];
}
