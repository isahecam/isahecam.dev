export interface Project {
  _id: string;
  title: string;
  tagline: string;
  slug: string;
  description: string;
  coverImage: Media;
  imageGallery: Media[] | null;
  stack: Technology[];
  liveUrl: string | null;
  publishedAt: string | null;
}

export interface Technology {
  name: string;
  key: string;
}

export interface Media {
  _key: string;
  url: string;
  alt: string;
}
