import { ProjectCard } from "@/modules/home/components/project-card";
import { Heading } from "@/shared/components/typography/heading";
import { PROJECTS } from "@/shared/constants/projects.constants";

export function Projects() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          // mis proyectos <span className="tracking-widest">[{PROJECTS.length}]</span>
        </Heading>
      </header>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
