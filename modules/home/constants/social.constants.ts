import { SocialLink } from "@/modules/home/types/social.types";
import { PUBLIC_SOCIAL_URLS } from "@/shared/constants/public-social-urls.constants";

export const SOCIAL_LINKS = [
  {
    id: 1,
    platform: "github",
    handle: "@isahecam",
    url: PUBLIC_SOCIAL_URLS.github,
    previewImage: "/previews/github.png",
  },
  {
    id: 2,
    platform: "x / twitter",
    handle: "@isahecam",
    url: PUBLIC_SOCIAL_URLS.twitter,
    previewImage: "/previews/x.png",
  },
  {
    id: 3,
    platform: "linkedin",
    handle: "in/isahir-hernandez",
    url: PUBLIC_SOCIAL_URLS.linkedIn,
    previewImage: "/previews/linkedin.png",
  },
  {
    id: 4,
    platform: "isahecam@gmail.com",
    handle: "escríbeme",
    url: "mailto:isahecam@gmail.com",
    previewImage: "/previews/email.png",
  },
] as const satisfies SocialLink[];
