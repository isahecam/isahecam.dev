import { getLocale, getTranslations } from "next-intl/server";

import type { Education } from "@/modules/home/types/education.types";
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

export async function Education() {
  const locale = await getLocale();
  const t = await getTranslations("home.education");
  const items = t.raw("items") as Education[];

  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <Timeline activeIndex={2}>
        {items.map((edu) => (
          <TimelineItem key={edu.id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>{edu.degree}</TimelineTitle>
                <TimelineTime>
                  {formatDateRange(edu.period.startDate, edu.period.endDate, {
                    locale,
                    month: "long",
                    presentLabel: t("present"),
                  })}
                </TimelineTime>
                <TimelineDescription>{edu.institution.name}</TimelineDescription>
              </TimelineHeader>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
