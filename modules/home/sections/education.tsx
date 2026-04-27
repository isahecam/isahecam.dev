import { EDUCATIONS } from "@/modules/home/constants/education.constants";
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

export function Education() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          // educación
        </Heading>
      </header>

      <Timeline activeIndex={2}>
        {EDUCATIONS.map((edu) => (
          <TimelineItem key={edu.id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>{edu.degree}</TimelineTitle>
                <TimelineTime>{formatDateRange(edu.period.startDate, edu.period.endDate)}</TimelineTime>
                <TimelineDescription>{edu.institution.name}</TimelineDescription>
              </TimelineHeader>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
