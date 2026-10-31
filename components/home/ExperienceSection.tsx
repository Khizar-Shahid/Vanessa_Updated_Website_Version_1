import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';
import Eyebrow from '@/components/Eyebrow';

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-white/55 border-t border-hairline">
      <div className="w-full max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-center">
        <Reveal className="relative before:content-[''] before:absolute before:inset-[1rem_1rem_-1rem_-0.75rem] md:before:inset-[1.75rem_1.75rem_-1.75rem_-1.75rem] before:bg-salmon-soft before:rounded-md before:z-0">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] z-10">
            <Image
              src="/images/understanding-experience.jpg"
              alt="A woman in a cardigan sitting in an armchair by a sunlit window, smiling softly"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute w-full md:w-[125%] -bottom-[22%] -left-[6%] md:-left-[20%] z-10 pointer-events-none" aria-hidden="true">
            <OrganicLine variant="curve-left" />
          </div>
        </Reveal>

        <Reveal className="[&>h2]:mb-6 [&>p]:mb-8" delay={0.1}>
          <Eyebrow>UNDERSTANDING YOUR EXPERIENCE</Eyebrow>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-[1.2] text-ink text-balance tracking-[-0.01em] [&>em]:italic [&>em]:text-sage-deep">You Don&apos;t Have to Carry It All By Yourself.</h2>
          <p>
            Life can leave us carrying more than we realize—difficult experiences, relationship
            struggles, emotional patterns, or the feeling that something in our lives is no
            longer working the way it used to. In therapy, Vanessa creates a collaborative and
            supportive space to slow down, understand what may be underneath these experiences,
            and explore how past and present patterns may be affecting the way you think, feel,
            communicate, and respond. Together, the focus is not simply on identifying what is
            difficult, but on developing greater awareness and finding healthier ways to move
            forward.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
          >
            Explore How We Work
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
