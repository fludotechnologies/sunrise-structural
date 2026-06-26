import Link from "next/link";
import { ABOUT_CONTENT, STATS } from "@/constants/site-config";
import Counter from "@/components/ui/Counter";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-background py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a2842]/5 rounded-full blur-3xl -z-0"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[#F5A623]" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              About Us
            </p>
            <span className="h-px w-10 bg-[#F5A623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Building Excellence Together
          </h2>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          {/* LEFT — Orange card with decorative elements */}
          <div className="relative bg-gradient-to-br from-[#F5A623] to-[#E8711A] p-8 sm:p-12 overflow-hidden">
            {/* Decorative shapes */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 border-[3px] border-white/15 rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-20 w-56 h-56 border-[3px] border-white/10 rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1a2842] mb-4">
                {ABOUT_CONTENT.eyebrow}
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight text-[#1a2842] mb-6">
                {ABOUT_CONTENT.title}
              </h3>

              <div className="h-1 w-16 bg-[#1a2842] mb-6 rounded-full" />

              <p className="text-[14px] leading-relaxed text-[#1a2842]/85 mb-5">
                {ABOUT_CONTENT.paragraph1}
              </p>
              <p className="text-[14px] leading-relaxed text-[#1a2842]/85 mb-8">
                {ABOUT_CONTENT.paragraph2}
              </p>

              {/* CTA button */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1a2842] hover:bg-[#0d1729] transition-all text-white font-semibold text-sm px-7 py-3.5 rounded-full group"
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
          <div className="bg-card grid grid-cols-2 grid-rows-2">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative p-6 sm:p-8 flex flex-col justify-center hover:bg-[#F5A623]/5 transition-colors duration-300
                  ${index % 2 === 0 ? "border-r border-border" : ""}
                  ${index < 2 ? "border-b border-border" : ""}
                `}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4 group-hover:bg-[#F5A623] transition-colors duration-300">
                  <i
                    className={`ti ${stat.icon} text-2xl text-[#F5A623] group-hover:text-white transition-colors duration-300`}
                    aria-hidden="true"
                  />
                </div>

                {/* Animated counter */}
                <div className="flex items-baseline gap-1 mb-2">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                    className="text-4xl sm:text-5xl font-bold text-foreground tabular-nums"
                  />
                </div>

                {/* Label */}
                <p className="text-[13px] text-muted-foreground leading-snug">
                  {stat.label}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#F5A623] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}