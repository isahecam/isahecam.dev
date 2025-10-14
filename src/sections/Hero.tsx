import SocialLink from "@/components/SocialLink";
import { SOCIAL_LINKS } from "@/data/social-links";
import Image from "next/image";

function Hero() {
  return (
    <header className='flex flex-col gap-y-8'>
      <div className='inline-flex items-center gap-x-4'>
        <Image
          src='/profile.png'
          alt='Brandon Hernández - Systems & IT engineer'
          width={100}
          height={100}
        />
        <div className='flex flex-col gap-y-1'>
          <h1 className='font-mono text-2xl font-bold text-black md:text-4xl'>
            Brandon Hernández
          </h1>
          <p className='font-mono text-sm text-gray-700'>
            Dev | Visionary | IT Engineer
          </p>
        </div>
      </div>

      <div className='space-y-3'>
        <h2 className='font-mono text-xl text-black'>Brandon Here! 👋</h2>
        <p className='font-mono text-sm text-pretty text-gray-700'>
          I&apos;m a{" "}
          <strong>
            Systems and Industrial Information Technology Engineer{" "}
          </strong>
          with over a year of experience as a{" "}
          <strong>full-stack developer</strong>. I&apos;m a passionate lifelong
          learner, driven by creativity and ambition to build meaningful web
          experiences and solutions.
        </p>
      </div>

      <nav aria-label='Social media links'>
        <ul className='flex flex-wrap items-center gap-x-6 gap-y-3 font-mono'>
          {SOCIAL_LINKS.map(link => (
            <li key={link.label} className='contents'>
              <SocialLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export { Hero };
