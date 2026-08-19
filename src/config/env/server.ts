import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1),
    SPOTIFY_API_BASE_URL: z.url().default("https://api.spotify.com/v1"),
    SPOTIFY_TOKEN_URL: z.url().default("https://accounts.spotify.com/api/token"),
  },
  experimental__runtimeEnv: process.env,
});
