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
    <Card className="w-full px-(--card-spacing) sm:flex-row">
      <div className="relative h-48 w-full overflow-hidden rounded-lg sm:h-auto sm:min-h-56 sm:w-1/2">
        <Image
          fill
          src={project.cover}
          alt={project.name}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-(--card-spacing) sm:w-1/2">
        <CardHeader className="px-0">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 px-0">
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
