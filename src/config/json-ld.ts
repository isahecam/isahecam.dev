import type { Person } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { SOCIAL_LINKS } from "@/constants/shared.constants";

export const JSON_LD_ID = {
  website: `${SITE_INFO.url}/#website`,
  person: `${SITE_INFO.url}/#person`,
} as const;

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": JSON_LD_ID.person,
  name: SITE_INFO.displayName,
  alternateName: [SITE_INFO.username],
  identifier: SITE_INFO.username,
  image: SITE_INFO.images.avatar,
  url: SITE_INFO.url,
  sameAs: SOCIAL_LINKS.map((socialLink) => socialLink.link),
};
