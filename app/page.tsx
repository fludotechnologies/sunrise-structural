import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import SustainabilitySection from "@/components/ui/SustainabilitySection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import ContactBanner from "@/components/ui/ContactBanner";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <ContactBanner />
    </main>
  );
}