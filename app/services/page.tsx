import ServicesSection from "@/components/ui/ServicesSection";
import ContactBanner from "@/components/ui/ContactBanner";

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <div className="px-6 py-16 text-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <span className="inline-block bg-[#E8711A]/20 text-[#E8711A] border border-[#E8711A]/40 px-4 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.05em] mb-4">
          What we offer
        </span>
        <h1 className="text-4xl font-medium text-white mb-3">Our Services</h1>
        <p className="text-white/70 max-w-md mx-auto text-[15px] leading-relaxed">
          From foundational computer courses to full-scale engineering consultancy.
        </p>
      </div>

      <ServicesSection />
      <ContactBanner />
    </main>
  );
}