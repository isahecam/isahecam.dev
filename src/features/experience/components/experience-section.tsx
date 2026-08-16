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

export function ExperienceSection() {
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
        <TimelineItem>
          <TimelineDot />
          <TimelineConnector />
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle className="flex flex-wrap items-center gap-2">
                Position
                <Separator orientation="vertical" />
                Company
              </TimelineTitle>
              <TimelineTime>Start &mdash; End</TimelineTime>
              <TimelineDescription>Job description goes here.</TimelineDescription>
            </TimelineHeader>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
