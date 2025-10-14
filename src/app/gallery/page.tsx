import { Notice } from "@/components/Notice";

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
