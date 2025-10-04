import { SvgIcon } from "./svg-icon";

export type TechnologyName =
  | "Next.js"
  | "TypeScript"
  | "Tailwind CSS"
  | "shadcn/ui"
  | "Supabase"
  | "JavaScript"
  | "React"
  | "Node.js"
  | "Express"
  | "MongoDB"
  | "PostgreSQL"
  | "Docker"
  | "Kubernetes"
  | "AWS"
  | "GraphQL"
  | "Prisma"
  | "Firebase"
  | string;

export interface Technology {
  icon: SvgIcon;
  name: TechnologyName;
}
