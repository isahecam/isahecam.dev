import PostList from "@/components/PostList";

export default function Blog() {
  return (
    <main className='flex w-full motion-preset-slide-right flex-col motion-duration-2000'>
      <header className='flex flex-col gap-y-1'>
        <h1 className='font-mono text-2xl font-bold text-balance text-black md:text-4xl'>
          All posts I've written 📝
        </h1>
        <p className='font-mono text-sm text-gray-700'>
          These are some articles I've written about web development, life, and
          more.
        </p>
      </header>

      <section className='mt-16 space-y-4' id='posts'>
        <PostList />
      </section>
    </main>
  );
}
