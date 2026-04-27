import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";

import { META_THEME_COLORS, SITE_INFO } from "@/config/site";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Footer } from "@/shared/components/layout/footer";
import { Header } from "@/shared/components/layout/header";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { ME } from "@/shared/constants/portfolio.constants";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${ME.displayName} – ${ME.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: ME.nickname,
      url: SITE_INFO.url,
    },
  ],
  creator: ME.nickname,
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    locale: "en_US",
    firstName: ME.firstName,
    lastName: ME.lastName,
    username: ME.nickname,
    gender: ME.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: X_HANDLE,
  //   creator: X_HANDLE,
  //   images: [SITE_INFO.ogImage],
  // },
  icons: {
    icon: [
      {
        url: "https://assets.chanhdai.com/images/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "https://assets.chanhdai.com/images/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://assets.chanhdai.com/images/favicon-dark.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "https://assets.chanhdai.com/images/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={cn("antialiased", "font-mono", geistMono.className)}>
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
