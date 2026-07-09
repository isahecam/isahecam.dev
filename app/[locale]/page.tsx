import { Experience } from "@/modules/home/sections/experience";
import { Hero } from "@/modules/home/sections/hero";
import { Projects } from "@/modules/projects/projects";
import { StarsBackground } from "@/shared/components/backgrounds/stars";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-3xl flex-1 scroll-mt-24 flex-col gap-20 px-4 lg:px-0">
      <StarsBackground className="absolute inset-0 -z-10" />
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
