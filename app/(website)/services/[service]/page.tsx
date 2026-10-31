import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SERVICE_MAP, SERVICE_SLUGS } from '@/content/services';
import ServiceSessionOverview from '@/components/services/ServiceSessionOverview';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const data = SERVICE_MAP[service];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: [data.seoKeyword],
    alternates: {
      canonical: `/services/${service}`,
    },
  };
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ service: slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const data = SERVICE_MAP[service];
  if (!data) notFound();

  return (
    <div className="relative w-full overflow-x-clip">
      <PageHero
        eyebrow={data.subtitle}
        title={data.seoH1}
        lead={<em>&ldquo;{data.forWhen}&rdquo;</em>}
      />

      {/* Main Service Content */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[920px] mx-auto px-6">
          {/* Who It's For & What Sessions Look Like */}
          <ServiceSessionOverview
            whoItsFor={data.whoItsFor}
            whatSessionsLookLike={data.whatSessionsLookLike}
          />

          {/* Key Clinical Focus Areas List */}
          <div className="bg-[#FAF5EE] rounded-2xl p-8 md:p-10 border border-hairline mb-14">
            <h3 className="font-serif text-[22px] mb-5 text-ink font-medium">
              Key Clinical Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white px-5 py-3.5 rounded-lg border border-hairline text-[14.5px] font-medium text-ink shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQ */}
          <ServiceFAQ faq={data.faq} />

          {/* CTA Box */}
          <div className="text-center p-8 md:p-12 bg-white rounded-2xl border border-hairline shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)]">
            <h3 className="font-serif text-2xl mb-2.5 text-ink font-medium">
              Take the Next Step in Care
            </h3>
            <p className="text-ink-muted mb-7 text-[15px] leading-relaxed max-w-[500px] mx-auto">
              Schedule a consultation with Vanessa to discuss how {data.title.toLowerCase()} can support your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
