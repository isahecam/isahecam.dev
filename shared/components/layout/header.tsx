import { Logo } from "@/shared/components/layout/logo";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";

export function Header() {
  return (
    <header className="fixed flex h-11.5 w-full items-center justify-between border-b border-accent px-5 py-2.5 backdrop-blur-sm">
      <Logo />
      <ThemeToggle />
    </header>
  );
}
