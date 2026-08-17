import { cacheLife, cacheTag } from "next/cache";

import { EXPERIENCE_QUERY } from "@/features/experience/queries/experience.queries";
import { Experience } from "@/features/experience/types";
import { sanityClient } from "@/lib/sanity";

export async function getExperience(locale: string): Promise<Experience[]> {
  "use cache";
  cacheLife("weeks");
  cacheTag("experience");

  return await sanityClient.fetch(EXPERIENCE_QUERY, { locale });
}
