import { services } from "@/constants/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          badge="Our Services"
          title="Everything You Need for Your Perfect Event"
          subtitle="From concept to execution, we offer comprehensive event services tailored to make your celebration truly special."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/${service.slug}`}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
