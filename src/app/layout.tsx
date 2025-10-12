import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Hernández | IT Engineer",
  description:
    "Systems and Industrial Information Technologies Engineer, passionate about learning and coding, driven by creativity and ambition to build meaningful web experiences and solutions.",
  keywords: [
    "Brandon Hernández",
    "isahecam",
    "Portfolio",
    "IT Engineer",
    "Full Stack Developer",
    "Developer",
    "Web Development",
  ],
  authors: [{ name: "Brandon Hernández", url: "https://isahecam.dev" }],
  creator: "Brandon Hernández",
  openGraph: {
    title: "Brandon Hernández | IT Engineer",
    description:
      "Systems and Industrial Information Technologies Engineer, passionate about learning and coding, driven by creativity and ambition to build meaningful web experiences and solutions.",
    url: "https://isahecam.dev",
    siteName: "Brandon Hernández | IT Engineer",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative flex min-h-screen w-full flex-col antialiased`}>
        <div
          className='absolute inset-0 -z-10'
          style={{
            background: `linear-gradient(225deg, #B3E5FC 0%, #E0F2F1 25%, #F0F4C3 50%, #FFF8E1 75%, #FFECB3 100%)`,
          }}
        />

        <Navbar />
        <div className='mx-auto max-w-3xl flex-1 px-6 py-10'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
