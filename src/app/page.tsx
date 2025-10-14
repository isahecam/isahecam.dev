import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Posts } from "@/sections/Posts";
import { Projects } from "@/sections/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandon Hernández | Portfolio",
  description:
    "I'm a Systems and Industrial Information Technology Engineer with over a year of experience as a full-stack developer. Passionate lifelong learner driven by creativity and ambition to build meaningful web experiences and solutions.",
  keywords: [
    "Brandon Hernández",
    "isahecam",
    "Portfolio",
    "IT Engineer",
    "Full Stack Developer",
    "Developer",
    "Web Development",
    "Systems Engineer",
    "Software Engineer",
  ],
  authors: [{ name: "Brandon Hernández", url: "https://isahecam.dev" }],
  creator: "Brandon Hernández",
  openGraph: {
    title: "Brandon Hernández | Portfolio",
    description:
      "I'm a Systems and Industrial Information Technology Engineer with over a year of experience as a full-stack developer. Passionate lifelong learner driven by creativity and ambition to build meaningful web experiences and solutions.",
    url: "https://isahecam.dev",
    siteName: "Brandon Hernández",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Brandon Hernández - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Hernández | Portfolio",
    description:
      "I'm a Systems and Industrial Information Technology Engineer with over a year of experience as a full-stack developer. Passionate lifelong learner driven by creativity and ambition to build meaningful web experiences and solutions.",
    images: ["/opengraph-image.png"],
    creator: "@isahecam",
  },
};

export default function Home() {
  return (
    <main className='flex w-full motion-preset-slide-right flex-col motion-duration-2000'>
      <Hero />
      <Experience />
      <Projects />
      <Posts />
    </main>
  );
}
