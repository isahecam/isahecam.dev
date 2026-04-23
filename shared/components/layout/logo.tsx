import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground dark:text-muted-foreground">
      isahecam
      <span className="text-accent dark:text-white">.dev</span>
    </Link>
  );
}
