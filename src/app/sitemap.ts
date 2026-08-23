import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}${getPathname({ href: "/", locale: routing.defaultLocale })}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [
            locale,
            `${SITE_URL}${getPathname({ href: "/", locale })}`,
          ]),
        ),
      },
    },
  ];
}
