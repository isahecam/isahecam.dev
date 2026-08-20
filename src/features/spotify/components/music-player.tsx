"use client";

import { motion as Motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

import { Spotify } from "@/components/icons";
import { useSpotify } from "@/features/spotify/hooks/use-spotify";

const DISC_SIZE = 260;
const DISC_COLLAPSED = 100;
const DISC_SCALE_COLLAPSED = DISC_COLLAPSED / DISC_SIZE;

const CARD = {
  collapsed: { w: 248, h: 88, r: 22 },
  expanded: { w: 250, h: 284, r: 28 },
} as const;

const SPRING = {
  type: "spring" as const,
  stiffness: 380,
  damping: 46,
  mass: 0.9,
};

const SoundBars = ({ compact = false }: { compact?: boolean }) => {
  const bars = compact
    ? [
        { max: 8, delay: 0 },
        { max: 12, delay: 0.15 },
        { max: 7, delay: 0.08 },
        { max: 11, delay: 0.22 },
      ]
    : [
        { max: 10, delay: 0 },
        { max: 14, delay: 0.12 },
        { max: 8, delay: 0.06 },
        { max: 12, delay: 0.18 },
      ];

  return (
    <span className={`flex items-end gap-[2.5px] ${compact ? "h-3" : "h-3.5"}`}>
      {bars.map((bar, i) => (
        <Motion.span
          key={i}
          className="inline-block w-[2.5px] rounded-full bg-[#1DB954]"
          animate={{ height: [3, bar.max, 3] }}
          transition={{
            duration: 0.65 + i * 0.05,
            repeat: Infinity,
            delay: bar.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
};

const CdDisc = ({
  albumArt,
  title,
  isPlaying,
  isOffline,
}: {
  albumArt: string | null;
  title: string;
  isPlaying: boolean;
  isOffline: boolean;
}) => (
  <div className="relative size-full overflow-hidden rounded-full border border-black/10 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35),0_2px_6px_rgba(0,0,0,0.12)] dark:border-white/10">
    {albumArt ? (
      // oxlint-disable-next-line next/no-img-element
      <img
        src={albumArt}
        alt={title}
        className={`size-full rounded-full object-cover ${
          isPlaying ? "animate-[spin_8s_linear_infinite]" : "animate-[spin_18s_linear_infinite]"
        }`}
        style={{
          filter: isOffline ? "saturate(65%) brightness(0.9)" : undefined,
        }}
      />
    ) : (
      <div className="flex size-full items-center justify-center bg-neutral-800">
        <Spotify className="size-1/3" />
      </div>
    )}

    <div
      className="pointer-events-none absolute inset-0 rounded-full"
      style={{
        background: `
          radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.06) 29%, transparent 30%),
          radial-gradient(circle at center, transparent 42%, rgba(0,0,0,0.05) 43%, transparent 44%),
          radial-gradient(circle at center, transparent 56%, rgba(0,0,0,0.04) 57%, transparent 58%),
          radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.04) 71%, transparent 72%)
        `,
      }}
    />

    <div
      className="pointer-events-none absolute inset-0 rounded-full"
      style={{
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 0 12px rgba(0,0,0,0.15)",
      }}
    />

    <div className="pointer-events-none absolute inset-0 m-auto flex size-[22%] items-center justify-center rounded-full border-2 border-[#A8ACBA] bg-linear-to-b from-[#E8EBF5] via-[#9EA2B4] to-[#6B6F82] shadow-md">
      <div className="size-[42%] rounded-full border-[1.5px] border-[#3a3a3a] bg-[#111111] shadow-inner" />
    </div>
  </div>
);

export const MusicPlayer = () => {
  const { data, loading, error } = useSpotify();
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("music-player");

  useEffect(() => {
    if (!isExpanded) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isExpanded]);

  if (error && !data) return null;

  if (loading) {
    return (
      <div className="relative z-40 my-6 hidden h-14 w-full select-none sm:block">
        <div className="absolute right-0 bottom-0 left-0 mx-auto flex w-fit items-center justify-center">
          <div className="flex h-22 w-62 items-center gap-3 overflow-hidden rounded-[22px] bg-background p-3.5">
            <div className="flex min-w-0 flex-1 flex-col gap-2.5 pl-1">
              <div className="h-2.5 w-20 animate-pulse rounded-full bg-muted" />
              <div className="h-2.5 w-16 animate-pulse rounded-full bg-muted" />
              <div className="h-3.5 w-28 animate-pulse rounded-full bg-muted" />
            </div>
            <div className="size-18 shrink-0 animate-pulse rounded-full bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  const isOffline = !data;
  const displayData = data || {
    isPlaying: false,
    title: "Offline",
    artist: "Not listening right now",
    albumArt: null,
    songUrl: "https://open.spotify.com",
  };

  const statusLabel = displayData.isPlaying
    ? t("now-playing")
    : isOffline
      ? "Offline"
      : t("last-played");

  return (
    <div className="relative z-40 my-6 hidden h-14 w-full select-none sm:block">
      <div className="absolute right-0 bottom-0 left-0 mx-auto flex w-fit items-end justify-center">
        <Motion.div
          ref={cardRef}
          onClick={() => setIsExpanded((v) => !v)}
          initial={false}
          whileTap={{ scale: 0.985 }}
          transition={SPRING}
          animate={{
            width: isExpanded ? CARD.expanded.w : CARD.collapsed.w,
            height: isExpanded ? CARD.expanded.h : CARD.collapsed.h,
            borderRadius: isExpanded ? CARD.expanded.r : CARD.collapsed.r,
          }}
          style={{ transformOrigin: "bottom center" }}
          className="group relative z-50 cursor-pointer overflow-hidden bg-background text-neutral-800 dark:text-white"
        >
          <Motion.div
            initial={false}
            style={{ width: DISC_SIZE, height: DISC_SIZE }}
            animate={
              isExpanded
                ? { scale: 1, x: -5, y: -130 }
                : { scale: DISC_SCALE_COLLAPSED, x: 100, y: -86 }
            }
            transition={SPRING}
            className="pointer-events-none absolute top-0 left-0 z-20"
          >
            <CdDisc
              albumArt={displayData.albumArt}
              title={displayData.title}
              isPlaying={displayData.isPlaying}
              isOffline={isOffline}
            />
          </Motion.div>

          <AnimatePresence>
            {!isExpanded ? (
              <Motion.div
                key="collapsed-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-y-0 left-0 z-10 flex w-[calc(100%-100px)] flex-col justify-center gap-1.5 pr-2 pl-4"
              >
                <div className="flex items-center gap-1.5">
                  <Spotify className="size-3 shrink-0" />
                  <span className="text-[11px] font-medium tracking-wide text-neutral-400 dark:text-neutral-500">
                    {statusLabel}
                  </span>
                  {displayData.isPlaying && <SoundBars compact />}
                </div>

                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-xs leading-snug font-semibold tracking-tight text-neutral-900 dark:text-white">
                    {displayData.title}
                  </span>
                  <span className="truncate text-[11px] leading-snug font-medium text-neutral-500 dark:text-neutral-400">
                    {displayData.artist}
                  </span>
                </div>
              </Motion.div>
            ) : (
              <Motion.div
                key="expanded-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-38 left-0 z-10 flex h-[calc(100%-152px)] w-full flex-col items-center px-5 pt-1 pb-8 text-center"
              >
                {displayData.isPlaying && (
                  <div className="mb-4 flex items-center justify-center">
                    <SoundBars />
                  </div>
                )}

                <div className="flex w-full flex-col items-center gap-1 text-center">
                  <span
                    className="block w-full truncate text-sm leading-snug font-semibold tracking-tight text-neutral-900 dark:text-white"
                    style={{ maxWidth: 210 }}
                  >
                    {displayData.title}
                  </span>
                  <span
                    className="block w-full truncate text-xs leading-snug font-medium text-neutral-500 dark:text-neutral-400"
                    style={{ maxWidth: 210 }}
                  >
                    {displayData.artist}
                  </span>
                </div>

                <div className="mt-auto flex w-full flex-col items-center pt-4">
                  <div className="mb-4 h-0.5 w-6 rounded-full bg-neutral-400/40 dark:bg-neutral-600/40" />
                  <a
                    href={displayData.songUrl || "https://open.spotify.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/link flex cursor-pointer items-center gap-1.5 pb-0.5 text-xs font-bold text-[#1DB954] hover:text-[#1ed760]"
                  >
                    <span>{t("open-song-cta")}</span>
                    <Spotify className="size-3.5 transition-transform duration-150 group-hover/link:scale-110" />
                  </a>
                </div>
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.div>
      </div>
    </div>
  );
};
