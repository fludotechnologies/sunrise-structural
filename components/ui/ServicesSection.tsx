import Link from "next/link";
import { SERVICES } from "@/constants/site-config";
import ServiceCard from "@/components/ui/ServiceCard";

interface ServicesSectionProps {
  variant?: "home" | "full"; // home = only core, full = all
  showHeader?: boolean;
  showViewAll?: boolean;
}

export default function ServicesSection({
  variant = "home",
  showHeader = true,
  showViewAll = true,
}: ServicesSectionProps) {
  // Filter based on variant
  const displayedServices =
    variant === "home"
      ? SERVICES.filter((service) => service.isCore)
      : SERVICES;

  return (
    <section
      id="services"
      className="relative bg-[hsl(var(--color-background))] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
                {variant === "home" ? "Our Core Services" : "All Services"}
              </p>
              <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--color-foreground))]">
              {variant === "home" ? (
                <>
                  What We <span className="text-gradient-luxury">Do Best</span>
                </>
              ) : (
                <>
                  Everything We{" "}
                  <span className="text-gradient-luxury">Offer</span>
                </>
              )}
            </h2>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              icon={service.icon}
              category={service.category}
              index={index}
            />
          ))}
        </div>

        {/* View All button — only on home */}
        {variant === "home" && showViewAll && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-dark))] transition-all text-[hsl(var(--color-primary-foreground))] font-semibold text-sm px-7 py-3.5 rounded-full group shadow-md hover:shadow-lg"
            >
              View All Services
              <i
                className="ti ti-arrow-right text-lg group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}