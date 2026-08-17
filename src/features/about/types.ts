import { PortableTextBlock } from "next-sanity";

export interface Bio {
  headline: string;
  summary: PortableTextBlock[];
}
