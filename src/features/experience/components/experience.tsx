import { useTranslations } from "next-intl";
import { Suspense } from "react";

import { Crossfade } from "@/components/ui/crossfade";
import { Heading } from "@/components/ui/heading";
import { ExperienceTimeline } from "@/features/experience/components/experience-timeline";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section className="space-y-3">
      <hgroup className="flex flex-col gap-1.5">
        <Heading level={2} className="text-xs font-semibold text-foreground uppercase">
          {t("title")}
        </Heading>
      </hgroup>

      <Suspense>
        <Crossfade>
          <ExperienceTimeline />
        </Crossfade>
      </Suspense>
    </section>
  );
}
