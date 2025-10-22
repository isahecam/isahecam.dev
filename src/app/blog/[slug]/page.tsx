import { getPostBySlug } from "@/services/BlogService";
import { formatDate } from "@/utils/format-date";
import { Calendar, Leaf } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const title = `${post.title} | Brandon Hernández`;
  const description = post.summary;
  const url = `https://isahecam.dev/blog/${slug}`;

  return {
    title,
    description,
    keywords: [
      "Brandon Hernández",
      "isahecam",
      "Portfolio",
      "IT Engineer",
      "Full Stack Developer",
      "Developer",
      "Web Development",
      post.category,
    ],
    authors: [{ name: "Brandon Hernández", url: "https://isahecam.dev" }],
    creator: "Brandon Hernández",
    openGraph: {
      title,
      description,
      url,
      siteName: "Brandon Hernández",
      locale: "en-US",
      type: "article",
      publishedTime: post.date,
      authors: ["Brandon Hernández"],
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
      title,
      description,
      images: ["/opengraph-image.png"],
      creator: "@isahecam",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className='flex w-full motion-preset-slide-right flex-col font-mono motion-duration-2000'>
      <article>
        <header className='flex flex-col space-y-2'>
          <h2 className='font-mono text-3xl font-medium tracking-tighter text-black md:text-4xl'>
            {post.title}
          </h2>
          <p className='text-sm text-balance text-gray-700'>{post.summary}</p>

          <div className='flex gap-x-2 border-b border-neutral-300 py-4'>
            <span className='inline-flex max-w-max items-center gap-x-2 rounded-md border border-gray-400 bg-yellow-50 px-2 py-1 text-xs font-medium text-nowrap text-black'>
              <Leaf size={14} />
              <span className='font-mono text-xs font-medium'>
                {post.category}
              </span>
            </span>

            <span className='inline-flex max-w-max items-center gap-x-2 rounded-md border border-gray-400 bg-yellow-50 px-2 py-1 text-xs font-medium text-nowrap text-black'>
              <Calendar size={14} />
              <time
                className='font-mono text-xs font-medium'
                title='Published'
                dateTime={formatDate(post.date, "YYYY-MM-DD")}>
                {formatDate(post.date, { date: "medium" }, "en-US")}
              </time>
            </span>
          </div>
        </header>

        <section
          className='prose-quoteless prose prose-sm mt-5 w-full max-w-full pb-5 text-pretty prose-neutral prose-headings:font-medium prose-h2:tracking-tight prose-a:decoration-dotted prose-a:decoration-[1.5px] prose-a:underline-offset-[6px] hover:prose-a:opacity-80 prose-pre:my-3 prose-ol:mb-3 prose-ul:mb-3'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
