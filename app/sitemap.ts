import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_INFO.url.replace(/\/$/, "");

  return [
    {
      url: base,
      lastModified: new Date().toISOString(),
    },
  ];
}
