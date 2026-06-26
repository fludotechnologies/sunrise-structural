import ServicesSection from "@/components/ui/ServicesSection";
import ContactBanner from "@/components/ui/ContactBanner";

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <div className="relative px-6 pt-32 pb-20 text-center bg-gradient-to-br from-[hsl(var(--color-primary-dark))] via-[hsl(var(--color-primary))] to-[hsl(var(--color-primary-light))] overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-10 right-10 w-72 h-72 bg-[hsl(var(--color-secondary)/0.15)] rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-[hsl(var(--color-accent)/0.1)] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-primary-foreground))] mb-4 leading-tight">
            Our{" "}
            <span className="text-gradient-gold">Services</span>
          </h1>

          <p className="text-[hsl(var(--color-primary-foreground)/0.75)] max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            From foundational computer courses to full-scale engineering
            consultancy — explore everything we offer.
          </p>
        </div>
      </div>

      <ServicesSection />
      <ContactBanner />
    </main>
  );
}