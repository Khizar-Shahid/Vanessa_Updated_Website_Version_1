import type { Metadata } from 'next';
import BlogFeed from '@/components/BlogFeed';
import ResourcePanels from '@/components/ResourcePanels';
import TestimonialSlider from '@/components/TestimonialSlider';
import HomeHero from '@/components/home/HomeHero';
import PauseSection from '@/components/home/PauseSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import MeetVanessaSection from '@/components/home/MeetVanessaSection';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="page">
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
      <section className="py-16 md:py-24 border-t border-hairline">
        <div className="container">
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
