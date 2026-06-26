import Link from "next/link";
import Image from "next/image";
import { HERO_CONTENT } from "@/constants/site-config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-end px-6 sm:px-12 lg:px-20 pt-32 pb-20 sm:pb-24">
      {/* Background image */}
      <Image
        src={HERO_CONTENT.backgroundImage}
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center -z-10"
      />

      {/* Cinematic dark overlay — heavier at bottom for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 -z-10"
        aria-hidden="true"
      />

      {/* Subtle warm tint */}
      <div
        className="absolute inset-0 bg-[hsl(var(--color-primary-dark)/0.15)] -z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Eyebrow with line accent */}
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-10 bg-white/60" />
          <p className="text-white/90 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
            {HERO_CONTENT.eyebrow}
          </p>
        </div>

        <h1 className="font-serif text-white font-bold leading-[1.05] mb-10 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight max-w-5xl">
          {HERO_CONTENT.titleStart}{" "}
          <span className="font-serif text-white/95">
            {HERO_CONTENT.titleAccent}
          </span>{" "}
          {HERO_CONTENT.titleEnd}
        </h1>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={HERO_CONTENT.primaryCta.href}
            className="group inline-flex items-center gap-2 bg-white hover:bg-[hsl(var(--color-secondary))] transition-all duration-300 text-[hsl(var(--color-primary-dark))] hover:text-[hsl(var(--color-secondary-foreground))] pl-6 pr-1.5 py-1.5 rounded-full font-medium text-base shadow-xl"
          >
            <span className="mr-1">{HERO_CONTENT.primaryCta.label}</span>
            <span className="w-10 h-10 rounded-full bg-[hsl(var(--color-primary-dark))] group-hover:bg-[hsl(var(--color-primary))] flex items-center justify-center transition-colors">
              <i
                className="ti ti-arrow-up-right text-white text-lg group-hover:rotate-45 transition-transform duration-300"
                aria-hidden="true"
              />
            </span>
          </Link>

          {/* Secondary text link with arrow */}
          <Link
            href={HERO_CONTENT.secondaryCta.href}
            className="group inline-flex items-center gap-2 text-white font-medium text-base border-b border-white/40 hover:border-white pb-1 transition-colors"
          >
            {HERO_CONTENT.secondaryCta.label}
            <i
              className="ti ti-arrow-up-right text-base group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
