import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Eyebrow from '@/components/ui/Eyebrow';
import LocationCard from '@/components/locations/LocationCard';
import { LOCATIONS, LOCATION_SLUGS } from '@/content/locations';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Therapy Locations in South Florida | Coral Gables & Miami | Thrive With Therapy',
  description:
    'Explore in-person and online therapy services in Coral Gables and Miami, FL. Individual, couples, family, and trauma therapy with Vanessa Sierra, LMFT.',
  keywords: [
    'Therapy Locations South Florida',
    'Therapist Coral Gables FL',
    'Therapist Miami FL',
    'Counseling South Florida',
  ],
  alternates: {
    canonical: '/locations',
  },
};

export default function LocationsHubPage() {
  const locationList = LOCATION_SLUGS.map((slug) => LOCATIONS[slug]);

  return (
    <div className="relative w-full overflow-x-clip">


      <PageHero
        eyebrow="SOUTH FLORIDA LOCATIONS"
        title="Compassionate Therapy Across South Florida"
        lead={
          <>
            Whether you are seeking in-person sessions at our peaceful Coral Gables office or secure HIPAA-compliant telehealth throughout Florida, we provide dedicated care for individuals, couples, and families.
          </>
        }
      />

      {/* Locations Selection Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[1160px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <Eyebrow>CHOOSE YOUR LOCATION</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground text-balance mb-4">
              Two Locations, One High Standard of Care
            </h2>
            <p className="text-muted text-[16px] leading-relaxed">
              Select your preferred location below to explore specialized therapy services tailored to your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {locationList.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* Practice Overview / Telehealth Note */}
      <section className="py-16 md:py-20 bg-white/60 border-t border-border text-center">
        <div className="w-full max-w-[760px] mx-auto px-6">
          <Eyebrow className="block mb-2">TELEHEALTH & IN-PERSON</Eyebrow>
          <h2 className="font-serif text-3xl font-normal text-foreground mb-4">
            Flexible Care Designed for Your Schedule
          </h2>
          <p className="text-muted mb-8 text-[15px] leading-relaxed">
            All services—including Individual Therapy, Couples Therapy, Parenting & Family Support, and Trauma-Focused EMDR—are available both in person in South Florida and virtually across the entire state of Florida.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

