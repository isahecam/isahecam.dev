import { SocialLink as Props } from "@/types/social-link";
import Link from "next/link";

export default function SocialLink({ to, label, icon: Icon }: Props) {
  return (
    <Link
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex max-w-max items-center gap-x-2 text-xs font-bold text-black/70 underline-offset-4 hover:underline md:text-sm'>
      <Icon className='size-4' />
      {label}
    </Link>
  );
}
