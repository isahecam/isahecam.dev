import { useTranslations } from "next-intl";
import { Suspense } from "react";

import { ProjectsGrid } from "@/modules/projects/views/projects-grid";
import { DecoratorBar } from "@/shared/components/blocks/decorator-bar";
import { Heading } from "@/shared/components/ui/heading";

export function Projects() {
  const t = useTranslations("home.projects");

  return (
    <section className="flex w-full flex-col gap-6">
      <header className="flex flex-col gap-2">
        <DecoratorBar />
        <Heading className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <Suspense fallback={<div>Cargando proyectos...</div>}>
        <ProjectsGrid />
      </Suspense>
    </section>
  );
}
