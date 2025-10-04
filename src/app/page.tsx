import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { PostsList } from "@/sections/PostsList";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <main className='flex w-full flex-col px-6 py-10'>
      <Hero />
      <Experience />
      <Projects />
      <PostsList />
    </main>
  );
}
