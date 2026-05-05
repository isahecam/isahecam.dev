import { getTranslations } from "next-intl/server";

import { MetaText } from "@/shared/components/layout/meta-text";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/card";
import { Status, StatusIndicator, StatusLabel } from "@/shared/components/ui/status";
import { NativeBadge } from "@/shared/components/uitripled/native-badge-carbon";
import { Technologies } from "@/shared/constants/technologies.constants";
import { Project } from "@/shared/types/project.types";

export async function ProjectCard({ id, title, description, technologies, year, status }: Project) {
  const t = await getTranslations("home.projects");

  return (
    <Card className="border-none shadow-none ring-0">
      <CardHeader>
        <div className="flex items-center gap-2">
          <NativeBadge variant="glass" size="sm">
            {id}
          </NativeBadge>

          <Status variant="warning">
            <StatusIndicator />
            <StatusLabel>{t(`status.${status}`)}</StatusLabel>
          </Status>

          <MetaText className="ml-auto">{year}</MetaText>
        </div>
        <CardTitle className="text-balance">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {technologies.map((tech) => {
          const technology = Technologies.get(tech);
          if (!technology) return null;
          const Isotype = technology.isotype;

          return (
            <Badge variant="outline" key={tech}>
              <Isotype aria-hidden className="mr-1 h-6 w-auto" />
              {technology.name}
            </Badge>
          );
        })}
      </CardContent>
    </Card>
  );
}
