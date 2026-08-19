import { ThemeProvider } from "@wrksz/themes/next";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Geist_Mono, Outfit } from "next/font/google";

import { routing } from "@/i18n/routing";

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
  const t = await getTranslations("metadata");

  const keywords = t.raw("keywords") as string[];

  return {
    title: {
      template: `%s – ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
    keywords: keywords,
    creator: "Brandon Hernández",
    publisher: "Brandon Hernández",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: "https://assets.isahecam.dev/images/ascii-art-hero-background.png",
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
