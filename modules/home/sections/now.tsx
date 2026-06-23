import { getTranslations } from "next-intl/server";

import { NowItem } from "@/modules/home/types/now.types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Heading } from "@/shared/components/ui/heading";

export async function Now() {
  const t = await getTranslations("home.now");
  const items = t.raw("items") as NowItem[];

  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="border-none shadow-none ring-0 hover:bg-muted">
            <CardHeader>
              <CardTitle className="tracking-widest text-balance uppercase">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}

        {/* <Suspense fallback={<SpotifyEmptyCard className="sm:col-span-2" />}>
          <SpotifyPlayerCard className="sm:col-span-2" />
        </Suspense> */}
      </div>
    </section>
  );
}
