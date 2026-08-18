import { ArrowUpRightIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
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

export async function ProjectCard({ project }: Readonly<Props>) {
  const t = await getTranslations("projects.project-card");

  const { title, tagline, description, stack, liveUrl, coverImage, imageGallery } = project;

  const hasGalleryImages = imageGallery && imageGallery.length > 1;

  return (
    <Card className="w-full px-(--card-spacing) flex-col lg:flex-row-reverse lg:items-center-safe shadow-none ring-0 rounded-[18px] bg-linear-to-t from-primary/5 to-card dark:bg-card">
      {hasGalleryImages ? (
        <ProjectGallery images={imageGallery} />
      ) : (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:h-[302.8px]">
          <Image
            fill
            src={coverImage.url}
            alt={coverImage.alt}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex w-full flex-col justify-center gap-(--card-spacing) lg:w-1/2">
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
            title={t("cta", { title })}
            className={buttonVariants({
              variant: "default",
              className: "w-full group",
              size: "lg",
            })}
          >
            {t("cta", { title })}
            <ArrowUpRightIcon className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5" />
          </a>
        )}
      </div>
    </Card>
  );
}
