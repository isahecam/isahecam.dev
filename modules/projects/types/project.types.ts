export interface Project {
  _id: string;
  name: string;
  slug: string;
  description: string;
  cover: string;
  technologies: Technology[];
  publishedAt: string | null;
}

export interface Technology {
  _id: string;
  name: string;
  icon: string;
}
