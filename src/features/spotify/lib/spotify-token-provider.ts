import { cacheLife, cacheTag } from "next/cache";

import { serverEnv } from "@/config/env/server";

export async function getSpotifyAccessToken(): Promise<string> {
  "use cache";
  cacheTag("spotify-access-token");
  cacheLife({ stale: 3000, revalidate: 3000, expire: 3600 });

  const credentials = Buffer.from(
    `${serverEnv.SPOTIFY_CLIENT_ID}:${serverEnv.SPOTIFY_CLIENT_SECRET}`,
  ).toString("base64");

  const response = await fetch(serverEnv.SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credentials}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: serverEnv.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh Spotify access token: ${response.status}`);
  }

  const data: { access_token: string } = await response.json();
  return data.access_token;
}
