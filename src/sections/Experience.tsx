import { MY_EXPERIENCE } from "@/data/experience";

function Experience() {
  return (
    <section className='mt-16' id='experience'>
      <h2 className='mb-8 text-xl font-bold text-black'>Experience</h2>

      <div className='flex flex-col gap-y-4'>
        <ol className='relative space-y-6 border-s-2 border-[#4F4F4F]'>
          {MY_EXPERIENCE.map((experience, index) => (
            <li className='experience-item ms-5 mt-1' key={index}>
              <div className='absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border border-[#4F4F4F] bg-[#4F4F4F]' />
              <time className='mb-2 font-mono text-xs leading-none font-normal text-neutral-600'>
                {experience.startDate} - {experience.endDate}
              </time>
              <div className='mt-2 flex flex-col space-y-0.5 font-mono'>
                <h3 className='text-lg font-semibold tracking-tight text-gray-900'>
                  {experience.role}
                </h3>
                <a
                  href={experience.companyUrl}
                  target='_blank'
                  rel='noopener'
                  className='group flex w-max items-center text-sm text-pretty text-neutral-800 transition-colors duration-150 hover:text-black'>
                  <span>{experience.company}</span>
                  {/* <ArrowUpRight
                    className='ml-1 duration-150 group-hover:translate-x-[1.5px]'
                    size={12}
                    stroke-width={1.5}
                  /> */}
                </a>
              </div>
              <p className='mt-3 font-mono text-xs text-pretty text-black/70'>
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
