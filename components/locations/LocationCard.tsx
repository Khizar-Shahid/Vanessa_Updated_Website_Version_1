import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { LocationDetail } from '@/content/locations';
import { SERVICE_SLUGS, LOCATION_SERVICES } from '@/content/services';

interface LocationCardProps {
  location: LocationDetail;
}

export default function LocationCard({ location }: LocationCardProps) {
  const services = SERVICE_SLUGS.map((slug) => LOCATION_SERVICES[location.slug][slug].summary);

  return (
    <article className="bg-white rounded-2xl border border-border shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] hover:border-primary/40 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-primary">
            <MapPin size={20} strokeWidth={2} />
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-accent">
              {location.eyebrow}
            </span>
          </div>
          <span className="text-[12px] font-semibold px-3 py-1 bg-primary-soft text-primary rounded-full">
            {location.badge}
          </span>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
          {location.fullName}
        </h3>

        <p className="text-[15px] leading-relaxed text-muted mb-6">
          {location.heroLead}
        </p>

        {/* Setting highlights */}
        <div className="bg-[#FAF6F1] rounded-xl p-5 border border-border mb-6">
          <h4 className="font-serif text-[15px] font-medium text-foreground mb-3 flex items-center gap-1.5">
            <Sparkles size={16} className="text-primary" />
            <span>Practice Highlights</span>
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {location.settingDetails.map((detail, idx) => (
              <li key={idx} className="text-[13.5px] leading-normal text-muted flex items-start gap-2">
                <span className="text-primary font-bold leading-none mt-0.5">•</span>
                <span>
                  <strong className="text-foreground font-semibold">{detail.label}:</strong> {detail.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct links to the 4 services */}
        <div className="mb-8">
          <span className="block font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-muted mb-3">
            Available Services:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/locations/${location.slug}/${svc.slug}`}
                className="text-[13.5px] font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1.5 p-2 rounded-lg bg-surface/50 hover:bg-surface"
              >
                <ArrowRight size={13} className="text-accent shrink-0" />
                <span>{svc.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border flex items-center justify-between gap-4">
        <Link
          href={`/locations/${location.slug}`}
          className="inline-flex items-center justify-center gap-2 font-sans text-[14px] font-semibold tracking-[0.02em] rounded-full min-h-[44px] px-6 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
        >
          <span>View {location.name} Practice</span>
          <ArrowRight size={15} />
        </Link>
        <Link
          href="/consultation"
          className="text-[13.5px] font-semibold text-muted hover:text-foreground transition-colors"
        >
          Book Consultation
        </Link>
      </div>
    </article>
  );
}

