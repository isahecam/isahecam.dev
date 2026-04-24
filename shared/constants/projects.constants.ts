import { Project } from "@/shared/types/project.types";

export const PROJECTS = [
  {
    id: 1,
    title: "Meeti | Crea y comparte tus gustos con otras personas",
    description:
      "Meeti es una plataforma de creación de meetups y comunidades para compartir tus gustos y intereses con otras personas.",
    technologies: ["nextjs", "typescript", "react", "tailwindcss", "shadcn/ui", "drizzle-orm", "neon"],
    year: 2026,
    status: "crafting",
  },
] as const satisfies Project[];
