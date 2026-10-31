'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASE } from './navData';

export default function Squiggle() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 54 8" fill="none" className="absolute left-1/2 bottom-[5px] -translate-x-1/2 w-[calc(100%-1rem)] max-w-[60px] h-[7px] overflow-visible">
      <motion.path
        data-draw=""
        d="M2 5.5C11 1.5 19 6.5 28 4C36 1.8 45 6.2 52 3.5"
        stroke="var(--color-accent-light)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </svg>
  );
}
