import { Hero } from "@/modules/home/sections/hero";
import { Projects } from "@/modules/home/sections/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-25 sm:px-0">
      <Hero />
      <Projects />
    </main>
  );
}
