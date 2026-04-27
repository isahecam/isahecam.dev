import { SocialLink } from "@/modules/home/types/social.types";

export const SOCIAL_LINKS = [
  {
    id: 1,
    platform: "github",
    handle: "@isahecam",
    url: "https://github.com/isahecam",
    previewImage: "/previews/github.png",
  },
  {
    id: 2,
    platform: "x / twitter",
    handle: "@isahecam",
    url: "https://x.com/isahecam",
    previewImage: "/previews/x.png",
  },
  {
    id: 3,
    platform: "linkedin",
    handle: "in/isahir-hernandez",
    url: "https://www.linkedin.com/in/isahir-hernandez/",
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
