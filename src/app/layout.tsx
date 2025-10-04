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
  title: "Brandon Hernández",
  description:
    "Systems & IT engineer, passionate about learning and coding, driven by creativity and ambition to build meaningful web experiences and solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen w-full antialiased`}>
        <div
          className='absolute inset-0 -z-10'
          style={{
            background: `linear-gradient(225deg, #B3E5FC 0%, #E0F2F1 25%, #F0F4C3 50%, #FFF8E1 75%, #FFECB3 100%)`,
          }}
        />

        <Navbar />
        <div className='mx-auto max-w-3xl flex-1'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
