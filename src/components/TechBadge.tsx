import { Technology } from "@/types/technology";

function TechBadge({ icon: Icon, name }: Technology) {
  return (
    <span className='inline-flex max-w-max items-center gap-x-2 rounded-md border border-gray-400 bg-yellow-50 px-2 py-1 font-mono text-xs font-medium text-nowrap text-black'>
      <Icon className='size-4' />
      {name}
    </span>
  );
}
export { TechBadge };
