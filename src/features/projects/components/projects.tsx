import { Heading } from "@/components/ui/heading";
import { ProjectGridView } from "@/features/projects/components/project-grid-view";

export function Projects() {
  return (
    <section className="space-y-3">
      <hgroup className="flex flex-col gap-1.5">
        <Heading
          level={2}
          className="text-xs font-semibold tracking-wider text-foreground uppercase"
        >
          Projects
        </Heading>
      </hgroup>

      <ProjectGridView />
    </section>
  );
}
