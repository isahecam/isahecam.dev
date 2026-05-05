import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { SpotifyEmptyCard } from "@/modules/home/components/spotify-empty-card";
import { getNowPlaying } from "@/modules/home/utils/get-now-playing";
import { EqualizerIcon } from "@/shared/components/custom/equalizer";
import { Spotify } from "@/shared/components/icons/spotify";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface Props {
  className?: string;
}

export async function SpotifyPlayerCard({ className }: Props) {
  const data = await getNowPlaying();
  const t = await getTranslations("home.spotify");

  if (!data.isPlaying) return <SpotifyEmptyCard className={className} />;

  return (
    <Card className={cn("border-none shadow-none ring-0 hover:bg-muted", className)}>
      <CardHeader className="flex flex-row items-center justify-between border-b border-dashed">
        <CardTitle className="tracking-widest uppercase">{t("listening")}</CardTitle>

        <CardAction>
          <EqualizerIcon />
        </CardAction>
      </CardHeader>

      <CardContent className="flex items-center gap-4">
        <div className="size-16 shrink-0 overflow-hidden bg-muted">
          {data.albumImage && (
            <Image
              src={data.albumImage}
              alt={data.album}
              width={64}
              height={64}
              className="aspect-square size-full object-cover"
            />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Spotify aria-hidden className="size-3" />
            <span>{t("badge-playing")}</span>
          </div>
          <p className="truncate font-medium">{data.title}</p>
          <p className="truncate text-xs text-muted-foreground">{data.artist}</p>
        </div>
      </CardContent>
    </Card>
  );
}
