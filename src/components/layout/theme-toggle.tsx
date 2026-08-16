"use client";

import { useTheme } from "@wrksz/themes/client";
import { Monitor, Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme<Theme>();

  return (
    <ToggleGroup
      value={[theme ?? "system"]}
      onValueChange={([value]) => setTheme(value as Theme)}
      className="rounded-[22px] bg-muted p-1"
      size="sm"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light mode"
        className={cn("aria-pressed:bg-background", theme === "light" && "bg-background")}
      >
        <Sun className="size-4" />
        Light
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Dark mode"
        className={cn("aria-pressed:dark:bg-background", theme === "dark" && "bg-background")}
      >
        <Moon className="size-4" />
        Dark
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="System theme"
        className={cn("aria-pressed:bg-background", theme === "system" && "bg-background")}
      >
        <Monitor className="size-4" />
        System
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
