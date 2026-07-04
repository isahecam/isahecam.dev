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
    <Card className="relative w-full gap-0 py-0 sm:flex-row">
      <Image
        width={1920}
        height={1440}
        src={project.cover}
        alt={project.name}
        className="z-20 w-full grow object-cover sm:w-[50%]"
      />
      <div className="flex w-full flex-col justify-center gap-(--card-spacing) py-(--card-spacing)">
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
