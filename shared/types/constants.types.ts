import { Route } from "next";

export type SocialLink = {
  platform: string;
  url: Route;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
