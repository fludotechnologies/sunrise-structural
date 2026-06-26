import Link from "next/link";
import Image from "next/image";
import { SUSTAINABILITY_CONTENT } from "@/constants/site-config";

export default function SustainabilitySection() {
  const { left, right } = SUSTAINABILITY_CONTENT;

  return (
    <section className="bg-[hsl(var(--color-background))] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl shadow-luxury">
        {/* LEFT — Deep teal banner */}
        <div className="relative min-h-[480px] flex items-center px-8 sm:px-12 py-16 overflow-hidden">
          {/* Background image */}
          <Image src={left.image} alt="" fill className="object-cover" />

          {/* Deep teal overlay (theme-aware) */}
          <div
            className="absolute inset-0 bg-[hsl(var(--color-primary-dark)/0.9)]"
            aria-hidden="true"
          />

          {/* Decorative gold accent */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 bg-[hsl(var(--color-secondary)/0.15)] rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 border-[3px] border-[hsl(var(--color-secondary)/0.2)] rounded-full"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 max-w-md">
            {/* Eyebrow with line */}
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
              <p className="text-[hsl(var(--color-secondary))] text-xs font-bold uppercase tracking-[0.2em]">
                {left.eyebrow}
              </p>
            </div>

            <h2 className="text-[hsl(var(--color-primary-foreground))] text-3xl sm:text-4xl font-bold leading-tight mb-8">
              {left.title}
            </h2>

            <Link
              href={left.ctaHref}
              className="group inline-flex items-center gap-3 bg-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary-dark))] transition-all text-[hsl(var(--color-secondary-foreground))] font-bold text-sm tracking-[0.15em] uppercase px-8 py-3.5 rounded-full shadow-gold hover:shadow-glow-gold"
            >
              {left.ctaLabel}
              <i
                className="ti ti-arrow-right text-base group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT — Gold banner */}
        <div className="relative min-h-[480px] flex items-center px-8 sm:px-12 py-16 overflow-hidden">
          {/* Background image */}
          <Image src={right.image} alt="" fill className="object-cover" />

          {/* Gold overlay (theme-aware) */}
          <div
            className="absolute inset-0 bg-[hsl(var(--color-secondary)/0.92)]"
            aria-hidden="true"
          />

          {/* Decorative shapes */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 bg-[hsl(var(--color-primary-dark)/0.15)] rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -right-16 w-56 h-56 border-[3px] border-[hsl(var(--color-primary-dark)/0.15)] rounded-full"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-md">
            <h3 className="text-[hsl(var(--color-primary-dark))] text-2xl sm:text-3xl font-bold mb-3">
              {right.title}
            </h3>
            <p className="text-[hsl(var(--color-primary-dark)/0.85)] text-[14px] leading-relaxed mb-8">
              {right.subtitle}
            </p>

            <ul className="space-y-5">
              {right.practices.map((item) => (
                <li
                  key={item.label}
                  className="group flex items-center gap-4 text-[hsl(var(--color-primary-dark))]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[hsl(var(--color-primary-dark)/0.1)] group-hover:bg-[hsl(var(--color-primary-dark))] flex items-center justify-center transition-all duration-300">
                    <i
                      className={`ti ${item.icon} text-xl group-hover:text-[hsl(var(--color-secondary))] transition-colors`}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-bold">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}