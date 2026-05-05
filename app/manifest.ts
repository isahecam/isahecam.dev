import type { MetadataRoute } from "next";

import { META_THEME_COLORS } from "@/config/site";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PORTFOLIO.displayName} – Portfolio`,
    short_name: PORTFOLIO.nickname,
    start_url: "/",
    display: "browser",
    background_color: META_THEME_COLORS.light,
    theme_color: META_THEME_COLORS.dark,
    icons: [
      {
        src: "https://assets.isahecam.dev/images/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "https://assets.isahecam.dev/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
