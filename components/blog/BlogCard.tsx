import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { BlogItem } from './types';

export default function BlogCard({
  item,
  showDate = false,
}: {
  item: BlogItem;
  showDate?: boolean;
}) {
  const isVideo = item.type === 'video';

  return (
    <article className="insight-card group relative flex flex-col bg-white rounded-2xl border border-hairline overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="insight-card__media relative w-full aspect-[16/10] bg-[#F5EFE7] overflow-hidden">
        {item.posterUrl ? (
          <>
            <Image
              src={item.posterUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {isVideo && (
              <span className="insight-card__play absolute inset-0 m-auto w-11 h-11 rounded-full bg-white/90 text-salmon-text flex items-center justify-center shadow" aria-hidden="true">
                <Play size={18} strokeWidth={0} fill="currentColor" className="ml-0.5" />
              </span>
            )}
          </>
        ) : (
          <div className="insight-card__tile absolute inset-0 flex flex-col items-center justify-center p-6 text-center" aria-hidden="true">
            <span className="insight-card__tile-mark font-serif text-5xl text-salmon-soft font-normal">&ldquo;</span>
            <span className="insight-card__tile-label text-[12px] font-bold tracking-wider text-sage-deep uppercase mt-1">{item.category}</span>
          </div>
        )}
      </div>

      <div className="insight-card__body p-6 flex flex-col flex-1 gap-2.5">
        <p className="insight-card__meta flex items-center gap-2 text-[12px] text-ink-muted">
          <span className={`insight-card__cat font-bold tracking-wider uppercase text-[11px] ${isVideo ? 'text-salmon-text' : 'text-sage-deep'}`}>
            {item.category}
          </span>
          <span>•</span>
          <span>{showDate ? `${item.date} · ${item.readTime}` : item.readTime}</span>
        </p>

        <h3 className="insight-card__title font-serif text-xl font-medium text-ink leading-snug">
          <Link href={`/blog/${item.slug}`} className="stretched-link after:absolute after:inset-0 focus-visible:outline-none">
            {item.title}
          </Link>
        </h3>

        <p className="insight-card__summary text-ink-muted text-[14.5px] line-clamp-3 leading-relaxed">
          {item.summary}
        </p>

        <span className="insight-card__cta mt-auto pt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-salmon-text group-hover:translate-x-1 transition-transform" aria-hidden="true">
          {isVideo ? 'Watch' : 'Read'} <ArrowRight size={15} strokeWidth={1.8} />
        </span>
      </div>
    </article>
  );
}
