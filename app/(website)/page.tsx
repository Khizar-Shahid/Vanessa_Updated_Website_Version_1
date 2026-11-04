import type { Metadata } from 'next';
import BlogFeed from '@/components/sections/BlogFeed';
import ResourcePanels from '@/components/sections/ResourcePanels';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import HomeHero from '@/components/home/HomeHero';
import PauseSection from '@/components/home/PauseSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import MeetVanessaSection from '@/components/home/MeetVanessaSection';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Therapist in Coral Gables, FL | Thrive with Therapy',
  description:
    'Find a trusted therapist in Coral Gables, FL at Thrive with Therapy. Get personalized therapy and compassionate support to improve your mental health and well-being.',
  keywords: ['Therapist in Coral Gables'],
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-clip">
      {/* 1. Hero with interactive prompt cards */}
      <HomeHero />

      {/* 2. Space to Pause */}
      <PauseSection />

      {/* 3. Understanding Your Experience */}
      <ExperienceSection />

      {/* 4. Ways We Work (Services preview) */}
      <ServicesPreview />

      {/* 5. Meet Vanessa (Intro & verified badge) */}
      <MeetVanessaSection />

      {/* 6. Recent Articles */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-[1160px] mx-auto px-6">
          <BlogFeed limit={3} showHeading />
        </div>
      </section>

      {/* 7. Clinical Resource Library */}
      <ResourcePanels />

      {/* 8. Testimonials Slider */}
      <TestimonialSlider />

      {/* 9. Consultation Closing CTA */}
      <HomeCTA />
    </div>
  );
}
