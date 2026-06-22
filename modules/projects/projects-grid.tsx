import { ProjectCard } from "@/modules/projects/components/project-card";
import { getAllProjects } from "@/modules/projects/data/get-all-projects";

export async function ProjectsGrid() {
  const items = await getAllProjects();

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {items.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
