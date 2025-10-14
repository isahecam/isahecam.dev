import { Project } from "@/types/project";
import { StatusBadge } from "./StatusBadge";
import { TechBadge } from "./TechBadge";

export default function ProjectCard({
  logoUrl,
  name,
  status,
  description,
  techStack,
}: Project) {
  return (
    <article className='flex flex-col gap-y-2 rounded-md border border-gray-700 p-4 shadow-sm'>
      <header className='flex w-full items-center justify-between'>
        <div className='inline-flex items-center gap-x-3'>
          <img
            src='https://raw.githubusercontent.com/pheralb/project-hackathon/main/public/images/phck.png'
            alt='Membo logo'
            className='size-6'
          />
          <h3 className='font-mono font-bold text-pretty text-gray-900'>
            {name}
          </h3>
        </div>

        <StatusBadge status={status} />
      </header>

      <p className='font-mono text-xs text-balance text-gray-700'>
        {description}
      </p>

      <div className='no-scrollbar flex items-center gap-x-2 overflow-x-auto'>
        {techStack.map(({ name, icon }) => (
          <TechBadge key={name} name={name} icon={icon} />
        ))}
      </div>
    </article>
  );
}
