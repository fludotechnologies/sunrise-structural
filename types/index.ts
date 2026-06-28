export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Service {
  image: string;
  title: string;
  description: string;
  features: readonly string[];
  icon?: string;
  category?: string;
  isCore?: boolean;
}

export interface SustainabilityBadge {
  icon: string;
  label: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
}