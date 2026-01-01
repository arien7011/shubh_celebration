import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppLink } from "@/constants/site-config";
import type { Package } from "@/constants/services";

interface PackageCardProps {
  pkg: Package;
  serviceName: string;
  index?: number;
}

export function PackageCard({ pkg, serviceName, index = 0 }: PackageCardProps) {
  const enquiryMessage = `Hi! I'm interested in the ${pkg.name} package for ${serviceName}. Can you please share more details?`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        className={`h-full relative overflow-hidden ${
          pkg.popular
            ? "border-2 border-primary shadow-xl"
            : "border hover:border-primary/50"
        } transition-all duration-300`}
      >
        {pkg.popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-white px-4 py-1 text-xs font-semibold rounded-bl-lg flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Most Popular
            </div>
          </div>
        )}

        <CardHeader className={pkg.popular ? "pt-8" : ""}>
          <div className="flex items-center justify-between mb-2">
            <Badge variant={pkg.popular ? "default" : "outline"}>{pkg.name}</Badge>
          </div>
          <CardTitle className="font-heading text-2xl">{pkg.priceRange}</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-3 mb-6">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <a
              href={getWhatsAppLink(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant={pkg.popular ? "gradient" : "outline"}
                className="w-full"
              >
                Book Now
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
