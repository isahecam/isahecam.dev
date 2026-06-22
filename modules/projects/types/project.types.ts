export interface Project {
  _id: string;
  name: string;
  slug: string;
  description: string;
  cover: string | null;
  publishedAt: string | null;
}
