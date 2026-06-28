"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ABOUT_CONTENT, STATS } from "@/constants/site-config";
import Counter from "@/components/ui/Counter";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[hsl(var(--color-background))] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--color-secondary)/0.08)] rounded-full blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--color-primary)/0.08)] rounded-full blur-3xl -z-0"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Grid — Image LEFT, Content RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — Image with slide-in from left */}
          <div
            className={`relative transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
                alt="Our team collaborating"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>

            {/* Decorative accent behind image */}
            <div
              className={`absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--color-secondary)/0.15)] rounded-2xl -z-10 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              aria-hidden="true"
            />
            <div
              className={`absolute -top-6 -right-6 w-24 h-24 border-[3px] border-[hsl(var(--color-primary)/0.25)] rounded-2xl -z-10 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              aria-hidden="true"
            />
          </div>

          {/* RIGHT — Content with staggered fade-up */}
          <div>
            {/* Heading */}
            <h2
              className={`text-3xl sm:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-3 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              About <span className="text-gradient-luxury">Us</span>
            </h2>

            {/* Sub-title */}
            <p
              className={`text-lg sm:text-xl italic font-semibold text-[hsl(var(--color-primary))] leading-snug mb-6 transition-all duration-700 delay-100 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {ABOUT_CONTENT.title}
            </p>

            {/* Paragraphs */}
            <div
              className={`space-y-4 text-[14.5px] leading-relaxed text-[hsl(var(--color-foreground-muted))] transition-all duration-700 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p>{ABOUT_CONTENT.paragraph1}</p>
              <p>{ABOUT_CONTENT.paragraph2}</p>
            </div>

            {/* CTA button */}
            <div
              className={`transition-all duration-700 delay-300 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary-dark))] transition-all text-[hsl(var(--color-secondary-foreground))] font-semibold text-sm px-7 py-3.5 rounded-full group shadow-gold hover:shadow-glow-gold hover:-translate-y-0.5"
              >
                Learn More
                <i
                  className="ti ti-arrow-right text-lg group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* BELOW — Stats Counter Section */}
        <div className="mt-20">
          {/* Heading with fade-up */}
          <div
            className={`text-center mb-10 transition-all duration-700 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
                Our Impact
              </p>
              <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--color-foreground))]">
              Numbers That Speak{" "}
              <span className="text-gradient-luxury">For Us</span>
            </h3>
          </div>

          {/* Stats grid */}
          <div className="bg-[hsl(var(--color-surface))] rounded-2xl shadow-luxury grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  transitionDelay: isVisible ? `${index * 120 + 400}ms` : "0ms",
                }}
                className={`group relative p-6 sm:p-8 flex flex-col items-center text-center justify-center hover:bg-[hsl(var(--color-secondary)/0.05)] transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                  ${
                    index !== STATS.length - 1
                      ? "lg:border-r border-[hsl(var(--color-border))]"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "border-r lg:border-r border-[hsl(var(--color-border))]"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b lg:border-b-0 border-[hsl(var(--color-border))]"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--color-secondary)/0.12)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--color-secondary))] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i
                    className={`ti ${stat.icon} text-2xl text-[hsl(var(--color-secondary))] group-hover:text-[hsl(var(--color-secondary-foreground))] transition-colors duration-300`}
                    aria-hidden="true"
                  />
                </div>

                {/* Animated counter */}
                <div className="flex items-baseline gap-1 mb-2">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                    className="text-4xl sm:text-5xl font-bold text-[hsl(var(--color-foreground))] tabular-nums"
                  />
                </div>

                {/* Label */}
                <p className="text-[13px] text-[hsl(var(--color-foreground-muted))] leading-snug">
                  {stat.label}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--color-secondary))] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}