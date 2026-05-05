import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

import { EXPERIENCES } from "@/modules/home/constants/experience.constants";
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

export function Experience() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          // experiencia
        </Heading>
      </header>

      <Timeline activeIndex={0}>
        {EXPERIENCES.map((exp) => (
          <TimelineItem key={exp.id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>
                  {exp.role} |{" "}
                  {exp.company.website && (
                    <Link
                      href={exp.company.website}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex gap-1 underline-offset-4 hover:text-accent hover:underline">
                      {exp.company.name} <ExternalLinkIcon aria-hidden className="size-3" />
                    </Link>
                  )}
                </TimelineTitle>
                <TimelineTime>{formatDateRange(exp.period.startDate, exp.period.endDate)}</TimelineTime>
                <TimelineDescription>{exp.description}</TimelineDescription>
              </TimelineHeader>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
