import { Technology } from "@/types/technology";

function TechBadge({ icon: Icon, name }: Technology) {
  return (
    <span className='inline-flex max-w-max items-center gap-x-2 rounded-md border border-neutral-300 bg-amber-50 px-2 py-1 text-xs font-medium text-nowrap text-black'>
      <Icon className='size-4' />
      {name}
    </span>
  );
}
export { TechBadge };
