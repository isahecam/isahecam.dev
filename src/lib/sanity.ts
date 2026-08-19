import { createClient } from "next-sanity";

import { clientEnv } from "@/config/env/client";

export const sanityClient = createClient({
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-05-15",
  useCdn: false,
});
