import { Suspense } from "react";

import { ProjectsGrid } from "@/modules/projects/projects-grid";
import { Heading } from "@/shared/components/ui/heading";

export function Projects() {
  return (
    <section className="flex w-full flex-col gap-6">
      <header className="flex flex-col gap-2">
        <div className="h-0.5 w-8 bg-foreground" aria-hidden />
        <Heading className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase" level={2}>
          Proyectos
        </Heading>
      </header>

      <Suspense fallback={<div>Cargando proyectos...</div>}>
        <ProjectsGrid />
      </Suspense>
    </section>
  );
}
