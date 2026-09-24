'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import testimonialsData from '@/content/testimonials.json';
import { Reveal, EASE_EDITORIAL } from '@/components/motion/Reveal';

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
    <section className="section-rhythm testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="label-eyebrow">WHAT CLIENTS HAVE SHARED</span>
          <h2 id="testimonials-heading">A Few Words From Those I&apos;ve Worked With.</h2>
        </Reveal>

        <Reveal className="testimonial-stage">
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
            <div className="testimonial-card">
              <span className="testimonial-card__mark" aria-hidden="true">
                &ldquo;
              </span>
              <div className="testimonial-card__viewport" aria-live={isPaused ? 'polite' : 'off'}>
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
                    className="testimonial-card__figure"
                  >
                    <blockquote className="testimonial-card__quote">{current.quote}</blockquote>
                    <figcaption className="testimonial-card__author">
                      <span className="testimonial-card__avatar" aria-hidden="true">
                        {current.author.charAt(0)}
                      </span>
                      <span>
                        <cite>{current.author}</cite>
                        <span className="testimonial-card__role">{current.role}</span>
                      </span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>

            <div className="testimonial-controls">
              <button type="button" onClick={prevSlide} aria-label="Previous testimonial" className="carousel-btn">
                <ChevronLeft size={18} strokeWidth={1.8} />
              </button>

              <div className="testimonial-dots">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
                    aria-label={`Show testimonial ${idx + 1} of ${count}`}
                    aria-current={currentIndex === idx ? 'true' : undefined}
                    className="testimonial-dot"
                  >
                    <span />
                  </button>
                ))}
              </div>

              <button type="button" onClick={nextSlide} aria-label="Next testimonial" className="carousel-btn">
                <ChevronRight size={18} strokeWidth={1.8} />
              </button>

              {!reduceMotion && (
                <button
                  type="button"
                  onClick={() => setIsStopped((s) => !s)}
                  aria-label={isStopped ? 'Resume automatic rotation' : 'Pause automatic rotation'}
                  className="carousel-btn carousel-btn--quiet"
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
