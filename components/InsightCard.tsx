import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export interface InsightItem {
  id: string;
  slug: string;
  type: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  posterUrl: string | null;
}

/** Editorial card for a single Insight (video, article, or Instagram piece). */
export default function InsightCard({ item, showDate = false }: { item: InsightItem; showDate?: boolean }) {
  const isVideo = item.type === 'video';

  return (
    <article className="insight-card">
      <div className="insight-card__media">
        {item.posterUrl ? (
          <>
            <Image
              src={item.posterUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            {isVideo && (
              <span className="insight-card__play" aria-hidden="true">
                <Play size={18} strokeWidth={0} fill="currentColor" />
              </span>
            )}
          </>
        ) : (
          <div className="insight-card__tile" aria-hidden="true">
            <span className="insight-card__tile-mark">&ldquo;</span>
            <span className="insight-card__tile-label">{item.category}</span>
          </div>
        )}
      </div>

      <div className="insight-card__body">
        <p className="insight-card__meta">
          <span className={isVideo ? 'insight-card__cat insight-card__cat--video' : 'insight-card__cat'}>
            {item.category}
          </span>
          <span>{showDate ? `${item.date} · ${item.readTime}` : item.readTime}</span>
        </p>
        <h3 className="insight-card__title">
          {/* Stretched link: the whole card is clickable, one tab stop */}
          <Link href={`/insights/${item.slug}`} className="stretched-link">
            {item.title}
          </Link>
        </h3>
        <p className="insight-card__summary">{item.summary}</p>
        <span className="insight-card__cta" aria-hidden="true">
          {isVideo ? 'Watch' : 'Read'} <ArrowRight size={15} strokeWidth={1.8} />
        </span>
      </div>
    </article>
  );
}
