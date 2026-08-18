import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { Project } from "@/features/projects/types";
import { getTechIcon } from "@/lib/tech-icons";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Readonly<Props>) {
  const { title, tagline, description, stack, liveUrl, coverImage, imageGallery } = project;

  const hasGalleryImages = imageGallery && imageGallery.length > 1;

  return (
    <Card className="w-full px-(--card-spacing) sm:flex-row-reverse sm:items-center-safe shadow-none ring-0 rounded-[18px] bg-linear-to-t from-primary/5 to-card dark:bg-card">
      {hasGalleryImages ? (
        <ProjectGallery images={imageGallery} />
      ) : (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg sm:h-[302.8px] sm:w-1/2">
          <Image
            fill
            src={coverImage.url}
            alt={coverImage.alt}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex w-full flex-col justify-center gap-(--card-spacing) sm:w-1/2">
        <CardHeader className="px-0">
          <CardTitle className="text-balance">
            {title} &mdash; {tagline}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 px-0">
          {stack.map((tech) => {
            const Icon = getTechIcon(tech.key);

            return (
              <Badge
                key={tech.key}
                className="h-auto bg-background! text-card-foreground  [&>svg]:size-4!"
              >
                <Icon />
                {tech.name}
              </Badge>
            );
          })}
        </CardContent>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default", className: "w-full", size: "lg" })}
          >
            Explorar {title}
            <ExternalLink />
          </a>
        )}
      </div>
    </Card>
  );
}
