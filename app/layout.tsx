import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import "./globals.css";
import { Geist_Mono } from "next/font/google";

import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Footer } from "@/shared/components/layout/footer";
import { Header } from "@/shared/components/layout/header";
import { SiteJsonLd } from "@/shared/components/seo/site-json-ld";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("metadata");
  const titleDefault = t("title");
  const description = t("description");
  const ogImageAlt = t("og-image-alt");

  return {
    metadataBase: new URL(SITE_INFO.url),
    title: {
      template: `%s – ${SITE_INFO.name}`,
      default: titleDefault,
    },
    description,
    keywords: SITE_INFO.keywords,
    authors: [{ name: PORTFOLIO.displayName, url: SITE_INFO.url }],
    creator: PORTFOLIO.displayName,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description,
      images: [SITE_INFO.ogImage],
    },
    openGraph: {
      siteName: SITE_INFO.name,
      title: titleDefault,
      description,
      url: "/",
      type: "profile",
      locale: locale === "es" ? "es_MX" : "en_US",
      firstName: PORTFOLIO.firstName,
      lastName: PORTFOLIO.lastName,
      username: PORTFOLIO.nickname,
      gender: PORTFOLIO.gender,
      images: [
        {
          url: SITE_INFO.ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    icons: {
      icon: [
        { url: "https://assets.isahecam.dev/images/favicon.ico", sizes: "32x32" },
        {
          url: "https://assets.isahecam.dev/images/favicon.svg",
          sizes: "any",
          type: "image/svg+xml",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "https://assets.isahecam.dev/images/favicon-dark.svg",
          sizes: "any",
          type: "image/svg+xml",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      apple: {
        url: "https://assets.isahecam.dev/images/apple-touch-icon.png",
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
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning className={cn("antialiased", geistMono.className)}>
      <body className="flex min-h-screen flex-col">
        <SiteJsonLd />
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <TooltipProvider>
              <Header />
              {children}
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
