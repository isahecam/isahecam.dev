import type { NowPlayingTrack } from "../types/spotify-types";

import { cacheLife, cacheTag } from "next/cache";

import { SPOTIFY_LAST_PLAYED_FALLBACK_LIMIT } from "../config/spotify-config";
import { mapToLastPlayedTrack, mapToNowPlayingTrack } from "./spotify-mappers";
import { fetchCurrentlyPlaying, fetchRecentlyPlayed } from "./spotify-repository";
import { getSpotifyAccessToken } from "./spotify-token-provider";

export async function getNowPlaying(): Promise<NowPlayingTrack | null> {
  "use cache";
  cacheTag("spotify-now-playing");
  cacheLife({ stale: 15, revalidate: 15, expire: 60 });

  const accessToken = await getSpotifyAccessToken();

  const current = await fetchCurrentlyPlaying(accessToken);
  const currentTrack = mapToNowPlayingTrack(current);
  if (currentTrack) return currentTrack;

  const recent = await fetchRecentlyPlayed(accessToken, SPOTIFY_LAST_PLAYED_FALLBACK_LIMIT);
  return mapToLastPlayedTrack(recent);
}
