import { defineQuery } from "next-sanity";

export const BIO_QUERY = defineQuery(`
  *[_type == "bio"][0] {
    _id,
    "headline": coalesce(headline[language == $locale][0].value, headline[0].value),
    "summary": coalesce(summary[language == $locale][0].value, summary[0].value),
  }
`);
