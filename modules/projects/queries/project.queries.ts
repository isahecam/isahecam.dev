import { defineQuery } from "next-sanity";

export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "cover": cover.asset->url,
    technologies[]-> {
        _id,
        name,
        "icon": icon.asset->url
      },
    publishedAt,
  }
`);
