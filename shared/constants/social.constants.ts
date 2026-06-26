import { GitHub } from "@/shared/components/icons/github";
import { LinkedIn } from "@/shared/components/icons/linkedin";
import { XformerlyTwitter } from "@/shared/components/icons/x-formerly-twitter";
import type { SocialLink } from "@/shared/types/constants.types";

export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/isahecam",
    icon: GitHub,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/isahir-hernandez",
    icon: LinkedIn,
  },
  {
    platform: "X (Formerly Twitter)",
    url: "https://x.com/isahecam",
    icon: XformerlyTwitter,
  },
] satisfies SocialLink[];
