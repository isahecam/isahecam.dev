import { ThemeProvider } from "@wrksz/themes/next";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Geist_Mono, Outfit } from "next/font/google";
import { WebSite, WithContext } from "schema-dts";

import { JSON_LD_ID, personJsonLd } from "@/config/json-ld";
import { SITE_INFO, SITE_URL } from "@/config/site";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { JsonLdScript } from "@/lib/json-ld";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": JSON_LD_ID.website,
    name: SITE_INFO.displayName,
    url: SITE_INFO.url,
    author: personJsonLd,
  };
}

const OG_LOCALES: Record<(typeof routing.locales)[number], string> = {
  es: "es_MX",
  en: "en_US",
};

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("metadata");

  const keywords = t.raw("keywords") as string[];
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords,
    authors: [{ name: SITE_INFO.displayName, url: SITE_INFO.url }],
    creator: SITE_INFO.displayName,
    publisher: SITE_INFO.displayName,
    alternates: {
      canonical: getPathname({ href: "/", locale }),
      languages: {
        ...Object.fromEntries(
          routing.locales.map((loc) => [loc, getPathname({ href: "/", locale: loc })]),
        ),
        "x-default": getPathname({ href: "/", locale: routing.defaultLocale }),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url: getPathname({ href: "/", locale }),
      siteName: SITE_INFO.displayName,
      type: "website",
      locale: OG_LOCALES[locale],
      alternateLocale: routing.locales
        .filter((loc) => loc !== locale)
        .map((loc) => OG_LOCALES[loc]),
      images: [
        {
          url: SITE_INFO.images.og.url,
          width: SITE_INFO.images.og.width,
          height: SITE_INFO.images.og.height,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: SITE_INFO.images.og.url,
    },
    icons: {
      icon: [
        {
          url: SITE_INFO.favicons.ico,
          sizes: "32x32",
        },
        {
          url: SITE_INFO.favicons.light,
          sizes: "any",
          type: "image/svg+xml",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: SITE_INFO.favicons.dark,
          sizes: "any",
          type: "image/svg+xml",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      apple: {
        url: SITE_INFO.favicons.apple,
        type: "image/png",
        sizes: "180x180",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c96442" },
    { media: "(prefers-color-scheme: dark)", color: "#e9e6dc" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <JsonLdScript data={getWebSiteJsonLd()} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storage="localStorage"
          disableTransitionOnChange={true}
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
