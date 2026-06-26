import Link from "next/link";
import { ABOUT_CONTENT, STATS } from "@/constants/site-config";
import Counter from "@/components/ui/Counter";

export default function AboutSection() {
  return (
    <section
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
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
              About Us
            </p>
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--color-foreground))]">
            Building Excellence{" "}
            <span className="text-gradient-luxury">Together</span>
          </h2>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-luxury rounded-2xl overflow-hidden">
          {/* LEFT — Primary card with decorative elements */}
          <div className="relative bg-gradient-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary-dark))] p-8 sm:p-12 overflow-hidden">
            {/* Decorative shapes */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 border-[3px] border-[hsl(var(--color-secondary)/0.25)] rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-20 w-56 h-56 border-[3px] border-white/10 rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute top-8 right-8 w-12 h-12 bg-[hsl(var(--color-secondary)/0.2)] rounded-full"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[hsl(var(--color-secondary))] mb-4">
                {ABOUT_CONTENT.eyebrow}
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight text-[hsl(var(--color-primary-foreground))] mb-6">
                {ABOUT_CONTENT.title}
              </h3>

              <div className="h-1 w-16 bg-[hsl(var(--color-secondary))] mb-6 rounded-full" />

              <p className="text-[14px] leading-relaxed text-[hsl(var(--color-primary-foreground)/0.85)] mb-5">
                {ABOUT_CONTENT.paragraph1}
              </p>
              <p className="text-[14px] leading-relaxed text-[hsl(var(--color-primary-foreground)/0.85)] mb-8">
                {ABOUT_CONTENT.paragraph2}
              </p>

              {/* CTA button - GOLD for premium feel */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary-dark))] transition-all text-[hsl(var(--color-secondary-foreground))] font-semibold text-sm px-7 py-3.5 rounded-full group shadow-gold hover:shadow-glow-gold"
              >
                Learn More
                <i
                  className="ti ti-arrow-right text-lg group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT — Stats grid */}
          <div className="bg-[hsl(var(--color-surface))] grid grid-cols-2 grid-rows-2">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative p-6 sm:p-8 flex flex-col justify-center hover:bg-[hsl(var(--color-secondary)/0.05)] transition-colors duration-300
                  ${index % 2 === 0 ? "border-r border-[hsl(var(--color-border))]" : ""}
                  ${index < 2 ? "border-b border-[hsl(var(--color-border))]" : ""}
                `}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--color-secondary)/0.12)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--color-secondary))] transition-colors duration-300">
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
                <div className="absolute bottom-0 left-0 w-0 h-0.75 bg-[hsl(var(--color-secondary))] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}