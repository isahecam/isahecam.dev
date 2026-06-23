export interface NowItem {
  id: number;
  title: string;
  description: string;
}

export interface NowPlayingTrack {
  isPlaying: true;
  title: string;
  artist: string;
  album: string;
  albumImage: string | null;
  songUrl: string;
  progress: number;
  duration: number;
}

export type NowPlayingData = NowPlayingTrack | { isPlaying: false };
