import { Education } from "@/modules/home/types/education.types";

export const EDUCATIONS = [
  {
    id: 1,
    degree: "Ingeniería en Sistemas y Tecnologías de la Información Industrial",
    institution: { name: "Benemérita Universidad Autónoma de Puebla" },
    period: { startDate: "2021-08-22", endDate: "2025-06-22" },
  },
  {
    id: 2,
    degree: "Bachillerato Tecnológico",
    institution: { name: "Benemérita Universidad Autónoma de Puebla" },
    period: { startDate: "2018-08-22", endDate: "2021-06-22" },
  },
] as const satisfies Education[];
