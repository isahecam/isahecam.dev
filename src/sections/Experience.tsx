import { MY_EXPERIENCE } from "@/data/experience";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Experience() {
  return (
    <section className='mt-16' id='experience'>
      <h2 className='mb-8 font-mono text-xl font-bold text-black'>
        Experience
      </h2>

      <div className='flex flex-col gap-y-4'>
        <ol className='relative space-y-6 border-s-2 border-gray-700'>
          {MY_EXPERIENCE.map((experience, index) => (
            <li className='ms-5' key={index}>
              <div className='absolute inset-0 -start-[7px] mt-2 size-3 rounded-full bg-gray-800 outline outline-yellow-50' />
              <time className='mb-2 font-mono text-xs leading-none font-normal text-gray-700'>
                {experience.startDate} - {experience.endDate}
              </time>
              <div className='mt-2 flex flex-col space-y-0.5 font-mono'>
                <h3 className='text-lg font-semibold tracking-tight text-black'>
                  {experience.role}
                </h3>
                <Link
                  href={experience.websiteCompany}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex w-max items-center text-sm font-medium text-pretty text-gray-900 underline-offset-4 transition-colors duration-150 hover:text-gray-700 hover:underline'>
                  <span>{experience.company}</span>
                  <ArrowUpRight
                    className='ml-1 duration-150 group-hover:translate-x-[1.5px]'
                    size={12}
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
              <p className='mt-3 font-mono text-xs text-pretty text-gray-700 sm:text-sm'>
                {experience.aboutRole}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export { Experience };
