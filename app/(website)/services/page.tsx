import React from 'react';
import PageHero from '@/components/PageHero';
import { SERVICE_LIST } from '@/content/services';
import ServiceCardRow from '@/components/services/ServiceCardRow';
import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: '/services',
  },
  title: 'Therapy Services in Coral Gables, FL',
  description:
    'Explore therapy services in Coral Gables, FL, including individual therapy, trauma therapy, couples therapy, and parenting support.',
  keywords: ['Therapy Services in Coral Gables'],
};

export default function WaysWeWorkPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="THERAPY SERVICES"
        title={<>Therapy Services in Coral Gables, FL</>}
        lead={
          <>
            Whether you&apos;re working through personal challenges, experiencing relationship difficulties, or looking to build healthier family relationships, therapy can provide a supportive space to better understand your experiences, develop healthier patterns, and work toward meaningful change.
          </>
        }
      />

      {/* Services List */}
      <section className="section-rhythm">
        <div className="container max-w-[980px]">
          <div className="flex flex-col gap-12">
            {SERVICE_LIST.map((svc) => (
              <ServiceCardRow key={svc.slug} service={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 md:py-20 bg-[#FAF5EE] border-t border-hairline text-center">
        <div className="container max-w-[720px] mx-auto">
          <span className="label-eyebrow block mb-2">BEGIN YOUR JOURNEY</span>
          <h2 className="mb-4">Ready to Take the Next Step?</h2>
          <p className="text-ink-muted mb-8 text-[15px] leading-relaxed">
            Reach out to schedule a consultation or ask questions about how these services can meet
            your needs.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
