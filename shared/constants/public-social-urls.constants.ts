/** Canonical HTTPS profile URLs (SEO sameAs, hero, social list). */
export const PUBLIC_SOCIAL_URLS = {
  github: "https://github.com/isahecam",
  twitter: "https://x.com/isahecam",
  linkedIn: "https://www.linkedin.com/in/isahir-hernandez/",
} as const;

export const PUBLIC_SOCIAL_SAME_AS = Object.freeze(Object.values(PUBLIC_SOCIAL_URLS));
