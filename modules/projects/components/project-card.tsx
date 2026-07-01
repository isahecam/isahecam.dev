import Image from "next/image";

import { Project } from "@/modules/projects/types/project.types";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Readonly<Props>) {
  const { name, description, technologies } = project;

  return (
    <Card className="items-center overflow-hidden py-0 sm:flex-row sm:gap-0">
      <Image
        width={1920}
        height={1440}
        src={project.cover}
        alt={project.name}
        className="size-full h-56 w-full grow object-cover sm:rounded-[min(var(--radius-4xl),24px)]"
      />
      <div className="flex w-full flex-col gap-4 pb-5 sm:min-w-[50%] sm:pb-0">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech._id} variant="secondary" className="h-auto">
              <Image
                width={180}
                height={180}
                src={tech.icon}
                alt={tech.name}
                fetchPriority="high"
                priority
                decoding="async"
                className="size-5"
              />
              {tech.name}
            </Badge>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}
