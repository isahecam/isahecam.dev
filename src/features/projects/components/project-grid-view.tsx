import { getLocale } from "next-intl/server";

import { ProjectCard } from "@/features/projects/components/project-card";
import { getAllProjects } from "@/features/projects/data/get-all-projects";

export async function ProjectGridView() {
  const locale = await getLocale();
  const items = await getAllProjects(locale);

  return (
    <div className="flex flex-col gap-6">
      {items.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
