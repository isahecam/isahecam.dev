import PostList from "@/components/PostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandon Hernández | Blog",
  description:
    "These are some articles I've written about web development, life, and more.",
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
    title: "Brandon Hernández | Blog",
    description:
      "These are some articles I've written about web development, life, and more.",
    url: "https://isahecam.dev/blog",
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
    title: "Brandon Hernández | Blog",
    description:
      "These are some articles I've written about web development, life, and more.",
    images: ["/opengraph-image.png"],
    creator: "@isahecam",
  },
};

export default function Blog() {
  return (
    <main className='flex w-full motion-preset-slide-right flex-col motion-duration-2000'>
      <header className='flex flex-col gap-y-1'>
        <h1 className='font-mono text-2xl font-bold text-balance text-black md:text-4xl'>
          All posts I&apos;ve written 📝
        </h1>
        <p className='font-mono text-sm text-gray-700'>
          These are some articles I&apos;ve written about web development, life,
          and more.
        </p>
      </header>

      <section className='mt-16 space-y-4' id='posts'>
        <PostList />
      </section>
    </main>
  );
}
