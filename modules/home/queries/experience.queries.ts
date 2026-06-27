import { defineQuery } from "next-sanity";

export const EXPERIENCES_QUERY = defineQuery(`
  *[_type == "experience"] | order(period.startDate desc) {
    _id,
    "role": coalesce(role[language == $locale][0].value, role[0].value),
    "description": coalesce(description[language == $locale][0].value, description[0].value),
    company {
      name,
      website,
      "logo": logo.asset->url
    },
    period {
      startDate,
      endDate
    }
  }
`);
