import { Notice } from "@/components/Notice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandon Hernández | Gallery",
  description:
    "These are some photos I've taken during my travels and adventures.",
  keywords: [
    "Brandon Hernández",
    "isahecam",
    "Portfolio",
    "IT Engineer",
    "Full Stack Developer",
    "Developer",
    "Photography",
    "Travel",
    "Gallery",
  ],
  authors: [{ name: "Brandon Hernández", url: "https://isahecam.dev" }],
  creator: "Brandon Hernández",
  openGraph: {
    title: "Brandon Hernández | Gallery",
    description:
      "These are some photos I've taken during my travels and adventures.",
    url: "https://isahecam.dev/gallery",
    siteName: "Brandon Hernández",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Brandon Hernández - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Hernández | Gallery",
    description:
      "These are some photos I've taken during my travels and adventures.",
    images: ["/opengraph-image.png"],
    creator: "@isahecam",
  },
};

export default function Blog() {
  return (
    <main className='flex w-full motion-preset-slide-right flex-col motion-duration-2000'>
      <header className='flex flex-col gap-y-1'>
        <h1 className='font-mono text-2xl font-bold text-balance text-black md:text-4xl'>
          Some beautiful photos I've taken 📸
        </h1>
        <p className='font-mono text-sm text-gray-700'>
          These are some photos I've taken during my travels and adventures.
        </p>
      </header>

      <section className='mt-16 space-y-4' id='posts'>
        <Notice />
      </section>
    </main>
  );
}
