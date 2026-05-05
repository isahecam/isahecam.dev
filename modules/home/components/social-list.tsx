"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { SOCIAL_LINKS } from "@/modules/home/constants/social.constants";
import { Background } from "@/shared/components/layout/background";

export function SocialList() {
  const t = useTranslations("a11y");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const preview = SOCIAL_LINKS.find((l) => l.id === hoveredId);

  return (
    <div className="grid grid-cols-1 border border-border sm:grid-cols-2">
      <div className="border-b border-border sm:border-r sm:border-b-0">
        {SOCIAL_LINKS.map((link, index) => (
          <Link
            key={link.id}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center justify-between border-b border-border px-4 py-4 transition-colors last:border-b-0 hover:bg-muted"
            onMouseEnter={() => setHoveredId(link.id)}
            onMouseLeave={() => setHoveredId(null)}>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm font-bold">{link.platform}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{link.handle}</span>
              <ArrowUpRightIcon aria-hidden className="size-3" />
            </div>
          </Link>
        ))}
      </div>

      <div className="relative hidden items-center justify-center overflow-hidden sm:flex">
        <Background />
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={preview.id}
            src={preview.previewImage}
            alt={t("social-preview-alt", { platform: preview.platform })}
            className="h-full w-full object-cover object-top transition-opacity duration-300"
          />
        ) : (
          <span className="font-mono text-xs text-muted-foreground">{t("social-hover-hint")}</span>
        )}
      </div>
    </div>
  );
}
