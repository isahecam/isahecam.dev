import { Experience } from "@/types/experience";
import { formatDate } from "@/utils/format-date";

export const MY_EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "RC Ingeniería y Diseño",
    companyUrl: "https://rcingydis.wixsite.com/inicio",
    role: "Systems Engineer Trainee",
    aboutRole:
      "As a Systems Engineer Trainee, I collaborate closely with cross-functional teams to design and implement tailored web-based solutions for a variety of business needs. My role bridges both technical and analytical responsibilities, including gathering and refining system requirements directly from clients, and transforming them into scalable and efficient development solutions.",
    startDate: formatDate(new Date("2025-06-06")),
    endDate: formatDate(new Date("2025-12-06")),
  },
];
