import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Calendar, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppLink } from "@/constants/site-config";
import { Link } from "react-router-dom";

const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
];

const stats = [
  { icon: Calendar, value: siteConfig.stats.eventsDelivered, label: "Events Delivered" },
  { icon: Star, value: siteConfig.stats.rating, label: "Client Rating" },
  { icon: Award, value: siteConfig.stats.experience, label: "Experience" },
  { icon: Users, value: siteConfig.stats.happyClients, label: "Happy Clients" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImages[0]}
          alt="Event decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              Trusted by 1000+ Happy Clients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Events Into{" "}
            <span className="text-gradient">Unforgettable Celebrations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
          >
            Premium Balloon Decoration & Complete Event Management across Delhi NCR.
            From intimate gatherings to grand celebrations, we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/gallery">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
