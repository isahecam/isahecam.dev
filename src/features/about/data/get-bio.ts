import { cacheLife, cacheTag } from "next/cache";

import { BIO_QUERY } from "@/features/about/queries/about.queries";
import { Bio } from "@/features/about/types";
import { sanityClient } from "@/lib/sanity";

export async function getBio(locale: string): Promise<Bio> {
  "use cache";
  cacheLife("weeks");
  cacheTag("bio");

  return await sanityClient.fetch(BIO_QUERY, { locale });
}
