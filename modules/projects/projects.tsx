import { Suspense } from "react";

import { ProjectsGrid } from "@/modules/projects/projects-grid";
import { Heading } from "@/shared/components/ui/heading";

export function Projects() {
  return (
    <section className="flex w-full flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs tracking-widest text-muted-foreground uppercase" level={2}>
          Proyectos
        </Heading>
      </header>

      <Suspense fallback={<div>Cargando proyectos...</div>}>
        <ProjectsGrid />
      </Suspense>
    </section>
  );
}
