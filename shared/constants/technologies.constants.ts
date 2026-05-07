import {
  Astro,
  DrizzleORM,
  Neon,
  Nextjs,
  React,
  TailwindCSS,
  TypeScript,
  BetterAuth,
  Supabase,
} from "@/shared/components/icons/technologies";
import { shadcnui } from "@/shared/components/icons/technologies/shadcn-ui";
import { createRegistry } from "@/shared/utils";

export const technologies = [
  {
    key: "typescript",
    name: "TypeScript",
    isotype: TypeScript,
  },
  {
    key: "react",
    name: "React",
    isotype: React,
  },
  {
    key: "nextjs",
    name: "Next.js",
    isotype: Nextjs,
  },
  {
    key: "astro",
    name: "Astro",
    isotype: Astro,
  },
  {
    key: "tailwindcss",
    name: "Tailwind CSS",
    isotype: TailwindCSS,
  },
  {
    key: "drizzle-orm",
    name: "Drizzle ORM",
    isotype: DrizzleORM,
  },
  {
    key: "shadcn/ui",
    name: "shadcn/ui",
    isotype: shadcnui,
  },
  {
    key: "neon",
    name: "Neon",
    isotype: Neon,
  },
  {
    key: "better-auth",
    name: "Better Auth",
    isotype: BetterAuth,
  },
  {
    key: "supabase",
    name: "Supabase",
    isotype: Supabase,
  },
] as const;

export const Technologies = createRegistry(technologies, "key");
