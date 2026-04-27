import { getNowPlaying } from "@/modules/home/utils/get-now-playing";
import { Spotify } from "@/shared/components/icons/spotify";

export async function NowPlayingStatus() {
  const data = await getNowPlaying();

  if (!data.isPlaying) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <Spotify className="size-3 shrink-0" />
      <span className="max-w-[42ch] truncate">
        now playing: {data.title} — {data.artist}
      </span>
    </div>
  );
}
