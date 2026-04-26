import { Logo } from "@/shared/components/layout/logo";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";

export function Header() {
  return (
    <header className="fixed w-full border-b border-primary px-5 py-2.5 backdrop-blur-xl dark:border-primary-foreground">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  );
}
