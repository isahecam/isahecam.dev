"use client";
import { motion, useMotionValue, useSpring } from "motion/react";

const VIEWBOX_WIDTH = 1410;
const DEFAULT_GRADIENT_X = 705;

export function SiteFooterBrand() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X);
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const containerWidth = containerRect.width;
    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH;
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX));
    gradientX1Raw.set(clampedX);
  };

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X);
  };

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div className="overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg className="container size-full" viewBox="0 0 1410 258" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── FILLED LAYER ── */}
            <g fill="url(#paint0_linear_1145_73)">
              {/* I */}
              <rect x="16" y="0" width="96" height="32" />
              <rect x="48" y="32" width="32" height="192" />
              <rect x="16" y="224" width="96" height="34" />

              {/* S */}
              <rect x="128" y="0" width="160" height="32" />
              <rect x="128" y="32" width="32" height="96" />
              <rect x="128" y="128" width="160" height="32" />
              <rect x="256" y="160" width="32" height="64" />
              <rect x="128" y="224" width="160" height="34" />

              {/* A */}
              <rect x="304" y="0" width="160" height="32" />
              <rect x="304" y="32" width="32" height="226" />
              <rect x="432" y="32" width="32" height="226" />
              <rect x="336" y="128" width="96" height="32" />

              {/* H */}
              <rect x="480" y="0" width="32" height="258" />
              <rect x="608" y="0" width="32" height="258" />
              <rect x="512" y="112" width="96" height="32" />

              {/* E */}
              <rect x="656" y="0" width="32" height="258" />
              <rect x="688" y="0" width="128" height="32" />
              <rect x="688" y="112" width="96" height="32" />
              <rect x="688" y="224" width="128" height="34" />

              {/* C */}
              <rect x="832" y="0" width="160" height="32" />
              <rect x="832" y="32" width="32" height="192" />
              <rect x="832" y="224" width="160" height="34" />

              {/* A */}
              <rect x="1008" y="0" width="160" height="32" />
              <rect x="1008" y="32" width="32" height="226" />
              <rect x="1136" y="32" width="32" height="226" />
              <rect x="1040" y="128" width="96" height="32" />

              {/* M */}
              <rect x="1184" y="0" width="32" height="258" />
              <rect x="1362" y="0" width="32" height="258" />
              <rect x="1216" y="0" width="32" height="64" />
              <rect x="1248" y="64" width="32" height="64" />
              <rect x="1280" y="128" width="16" height="32" />
              <rect x="1330" y="0" width="32" height="64" />
              <rect x="1298" y="64" width="32" height="64" />
            </g>

            {/* ── STROKE LAYER ── */}
            <g fill="none" stroke="var(--foreground)" strokeOpacity="0.1" strokeWidth="2">
              {/* I */}
              <rect x="16" y="0" width="96" height="32" />
              <rect x="48" y="32" width="32" height="192" />
              <rect x="16" y="224" width="96" height="34" />

              {/* S */}
              <rect x="128" y="0" width="160" height="32" />
              <rect x="128" y="32" width="32" height="96" />
              <rect x="128" y="128" width="160" height="32" />
              <rect x="256" y="160" width="32" height="64" />
              <rect x="128" y="224" width="160" height="34" />

              {/* A */}
              <rect x="304" y="0" width="160" height="32" />
              <rect x="304" y="32" width="32" height="226" />
              <rect x="432" y="32" width="32" height="226" />
              <rect x="336" y="128" width="96" height="32" />

              {/* H */}
              <rect x="480" y="0" width="32" height="258" />
              <rect x="608" y="0" width="32" height="258" />
              <rect x="512" y="112" width="96" height="32" />

              {/* E */}
              <rect x="656" y="0" width="32" height="258" />
              <rect x="688" y="0" width="128" height="32" />
              <rect x="688" y="112" width="96" height="32" />
              <rect x="688" y="224" width="128" height="34" />

              {/* C */}
              <rect x="832" y="0" width="160" height="32" />
              <rect x="832" y="32" width="32" height="192" />
              <rect x="832" y="224" width="160" height="34" />

              {/* A */}
              <rect x="1008" y="0" width="160" height="32" />
              <rect x="1008" y="32" width="32" height="226" />
              <rect x="1136" y="32" width="32" height="226" />
              <rect x="1040" y="128" width="96" height="32" />

              {/* M */}
              <rect x="1184" y="0" width="32" height="258" />
              <rect x="1362" y="0" width="32" height="258" />
              <rect x="1216" y="0" width="32" height="64" />
              <rect x="1248" y="64" width="32" height="64" />
              <rect x="1280" y="128" width="16" height="32" />
              <rect x="1330" y="0" width="32" height="64" />
              <rect x="1298" y="64" width="32" height="64" />
            </g>

            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="0"
                x2="705"
                y2="258"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.3" stopColor="var(--foreground)" stopOpacity="0" />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
