import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Check, 
  Star,
  Sparkles,
  Crown,
  Gem,
  ArrowRight,
  Phone,
  MessageCircle,
  Filter
} from "lucide-react";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/constants/services";
import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

type PackageTier = "basic" | "standard" | "premium" | "all";

const tierIcons = {
  Basic: Sparkles,
  Standard: Star,
  Premium: Crown,
  Luxury: Gem
};

const tierColors = {
  Basic: "border-blue-200 bg-blue-50/50",
  Standard: "border-primary/30 bg-primary/5",
  Premium: "border-secondary/50 bg-secondary/10",
  Luxury: "border-purple-300 bg-gradient-to-br from-purple-50 to-secondary/10"
};

export default function PackagesPage() {
  const [selectedTier, setSelectedTier] = useState<PackageTier>("all");
  const [selectedService, setSelectedService] = useState<string>("all");

  // Get all packages from all services
  const allPackages = useMemo(() => {
    const packages: Array<{
      serviceId: string;
      serviceName: string;
      package: typeof services[0]["packages"][0];
    }> = [];

    services.forEach((service) => {
      service.packages.forEach((pkg) => {
        packages.push({
          serviceId: service.id,
          serviceName: service.title,
          package: pkg
        });
      });
    });

    return packages;
  }, []);

  // Filter packages
  const filteredPackages = useMemo(() => {
    return allPackages.filter((item) => {
      const tierMatch = selectedTier === "all" || 
        item.package.name.toLowerCase().includes(selectedTier);
      const serviceMatch = selectedService === "all" || 
        item.serviceId === selectedService;
      return tierMatch && serviceMatch;
    });
  }, [allPackages, selectedTier, selectedService]);

  // Get unique tiers
  const tiers = ["all", "basic", "standard", "premium"];

  return (
    <>
      <SEO
        title="Packages & Pricing"
        description="Explore our decoration packages for every budget. From basic to luxury, find the perfect package for your celebration. Transparent pricing, no hidden costs."
        keywords={["decoration packages", "event pricing", "balloon decoration cost", "affordable decoration", "premium event packages"]}
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
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect{" "}
              <span className="gradient-text">Package</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have packages 
              designed to fit every budget and style. All prices are inclusive - no hidden charges!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b sticky top-[73px] bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Tier Filter */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <Tabs value={selectedTier} onValueChange={(v) => setSelectedTier(v as PackageTier)}>
                <TabsList>
                  {tiers.map((tier) => (
                    <TabsTrigger key={tier} value={tier} className="capitalize">
                      {tier === "all" ? "All Tiers" : tier}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Service Filter */}
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Services</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredPackages.length}</span> packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((item, index) => {
              const pkg = item.package;
              const TierIcon = tierIcons[pkg.name as keyof typeof tierIcons] || Sparkles;
              const tierColor = tierColors[pkg.name as keyof typeof tierColors] || tierColors.Basic;
              const isPopular = pkg.name === "Standard" || pkg.name === "Premium";

              return (
                <motion.div
                  key={`${item.serviceId}-${pkg.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                >
                  <Card className={cn(
                    "h-full relative overflow-hidden transition-all hover:shadow-xl",
                    tierColor,
                    isPopular && "ring-2 ring-primary"
                  )}>
                    {isPopular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          pkg.name === "Premium" || pkg.name === "Luxury" 
                            ? "bg-secondary/20 text-secondary" 
                            : "bg-primary/10 text-primary"
                        )}>
                          <TierIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1 text-xs">
                            {item.serviceName}
                          </Badge>
                          <h3 className="text-xl font-bold">{pkg.name}</h3>
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">
                          {pkg.priceRange}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        {pkg.popular ? "Most popular choice for this service" : `${pkg.name} package`}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {pkg.features.slice(0, 6).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {pkg.features.length > 6 && (
                          <li className="text-sm text-muted-foreground pl-6">
                            +{pkg.features.length - 6} more features
                          </li>
                        )}
                      </ul>

                      <div className="space-y-2">
                        <Link to={`/services/${item.serviceId}`}>
                          <Button className="w-full">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'm interested in the ${pkg.name} package for ${item.serviceName}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" className="w-full">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Quick Enquiry
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredPackages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No packages found matching your filters.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedTier("all");
                  setSelectedService("all");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <SectionHeading
            badge="Compare"
            title="Package Comparison"
            description="Compare features across different package tiers to find the perfect fit for your event."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 overflow-x-auto"
          >
            <table className="w-full min-w-[600px] bg-background rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Sparkles className="w-5 h-5 text-blue-500" />
                      Basic
                    </div>
                  </th>
                  <th className="p-4 font-semibold text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <Star className="w-5 h-5 text-primary" />
                      Standard
                    </div>
                  </th>
                  <th className="p-4 font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Crown className="w-5 h-5 text-secondary" />
                      Premium
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Balloon Arrangements", basic: "Basic", standard: "Enhanced", premium: "Luxury" },
                  { feature: "Setup & Takedown", basic: "✓", standard: "✓", premium: "✓" },
                  { feature: "Color Customization", basic: "Limited", standard: "✓", premium: "✓" },
                  { feature: "Theme Decorations", basic: "—", standard: "Basic", premium: "Premium" },
                  { feature: "Backdrop Setup", basic: "—", standard: "Simple", premium: "Designer" },
                  { feature: "Photo Props", basic: "—", standard: "5-10 pcs", premium: "15+ pcs" },
                  { feature: "LED/Neon Lights", basic: "—", standard: "—", premium: "✓" },
                  { feature: "Same Day Service", basic: "Extra", standard: "✓", premium: "✓" },
                  { feature: "Event Coordinator", basic: "—", standard: "—", premium: "✓" },
                  { feature: "Complimentary Photoshoot", basic: "—", standard: "—", premium: "30 mins" },
                ].map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.basic}</td>
                    <td className="p-4 text-center bg-primary/5">{row.standard}</td>
                    <td className="p-4 text-center">{row.premium}</td>
                  </tr>
                ))}
                <tr className="border-t-2">
                  <td className="p-4 font-semibold">Starting Price</td>
                  <td className="p-4 text-center font-bold text-blue-500">₹4,999</td>
                  <td className="p-4 text-center font-bold text-primary bg-primary/5">₹9,999</td>
                  <td className="p-4 text-center font-bold text-secondary">₹19,999</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            badge="Extras"
            title="Popular Add-Ons"
            description="Enhance your package with these popular additions."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {[
              { name: "Fog Machine", price: "₹1,500" },
              { name: "Confetti Cannon", price: "₹999" },
              { name: "LED Number Lights", price: "₹2,000" },
              { name: "Flower Wall", price: "₹3,500" },
              { name: "Photo Booth", price: "₹4,999" },
              { name: "Cake Table Decor", price: "₹1,999" },
            ].map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <p className="font-medium mb-1">{addon.name}</p>
                    <p className="text-primary font-semibold">{addon.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-16 lg:py-20 bg-muted/30">
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
            
            <div className="relative p-8 md:p-12 lg:p-16 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Need a Custom Package?
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    Have a unique vision? We'll create a personalized package 
                    tailored to your specific requirements and budget.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Free consultation & site visit",
                      "Custom theme development",
                      "Flexible budget options",
                      "Complete event coordination"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <a href="tel:+919876543210">
                    <Button size="lg" variant="secondary" className="font-semibold w-full sm:w-auto">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Quote
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold w-full sm:w-auto">
                      Request Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "No Hidden Charges", icon: Check },
              { label: "Price Match Guarantee", icon: Star },
              { label: "100% Satisfaction", icon: Sparkles },
              { label: "Secure Payment", icon: Crown }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
