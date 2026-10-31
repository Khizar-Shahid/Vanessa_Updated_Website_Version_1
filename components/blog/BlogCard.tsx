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
    <article className="group relative flex flex-col bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-[16/10] bg-[#F5EFE7] overflow-hidden">
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
              <span className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-white/90 text-accent flex items-center justify-center shadow" aria-hidden="true">
                <Play size={18} strokeWidth={0} fill="currentColor" className="ml-0.5" />
              </span>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-start justify-between p-6 sm:p-7 bg-primary-soft" aria-hidden="true">
            <span className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-none">&ldquo;&ldquo;</span>
            <span className="font-serif italic text-xl sm:text-2xl text-foreground font-normal leading-snug">
              {item.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 gap-2.5">
        <p className="flex items-center gap-2 text-[12px] text-muted">
          <span className={`font-bold tracking-wider uppercase text-[11px] ${isVideo ? 'text-accent' : 'text-primary'}`}>
            {item.category}
          </span>
          <span>•</span>
          <span>{showDate ? `${item.date} · ${item.readTime}` : item.readTime}</span>
        </p>

        <h3 className="font-serif text-xl font-medium text-foreground leading-snug">
          <Link href={`/blog/${item.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {item.title}
          </Link>
        </h3>

        <p className="text-muted text-[14.5px] line-clamp-3 leading-relaxed">
          {item.summary}
        </p>

        <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent group-hover:translate-x-1 transition-transform" aria-hidden="true">
          {isVideo ? 'Watch' : 'Read'} <ArrowRight size={15} strokeWidth={1.8} />
        </span>
      </div>
    </article>
  );
}
