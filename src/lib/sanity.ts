import { createClient } from "next-sanity";

import { env } from "@/config/env/client";

export const sanityClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-05-15",
  useCdn: false,
});
