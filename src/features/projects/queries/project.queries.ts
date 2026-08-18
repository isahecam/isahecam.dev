import { defineQuery } from "next-sanity";

export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    "tagline": coalesce(tagline[language == $locale][0].value, tagline[0].value),
    "slug": slug.current,
    "description": coalesce(description[language == $locale][0].value, description[0].value),
    coverImage {
      "url": asset->url,
      "alt": coalesce(alt[language == $locale][0].value, alt[0].value)
    },
    imageGallery[] {
      _key,
      "url": asset->url,
      "alt": coalesce(alt[language == $locale][0].value, alt[0].value)
    },
    stack[]-> {
      "key": key.current,
      name,
    },
    liveUrl,
    publishedAt,
  }
`);
