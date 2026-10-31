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
    <div className="page">
      <PageHero
        eyebrow={data.subtitle}
        title={data.seoH1}
        lead={<em>&ldquo;{data.forWhen}&rdquo;</em>}
      />

      {/* Main Service Content */}
      <section className="section-rhythm">
        <div className="container max-w-[920px]">
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
              <Link href="/consultation" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
