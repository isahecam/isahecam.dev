import Image from "next/image";

import { Project } from "@/modules/projects/types/project.types";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, description, technologies } = project;

  return (
    <Card className="overflow-hidden border-none shadow-none ring-0">
      <Image
        width={1920}
        height={1440}
        src={project.cover}
        alt={project.name}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-balance">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {technologies.length > 0 &&
          technologies.map((tech) => (
            <Badge key={tech._id} variant={"ghost"} className="h-auto">
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
    </Card>
  );
}
