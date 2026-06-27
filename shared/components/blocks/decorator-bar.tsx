"use client";

import clsx from "clsx";
import { motion } from "motion/react";

interface DecoratorBarProps {
  className?: string;
}

export function DecoratorBar({ className }: DecoratorBarProps) {
  return (
    <motion.div
      className={clsx("h-0.5 w-8 origin-left bg-foreground", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-hidden
    />
  );
}
