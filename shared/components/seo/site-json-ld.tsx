import { getTranslations } from "next-intl/server";

import { SITE_INFO } from "@/config/site";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";
import { PUBLIC_SOCIAL_SAME_AS } from "@/shared/constants/public-social-urls.constants";

export async function SiteJsonLd() {
  const t = await getTranslations("metadata");
  const base = SITE_INFO.url.replace(/\/$/, "");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: PORTFOLIO.displayName,
        description: t("description"),
        inLanguage: ["es", "en"],
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: PORTFOLIO.displayName,
        givenName: PORTFOLIO.firstName,
        familyName: PORTFOLIO.lastName,
        alternateName: PORTFOLIO.nickname,
        url: base,
        image: PORTFOLIO.avatar,
        jobTitle: PORTFOLIO.jobTitle,
        description: t("description"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Puebla",
          addressCountry: "MX",
        },
        sameAs: [...PUBLIC_SOCIAL_SAME_AS],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
