export interface FeaturedMetric {
  value: string;
  label: string;
}

export interface FeaturedProject {
  tag: string;
  name: string;
  desc: string;
  metrics: FeaturedMetric[];
  /** Real project screenshot. Falls back to a gradient when omitted. */
  image?: string;
}
