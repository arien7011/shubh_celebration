import { motion } from "framer-motion";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/constants/services";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Event Decoration Services"
        description="Explore our comprehensive range of event decoration services including wedding decoration, birthday parties, corporate events, and more in Delhi NCR."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Premium Event Services for Every Celebration
            </h1>
            <p className="text-muted-foreground text-lg">
              From intimate gatherings to grand celebrations, we offer comprehensive
              event decoration and management services tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Why Choose Our Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Promise"
            title="What Sets Our Services Apart"
            subtitle="Every service we offer comes with our commitment to excellence and customer satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customized Solutions",
                description:
                  "Every event is unique. We tailor our services to match your vision, theme, and budget perfectly.",
              },
              {
                title: "End-to-End Management",
                description:
                  "From planning to execution, we handle every detail so you can enjoy your celebration stress-free.",
              },
              {
                title: "Quality Guaranteed",
                description:
                  "Premium materials, professional execution, and on-time delivery - we don't compromise on quality.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
