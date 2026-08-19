"use client";

import { useTheme } from "@wrksz/themes/client";
import { Moon, Sun } from "lucide-react";

import { type Theme } from "@/components/layout/theme-toggle-desktop";
import { Toggle } from "@/components/ui/toggle";

interface Props extends React.ComponentProps<typeof Toggle> {}

export function ThemeToggleMobile({ ...props }: Readonly<Props>) {
  const { resolvedTheme, setTheme } = useTheme<Theme>();
  const isDark = resolvedTheme === "dark";

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={isDark}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
      {...props}
      className="sm:hidden"
    >
      {isDark ? <Moon /> : <Sun />}
    </Toggle>
  );
}
