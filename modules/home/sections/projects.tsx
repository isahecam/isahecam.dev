import { ProjectCard } from "@/modules/home/components/project-card";
import { Heading } from "@/shared/components/typography/heading";
import { PROJECTS } from "@/shared/constants/projects.constants";

export function Projects() {
  return (
    <section>
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs text-nowrap text-accent" level={2}>
          My Projects{" "}
          <span className="tracking-widest text-accent-foreground dark:text-accent">[{PROJECTS.length}]</span>
        </Heading>
        <div className="h-0.5 flex-1 border-b border-dashed border-accent"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
