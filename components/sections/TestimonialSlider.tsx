'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import testimonialsData from '@/content/testimonials.json';
import { Reveal, EASE_EDITORIAL } from '@/components/motion/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';

const AUTO_ADVANCE_MS = 8000;

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const reduceMotion = useReducedMotion();

  const testimonials = testimonialsData;
  const count = testimonials.length;

  const goTo = useCallback(
    (idx: number, dir: number) => {
      setDirection(dir);
      setCurrentIndex(((idx % count) + count) % count);
    },
    [count],
  );

  const nextSlide = useCallback(() => goTo(currentIndex + 1, 1), [goTo, currentIndex]);
  const prevSlide = useCallback(() => goTo(currentIndex - 1, -1), [goTo, currentIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
  };

  // Gentle auto-advance; paused on hover/focus, by the user, and never under reduced motion
  const isPaused = isHovered || isFocused || isStopped || !!reduceMotion;
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border" aria-labelledby="testimonials-heading">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <Reveal className="text-center max-w-[780px] mx-auto mb-14 [&>h2]:mb-4">
          <Eyebrow>WHAT CLIENTS HAVE SHARED</Eyebrow>
          <h2 id="testimonials-heading" className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">A Few Words From Those I&apos;ve Worked With.</h2>
        </Reveal>

        <Reveal className="max-w-[860px] mx-auto">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
          >
            <div className="relative bg-white border border-border rounded-2xl shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] px-6 py-12 sm:px-12 md:py-16 md:px-16 text-center">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-[110px] md:text-[120px] leading-none text-accent-light pointer-events-none select-none opacity-80" aria-hidden="true">
                &ldquo;
              </span>
              <div className="min-h-[250px] max-sm:min-h-[340px] grid items-center" aria-live={isPaused ? 'polite' : 'off'}>
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.figure
                    key={current.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${currentIndex + 1} of ${count}`}
                    custom={direction}
                    initial={reduceMotion ? false : { opacity: 0, x: direction * 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: direction * -28 }}
                    transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
                    className="m-0"
                  >
                    <blockquote className="font-serif italic text-[19px] md:text-[23px] leading-[1.6] text-foreground max-w-[62ch] mx-auto mb-8">
                      {current.quote}
                    </blockquote>
                    <figcaption className="inline-flex items-center gap-3.5 text-left">
                      <span className="w-11 h-11 rounded-full flex items-center justify-center bg-primary-soft text-primary font-serif text-lg font-bold" aria-hidden="true">
                        {current.author.charAt(0)}
                      </span>
                      <span>
                        <cite className="block font-serif not-italic text-lg font-medium leading-tight text-foreground">
                          {current.author}
                        </cite>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-muted">
                          {current.role}
                        </span>
                      </span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} strokeWidth={1.8} />
              </button>

              <div className="flex items-center">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
                    aria-label={`Show testimonial ${idx + 1} of ${count}`}
                    aria-current={currentIndex === idx ? 'true' : undefined}
                    className="w-[30px] h-[44px] flex items-center justify-center bg-transparent border-0 cursor-pointer"
                  >
                    <span
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-black/25'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
              >
                <ChevronRight size={18} strokeWidth={1.8} />
              </button>

              {!reduceMotion && (
                <button
                  type="button"
                  onClick={() => setIsStopped((s) => !s)}
                  aria-label={isStopped ? 'Resume automatic rotation' : 'Pause automatic rotation'}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border-0 bg-transparent text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  {isStopped ? <Play size={14} strokeWidth={1.8} /> : <Pause size={14} strokeWidth={1.8} />}
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
