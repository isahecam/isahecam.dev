import type { Metadata, Viewport } from "next";
import { Locale, NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { locale as rootLocale } from "next/root-params";

import { routing } from "@/i18n/routing";
import { Footer } from "@/shared/components/layout/footer";
import { Header } from "@/shared/components/layout/header";
import { ThemeProvider } from "@/shared/components/providers/theme-provider";
import { TooltipProvider } from "@/shared/components/ui/tooltip";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await rootLocale()) as Locale;
  const t = await getTranslations("metadata");

  const keywords = t.raw("keywords") as string[];

  const canonicalPath = locale === "es" ? "/" : `/${locale}`;

  return {
    metadataBase: new URL("https://isahecam.dev"),
    title: {
      template: `%s – ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
    keywords: keywords,
    authors: [{ name: "Brandon Hernández", url: "https://isahecam.dev" }],
    creator: "Brandon Hernández",
    publisher: "Brandon Hernández",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: "https://assets.isahecam.dev/images/ascii-art-hero-background.png",
    },
    openGraph: {
      siteName: "Brandon Hernández",
      title: t("title"),
      description: t("description"),
      url: locale === "es" ? "https://isahecam.dev" : `https://isahecam.dev/${locale}`,
      type: "profile",
      locale: locale === "es" ? "es_MX" : "en_US",
      firstName: "Brandon",
      lastName: "Hernández",
      username: "isahecam",
      gender: "male",
      images: [
        {
          url: "https://assets.isahecam.dev/images/ascii-art-hero-background.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    icons: {
      icon: [
        {
          url: "https://assets.isahecam.dev/images/favicon.ico",
          sizes: "32x32",
        },
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
    { media: "(prefers-color-scheme: light)", color: "#e7e4e7" },
    { media: "(prefers-color-scheme: dark)", color: "#1d161e" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} relative flex min-h-screen flex-col font-sans`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
