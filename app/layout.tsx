import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Hernández - IT Engineer and Full Stack Developer",
  description:
    "Ingenerio en Sistemas y Tecnologías de la Información Industrial con más de 1 año de experiencia en desarrollo web. Apasionado por la tecnología, explorador y estusiasta de las nuevas tendencias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("antialiased", "font-mono", geistMono.className)}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
