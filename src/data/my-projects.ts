import { Project } from "@/types/project";
import { getTech } from "@/utils/get-tech";

export const MY_PROJECTS: Project[] = [
  {
    id: "1",
    name: "Membo",
    description: "A membership management system. 💸",
    status: "In Progress",
    techStack: getTech([
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
    ]),
  },
  {
    id: "2",
    name: "Thug Style Barber Shop",
    description: "A reservation system for Thug Style Barber Shop. ✂️💈",
    status: "In Production",
    techStack: getTech([
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Google Calendar API",
      "Supabase",
    ]),
  },
];
