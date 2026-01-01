import { motion } from "framer-motion";
import { MessageSquare, FileCheck, Calendar, PartyPopper } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Requirements",
    description:
      "Tell us about your event, theme preferences, and budget. We're all ears!",
  },
  {
    icon: FileCheck,
    title: "Get Custom Design & Quote",
    description:
      "We'll create a personalized design plan and transparent pricing for you.",
  },
  {
    icon: Calendar,
    title: "Confirm Booking",
    description:
      "Once you're happy with the plan, confirm with an advance payment.",
  },
  {
    icon: PartyPopper,
    title: "We Handle Everything",
    description:
      "Sit back and relax while our team transforms your venue magically!",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <SectionHeading
          badge="How It Works"
          title="Simple Steps to Your Perfect Event"
          subtitle="We've streamlined our process to make event planning effortless for you."
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
