import { Logo } from "@/shared/components/layout/logo";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";

export function Header() {
  return (
    <header className="fixed z-20 w-full border-b border-primary backdrop-blur-xl dark:border-primary-foreground">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between p-5 lg:px-0">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  );
}
