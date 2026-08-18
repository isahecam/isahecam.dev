import { defineQuery } from "next-sanity";

export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    "tagline": coalesce(tagline[language == $locale][0].value, tagline[0].value),
    "slug": slug.current,
    "description": coalesce(description[language == $locale][0].value, description[0].value),
    coverImage {
      _key,
      "url": asset->url,
      alt
    },
    gallery[] {
      _key,
      "url": asset->url,
      alt
    },
    stack[]-> {
      "key": key.current,
      "name": name,
    },
    liveUrl,
    publishedAt,
  }
`);
