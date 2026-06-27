import { cacheLife, cacheTag } from "next/cache";

import { EXPERIENCES_QUERY } from "@/modules/home/queries/experience.queries";
import { Experience } from "@/modules/home/types/experience.types";
import { client } from "@/shared/lib/sanity";

export async function getExperiences(locale: string): Promise<Experience[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("experiences");

  return await client.fetch(EXPERIENCES_QUERY, { locale });
}
