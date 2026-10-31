import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

export default function MeetVanessaSection() {
  return (
    <section className="section-rhythm section--sage section--bordered">
      <div className="container split">
        <Reveal className="split__text">
          <span className="label-eyebrow">MEET VANESSA</span>
          <h2>The Person Behind the Work.</h2>
          <p className="body-large">
            Vanessa M. Sierra is a Licensed Marriage and Family Therapist with more than 20 years
            of experience working with adults, couples, families, and children. Her work is
            grounded in listening closely, understanding the patterns behind what clients are
            experiencing, and creating a supportive space where people can feel understood, safe,
            and ready to move toward change.
          </p>
          <Link href="/meet-vanessa" className="btn btn-primary">
            Meet Vanessa
          </Link>
        </Reveal>

        <Reveal className="portrait" delay={0.1}>
          <div className="portrait__frame">
            <Image
              src="/images/vanessa.jpg"
              alt="Portrait of Vanessa M. Sierra, LMFT"
              fill
              sizes="(max-width: 900px) 80vw, 400px"
            />
          </div>
          <div className="portrait__flourish" aria-hidden="true">
            <OrganicLine variant="loop" stroke="var(--salmon)" />
          </div>
          <div className="portrait__badge">
            <Image
              src="/badge.png"
              alt="Influential Women Verified"
              width={120}
              height={120}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
