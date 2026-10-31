import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrganicLine from '@/components/ui/OrganicLine';
import ConvergingLines from '@/components/ui/ConvergingLines';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import MeetVanessaHero from '@/components/meet-vanessa/MeetVanessaHero';
import TherapyProcessSteps from '@/components/meet-vanessa/TherapyProcessSteps';
import ClinicalCredentialsGrid from '@/components/meet-vanessa/ClinicalCredentialsGrid';
import SpecializedModalities from '@/components/meet-vanessa/SpecializedModalities';
import Eyebrow from '@/components/ui/Eyebrow';

export const metadata = {
  alternates: {
    canonical: '/meet-vanessa',
  },
  title: 'Meet Vanessa Sierra, LMFT | Thrive with Therapy',
  description:
    'Meet Vanessa Sierra, LMFT, an experienced therapist in Coral Gables, FL, offering compassionate individual, couples, and family therapy.',
  keywords: ['Vanessa Sierra LMFT'],
};

export default function MeetVanessaPage() {
  return (
    <div className="relative w-full overflow-x-clip">
      {/* 1. Hero */}
      <MeetVanessaHero />

      {/* 2. Short Intro */}
      <section className="py-16 md:py-24 text-center">
        <Reveal className="w-full max-w-[820px] mx-auto px-6">
          <Eyebrow>A LITTLE ABOUT ME</Eyebrow>
          <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary mb-7">Creating a Space Where People Feel Seen, Safe, and Understood.</h2>
          <p className="text-[18px] leading-[1.85] mx-auto text-foreground">
            For over 20 years, I have worked with adults, couples, families, and children across
            nonprofit, educational, and private-practice settings. My work is grounded in listening
            closely to what people are saying, noticing the patterns underneath what they are
            experiencing, and creating a therapeutic space where they can feel understood without
            judgment. I believe meaningful change begins when we can make sense of what we have been
            carrying and begin seeing new possibilities for how we relate to ourselves and others.
          </p>
          <div className="w-[min(420px,80%)] mx-auto mt-12" aria-hidden="true">
            <OrganicLine variant="connecting" />
          </div>
        </Reveal>
      </section>

      {/* 3. My Story */}
      <section className="py-16 md:py-24 bg-surface border-t border-border">
        <div className="w-full max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-12 md:gap-16 items-center">
          <Reveal className="[&>h2]:mb-6 [&>p]:mb-6 [&>p:last-child]:mb-0">
            <Eyebrow>MY STORY</Eyebrow>
            <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">I Learned Early That Feeling Safe Can Change Everything.</h2>
            <p>
              As a shy and reserved child, I often found comfort in my imagination and was deeply
              sensitive to the feelings of others. As I grew, I became more observant of people and
              the spaces around me, paying close attention before deciding where I felt safe enough
              to connect.
            </p>
            <p>
              That sensitivity became especially meaningful in my first therapeutic work with foster
              children. I cared deeply about their stories, but over time I learned an important
              lesson: my role was not to rescue them. It was to help restore a sense of dignity,
              safety, and possibility - to create a space where they could discover that what they
              had experienced did not have to define who they were.
            </p>
            <p>
              That experience shaped the way I continue to see therapy today. I do not believe
              people need to be rescued. I believe they need a safe and guided space to understand
              what they have lived through, recognize their strengths, discover new ways of thinking
              and responding, and reconnect with the parts of themselves that deserve to be heard.
            </p>
          </Reveal>

          <Reveal className="relative before:content-[''] before:absolute before:inset-[1rem_-0.75rem_-1rem_1rem] md:before:inset-[1.75rem_-1.75rem_-1.75rem_1.75rem] before:bg-primary-soft before:rounded-md before:z-0" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] z-10">
              <Image
                src="/images/my-story-symbolic.jpg"
                alt="A quiet sunlit windowsill looking out over a garden"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute w-full md:w-[125%] -top-[18%] -right-[6%] md:-right-[22%] z-10 pointer-events-none" aria-hidden="true">
              <OrganicLine variant="curve-right" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Shift in Perspective */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-[900px] mx-auto px-6">
          <Reveal>
            <Eyebrow>A SHIFT IN PERSPECTIVE</Eyebrow>
            <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary mb-7">
              Sometimes What Looks Like Distance Still Has Connection Underneath.
            </h2>
            <p className="text-[18px] leading-[1.8] mb-5">
              Early in my career, I expected my work to focus mainly on children and families.
              Working with my first couple changed that. I began to see how much can become
              fragmented in a relationship without people realizing it, and how meaningful it can be
              to help two people slow down, understand what is happening between them, and discover
              what may still be underneath the hurt.
            </p>
            <p className="text-[18px] leading-[1.8]">
              Over the years, I have worked with couples who arrived feeling as though separation was
              the only option. With time, professional guidance, and clinical support, some began to
              see their relationship differently - to understand the patterns between them, create a
              new narrative, and reconnect with what still mattered to them.
            </p>
          </Reveal>
        </div>
        <div className="w-full max-w-[1160px] mx-auto px-6">
          <ConvergingLines />
        </div>
      </section>

      {/* 5. How I Work: 4 steps */}
      <TherapyProcessSteps />

      {/* 6. My Approach Modalities */}
      <SpecializedModalities />

      {/* 7. Experience & Training Credentials */}
      <ClinicalCredentialsGrid />

      {/* 8. Hear From Vanessa (Reels) */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="w-full max-w-[1160px] mx-auto px-6">
          <Reveal className="text-center max-w-[800px] mx-auto mb-12">
            <Eyebrow className="block mb-2">HEAR FROM VANESSA</Eyebrow>
            <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">Thoughts &amp; Reflections.</h2>
          </Reveal>
          
          <RevealGroup as="ul" className="list-none p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
            {[1, 2, 3, 4].map((num) => (
              <RevealItem as="li" key={num}>
                <video 
                  src={`/videos/reel${num}.mp4`}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full rounded-2xl aspect-[9/16] object-cover block bg-black shadow-md"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 9. Core Belief */}
      <section className="relative overflow-hidden py-24 md:py-36 text-center bg-white border-y border-border">
        <div className="absolute w-[55%] pointer-events-none opacity-90 -left-[8%] top-[8%]" aria-hidden="true">
          <OrganicLine variant="curve-right" />
        </div>
        <div className="absolute w-[55%] pointer-events-none opacity-90 -right-[8%] bottom-[6%]" aria-hidden="true">
          <OrganicLine variant="curve-left" stroke="var(--color-accent-light)" />
        </div>
        <RevealGroup className="w-full max-w-[900px] mx-auto px-6 relative z-10" stagger={0.15}>
          <RevealItem>
            <Eyebrow>WHAT I BELIEVE</Eyebrow>
          </RevealItem>
          <RevealItem as="h2" className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground font-normal text-balance tracking-[-0.01em] [&>em]:italic [&>em]:text-primary mb-8">
            Your Past May Shape You. It Does Not Have to <em>Define</em> You.
          </RevealItem>
          <RevealItem as="p" className="text-[18px] md:text-[19px] leading-[1.85] mx-auto mb-10 text-foreground">
            No one owns our identities. We do not have to remain chained to the voices of the past. I
            believe there is always room to understand what we have inherited, question what no
            longer serves us, and move toward a life that feels more aligned with who we are
            becoming.
          </RevealItem>
          <RevealItem as="p" className="font-serif italic text-2xl md:text-3xl text-accent leading-snug max-w-[30ch] mx-auto">
            There is an open door we have the right to walk through. Let&apos;s walk there together.
          </RevealItem>
        </RevealGroup>
      </section>

      {/* 10. Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[1160px] mx-auto px-6">
          <Reveal className="relative overflow-hidden text-center p-8 sm:p-14 md:p-20 rounded-2xl border border-border bg-[rgba(221,235,219,0.5)]">
            <div className="absolute w-[220px] md:w-[360px] pointer-events-none -left-16 -bottom-16" aria-hidden="true">
              <OrganicLine variant="curve-left" />
            </div>
            <div className="absolute w-[220px] md:w-[360px] pointer-events-none -right-20 -top-20" aria-hidden="true">
              <OrganicLine variant="curve-right" stroke="var(--color-accent-light)" />
            </div>
            <Eyebrow>READY TO BEGIN?</Eyebrow>
            <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary max-w-[760px] mx-auto mb-5">
              You Don&apos;t Have to Have the Right Words Yet.
            </h2>
            <p className="text-[18px] leading-[1.7] text-muted max-w-[62ch] mx-auto mb-9">
              Start with a conversation about what you&apos;re experiencing and what you hope to
              understand or change.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="font-semibold text-foreground hover:text-accent inline-flex items-center gap-1.5 underline underline-offset-4 decoration-accent-light hover:decoration-accent transition-colors duration-200"
              >
                Explore Ways We Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
