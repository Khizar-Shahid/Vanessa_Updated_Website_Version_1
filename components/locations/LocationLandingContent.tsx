
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Eyebrow from '@/components/ui/Eyebrow';
import OrganicLine from '@/components/ui/OrganicLine';
import ServiceCardRow from '@/components/services/ServiceCardRow';

import { getLocation } from '@/content/locations';
import { getLocationServices } from '@/content/services';
import { locationUrl } from '@/content/seo-urls';
import type { LocationSlug } from '@/content/locations';

interface LocationLandingContentProps {
  location: LocationSlug;
}

export default function LocationLandingContent({
  location,
}: LocationLandingContentProps) {
  const locationData = getLocation(location);
  const services = getLocationServices(location);

  const otherLocationSlug: LocationSlug =
    location === 'coral-gables' ? 'miami' : 'coral-gables';

  const otherLocation = getLocation(otherLocationSlug);

  if (!locationData) return null;

  return (
    <div className="relative w-full overflow-x-clip">
      <PageHero
        eyebrow={locationData.eyebrow}
        title={<>{locationData.heroTitle}</>}
        lead={<>{locationData.heroLead}</>}
      />

      {location === 'coral-gables' ? (
        <>
          <section className="py-16 md:py-24">
            <div className="w-full max-w-[980px] mx-auto px-6">
              <div className="text-center mb-14">
                <Eyebrow>{locationData.serviceOfferingsEyebrow}</Eyebrow>

                <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground text-balance mb-4">
                  {locationData.serviceOfferingsHeading}
                </h2>

                <p className="text-muted max-w-[640px] mx-auto text-[16px]">
                  {locationData.serviceOfferingsDescription}
                </p>
              </div>

              <div className="flex flex-col gap-12">
                {services.map((svc) => (
                  <ServiceCardRow
                    key={svc.slug}
                    service={svc}
                    locationSlug={location}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-white/60 border-t border-border">
            <div className="w-full max-w-[980px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <Eyebrow>{locationData.overviewHeading}</Eyebrow>

                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-4">
                    {locationData.overviewSubheading}
                  </h3>

                  {locationData.overviewText.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-muted text-[15px] leading-relaxed mb-4"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <div className="bg-[#FAF6F1] rounded-2xl p-8 border border-border">
                  <h4 className="font-serif text-[18px] text-foreground font-medium mb-4">
                    Office & Appointment Information
                  </h4>

                  <ul className="list-none p-0 m-0 flex flex-col gap-4">
                    {locationData.settingDetails.map((item, idx) => (
                      <li key={idx} className="text-[14px] text-muted">
                        <strong className="block text-foreground font-semibold mb-0.5">
                          {item.label}
                        </strong>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>

                  {otherLocation && (
                    <div className="mt-6 pt-6 border-t border-border text-[13.5px]">
                      <span className="text-muted">
                        Looking for our Miami practice?{' '}
                      </span>

                      <Link
                        href={locationUrl(otherLocationSlug)}
                        className="font-semibold text-primary hover:underline"
                      >
                        Explore Miami Location →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="py-16 md:py-24">
            <div className="w-full max-w-[980px] mx-auto px-6">
              <div className="text-center mb-14">
                <Eyebrow>{locationData.serviceOfferingsEyebrow}</Eyebrow>

                <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground text-balance mb-4">
                  {locationData.serviceOfferingsHeading}
                </h2>

                <p className="text-muted max-w-[640px] mx-auto text-[16px]">
                  {locationData.serviceOfferingsDescription}
                </p>
              </div>

              <div className="flex flex-col gap-12">
                {services.map((svc) => (
                  <ServiceCardRow
                    key={svc.slug}
                    service={svc}
                    locationSlug={location}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-white/55 border-t border-border">
            <div className="w-full max-w-[860px] mx-auto px-6 text-center">
              <Eyebrow>FLEXIBLE & CONFIDENTIAL</Eyebrow>

              <h2 className="font-serif text-[30px] mb-5">
                In-Person in South Florida & Telehealth Across Florida
              </h2>

              <p className="text-[16px] leading-[1.7] text-muted mb-8 max-w-[62ch] mx-auto">
                {locationData.officeNote}
              </p>

              {otherLocation && (
                <p className="text-[14px] text-muted mb-8">
                  Looking for our Coral Gables office?{' '}
                  <Link
                    href={locationUrl(otherLocationSlug)}
                    className="font-semibold text-primary hover:underline"
                  >
                    View Coral Gables Location →
                  </Link>
                </p>
              )}
            </div>
          </section>
        </>
      )}

      <section className="py-16 md:py-20 bg-[#FAF5EE] border-t border-border text-center">
        <div className="w-full max-w-[720px] mx-auto px-6">
          <Eyebrow className="block mb-2">BEGIN YOUR JOURNEY</Eyebrow>

          <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary mb-4">
            Ready to Take the Next Step in {locationData.name}?
          </h2>

          <p className="text-muted mb-8 text-[15px] leading-relaxed">
            Reach out to schedule a consultation or ask questions about how
            our {locationData.name} therapy services can meet your needs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
            >
              Book a Consultation
            </Link>

            <Link
              href={locationUrl('coral-gables')}
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Coral Gables Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
