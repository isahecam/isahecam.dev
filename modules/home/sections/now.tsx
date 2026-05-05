import { getTranslations } from "next-intl/server";

import { SpotifyPlayerCard } from "@/modules/home/components/spotify-player-card";
import { NOW_ITEMS } from "@/modules/home/constants/now.constants";
import { Heading } from "@/shared/components/typography/heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

export async function Now() {
  const t = await getTranslations("home.now");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
        {NOW_ITEMS.map((item, index) => (
          <Card key={item.id} className="border-none shadow-none ring-0 hover:bg-muted">
            <CardHeader>
              <CardTitle className="tracking-widest text-balance uppercase">
                {items[index]?.title ?? item.title}
              </CardTitle>
              <CardDescription>{items[index]?.description ?? item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}

        <SpotifyPlayerCard className="sm:col-span-2" />
      </div>
    </section>
  );
}
