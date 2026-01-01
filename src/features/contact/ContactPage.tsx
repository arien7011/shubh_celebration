import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle
} from "lucide-react";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site-config";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: [
      "Shubh Celebration Events",
      "123, Celebration Tower, Sector 18",
      "Noida, Uttar Pradesh - 201301"
    ],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Sector+18+Noida"
    }
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+91 98765 43210 (Primary)",
      "+91 98765 43211 (WhatsApp)",
      "+91 11 4567 8900 (Landline)"
    ],
    action: {
      label: "Call Now",
      href: "tel:+919876543210"
    }
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@shubhcelebration.com",
      "bookings@shubhcelebration.com",
      "careers@shubhcelebration.com"
    ],
    action: {
      label: "Send Email",
      href: "mailto:info@shubhcelebration.com"
    }
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Saturday: 10 AM - 8 PM",
      "Sunday: 11 AM - 6 PM",
      "Available 24/7 for events"
    ],
    action: {
      label: "Schedule Call",
      href: "#contact-form"
    }
  }
];

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: siteConfig.socialLinks.instagram,
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    followers: "50K+"
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: siteConfig.socialLinks.facebook,
    color: "hover:bg-blue-600",
    followers: "35K+"
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: siteConfig.socialLinks.youtube,
    color: "hover:bg-red-600",
    followers: "10K+"
  },
  { 
    name: "WhatsApp", 
    icon: MessageCircle, 
    href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`,
    color: "hover:bg-green-500",
    followers: "Quick Chat"
  }
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-4 weeks in advance for regular events. For peak seasons (October-February), booking 4-6 weeks ahead ensures availability."
  },
  {
    question: "Do you provide services outside Delhi NCR?",
    answer: "Yes! While our primary service area is Delhi NCR, we also cater to events in nearby cities like Jaipur, Agra, and Chandigarh with additional travel charges."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including UPI, bank transfers, credit/debit cards, and cash. A 30% advance is required to confirm bookings."
  },
  {
    question: "Can I customize the decoration packages?",
    answer: "Absolutely! All our packages are customizable. Our team will work with you to create a personalized setup that matches your vision and budget."
  }
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Shubh Celebration for balloon decoration and event management services in Delhi NCR. Call, email, or visit us today!"
        keywords={["contact balloon decorator", "event planner Delhi NCR", "book decoration services", "Shubh Celebration contact"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Create Something{" "}
              <span className="gradient-text">Beautiful Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or ready to book? We're here to help you plan the 
              perfect celebration. Reach out through any channel that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <info.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    <ul className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={info.action.href}
                      target={info.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        {info.action.label}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 lg:py-20 bg-muted/30" id="contact-form">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Send a Message"
                title="Fill Out The Form"
                description="Share your event details and we'll get back to you within 24 hours with a custom quote."
                align="left"
              />
              
              <Card className="mt-8">
                <CardContent className="p-6 lg:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566174200842!2d77.31860047549787!3d28.613939075674997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shubh Celebration Location"
                    className="w-full"
                  ></iframe>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-background border hover:text-white transition-all ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.followers}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Need Quick Response?</h4>
                      <p className="text-sm opacity-90 mb-3">
                        Chat with us on WhatsApp for instant assistance and quick quotes.
                      </p>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'm interested in your decoration services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            badge="FAQs"
            title="Common Questions"
            description="Find quick answers to frequently asked questions about our services and booking process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <SectionHeading
            badge="Service Areas"
            title="Where We Serve"
            description="We provide decoration and event services across Delhi NCR and nearby regions."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {siteConfig.serviceAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{area}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-6">
                  Don't see your location? <a href="tel:+919876543210" className="text-primary hover:underline">Contact us</a> - we may still be able to serve you!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-secondary"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            <div className="relative p-8 md:p-12 lg:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Planning?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Let's turn your celebration dreams into reality. Our team is excited 
                to help you create unforgettable moments.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+919876543210">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 98765 43210
                  </Button>
                </a>
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
