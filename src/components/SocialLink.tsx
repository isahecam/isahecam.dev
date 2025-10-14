import { SocialLink as Props } from "@/types/social-link";
import Link from "next/link";

export default function SocialLink({ to, label, icon: Icon }: Props) {
  return (
    <Link
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      className='group inline-flex max-w-max items-center gap-x-2 text-xs font-bold text-gray-700 underline-offset-4 transition-colors duration-150 hover:text-gray-600 hover:underline md:text-sm'>
      <Icon className='size-4 transition-transform duration-150 group-hover:scale-110' />
      {label}
    </Link>
  );
}
