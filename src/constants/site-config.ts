export const siteConfig = {
  name: "Shubh Celebration",
  tagline: "Transform Your Events Into Unforgettable Celebrations",
  description:
    "Premium balloon decoration & complete event management across Delhi NCR. Weddings, birthdays, corporate events, and more. 500+ events delivered with 4.9★ rating.",
  url: "https://shubhcelebration.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@shubhcelebration.com",
  address: "123, Celebration Street, Connaught Place, New Delhi - 110001",
  socialLinks: {
    instagram: "https://instagram.com/shubhcelebration",
    facebook: "https://facebook.com/shubhcelebration",
    youtube: "https://youtube.com/shubhcelebration",
    pinterest: "https://pinterest.com/shubhcelebration",
  },
  stats: {
    eventsDelivered: "500+",
    rating: "4.9★",
    experience: "10+ Years",
    happyClients: "1000+",
  },
  serviceAreas: [
    "Delhi",
    "Gurgaon",
    "Noida",
    "Faridabad",
    "Ghaziabad",
    "Greater Noida",
    "Haryana",
    "Uttar Pradesh",
  ],
  businessHours: {
    weekdays: "9:00 AM - 8:00 PM",
    weekends: "10:00 AM - 6:00 PM",
  },
};

export const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in event decoration services. Can you please share more details?"
);

export const getWhatsAppLink = (message?: string) => {
  const msg = message ? encodeURIComponent(message) : whatsappMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
};

export const getPhoneLink = () => `tel:${siteConfig.phone}`;

export const getEmailLink = () => `mailto:${siteConfig.email}`;
