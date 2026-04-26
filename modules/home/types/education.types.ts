import { Period } from "@/modules/home/types/experience.types";

export interface Institution {
  name: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: Institution;
  period: Period;
}
