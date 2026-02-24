export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
};

export type ProcessStep = {
  title: string;
  details: string;
};

export type InsightPost = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
};
