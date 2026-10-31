import React from 'react';
import Link from 'next/link';

export interface ServiceListItem {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  focus: string[];
}

interface ServiceCardRowProps {
  service: ServiceListItem;
}

export default function ServiceCardRow({ service }: ServiceCardRowProps) {
  return (
    <div className="p-8 md:p-12 bg-white rounded-2xl border border-hairline shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] hover:border-sage/40 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col items-start">
        <span className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-salmon-text block mb-2">
          {service.num} • {service.eyebrow}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">
          {service.title}
        </h2>
        <p className="italic text-ink text-[16px] mb-3">
          &ldquo;{service.intro}&rdquo;
        </p>
        <p className="text-[15px] leading-relaxed text-ink-muted mb-6 whitespace-pre-wrap">
          {service.description}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-center gap-2 font-sans text-[14px] font-semibold tracking-[0.02em] rounded-full min-h-[44px] px-6 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
        >
          Explore {service.title}
        </Link>
      </div>

      <div className="lg:col-span-5 bg-[#FAF6F1] rounded-xl p-6 border border-hairline w-full">
        <h4 className="font-serif text-[17px] text-sage-deep mb-3 font-medium">
          Areas of Clinical Focus
        </h4>
        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
          {service.focus.map((item, idx) => (
            <li key={idx} className="text-[14px] text-ink flex items-start gap-2">
              <span className="text-sage font-bold leading-none mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
