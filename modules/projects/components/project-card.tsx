import Image from "next/image";

import { Project } from "@/modules/projects/types/project.types";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";

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
        className="relative aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-balance">{name}</CardTitle>
        <CardDescription className="col-span-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        {technologies.map((tech) => (
          <Badge key={tech._id} variant={"outline"} className="h-auto">
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
      </CardFooter>
    </Card>
  );
}
