import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_INFO.displayName,
    short_name: SITE_INFO.username,
    description: SITE_INFO.jobTitle,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f5",
    theme_color: "#c96442",
    icons: [
      {
        src: SITE_INFO.favicons.light,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: SITE_INFO.favicons.apple,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
