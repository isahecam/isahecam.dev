import { getLocale, getTranslations } from "next-intl/server";

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

export async function Education() {
  const locale = await getLocale();
  const t = await getTranslations("home.education");
  const items = t.raw("items") as Array<{ degree: string }>;

  return (
    <section className="flex flex-col gap-6">
      <header className="flex w-full items-center justify-between gap-2">
        <Heading className="text-xs font-bold text-balance text-muted-foreground" level={2}>
          {t("heading")}
        </Heading>
      </header>

      <Timeline activeIndex={2}>
        {EDUCATIONS.map((edu, index) => (
          <TimelineItem key={edu.id}>
            <TimelineDot />
            <TimelineConnector />
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>{items[index]?.degree ?? edu.degree}</TimelineTitle>
                <TimelineTime>
                  {formatDateRange(edu.period.startDate, edu.period.endDate, {
                    locale,
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
