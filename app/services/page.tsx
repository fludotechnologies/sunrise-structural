import Link from "next/link";
import ServicesSection from "@/components/ui/ServicesSection";
import ContactBanner from "@/components/ui/ContactBanner";

export default function ServicesPage() {
  return (
    <main>
      {/* HERO HEADER*/}
      <section className="relative px-6 pt-36 pb-24 text-center bg-linear-to-br from-[hsl(var(--color-primary-dark))] via-[hsl(var(--color-primary))] to-[hsl(var(--color-primary-light))] overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-10 right-10 w-72 h-72 bg-[hsl(var(--color-secondary)/0.15)] rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-[hsl(var(--color-accent)/0.1)] rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[hsl(var(--color-primary-foreground)/0.7)] mb-6"
          >
            <Link
              href="/"
              className="hover:text-[hsl(var(--color-secondary))] transition-colors"
            >
              Home
            </Link>
            <i className="ti ti-chevron-right text-xs" aria-hidden="true" />
            <span className="text-[hsl(var(--color-secondary))] font-medium">
              Services
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[hsl(var(--color-secondary))]">
              What We Offer
            </p>
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-primary-foreground))] mb-5 leading-tight">
            Our <span className="text-gradient-gold">Services</span>
          </h1>

          {/* Description */}
          <p className="text-[hsl(var(--color-primary-foreground)/0.8)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            From foundational computer courses to full-scale engineering
            consultancy — explore everything we offer to help you build a
            successful career.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary-dark))] transition-all text-[hsl(var(--color-secondary-foreground))] font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg group"
            >
              Browse Services
              <i
                className="ti ti-arrow-down text-lg group-hover:translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-[hsl(var(--color-primary-foreground))] font-semibold text-sm px-7 py-3.5 rounded-full"
            >
              Get in Touch
              <i className="ti ti-message-circle text-lg" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom curve / divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 bg-[hsl(var(--color-background))]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 0)",
          }}
          aria-hidden="true"
        />
      </section>
      <ServicesSection variant="full" />
      <ContactBanner />
    </main>
  );
}