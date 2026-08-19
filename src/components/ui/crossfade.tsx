import { ViewTransition, type ReactNode } from "react";

export function Crossfade({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ViewTransition enter="auto" default="none">
      {children}
    </ViewTransition>
  )
}
