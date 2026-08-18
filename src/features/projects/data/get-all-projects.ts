import { cacheLife, cacheTag } from "next/cache";

import { ALL_PROJECTS_QUERY } from "@/features/projects/queries/project.queries";
import { Project } from "@/features/projects/types";
import { sanityClient } from "@/lib/sanity";

export async function getAllProjects(locale: string): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("projects");

  return await sanityClient.fetch(ALL_PROJECTS_QUERY, { locale });
}
