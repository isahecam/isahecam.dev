import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

import { Crossfade } from "@/components/ui/crossfade";
import { Heading } from "@/components/ui/heading";
import { ProjectGridView } from "@/features/projects/components/project-grid-view";

export async function Projects() {
  const t = await getTranslations("projects");

  return (
    <section className="space-y-3">
      <hgroup className="flex flex-col gap-1.5">
        <Heading level={2} className="text-xs font-semibold text-foreground uppercase">
          {t("title")}
        </Heading>
      </hgroup>

      <Suspense>
        <Crossfade>
          <ProjectGridView />
        </Crossfade>
      </Suspense>
    </section>
  );
}
