import { Hero } from "@/modules/home/sections/hero";
import { Projects } from "@/modules/home/sections/projects";

export default function Home() {
  return (
    <main className="px-5 py-25">
      <Hero />
      <Projects />
    </main>
  );
}
