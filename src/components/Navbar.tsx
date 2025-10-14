import { NAV_LINKS } from "@/data/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav aria-label='Main navigation'>
      <ul className='flex w-full items-center justify-center gap-x-6 pt-12 font-mono'>
        {NAV_LINKS.map(({ id, to, label }) => (
          <li className='contents' key={id}>
            <Link
              className='text-gray-700 underline-offset-4 transition-colors duration-150 hover:text-gray-500 hover:underline'
              key={id}
              href={to}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
