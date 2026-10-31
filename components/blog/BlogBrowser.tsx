'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { BlogItem } from './types';
import { EASE_EDITORIAL } from '@/components/motion/Reveal';

type Filter = 'all' | 'video' | 'article';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Posts' },
  { id: 'video', label: 'Videos' },
  { id: 'article', label: 'Articles' },
];

export default function BlogBrowser({ initialItems }: { initialItems: BlogItem[] }) {
  const availableFilters = FILTERS.filter(
    (f) => f.id === 'all' || initialItems.some((item) => item.type === f.id),
  );
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const items = initialItems.filter((item) => activeFilter === 'all' || item.type === activeFilter);

  return (
    <>
      {availableFilters.length > 2 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center" role="group" aria-label="Filter posts by type">
          {availableFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors min-h-[38px] ${
                activeFilter === f.id
                  ? 'bg-sage-deep text-white shadow-sm'
                  : 'bg-white text-ink-muted hover:text-ink border border-hairline'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <ul key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        {items.map((item, idx) => (
          <motion.li
            key={item.id}
            data-reveal=""
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: idx * 0.08 }}
          >
            <BlogCard item={item} showDate />
          </motion.li>
        ))}
      </ul>
    </>
  );
}
