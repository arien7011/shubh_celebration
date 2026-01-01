import {
  Heart,
  Cake,
  Building2,
  Gem,
  GlassWater,
  Baby,
  UtensilsCrossed,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image: string;
  gallery: string[];
  packages: Package[];
  faqs: FAQ[];
}

export interface Package {
  name: string;
  priceRange: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: "wedding-decoration",
    slug: "wedding-decoration",
    title: "Wedding Decoration",
    shortDescription:
      "Create magical moments with our stunning wedding decorations that transform your venue into a fairy tale setting.",
    description: `Transform your wedding venue into a breathtaking celebration of love with our premium wedding decoration services. At Shubh Celebration, we understand that your wedding day is one of the most important days of your life, and we're committed to making it absolutely perfect.

Our expert team specializes in creating stunning balloon installations, elegant stage setups, romantic mandap decorations, and beautiful entrance arches that leave lasting impressions on you and your guests. We work closely with you to understand your vision, color preferences, and theme to create a customized decoration plan that reflects your unique love story.

From intimate ceremonies to grand celebrations, we have the expertise and creativity to handle weddings of all sizes. Our premium quality materials, attention to detail, and commitment to excellence ensure that every element of your wedding decoration is flawless.`,
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    ],
    packages: [
      {
        name: "Silver",
        priceRange: "₹25,000 - ₹40,000",
        features: [
          "Stage decoration with balloon arch",
          "Entry gate decoration",
          "5 table centerpieces",
          "Basic lighting setup",
          "Standard balloon colors",
        ],
      },
      {
        name: "Gold",
        priceRange: "₹50,000 - ₹80,000",
        features: [
          "Everything in Silver",
          "Premium balloon installations",
          "Customized backdrop design",
          "10 table centerpieces",
          "Enhanced lighting",
          "Walkway decoration",
          "Photo booth setup",
        ],
        popular: true,
      },
      {
        name: "Platinum",
        priceRange: "₹1,00,000+",
        features: [
          "Everything in Gold",
          "Luxury balloon sculptures",
          "360° venue transformation",
          "LED/Neon elements",
          "Floral integration",
          "Complete theme execution",
          "VIP entrance setup",
          "Dedicated decoration team",
        ],
      },
    ],
    faqs: [
      {
        question: "How early should I book wedding decoration services?",
        answer:
          "We recommend booking at least 2-3 months in advance for wedding decorations, especially during peak wedding season (October-February). This allows us to understand your requirements, create custom designs, and source premium materials.",
      },
      {
        question: "Can you work with my wedding planner?",
        answer:
          "Absolutely! We frequently collaborate with wedding planners and venue coordinators to ensure seamless execution. We're flexible and can adapt to your existing plans.",
      },
      {
        question: "Do you provide decoration for outdoor weddings?",
        answer:
          "Yes, we specialize in both indoor and outdoor wedding decorations. For outdoor venues, we use weather-resistant materials and plan for backup arrangements.",
      },
      {
        question: "What is the setup and takedown timing?",
        answer:
          "We typically arrive 4-6 hours before the event for setup. Takedown is done after the event ends, usually within 2-3 hours.",
      },
      {
        question: "Can I customize the decoration theme?",
        answer:
          "Yes! We offer fully customized decoration themes based on your preferences. Share your Pinterest boards, color swatches, or inspiration images, and we'll bring your vision to life.",
      },
    ],
  },
  {
    id: "birthday-party",
    slug: "birthday-party",
    title: "Birthday Party Decoration",
    shortDescription:
      "Make birthdays extra special with vibrant, themed decorations that create unforgettable celebrations.",
    description: `Celebrate another year of life with our spectacular birthday party decoration services! At Shubh Celebration, we believe every birthday deserves to be extraordinary, whether it's a child's first birthday or a milestone celebration for adults.

Our creative team designs stunning balloon arrangements, themed setups, and eye-catching backdrops that perfectly capture the essence of celebration. From cartoon characters for kids to elegant designs for adults, we customize every detail to match your vision and budget.

We handle everything from concept to execution, allowing you to focus on enjoying the celebration with your loved ones. Our decorations include balloon bouquets, arches, garlands, number balloons, photo walls, table arrangements, and much more.`,
    icon: Cake,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800",
    ],
    packages: [
      {
        name: "Basic",
        priceRange: "₹5,000 - ₹10,000",
        features: [
          "Simple balloon arch",
          "Happy Birthday banner",
          "10-15 latex balloons",
          "Number/letter foil balloons",
          "Basic color theme",
        ],
      },
      {
        name: "Premium",
        priceRange: "₹15,000 - ₹30,000",
        features: [
          "Everything in Basic",
          "Themed backdrop setup",
          "Balloon garland decoration",
          "Table centerpieces",
          "Photo booth props",
          "LED fairy lights",
          "Customized name board",
        ],
        popular: true,
      },
      {
        name: "Luxury",
        priceRange: "₹40,000+",
        features: [
          "Everything in Premium",
          "Complete venue transformation",
          "3D balloon sculptures",
          "Neon signs",
          "Flower integration",
          "Candy/dessert table setup",
          "VIP entrance decoration",
          "Professional setup team",
        ],
      },
    ],
    faqs: [
      {
        question: "What themes are available for birthday parties?",
        answer:
          "We offer unlimited theme options including popular characters (Mickey, Frozen, Spiderman), elegant themes (Gold & White, Rose Gold), nature themes (Safari, Under the Sea), and custom themes based on your preferences.",
      },
      {
        question: "How much advance notice do you need?",
        answer:
          "For standard packages, 3-5 days advance booking is sufficient. For customized themes or during weekends, we recommend booking 1-2 weeks in advance.",
      },
      {
        question: "Do you decorate at homes as well as venues?",
        answer:
          "Yes! We provide decoration services at homes, party halls, restaurants, hotels, farmhouses, and any venue of your choice across Delhi NCR.",
      },
      {
        question: "What is included in the setup?",
        answer:
          "Setup includes all decorative items, installation, and arrangement. We bring our own equipment and materials. Setup typically takes 2-4 hours depending on the package.",
      },
      {
        question: "Can I provide my own decoration items?",
        answer:
          "Yes, we can incorporate your items into the setup. Please share details in advance so we can plan the design accordingly.",
      },
    ],
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Event Management",
    shortDescription:
      "Professional event management and decoration services for corporate functions, product launches, and business celebrations.",
    description: `Elevate your corporate events with our professional event management and decoration services. At Shubh Celebration, we understand the importance of creating the right impression for your business events, whether it's a product launch, annual day celebration, conference, or team-building event.

Our corporate event services combine sophisticated aesthetics with brand-conscious design elements. We work with your marketing team to incorporate brand colors, logos, and messaging into the décor while maintaining an elegant professional atmosphere.

From intimate board meetings to large-scale corporate galas, we deliver exceptional event experiences that reflect your company's values and leave lasting impressions on clients, employees, and stakeholders.`,
    icon: Building2,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
    ],
    packages: [
      {
        name: "Essential",
        priceRange: "₹30,000 - ₹50,000",
        features: [
          "Stage/podium decoration",
          "Welcome signage",
          "Basic balloon installations",
          "Brand color coordination",
          "Registration desk setup",
        ],
      },
      {
        name: "Professional",
        priceRange: "₹75,000 - ₹1,50,000",
        features: [
          "Everything in Essential",
          "Complete venue branding",
          "Photo opportunity zones",
          "LED screen decoration",
          "Table arrangements",
          "Award ceremony setup",
          "Entrance arch/gateway",
        ],
        popular: true,
      },
      {
        name: "Executive",
        priceRange: "₹2,00,000+",
        features: [
          "Everything in Professional",
          "360° venue transformation",
          "Custom installations",
          "Video mapping integration",
          "VIP/delegate areas",
          "Multiple event zones",
          "Complete event management",
          "Dedicated project manager",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you incorporate our brand elements into decorations?",
        answer:
          "Absolutely! We specialize in brand integration. Share your brand guidelines, logos, and color codes, and we'll create decorations that perfectly align with your corporate identity.",
      },
      {
        question: "Do you handle full event management?",
        answer:
          "Yes, we offer complete event management services including vendor coordination, logistics, catering management, AV setup, and on-ground execution.",
      },
      {
        question: "What corporate events do you specialize in?",
        answer:
          "We handle product launches, annual days, award ceremonies, conferences, seminars, team-building events, client meetings, festive celebrations, and corporate parties.",
      },
      {
        question: "Can you work with our existing event agency?",
        answer:
          "Yes, we frequently collaborate with event agencies, PR firms, and in-house marketing teams to deliver integrated event experiences.",
      },
      {
        question: "What is your experience with large-scale events?",
        answer:
          "We have successfully executed events for 50 to 5000+ attendees. Our experienced team and network of vendors enable us to scale operations as needed.",
      },
    ],
  },
  {
    id: "ring-ceremony",
    slug: "ring-ceremony",
    title: "Ring Ceremony Decoration",
    shortDescription:
      "Elegant and romantic setups for engagement ceremonies that mark the beautiful beginning of your journey together.",
    description: `Create the perfect setting for your engagement with our exquisite ring ceremony decoration services. This special moment deserves a backdrop as beautiful as your love story, and at Shubh Celebration, we specialize in crafting romantic, elegant setups that make your engagement truly memorable.

Our ring ceremony decorations feature stunning balloon arrangements, beautiful flower integrations, romantic lighting, and elegant backdrops that create the perfect photo opportunities. We understand that this is the first celebration of your journey together, and we ensure every detail is perfect.

From intimate family gatherings to grand engagement parties, we customize our decorations to suit your style, preferences, and venue. Let us create a magical setting where you exchange rings and promises.`,
    icon: Gem,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    ],
    packages: [
      {
        name: "Classic",
        priceRange: "₹15,000 - ₹25,000",
        features: [
          "Ring exchange backdrop",
          "Balloon arch decoration",
          "Basic floral touches",
          "Fairy light arrangement",
          "Welcome board",
        ],
      },
      {
        name: "Elegant",
        priceRange: "₹35,000 - ₹55,000",
        features: [
          "Everything in Classic",
          "Premium backdrop design",
          "Couple seating decoration",
          "Photo booth setup",
          "Table centerpieces",
          "Entrance decoration",
          "Enhanced lighting",
        ],
        popular: true,
      },
      {
        name: "Royal",
        priceRange: "₹70,000+",
        features: [
          "Everything in Elegant",
          "Complete venue transformation",
          "Luxury balloon installations",
          "Neon ring/name signs",
          "Premium flower arrangements",
          "Multiple photo zones",
          "LED panel backdrop",
          "VIP seating area",
        ],
      },
    ],
    faqs: [
      {
        question: "What decoration styles are available for ring ceremonies?",
        answer:
          "We offer various styles including traditional, contemporary, minimalist, royal, floral, and themed designs. We can also create custom styles based on your preferences.",
      },
      {
        question: "Can you match decorations with our outfit colors?",
        answer:
          "Yes! Share your outfit details, and we'll coordinate the decoration colors to complement your attire and create a cohesive look.",
      },
      {
        question: "Do you provide seating arrangements?",
        answer:
          "While we focus on decorations, we can recommend and coordinate with rental partners for seating, stages, and furniture that match your décor.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Ring ceremony setups typically take 3-5 hours depending on the package and venue. We arrive well in advance to ensure everything is perfect before guests arrive.",
      },
      {
        question: "Can you create a ring platter decoration?",
        answer:
          "Yes, we offer beautifully decorated ring platters and presentation setups as part of our packages or as add-on services.",
      },
    ],
  },
  {
    id: "anniversary-celebration",
    slug: "anniversary-celebration",
    title: "Anniversary Celebration",
    shortDescription:
      "Celebrate your love story with romantic anniversary decorations that honor your journey together.",
    description: `Honor your love story with our romantic anniversary celebration decorations. Whether it's your first anniversary or your golden jubilee, every milestone deserves a beautiful celebration, and at Shubh Celebration, we create the perfect ambiance for your special day.

Our anniversary decorations range from intimate surprise setups to grand party arrangements. We specialize in creating romantic atmospheres with balloon hearts, photo walls featuring your journey together, elegant centerpieces, and beautiful lighting that sets the mood for celebration.

From surprise room decorations to elaborate party venues, we help you express your love and gratitude in the most beautiful way. Let us help you create new memories while celebrating the beautiful ones you've already made.`,
    icon: GlassWater,
    image: "https://images.unsplash.com/photo-1529543544277-750e8293e5ce?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1529543544277-750e8293e5ce?w=800",
      "https://images.unsplash.com/photo-1522344008469-e25f8d33b4a1?w=800",
      "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=800",
      "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800",
    ],
    packages: [
      {
        name: "Surprise",
        priceRange: "₹8,000 - ₹15,000",
        features: [
          "Bedroom/room decoration",
          "Heart balloon arrangements",
          "Rose petals setup",
          "Candle arrangement",
          "Anniversary banner",
          "Fairy lights",
        ],
      },
      {
        name: "Celebration",
        priceRange: "₹25,000 - ₹45,000",
        features: [
          "Everything in Surprise",
          "Photo journey wall",
          "Dining table setup",
          "Balloon arch/garland",
          "Custom message board",
          "Cake table decoration",
          "Gift presentation area",
        ],
        popular: true,
      },
      {
        name: "Grand",
        priceRange: "₹60,000+",
        features: [
          "Everything in Celebration",
          "Complete venue decoration",
          "Premium balloon installations",
          "Memory lane setup",
          "Multiple photo zones",
          "LED/Neon numbers",
          "Live flower arrangements",
          "Guest seating decoration",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you do a surprise decoration setup?",
        answer:
          "Absolutely! We specialize in surprise decorations. Coordinate with us for venue access, and we'll set up everything while your partner is away. We ensure complete secrecy!",
      },
      {
        question: "What are popular anniversary decoration themes?",
        answer:
          "Popular themes include romantic red & gold, elegant white & silver, rose gold elegance, garden romance, and milestone-specific themes (Silver, Golden, etc.).",
      },
      {
        question: "Do you provide decoration for restaurant anniversaries?",
        answer:
          "Yes! We work with many restaurants across Delhi NCR. We coordinate with the venue for setup times and ensure decorations complement the dining experience.",
      },
      {
        question: "Can you include our photos in the decoration?",
        answer:
          "Yes! We create beautiful photo walls, memory lanes, and custom displays featuring your photos. Share digital copies, and we'll incorporate them beautifully.",
      },
      {
        question: "What's the minimum notice for surprise setup?",
        answer:
          "For surprise setups, we recommend at least 2-3 days advance booking. For simple arrangements, we can sometimes accommodate last-minute requests.",
      },
    ],
  },
  {
    id: "baby-shower",
    slug: "baby-shower",
    title: "Baby Shower Decoration",
    shortDescription:
      "Adorable and heartwarming baby shower decorations that celebrate the arrival of your little one.",
    description: `Welcome your little bundle of joy with our adorable baby shower decoration services! At Shubh Celebration, we create magical, Instagram-worthy setups that celebrate this beautiful phase of life and make the mom-to-be feel extra special.

Our baby shower decorations feature cute themed setups, pastel balloon arrangements, charming backdrops, and delightful details that capture the joy of expecting a baby. Whether you're planning a traditional ceremony, a gender reveal party, or a modern baby shower celebration, we have the perfect designs for you.

From Oh Baby themes to traditional Godh Bharai setups, we customize every element to match your preferences, cultural traditions, and venue. Let us create a celebration as sweet as the new life you're welcoming.`,
    icon: Baby,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1555679427-1f6dfeb8a7c5?w=800",
    ],
    packages: [
      {
        name: "Sweet",
        priceRange: "₹10,000 - ₹18,000",
        features: [
          "Themed balloon arch",
          "Oh Baby/Welcome banner",
          "Pastel balloon decorations",
          "Basic backdrop setup",
          "Chair decoration for mom",
        ],
      },
      {
        name: "Adorable",
        priceRange: "₹25,000 - ₹40,000",
        features: [
          "Everything in Sweet",
          "Premium themed backdrop",
          "Photo booth with props",
          "Dessert table decoration",
          "Gift table setup",
          "Balloon garland installation",
          "LED fairy lights",
        ],
        popular: true,
      },
      {
        name: "Dreamy",
        priceRange: "₹50,000+",
        features: [
          "Everything in Adorable",
          "Complete venue transformation",
          "3D balloon installations",
          "Neon signs (Oh Baby, Name)",
          "Flower wall/arrangements",
          "Multiple photo zones",
          "Games area setup",
          "Custom elements",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer gender reveal decoration?",
        answer:
          "Yes! We create exciting gender reveal setups including balloon boxes, confetti cannons displays, and dramatic reveal moments. We keep the gender secret until the big reveal!",
      },
      {
        question: "What baby shower themes do you offer?",
        answer:
          "Popular themes include Oh Baby, Twinkle Twinkle Little Star, Safari Animals, Elephant theme, Rainbow, Cloud & Moon, Traditional Godh Bharai, and custom themes.",
      },
      {
        question: "Can you set up at maternity shoot locations?",
        answer:
          "Yes! We provide decoration services for maternity photo shoots at studios, outdoor locations, or homes to create beautiful backdrops for your photos.",
      },
      {
        question: "Do you provide props for baby shower games?",
        answer:
          "Yes, our premium packages include props for popular games and activities. We can also customize props based on your planned activities.",
      },
      {
        question: "Is Godh Bharai decoration different from baby shower?",
        answer:
          "We offer both modern baby shower themes and traditional Godh Bharai setups. Traditional setups include ceremonial elements, while modern themes are more contemporary.",
      },
    ],
  },
  {
    id: "catering-services",
    slug: "catering-services",
    title: "Catering Services",
    shortDescription:
      "Delicious multi-cuisine catering services that complement your events with exceptional food and service.",
    description: `Complete your celebration with our premium catering services! At Shubh Celebration, we believe great events deserve great food, and our catering team delivers exceptional culinary experiences that delight your guests.

Our catering services cover everything from traditional Indian cuisine to contemporary international dishes. We work with experienced chefs and quality ingredients to create menus that match your event theme, dietary requirements, and budget. From live counters to elegant buffet setups, we ensure your food presentation is as impressive as your decorations.

Whether it's an intimate gathering or a grand celebration, our catering team manages everything from menu planning to service staff, allowing you to enjoy your event stress-free.`,
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    ],
    packages: [
      {
        name: "Essential",
        priceRange: "₹600 - ₹800/plate",
        features: [
          "2 starters",
          "3 main course items",
          "Rice & breads",
          "2 desserts",
          "Beverages",
          "Basic service staff",
        ],
      },
      {
        name: "Premium",
        priceRange: "₹1,000 - ₹1,400/plate",
        features: [
          "4 starters (2 live counters)",
          "5 main course items",
          "Rice, breads & papad",
          "Salad bar",
          "3 desserts",
          "Chaats counter",
          "Professional service team",
        ],
        popular: true,
      },
      {
        name: "Royal",
        priceRange: "₹1,800+/plate",
        features: [
          "6+ starters (3 live counters)",
          "7+ main course items",
          "Multi-cuisine options",
          "Premium dessert station",
          "Ice cream counter",
          "Mocktails & beverages",
          "Dedicated service manager",
          "Premium crockery & setup",
        ],
      },
    ],
    faqs: [
      {
        question: "What cuisines do you offer?",
        answer:
          "We offer North Indian, South Indian, Chinese, Continental, Italian, Mexican, and multi-cuisine options. We can also create custom menus based on your preferences.",
      },
      {
        question: "Do you provide vegetarian and non-vegetarian options?",
        answer:
          "Yes! We offer pure vegetarian, non-vegetarian, and mixed menus. We can also accommodate Jain, vegan, and other dietary requirements.",
      },
      {
        question: "What is the minimum order for catering?",
        answer:
          "Our minimum order is typically 50 guests for full-service catering. For smaller gatherings, we offer special party packages.",
      },
      {
        question: "Do you provide service staff?",
        answer:
          "Yes, all our packages include service staff. Premium packages include uniformed servers, and royal packages include a dedicated service manager.",
      },
      {
        question: "Can I get a tasting before booking?",
        answer:
          "Yes! We offer tasting sessions for events with 150+ guests. Tasting charges are adjustable against the final booking amount.",
      },
    ],
  },
  {
    id: "event-management",
    slug: "event-management",
    title: "Complete Event Management",
    shortDescription:
      "End-to-end event planning and management services that handle every detail of your celebration.",
    description: `Experience stress-free celebrations with our comprehensive event management services! At Shubh Celebration, we take care of every aspect of your event, from initial planning to final execution, allowing you to be a guest at your own celebration.

Our event management services cover everything: venue selection, decoration, catering, entertainment, photography, logistics, and on-ground coordination. Our experienced team works tirelessly behind the scenes to ensure every detail is perfect and every moment is memorable.

Whether it's a wedding, birthday, corporate event, or any special occasion, our end-to-end management ensures seamless execution. We handle the stress so you can focus on creating beautiful memories with your loved ones.`,
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800",
    ],
    packages: [
      {
        name: "Coordinator",
        priceRange: "₹25,000 - ₹50,000",
        features: [
          "Event timeline planning",
          "Vendor coordination",
          "Day-of coordination",
          "Setup supervision",
          "Guest management",
          "Emergency handling",
        ],
      },
      {
        name: "Planner",
        priceRange: "₹75,000 - ₹1,50,000",
        features: [
          "Everything in Coordinator",
          "Venue selection assistance",
          "Budget management",
          "Vendor sourcing & negotiation",
          "Design conceptualization",
          "Multiple planning meetings",
          "RSVP management",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₹2,50,000+",
        features: [
          "Everything in Planner",
          "Complete event design",
          "All vendor management",
          "Entertainment booking",
          "Guest accommodation",
          "Transportation logistics",
          "Dedicated event team",
          "Post-event wrap-up",
        ],
      },
    ],
    faqs: [
      {
        question: "What does event management include?",
        answer:
          "Our event management services include planning, vendor coordination, decoration, catering, entertainment, logistics, timeline management, and on-ground execution.",
      },
      {
        question: "Do you work with specific vendors only?",
        answer:
          "While we have trusted vendor partners, we're flexible to work with vendors of your choice. We can also recommend vendors based on your budget and requirements.",
      },
      {
        question: "How early should I book event management?",
        answer:
          "For full event management, we recommend booking 3-6 months in advance for large events. This gives us adequate time for planning and coordination.",
      },
      {
        question: "Do you handle destination events?",
        answer:
          "Yes! We manage destination events across India. Our team handles all logistics including venue booking, travel, accommodation, and local coordination.",
      },
      {
        question: "What happens if something goes wrong during the event?",
        answer:
          "Our experienced team is trained to handle emergencies. We have backup plans for critical elements and ensure quick problem resolution without affecting your celebration.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
