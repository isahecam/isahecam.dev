"use client";

import type { NowPlayingTrack } from "@/features/spotify/types/spotify-types";

import useSWR from "swr";

import { SPOTIFY_NOW_PLAYING_POLL_INTERVAL_MS } from "@/features/spotify/config/spotify-config";

export type SpotifyPlayerData = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  songUrl: string;
};

async function fetchNowPlaying(url: string): Promise<NowPlayingTrack | null> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Now playing request failed: ${response.status}`);
  }
  return response.json();
}

export function useSpotify() {
  const {
    data: track,
    error,
    isLoading,
  } = useSWR("/api/spotify/now-playing", fetchNowPlaying, {
    refreshInterval: SPOTIFY_NOW_PLAYING_POLL_INTERVAL_MS,
    revalidateOnFocus: true,
  });

  const data: SpotifyPlayerData | null = track
    ? {
        isPlaying: track.isPlaying,
        title: track.title,
        artist: track.artist,
        albumArt: track.albumImageUrl,
        songUrl: track.trackUrl,
      }
    : null;

  return { data, loading: isLoading, error };
}
