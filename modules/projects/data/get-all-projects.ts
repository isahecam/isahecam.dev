import { cacheLife, cacheTag } from "next/cache";

import { ALL_PROJECTS_QUERY } from "@/modules/projects/queries/project.queries";
import { Project } from "@/modules/projects/types/project.types";
import { client } from "@/shared/lib/sanity";

export async function getAllProjects(): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("projects");

  return await client.fetch(ALL_PROJECTS_QUERY);
}
