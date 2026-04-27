import { SpotifyPlayerCard } from "@/modules/home/components/spotify-player-card";
import { NOW_ITEMS } from "@/modules/home/constants/now.constants";
import { Heading } from "@/shared/components/typography/heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

export function Now() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs text-nowrap text-primary" level={2}>
          Now
        </Heading>
        <div className="h-0.5 flex-1 border-b border-dashed border-primary" />
      </header>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
        {NOW_ITEMS.map((item) => (
          <Card key={item.id} className="border-none shadow-none ring-0 hover:bg-muted">
            <CardHeader>
              <CardTitle className="tracking-widest text-balance uppercase">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}

        <SpotifyPlayerCard className="sm:col-span-2" />
      </div>
    </section>
  );
}
