import { ExternalLinkIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import type { Experience } from "@/modules/home/types/experience.types";
import { Heading } from "@/shared/components/typography/heading";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/shared/components/ui/timeline";
import { formatDateRange } from "@/shared/utils";

export async function Experience() {
  const locale = await getLocale();
  const t = await getTranslations("home.experience");
  const items = t.raw("items") as Experience[];

  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <Timeline activeIndex={0}>
        {items.map((exp) => (
          <TimelineItem key={exp.id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>
                  {exp.role} |{" "}
                  {exp.company.website && (
                    <a
                      href={exp.company.website}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex gap-1 underline-offset-4 hover:text-accent hover:underline">
                      {exp.company.name} <ExternalLinkIcon aria-hidden className="size-3" />
                    </a>
                  )}
                </TimelineTitle>
                <TimelineTime>
                  {formatDateRange(exp.period.startDate, exp.period.endDate, {
                    locale,
                    month: "long",
                    presentLabel: t("present"),
                  })}
                </TimelineTime>
                <TimelineDescription>{exp.description}</TimelineDescription>
              </TimelineHeader>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
