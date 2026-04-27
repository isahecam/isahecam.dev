import { NowItem } from "@/modules/home/types/now.types";

export const NOW_ITEMS = [
  {
    id: 1,
    title: "Construyendo",
    description:
      "Meeti, una plataforma de creación de meetups y comunidades para compartir tus gustos y intereses con otras personas.",
  },
  {
    id: 2,
    title: "Leyendo",
    description: "The Pragmatic Programmer - Andrew Hunt y David Thomas.",
  },
  {
    id: 3,
    title: "Aprendiendo",
    description: "Next.js a profundidad y Expo.",
  },
] as const satisfies NowItem[];
