import { formatDate } from "@/utils/format-date";
import { Post } from "content-collections";
import { Leaf, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PostCard({
  title,
  summary,
  date,
  category,
  _meta,
}: Pick<Post, "title" | "summary" | "date" | "category" | "_meta">) {
  return (
    <article className='w-full rounded-md border border-gray-700 p-4'>
      <header className='mb-3 flex flex-col space-y-1'>
        <a
          href={`/blog/${_meta.path}`}
          className='group flex items-center space-x-1 font-medium text-gray-900 underline-offset-4 transition-colors duration-150 hover:text-gray-700 hover:underline'>
          <h3 className='font-mono font-bold'>{title}</h3>
          <ChevronRight
            size={14}
            className='duration-150 group-hover:translate-x-[1.5px]'
          />
        </a>
        <p className='font-mono text-sm text-pretty text-gray-700'>{summary}</p>
      </header>
      <div className='flex items-center justify-between'>
        <div className='flex gap-x-2'>
          <span className='inline-flex max-w-max items-center gap-x-2 rounded-md border border-gray-400 bg-yellow-50 px-2 py-1 text-xs font-medium text-nowrap text-black'>
            <Leaf size={14} />
            <span className='font-mono text-xs font-medium'>{category}</span>
          </span>
          <span className='inline-flex max-w-max items-center gap-x-2 rounded-md border border-gray-400 bg-yellow-50 px-2 py-1 text-xs font-medium text-nowrap text-black'>
            <Calendar size={14} />
            <time
              className='font-mono text-xs font-medium'
              title='Published'
              dateTime={date.toISOString()}>
              {formatDate(date, { date: "medium" }, "en-US")}
            </time>
          </span>
        </div>

        <Link
          href={`/blog/${_meta.path}`}
          className='group flex items-center justify-center space-x-1 text-sm tracking-tight text-gray-900 duration-150 hover:text-gray-700'>
          <span className='font-mono text-sm'>Read more</span>
          <ChevronRight
            size={14}
            className='duration-150 group-hover:translate-x-[1.5px]'
          />
        </Link>
      </div>
    </article>
  );
}
