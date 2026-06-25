import Image from "next/image";

import { Project } from "@/modules/projects/types/project.types";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, description, technologies } = project;

  return (
    <Card className="items-center overflow-hidden py-0 sm:flex-row sm:gap-0">
      <CardContent className="h-56 w-full grow px-0">
        <Image width={1920} height={1440} src={project.cover} alt={project.name} className="size-full object-cover" />
      </CardContent>
      <div className="w-full sm:min-w-[50%]">
        <CardHeader className="pt-4">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="mb-4">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="gap-3 py-4">
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
      </div>
    </Card>
  );
}
