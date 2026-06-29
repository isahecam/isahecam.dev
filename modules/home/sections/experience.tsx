import { getLocale, getTranslations } from "next-intl/server";

import { getExperiences } from "@/modules/home/data/get-experiences";
import { DecoratorBar } from "@/shared/components/blocks/decorator-bar";
import { Heading } from "@/shared/components/ui/heading";
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
  const items = await getExperiences(locale);

  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <DecoratorBar />
        <Heading className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <Timeline activeIndex={1}>
        {items.map((exp) => (
          <TimelineItem key={exp._id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="flex flex-wrap items-center gap-2">
                  {exp.role}
                  <span className="text-muted-foreground">|</span>
                  {exp.company.name}
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
