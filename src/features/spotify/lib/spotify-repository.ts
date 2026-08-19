import { serverEnv } from "@/config/env/server";

export async function fetchCurrentlyPlaying(accessToken: string) {
  const response = await fetch(`${serverEnv.SPOTIFY_API_BASE_URL}/me/player/currently-playing`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.status === 204) return null;
  if (!response.ok) {
    throw new Error(`Spotify currently-playing request failed: ${response.status}`);
  }
  return response.json();
}

export async function fetchRecentlyPlayed(accessToken: string, limit: number) {
  const url = `${serverEnv.SPOTIFY_API_BASE_URL}/me/player/recently-played?limit=${limit}`;
  const response = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });

  if (!response.ok) {
    throw new Error(`Spotify recently-played request failed: ${response.status}`);
  }
  return response.json();
}
