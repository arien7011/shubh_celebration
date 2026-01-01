import { SEO } from "@/components/shared/SEO";
import {
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  GallerySection,
  TestimonialsSection,
  ProcessSection,
  ServiceAreasSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Premium Event Decoration Services in Delhi NCR"
        description="Professional balloon decoration & event management for weddings, birthdays, corporate events in Delhi, Gurgaon, Noida. 500+ events delivered. Get free quote today!"
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CTASection />
    </>
  );
}
