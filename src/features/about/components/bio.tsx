import { getLocale } from "next-intl/server";
import { PortableText } from "next-sanity";

import { Heading } from "@/components/ui/heading";
import { getBio } from "@/features/about/data/get-bio";

export async function Bio() {
  const locale = await getLocale();
  const bio = await getBio(locale);

  return (
    <section className="py-4">
      <hgroup className="flex flex-col gap-3">
        <Heading
          level={2}
          className="w-full text-2xl leading-[1.15] font-medium tracking-[-0.03em]"
        >
          <span className="inline-block">{bio.headline}</span>
        </Heading>
        <PortableText value={bio.summary} />
      </hgroup>
    </section>
  );
}
