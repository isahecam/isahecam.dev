import { Technology } from "@/shared/types/technology.types";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  year: number;
  status: "crafting" | "completed" | "in-review";
}
