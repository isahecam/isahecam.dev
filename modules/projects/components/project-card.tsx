import { Project } from "@/modules/projects/types/project.types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, description } = project;

  return (
    <Card className="overflow-hidden border-none shadow-none ring-0">
      <CardHeader>
        <CardTitle className="text-balance">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
