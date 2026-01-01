import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Palette,
  Shield,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "A decade of creating memorable celebrations with expertise in all event types.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality Materials",
    description:
      "We use only the finest balloons and materials for lasting, vibrant decorations.",
  },
  {
    icon: Palette,
    title: "Customized Designs",
    description:
      "Every decoration is tailored to your vision, theme, and budget preferences.",
  },
  {
    icon: Clock,
    title: "On-Time Setup Guaranteed",
    description:
      "Our professional team ensures everything is perfect before your event begins.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "No hidden costs or surprises. What we quote is what you pay, always.",
  },
  {
    icon: MapPin,
    title: "Serving Delhi NCR & Beyond",
    description:
      "Covering Delhi, Gurgaon, Noida, Faridabad, and expanding across North India.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="The Shubh Celebration Difference"
          subtitle="We don't just decorate events; we create experiences that leave lasting impressions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-transparent border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
