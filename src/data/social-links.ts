import { SocialLink } from "@/types/social-link";
import { GitHub } from "@/components/icons/GitHub";
import { Instagram } from "@/components/icons/Instagram";
import { X } from "@/components/icons/X";
import { LinkedIn } from "@/components/icons/LinkedIn";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    to: "https://github.com/isahecam",
    label: "GitHub",
    icon: GitHub,
  },
  {
    to: "https://www.linkedin.com/in/isahir-hernandez",
    label: "LinkedIn",
    icon: LinkedIn,
  },
  {
    to: "https://instagram.com/isahecam",
    label: "Instagram",
    icon: Instagram,
  },
  {
    to: "https://twitter.com/isahecam",
    label: "Twitter",
    icon: X,
  },
];
