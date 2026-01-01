import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Phone, MessageCircle } from "lucide-react";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PackageCard } from "@/components/shared/PackageCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { getServiceBySlug, services } from "@/constants/services";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/constants/site-config";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.title} in Delhi NCR`}
        description={service.shortDescription}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container-custom relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="text-sm">
                Professional Service
              </Badge>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg mb-8">{service.shortDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </a>
              <a href={getPhoneLink()}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="About This Service"
                centered={false}
                className="mb-8"
              />
              <div className="prose prose-lg max-w-none">
                {service.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-muted/30 rounded-xl">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Quick Info
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Available in Delhi NCR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Customizable packages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Professional team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Premium materials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>On-time setup</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    Starting from
                  </p>
                  <p className="font-heading text-2xl font-bold text-primary">
                    {service.packages[0].priceRange}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Packages"
            title="Choose Your Perfect Package"
            subtitle="Flexible packages designed to meet different requirements and budgets."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                serviceName={service.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Gallery"
            title={`Our ${service.title} Work`}
            subtitle="Browse through our portfolio of successful events."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? "h-[400px]" : "h-[190px]"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title.toLowerCase()} services.`}
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Related Services"
            title="You Might Also Like"
            subtitle="Explore our other services to complete your event experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, index) => (
              <Link key={relatedService.id} to={`/services/${relatedService.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={relatedService.image}
                    alt={relatedService.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {relatedService.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
