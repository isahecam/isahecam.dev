export interface Project {
  _id: string;
  title: string;
  tagline: string;
  slug: string;
  description: string;
  coverImage: Media;
  imageGallery: Media[] | null;
  technologies: Technology[];
  liveUrl: string | null;
  publishedAt: string | null;
}

export interface Technology {
  _id: string;
  name: string;
  icon: string;
}

export interface Media {
  _key: string;
  url: string;
  alt: string;
}
