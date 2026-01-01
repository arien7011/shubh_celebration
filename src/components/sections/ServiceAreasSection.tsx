import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const primaryAreas = ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"];
const expandedAreas = [
  "Greater Noida",
  "Sonipat",
  "Panipat",
  "Rohtak",
  "Meerut",
  "Bahadurgarh",
];

export function ServiceAreasSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Service Areas"
          title="Serving Delhi NCR & Beyond"
          subtitle="We bring celebrations to life across the National Capital Region and expanding to more cities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Circular Map Representation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/50" />
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">Delhi NCR</span>
                </div>
              </div>

              {/* Location Pins */}
              {primaryAreas.map((area, index) => {
                const angle = (index / primaryAreas.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);

                return (
                  <motion.div
                    key={area}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-primary animate-ping absolute" />
                      <div className="w-4 h-4 rounded-full bg-primary relative" />
                      <span className="absolute whitespace-nowrap text-sm font-medium mt-2 left-1/2 -translate-x-1/2">
                        {area}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Areas List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6">
              Primary Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {primaryAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 p-3 rounded-lg bg-primary/10"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-2xl font-semibold mb-6">
              Extended Coverage
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {expandedAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Expanding across North India!</strong>{" "}
                Don't see your city? Contact us anyway – we travel for special events!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
