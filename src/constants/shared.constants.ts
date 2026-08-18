import { XformerlyTwitter, GitHub, LinkedIn } from "@/components/icons";
import { ResumeSource, SocialLink } from "@/types/shared.types";

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/isahecam",
    platform: {
      name: "GitHub",
      icon: GitHub,
    },
  },
  {
    link: "https://www.linkedin.com/in/isahecam/",
    platform: {
      name: "LinkedIn",
      icon: LinkedIn,
    },
  },
  {
    link: "https://x.com/isahecam",
    platform: {
      name: "X",
      icon: XformerlyTwitter,
    },
  },
] as const satisfies SocialLink[];

export const SOURCE_RESUME = {
  en: "https://assets.isahecam.dev/files/cv-en.pdf",
  es: "https://assets.isahecam.dev/files/cv-es.pdf",
} as const satisfies ResumeSource;
