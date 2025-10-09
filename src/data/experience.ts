import { Experience } from "@/types/experience";
import { formatDate } from "@/utils/format-date";

export const MY_EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "RC Ingeniería y Diseño",
    websiteCompany: "https://rcingydis.wixsite.com/inicio",
    role: "Software Engineering Intern",
    aboutRole:
      "As a Software Engineering Intern at RC Ingeniería y Diseño, I contributed to the development of a comprehensive web solution for the commercial sector, leveraging modern technologies such as Next.js, React.js, TypeScript, Tailwind CSS and Supabase Storage. I was actively involved in all stages of the development lifecycle from requirements analysis and stakeholder collaboration to system design, implementation, and production deployment strengthening my skills in full-stack development, project management, and technical communication.",
    startDate: formatDate(new Date("2025-06-05")),
    endDate: formatDate(new Date("2025-09-06")),
  },
];
