import { ProjectCard } from "@/modules/projects/components/project-card";
import { getAllProjects } from "@/modules/projects/data/get-all-projects";

export async function ProjectsGrid() {
  const items = await getAllProjects();

  return (
    <div className="flex flex-col gap-6">
      {items.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
