import ProjectCard from "@/components/ProjectCard";
import { MY_PROJECTS } from "@/data/my-projects";

function Projects() {
  return (
    <section className='mt-16' id='projects'>
      <h2 className='mb-8 font-mono text-xl font-bold text-black'>Projects</h2>
      <div className='grid grid-cols-1 gap-y-6'>
        {MY_PROJECTS.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
export { Projects };
