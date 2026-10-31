import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

export default function ExperienceSection() {
  return (
    <section className="section-rhythm section--wash section--bordered">
      <div className="container split split--reverse">
        <Reveal className="split__media">
          <div className="media-frame media-frame--left">
            <Image
              src="/images/understanding-experience.jpg"
              alt="A woman in a cardigan sitting in an armchair by a sunlit window, smiling softly"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="split__line split__line--left" aria-hidden="true">
            <OrganicLine variant="curve-left" />
          </div>
        </Reveal>

        <Reveal className="split__text" delay={0.1}>
          <span className="label-eyebrow">UNDERSTANDING YOUR EXPERIENCE</span>
          <h2>You Don&apos;t Have to Carry It All By Yourself.</h2>
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
          <Link href="/services" className="btn btn-primary">
            Explore How We Work
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
