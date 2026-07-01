import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://isahecam.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: "https://isahecam.dev",
          en: "https://isahecam.dev/en",
        },
      },
    },
  ];
}
