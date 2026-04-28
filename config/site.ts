import { ME } from "@/shared/constants/portfolio.constants";

export const SITE_INFO = {
  name: ME.displayName,
  url: process.env.APP_URL || "https://isahecam.dev",
  ogImage: ME.ogImage,
  description: ME.summary,
  keywords: ME.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#1d161e",
};
