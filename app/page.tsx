import { Contact } from "@/modules/home/sections/contact";
import { Education } from "@/modules/home/sections/education";
import { Experience } from "@/modules/home/sections/experience";
import { Hero } from "@/modules/home/sections/hero";
import { Now } from "@/modules/home/sections/now";
import { Projects } from "@/modules/home/sections/projects";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col gap-10 px-5 py-25 sm:px-0">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Now />
      <Contact />
    </main>
  );
}
