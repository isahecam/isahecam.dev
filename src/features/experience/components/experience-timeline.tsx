import { getLocale, getTranslations } from "next-intl/server";

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
import { getMonthYearFormatter } from "@/lib/formatters";
import { formatPeriod } from "@/utils/format-date";

export async function ExperienceTimeline() {
  const locale = await getLocale();
  const t = await getTranslations("experience");

  const items = await getExperience(locale);

  const monthYearFomatter = getMonthYearFormatter(locale);

  return (
    <Timeline activeIndex={1}>
      {items.map((exp) => (
        <TimelineItem key={exp._id}>
          <TimelineDot className="mt-px" />
          <TimelineConnector />
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle className="leading-[1.15] text-pretty">
                {exp.role}
                &nbsp;&mdash;&nbsp;
                {exp.company.name}
              </TimelineTitle>
              <TimelineTime>
                {formatPeriod(
                  monthYearFomatter,
                  exp.period.startDate,
                  exp.period.endDate,
                  t("present"),
                )}
              </TimelineTime>
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineHeader>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
