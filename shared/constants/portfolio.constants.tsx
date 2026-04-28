import { Portfolio } from "@/shared/types/portfolio.types";

export const ME = {
  displayName: "Brandon Hernández",
  firstName: "Brandon",
  lastName: "Hernández",
  availability: {
    status: "success",
    label: "Open to work",
  },
  gender: "male",
  jobTitle: "IT Engineer and Full Stack Developer",
  address: "Puebla, MX",
  nickname: "isahecam",
  flipSentences: ["I love to code ♥️", "I like the small details", "I'm a quick learner "],
  bio: (
    <>
      I'm a <strong>Systems and Industrial Information Technology Engineer</strong> with over a year of experience as a
      <strong>full-stack developer</strong>. I'm a passionate lifelong learner, driven by creativity and ambition to
      build meaningful web experiences and solutions.
    </>
  ),
  summary:
    "Ingenerio en Sistemas y Tecnologías de la Información Industrial con más de 1 año de experiencia en desarrollo web. Apasionado por la tecnología, explorador y estusiasta de las nuevas tendencias en el mundo de la programación.",

  avatar: "https://assets.isahecam.dev/images/avatar.png",
  ogImage: "https://assets.isahecam.dev/images/isahecam-avatar-ghibli.webp",
  keywords: [
    "isahecam",
    "isahir hernández",
    "brandon hernández",
    "brandon isahir hernández camacho",
    "systems and industrial information technology engineer",
    "full-stack developer",
  ],
} satisfies Portfolio;
