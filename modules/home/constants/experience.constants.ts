import { Experience } from "@/modules/home/types/experience.types";

export const EXPERIENCES = [
  {
    id: 1,
    role: "Frontend Developer",
    company: { name: "XDEVELOP", website: "https://xdevelop.io", logo: "/logos/xdevelop.svg" },
    period: { startDate: "2025-03-03", endDate: "2026-04-17" },
    description:
      "Desarrollo de aplicaciones web y móviles utilizando tecnologías modernas como React, Next.js, Tailwind CSS, TypeScript, entre otras.",
  },
] as const satisfies Experience[];
