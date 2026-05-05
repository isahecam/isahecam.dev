import { getTranslations } from "next-intl/server";

import { getNowPlaying } from "@/modules/home/utils/get-now-playing";
import { Spotify } from "@/shared/components/icons/spotify";

export async function NowPlayingStatus() {
  const data = await getNowPlaying();

  if (!data.isPlaying) return null;

  const t = await getTranslations("home.spotify");

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <Spotify aria-hidden className="size-3 shrink-0" />
      <span className="max-w-[42ch] truncate">
        {t("now-playing-prefix")} {data.title} — {data.artist}
      </span>
    </div>
  );
}
