import { GitHub } from "@/shared/components/icons/github";
import { LinkedIn } from "@/shared/components/icons/linkedin";
import { XformerlyTwitter } from "@/shared/components/icons/x-formerly-twitter";
import type { SocialLink } from "@/shared/types/constants.types";

export const SOCIAL_LINKS = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/isahecam",
    icon: LinkedIn,
  },
  {
    platform: "GitHub",
    url: "https://github.com/isahecam",
    icon: GitHub,
  },
  {
    platform: "X",
    url: "https://x.com/isahecam",
    icon: XformerlyTwitter,
  },
] satisfies SocialLink[];
