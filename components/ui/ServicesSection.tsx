import Image from "next/image";
import { SERVICES } from "@/constants/site-config";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 sm:px-12 lg:px-20 bg-background">
      <SectionTitle
        label="What we offer"
        title="Quality Services"
        subtitle="From foundational computer courses to full-scale engineering consultancy."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <div key={service.title} className="group cursor-pointer">
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden rounded-sm mb-5">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#E8711A] transition-colors">
              {service.title}
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}