import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Users,
  Award,
  Calendar,
  Star,
} from "lucide-react";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/constants/site-config";

const milestones = [
  { year: "2014", title: "Founded", description: "Started with a passion for creating beautiful celebrations" },
  { year: "2016", title: "100 Events", description: "Crossed our first 100 events milestone" },
  { year: "2018", title: "Expanded Team", description: "Grew to a team of 15+ decoration specialists" },
  { year: "2020", title: "Digital Presence", description: "Launched online booking and consultation" },
  { year: "2022", title: "Premium Services", description: "Introduced luxury event management packages" },
  { year: "2024", title: "500+ Events", description: "Celebrating 500+ successful events delivered" },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our heart into every decoration, treating each event as if it were our own.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Attention to detail is our hallmark. Every element is placed with purpose and care.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with our clients, listening to their dreams and bringing them to life.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for ordinary. Excellence is our standard in everything we do.",
  },
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    description: "With over 15 years in event decoration, Rajesh leads our creative vision.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    description: "Priya ensures every event runs smoothly from planning to execution.",
  },
  {
    name: "Amit Verma",
    role: "Lead Decorator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    description: "Amit heads our decoration team with his innovative design approach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Shubh Celebration - Delhi NCR's trusted event decoration company with 10+ years of experience creating unforgettable celebrations."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920"
            alt="About Shubh Celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Creating Memories That Last a Lifetime
            </h1>
            <p className="text-white/80 text-lg">
              For over a decade, Shubh Celebration has been transforming ordinary
              venues into extraordinary celebrations across Delhi NCR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Our Story"
                title="From a Dream to Delhi's Trusted Celebration Partner"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shubh Celebration was born from a simple belief: every celebration
                  deserves to be special. What started as a small family business in
                  2014 has grown into one of Delhi NCR's most trusted event decoration
                  companies.
                </p>
                <p>
                  Our founder, Rajesh Kumar, started with a passion for balloon art
                  and a vision to bring joy to people's celebrations. Over the years,
                  we've expanded our services, refined our craft, and built a team of
                  talented decorators who share our commitment to excellence.
                </p>
                <p>
                  Today, we've delivered 500+ successful events, from intimate birthday
                  parties to grand wedding celebrations. Each event teaches us something
                  new, and every satisfied client motivates us to reach higher.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400"
                  alt="Wedding decoration"
                  className="rounded-xl h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400"
                  alt="Birthday decoration"
                  className="rounded-xl h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400"
                  alt="Corporate event"
                  className="rounded-xl h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
                  alt="Baby shower"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: siteConfig.stats.eventsDelivered, label: "Events Delivered" },
              { value: siteConfig.stats.rating, label: "Client Rating" },
              { value: siteConfig.stats.experience, label: "Years Experience" },
              { value: siteConfig.stats.happyClients, label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-primary/5 rounded-2xl border border-primary/20"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To make every celebration memorable by delivering exceptional
                decoration and event services that exceed expectations, while
                maintaining affordability and accessibility for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-secondary/5 rounded-2xl border border-secondary/20"
            >
              <Star className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become North India's most loved event decoration company,
                known for creativity, reliability, and the ability to turn
                dreams into beautiful realities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            subtitle="These core values guide everything we do at Shubh Celebration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Journey"
            title="Milestones & Achievements"
            subtitle="Key moments in our journey of creating unforgettable celebrations."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                      <span className="text-primary font-bold text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading text-xl font-semibold mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Team"
            title="Meet the People Behind the Magic"
            subtitle="Our talented team brings creativity, expertise, and passion to every celebration."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
