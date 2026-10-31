import React from 'react';
import PageHero from '@/components/PageHero';
import { SERVICE_LIST } from '@/content/services';
import ServiceCardRow from '@/components/services/ServiceCardRow';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';

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
    <div className="relative w-full overflow-x-clip">
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
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[980px] mx-auto px-6">
          <div className="flex flex-col gap-12">
            {SERVICE_LIST.map((svc) => (
              <ServiceCardRow key={svc.slug} service={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 md:py-20 bg-[#FAF5EE] border-t border-hairline text-center">
        <div className="w-full max-w-[720px] mx-auto px-6">
          <Eyebrow className="block mb-2">BEGIN YOUR JOURNEY</Eyebrow>
          <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary mb-4">Ready to Take the Next Step?</h2>
          <p className="text-ink-muted mb-8 text-[15px] leading-relaxed">
            Reach out to schedule a consultation or ask questions about how these services can meet
            your needs.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
