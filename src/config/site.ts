const ASSETS_URL = "https://assets.isahecam.dev";

export const SITE_URL = "https://isahecam.dev";

export const SITE_INFO = {
  displayName: "Brandon Hernández",
  username: "isahecam",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  location: {
    locality: "Puebla",
    country: "MX",
    display: "Puebla, Mexico",
  },
  images: {
    avatar: `${ASSETS_URL}/images/avatar.png`,
    og: {
      url: `${ASSETS_URL}/images/ascii-art-hero-background.png`,
      width: 2560,
      height: 1344,
    },
  },
  favicons: {
    ico: `${ASSETS_URL}/images/favicon.ico`,
    light: `${ASSETS_URL}/images/favicon.svg`,
    dark: `${ASSETS_URL}/images/favicon-dark.svg`,
    apple: `${ASSETS_URL}/images/apple-touch-icon.png`,
  },
} as const;
