import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/constants/site-config";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Wedding Decoration", href: "/services/wedding-decoration" },
      { name: "Birthday Party", href: "/services/birthday-party" },
      { name: "Corporate Events", href: "/services/corporate-events" },
      { name: "Ring Ceremony", href: "/services/ring-ceremony" },
      { name: "Anniversary", href: "/services/anniversary-celebration" },
      { name: "Baby Shower", href: "/services/baby-shower" },
      { name: "Catering", href: "/services/catering-services" },
      { name: "Event Management", href: "/services/event-management" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">S</span>
            </div>
            <div className="hidden sm:block">
              <h1
                className={cn(
                  "font-heading text-xl font-bold transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {siteConfig.name}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/10"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                    location.pathname === item.href && "text-primary"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={getPhoneLink()}>
              <Button
                variant={isScrolled ? "outline" : "ghost"}
                size="sm"
                className={cn(!isScrolled && "text-white border-white/30 hover:bg-white/10")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="sm">
                Get Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors",
                        location.pathname === item.href &&
                          "bg-primary/10 text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4 pt-4 border-t">
                <a href={getPhoneLink()} className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="gradient" className="w-full">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
