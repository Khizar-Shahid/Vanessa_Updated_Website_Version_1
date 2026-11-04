import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import ServiceSessionOverview from '@/components/services/ServiceSessionOverview';
import ServiceFAQ from '@/components/services/ServiceFAQ';

import { getLocation } from '@/content/locations';
import {
  getServiceDetail,
  getAllLocationServiceParams,
} from '@/content/services';
import { parseServiceSlug, serviceUrl, locationUrl } from '@/content/seo-urls';

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseServiceSlug(slug);

  if (!parsed) return {};

  const data = getServiceDetail(parsed.location, parsed.service);

  if (!data) return {};

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: [data.seoKeyword],
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllLocationServiceParams().map(({ location, service }) => ({
    slug: `${service}-${location}`,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseServiceSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { location, service } = parsed;

  const locationData = getLocation(location);
  const data = getServiceDetail(location, service);

  if (!locationData || !data) {
    notFound();
  }

  const otherLocationSlug =
    location === 'coral-gables' ? 'miami' : 'coral-gables';

  const otherLocation = getLocation(otherLocationSlug);
  const otherServiceDetail = getServiceDetail(otherLocationSlug, service);

  return (
    <div className="relative w-full overflow-x-clip">
      <PageHero
        eyebrow={`${data.subtitle} • ${locationData.fullName}`}
        title={data.seoH1}
        lead={<em>&ldquo;{data.forWhen}&rdquo;</em>}
      />

      <section className="py-16 md:py-24">
        <div className="w-full max-w-[920px] mx-auto px-6">
          <ServiceSessionOverview
            whoItsFor={data.whoItsFor}
            whatSessionsLookLike={data.whatSessionsLookLike}
          />

          <div className="bg-[#FAF5EE] rounded-2xl p-8 md:p-10 border border-border mb-14">
            <h3 className="font-serif text-[22px] mb-5 text-foreground font-medium">
              Key Clinical Focus Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white px-5 py-3.5 rounded-lg border border-border text-[14.5px] font-medium text-foreground shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <ServiceFAQ faq={data.faq} />

          {otherLocation && otherServiceDetail && (
            <div className="mb-14 p-6 bg-surface/50 rounded-xl border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="block font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-accent mb-1">
                  Alternative Location
                </span>

                <p className="text-[14px] text-muted m-0">
                  Also available in our {otherLocation.name} practice.
                </p>
              </div>

              <Link
                href={serviceUrl(otherLocationSlug, service)}
                className="inline-flex items-center gap-1.5 font-semibold text-[13.5px] text-primary hover:underline whitespace-nowrap"
              >
                <span>
                  View {data.title} in {otherLocation.name}
                </span>
                <span>→</span>
              </Link>
            </div>
          )}

          <div className="text-center p-8 md:p-12 bg-white rounded-2xl border border-border shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)]">
            <h3 className="font-serif text-2xl mb-2.5 text-foreground font-medium">
              Take the Next Step in {locationData.name}
            </h3>

            <p className="text-muted mb-7 text-[15px] leading-relaxed max-w-[500px] mx-auto">
              Schedule a consultation with Vanessa to discuss how{' '}
              {data.title.toLowerCase()} in {locationData.name} can support
              your personal goals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
              >
                Book a Consultation
              </Link>

              <Link
                href={locationUrl(location)}
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Back to {locationData.name} Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}