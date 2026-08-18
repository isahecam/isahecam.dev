import { getLocale } from "next-intl/server";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
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
} from "@/components/ui/timeline";
import { getExperience } from "@/features/experience/data/get-experience";

export async function Experience() {
  const locale = await getLocale();
  const items = await getExperience(locale);

  return (
    <section className="space-y-3">
      <hgroup className="flex flex-col gap-1.5">
        <Heading
          level={2}
          className="text-xs font-semibold tracking-wider text-foreground uppercase"
        >
          Experience
        </Heading>
      </hgroup>

      <Timeline activeIndex={1}>
        {items.map((exp) => (
          <TimelineItem key={exp._id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="flex flex-col gap-y-0.5 gap-x-2 lg:flex-row lg:items-center">
                  {exp.role}
                  <Separator orientation="vertical" />
                  {exp.company.name}
                </TimelineTitle>
                <TimelineTime>
                  {exp.period.startDate} &mdash; {exp.period.endDate ?? "Present"}
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
