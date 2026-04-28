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
  {
    id: 2,
    title: "Membo | Lleva un control de tus suscripciones",
    description:
      "Membo es una plataforma de gestión de suscripciones de servicios digitales para llevar un control en una sola vista.",
    technologies: ["nextjs", "typescript", "react", "tailwindcss", "shadcn/ui", "drizzle-orm", "neon"],
    year: 2026,
    status: "crafting",
  },
] as const satisfies Project[];
