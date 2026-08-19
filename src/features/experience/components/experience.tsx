import { getLocale, getTranslations } from "next-intl/server";

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
import { getMonthYearFormatter } from "@/lib/formatters";
import { formatPeriod } from "@/utils/format-date";

export async function Experience() {
  const locale = await getLocale();
  const t = await getTranslations("experience");
  const items = await getExperience(locale);

  const monthYearFomatter = getMonthYearFormatter(locale);

  return (
    <section className="space-y-3">
      <hgroup className="flex flex-col gap-1.5">
        <Heading level={2} className="text-xs font-semibold text-foreground uppercase">
          {t("title")}
        </Heading>
      </hgroup>

      <Timeline activeIndex={1}>
        {items.map((exp) => (
          <TimelineItem key={exp._id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="flex flex-col gap-x-2 gap-y-0.5 lg:flex-row lg:items-center">
                  {exp.role}
                  <Separator orientation="vertical" />
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
    </section>
  );
}
