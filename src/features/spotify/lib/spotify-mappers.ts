import type { NowPlayingTrack } from "../types/spotify-types";

export function mapToNowPlayingTrack(raw: any): NowPlayingTrack | null {
  if (!raw?.item) return null;

  return {
    title: raw.item.name,
    artist: raw.item.artists.map((artist: any) => artist.name).join(", "),
    albumImageUrl: raw.item.album.images[0]?.url ?? null,
    isPlaying: raw.is_playing,
    trackUrl: raw.item.external_urls.spotify,
  };
}

export function mapToLastPlayedTrack(raw: any): NowPlayingTrack | null {
  const entry = raw?.items?.[0];
  if (!entry) return null;

  return {
    title: entry.track.name,
    artist: entry.track.artists.map((artist: any) => artist.name).join(", "),
    albumImageUrl: entry.track.album.images[0]?.url ?? null,
    isPlaying: false,
    trackUrl: entry.track.external_urls.spotify,
  };
}
