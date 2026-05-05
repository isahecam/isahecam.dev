import { getTranslations } from "next-intl/server";

import { ProjectCard } from "@/modules/home/components/project-card";
import { Heading } from "@/shared/components/typography/heading";
import { PROJECTS } from "@/shared/constants/projects.constants";

export async function Projects() {
  const t = await getTranslations("home.projects");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          {t("heading")} <span className="tracking-widest">[{PROJECTS.length}]</span>
        </Heading>
      </header>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            title={items[index]?.title ?? project.title}
            description={items[index]?.description ?? project.description}
          />
        ))}
      </div>
    </section>
  );
}
