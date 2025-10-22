"use client";

import { NAV_LINKS } from "@/data/navigation";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label='Main navigation'>
      <ul className='flex w-full items-center justify-center gap-x-6 pt-12 font-mono'>
        {NAV_LINKS.map(({ id, to, label }) => (
          <li className='contents' key={id}>
            <Link
              className={cn(
                "text-gray-700 transition-colors duration-150 hover:text-gray-500",
                pathname === to && "pointer-events-none font-bold",
              )}
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
