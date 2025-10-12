import { z } from "zod";

export const PostSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  category: z.enum(["Tutorial", "Article", "News", "Life"]).default("Life"),
  published: z.boolean().default(false),
});
