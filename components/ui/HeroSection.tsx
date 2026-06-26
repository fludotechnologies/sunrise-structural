import Link from "next/link";
import Image from "next/image";
import { HERO_CONTENT } from "@/constants/site-config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center px-6 sm:px-12 lg:px-20 pt-20 pb-40">
      {/* ↑ Extra pb-40 creates room for About card to overlap */}
      <Image
        src={HERO_CONTENT.backgroundImage}
        alt=""
        fill
        priority
        quality={85}
        className="object-cover object-center -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#16213e]/80 to-[#0f3460]/70 -z-10" />

      <div className="relative z-10 max-w-6xl w-full">
        <p className="text-[#E8711A] text-lg sm:text-xl font-semibold mb-4 tracking-wide">
          {HERO_CONTENT.eyebrow}
        </p>

        <h1 className="text-white font-bold leading-[0.95] mb-8 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
          {HERO_CONTENT.titlePart1}{" "}
          <span className="text-[#E8711A]">+</span>{" "}
          {HERO_CONTENT.titlePart2}
        </h1>

        <p className="text-white/80 text-[15px] sm:text-base max-w-2xl leading-relaxed mb-10">
          {HERO_CONTENT.description}
        </p>

        <Link
          href={HERO_CONTENT.ctaHref}
          className="inline-block border-2 border-white/80 hover:border-[#E8711A] hover:bg-[#E8711A] transition-all text-white px-10 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase"
        >
          {HERO_CONTENT.ctaLabel}
        </Link>
      </div>
    </section>
  );
}