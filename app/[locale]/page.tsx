import { Hero } from "@/modules/home/sections/hero";
import { Projects } from "@/modules/projects/projects";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 scroll-mt-24 flex-col gap-10 px-4 lg:px-0">
      <Hero />
      <Projects />
    </main>
  );
}
