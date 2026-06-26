"use client";

import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/constants/site-config";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive slides
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - slidesPerView);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[hsl(var(--color-background))] via-[hsl(var(--color-background-alt))] to-[hsl(var(--color-background))] overflow-hidden">
      {/* Decorative background quote */}
      <div
        className="absolute top-10 right-10 text-[280px] font-serif text-[hsl(var(--color-secondary)/0.04)] leading-none pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Decorative blur */}
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[hsl(var(--color-primary)/0.05)] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-[hsl(var(--color-secondary))]" />
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
                Testimonials
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--color-foreground))] leading-[1.1] max-w-2xl">
              Trusted by industry{" "}
              <span className="text-gradient-luxury">leaders</span> worldwide
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group w-14 h-14 rounded-full border-2 border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary))] flex items-center justify-center transition-all duration-300"
            >
              <i
                className="ti ti-arrow-left text-xl text-[hsl(var(--color-foreground))] group-hover:text-[hsl(var(--color-secondary-foreground))] transition-colors"
                aria-hidden="true"
              />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group w-14 h-14 rounded-full border-2 border-[hsl(var(--color-secondary))] bg-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary-dark))] flex items-center justify-center transition-all duration-300 shadow-gold"
            >
              <i
                className="ti ti-arrow-right text-xl text-[hsl(var(--color-secondary-foreground))]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <article className="group relative bg-[hsl(var(--color-surface))] border border-[hsl(var(--color-border))] rounded-2xl p-8 h-full min-h-[340px] flex flex-col hover:border-[hsl(var(--color-secondary)/0.5)] hover:shadow-luxury hover:-translate-y-1 transition-all duration-500">
                  {/* Large decorative quote mark */}
                  <div
                    className="absolute top-6 right-8 text-7xl font-serif text-[hsl(var(--color-secondary)/0.15)] leading-none pointer-events-none group-hover:text-[hsl(var(--color-secondary)/0.3)] transition-colors"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <i
                        key={i}
                        className="ti ti-star-filled text-[hsl(var(--color-secondary))] text-base"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[15px] text-[hsl(var(--color-foreground)/0.8)] leading-[1.8] flex-1 relative z-10 font-normal">
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-12 bg-[hsl(var(--color-secondary))] my-6" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary-dark))] flex items-center justify-center text-sm font-bold text-[hsl(var(--color-primary-foreground))] shadow-md ring-2 ring-[hsl(var(--color-secondary)/0.3)]">
                        {t.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[hsl(var(--color-surface))]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[hsl(var(--color-foreground))] truncate">
                        {t.name}
                      </p>
                      <p className="text-[12px] text-[hsl(var(--color-foreground-muted))] truncate">
                        {t.role}{" "}
                        <span className="text-[hsl(var(--color-secondary))]">
                          · {t.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom progress + dots */}
        <div className="flex items-center justify-between gap-6 mt-12">
          {/* Slide counter */}
          <div className="flex items-baseline gap-2 text-[hsl(var(--color-foreground))]">
            <span className="text-2xl font-bold text-[hsl(var(--color-secondary))] tabular-nums">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-[hsl(var(--color-foreground-muted))]">
              / {String(maxIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex-1 max-w-md h-[2px] bg-[hsl(var(--color-border))] relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-[hsl(var(--color-secondary))] transition-all duration-700 ease-out rounded-full"
              style={{
                width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
              }}
            />
          </div>

          {/* Dots */}
          <div className="hidden sm:flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[hsl(var(--color-secondary))]"
                    : "w-2 bg-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-secondary)/0.5)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}