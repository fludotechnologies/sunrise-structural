import { SERVICES } from "@/constants/site-config";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

const CATEGORIES = [
  "Training",
  "Development",
  "Education",
  "Consultancy",
  "Design",
  "Safety",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 sm:px-12 lg:px-20 bg-[hsl(var(--color-background-alt))] overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--color-primary)/0.06)] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--color-secondary)/0.08)] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          label="What we offer"
          title="Quality Services"
          subtitle="From foundational computer courses to full-scale engineering consultancy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              index={idx}
              category={CATEGORIES[idx] || "Service"}
              href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}