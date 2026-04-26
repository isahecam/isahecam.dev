import { Education } from "@/modules/home/sections/education";
import { Experience } from "@/modules/home/sections/experience";
import { Hero } from "@/modules/home/sections/hero";
import { Projects } from "@/modules/home/sections/projects";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-25 sm:px-0">
      <Hero />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
