import { Locale } from "next-intl";
import type { ComponentType, SVGProps } from "react";

export type SVGIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type Platform = {
  name: string;
  icon: SVGIcon;
};

export type SocialLink = {
  link: string;
  platform: Platform;
};

export type ResumeSource = Record<Locale, string>;
