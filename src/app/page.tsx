import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Posts } from "@/sections/Posts";
import { Projects } from "@/sections/Projects";

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
