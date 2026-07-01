import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brandon Hernández - Portfolio",
    short_name: "Brandon Hernández - Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#e7e4e7",
    theme_color: "#e7e4e7",
    icons: [
      {
        src: "https://assets.isahecam.dev/images/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "https://assets.isahecam.dev/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
