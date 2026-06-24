import { ProjectCard } from "@/modules/projects/components/project-card";
import { getAllProjects } from "@/modules/projects/data/get-all-projects";

export async function ProjectsGrid() {
  const items = await getAllProjects();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
