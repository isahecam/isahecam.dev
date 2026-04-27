import { MusicIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Spotify } from "@/shared/components/icons/spotify";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface Props {
  className?: string;
}

export function SpotifyEmptyCard({ className }: Props) {
  return (
    <Card className={cn("border-none shadow-none ring-0 hover:bg-muted", className)}>
      <CardHeader className="flex flex-row items-center justify-between border-b border-dashed">
        <CardTitle className="tracking-widest uppercase">Sin reproducción</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center gap-4">
        <div className="size-16 shrink-0 overflow-hidden bg-muted">
          <div className="flex size-full items-center justify-center">
            <MusicIcon className="size-5 text-muted-foreground" />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Spotify className="size-3" />
            <span>spotify · offline</span>
          </div>
          <p className="truncate font-medium text-muted-foreground">— silencio —</p>
          <p className="truncate text-xs text-muted-foreground">No hay nada sonando ahora</p>
        </div>
      </CardContent>
    </Card>
  );
}
