'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface OrganicLineProps {
  variant?: 'curve-right' | 'curve-left' | 'connecting' | 'loop' | 'thread';
  stroke?: string;
  style?: React.CSSProperties;
  className?: string;
}

const PATHS = {
  'curve-right': {
    viewBox: '0 0 500 350',
    d: 'M12 44 C 150 18, 236 186, 358 160 C 446 142, 470 276, 488 330',
  },
  'curve-left': {
    viewBox: '0 0 400 300',
    d: 'M16 284 C 118 272, 78 142, 218 120 C 322 102, 356 42, 386 14',
  },
  connecting: {
    viewBox: '0 0 800 120',
    d: 'M10 64 C 200 12, 350 112, 550 42 C 650 12, 722 92, 790 60',
  },
  thread: {
    viewBox: '0 0 800 40',
    d: 'M0 20 C 100 8, 170 32, 270 20 S 440 8, 530 20 S 700 32, 800 20',
  },
  loop: {
    viewBox: '0 0 420 160',
    d: 'M8 120 C 90 128, 118 40, 190 44 C 262 48, 236 132, 188 118 C 140 104, 206 24, 300 36 C 360 44, 392 86, 412 70',
  },
};

/**
 * §3.6 organic line motif: a thin, hand-drawn-feeling sage line that draws
 * itself in (stroke-dashoffset via pathLength) the first time it scrolls
 * into view. Decorative, hidden from assistive tech.
 */
export default function OrganicLine({
  variant = 'curve-right',
  stroke = 'var(--sage)',
  style,
  className,
}: OrganicLineProps) {
  const { viewBox, d } = PATHS[variant];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', pointerEvents: 'none', overflow: 'visible', ...style }}
    >
      <motion.path
        data-draw=""
        d={d}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2.2, ease: [0.2, 0.8, 0.3, 1] }}
      />
    </svg>
  );
}
