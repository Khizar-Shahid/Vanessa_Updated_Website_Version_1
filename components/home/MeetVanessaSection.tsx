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

        <Reveal className="relative justify-self-center w-[min(100%,400px)] max-[900px]:w-[min(86%,380px)] max-[900px]:mt-4 before:content-[''] before:absolute before:inset-[-18px_18px_18px_-18px] before:border before:border-sage before:rounded-md before:pointer-events-none" delay={0.1}>
          <div className="relative aspect-[4/5] rounded-md overflow-hidden shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)]">
            <Image
              src="/images/vanessa.jpg"
              alt="Portrait of Vanessa M. Sierra, LMFT"
              fill
              sizes="(max-width: 900px) 80vw, 400px"
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="absolute w-[62%] -right-[34px] max-[900px]:-right-3 -bottom-10 z-10 pointer-events-none" aria-hidden="true">
            <OrganicLine variant="loop" stroke="var(--salmon)" />
          </div>
          <div className="absolute -left-7 max-[900px]:-left-3.5 -bottom-6 max-[900px]:-bottom-4.5 w-[110px] h-[110px] max-[900px]:w-[92px] max-[900px]:h-[92px] z-20 drop-shadow-[0_10px_20px_rgba(44,38,34,0.16)] pointer-events-none">
            <Image
              src="/badge.png"
              alt="Influential Women Verified"
              width={120}
              height={120}
              className="w-full h-full object-contain block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
