import { PORTFOLIO } from "@/shared/constants/portfolio.constants";

export const SITE_INFO = {
  name: PORTFOLIO.displayName,
  url: process.env.APP_URL || "https://isahecam.dev",
  ogImage: PORTFOLIO.ogImage,
  keywords: PORTFOLIO.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#1d161e",
};
