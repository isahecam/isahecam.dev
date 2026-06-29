import { Experience } from "@/modules/home/sections/experience";
import { Hero } from "@/modules/home/sections/hero";
import { Projects } from "@/modules/projects/projects";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 scroll-mt-24 flex-col gap-20 px-4 lg:px-0">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
