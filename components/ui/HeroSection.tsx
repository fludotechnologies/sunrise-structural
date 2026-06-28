import Link from "next/link";
import Image from "next/image";
import { HERO_CONTENT } from "@/constants/site-config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center sm:items-end px-5 sm:px-8 md:px-12 lg:px-20 pt-24 sm:pt-32 pb-20 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Background image */}
      <Image
        src={HERO_CONTENT.backgroundImage}
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center -z-10"
      />

      {/* Cinematic dark overlay — heavier at bottom for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 -z-10"
        aria-hidden="true"
      />

      {/* Subtle warm tint */}
      <div
        className="absolute inset-0 bg-[hsl(var(--color-primary-dark)/0.15)] -z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Eyebrow with line accent */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span className="h-px w-8 sm:w-10 bg-white/60" />
          <p className="text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase">
            {HERO_CONTENT.eyebrow}
          </p>
        </div>

        {/* Heading — responsive scaling */}
        <h1 className="font-serif text-white font-bold leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 md:mb-10
          text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          tracking-tight max-w-5xl">
          {HERO_CONTENT.titleStart}{" "}
          <span className="font-serif text-white/95">
            {HERO_CONTENT.titleAccent}
          </span>{" "}
          {HERO_CONTENT.titleEnd}
        </h1>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6">
          {/* Primary button */}
          <Link
            href={HERO_CONTENT.primaryCta.href}
            className="group inline-flex items-center justify-between sm:justify-start gap-2 bg-white hover:bg-[hsl(var(--color-secondary))] transition-all duration-300 text-[hsl(var(--color-primary-dark))] hover:text-[hsl(var(--color-secondary-foreground))] pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full font-medium text-sm sm:text-base shadow-xl w-fit"
          >
            <span className="mr-1">{HERO_CONTENT.primaryCta.label}</span>
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[hsl(var(--color-primary-dark))] group-hover:bg-[hsl(var(--color-primary))] flex items-center justify-center transition-colors shrink-0">
              <i
                className="ti ti-arrow-up-right text-white text-base sm:text-lg group-hover:rotate-45 transition-transform duration-300"
                aria-hidden="true"
              />
            </span>
          </Link>

          {/* Secondary text link with arrow */}
          <Link
            href={HERO_CONTENT.secondaryCta.href}
            className="group inline-flex items-center gap-2 text-white font-medium text-sm sm:text-base border-b border-white/40 hover:border-white pb-1 transition-colors w-fit"
          >
            {HERO_CONTENT.secondaryCta.label}
            <i
              className="ti ti-arrow-up-right text-sm sm:text-base group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Optional scroll indicator (hidden on small screens) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <i className="ti ti-chevron-down text-lg" aria-hidden="true" />
      </div>
    </section>
  );
}