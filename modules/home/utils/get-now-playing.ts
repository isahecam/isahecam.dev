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

const getAccessToken = async (): Promise<string> => {
  const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64");

  const response = await fetch(`${process.env.SPOTIFY_ACCOUNT_API_URL}/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    next: {
      revalidate: 3000,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  const data = await response.json();
  return data.access_token;
};

export async function getNowPlaying(): Promise<NowPlayingData> {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(`${process.env.SPOTIFY_API_URL}/me/player/currently-playing`, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (response.status === 204 || response.status > 400) return { isPlaying: false };

    const song = await response.json();

    if (song.currently_playing_type !== "track" || !song.is_playing) return { isPlaying: false };

    return {
      isPlaying: true,
      title: song.item.name,
      artist: song.item.artists.map((a: { name: string }) => a.name).join(", "),
      album: song.item.album.name,
      albumImage: song.item.album.images[0]?.url ?? null,
      songUrl: song.item.external_urls.spotify,
      progress: song.progress_ms,
      duration: song.item.duration_ms,
    };
  } catch {
    return { isPlaying: false };
  }
}
