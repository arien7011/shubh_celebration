export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  rating: number;
  review: string;
  image?: string;
  location: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya & Rahul Sharma",
    eventType: "Wedding Decoration",
    rating: 5,
    review:
      "Shubh Celebration transformed our wedding venue into a fairy tale! The balloon arch at the entrance was breathtaking, and guests couldn't stop taking photos. The team was professional, arrived on time, and executed everything beyond our expectations. Highly recommend for anyone planning a wedding in Delhi!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    location: "Gurgaon",
    date: "December 2025",
  },
  {
    id: "2",
    name: "Amit Verma",
    eventType: "Birthday Party",
    rating: 5,
    review:
      "Booked them for my daughter's 5th birthday with a Frozen theme. The decoration was absolutely magical! My daughter was so happy, and all the parents were impressed. The setup was done in just 3 hours, and everything was perfect. Will definitely book again!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    location: "Delhi",
    date: "November 2025",
  },
  {
    id: "3",
    name: "Sneha Kapoor",
    eventType: "Baby Shower",
    rating: 5,
    review:
      "The Oh Baby themed decoration was so beautiful! Every detail was perfect - from the balloon garland to the dessert table setup. The team was very cooperative and helped us create amazing photos. Thank you for making my baby shower so special!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    location: "Noida",
    date: "October 2025",
  },
  {
    id: "4",
    name: "Rajesh & Meera Gupta",
    eventType: "Anniversary",
    rating: 5,
    review:
      "Surprised my wife with a romantic room decoration for our 25th anniversary. The team coordinated secretly, set up everything while we were out, and the result was absolutely stunning! The rose petals, candles, and balloon hearts created the perfect romantic ambiance. Highly professional service!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    location: "Delhi",
    date: "September 2025",
  },
  {
    id: "5",
    name: "TechCorp Solutions",
    eventType: "Corporate Event",
    rating: 5,
    review:
      "We hired Shubh Celebration for our annual day event. They beautifully incorporated our brand colors into the decoration and created an impressive stage setup. The team was very professional and understood our corporate requirements perfectly. Our employees loved the photo booth setup!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    location: "Gurgaon",
    date: "August 2025",
  },
  {
    id: "6",
    name: "Kavita Malhotra",
    eventType: "Ring Ceremony",
    rating: 5,
    review:
      "The engagement decoration was elegant and exactly what we envisioned. The backdrop was stunning, and the flower integration with balloons looked absolutely beautiful. They also created a lovely ring exchange setup. Worth every penny!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    location: "Faridabad",
    date: "July 2025",
  },
  {
    id: "7",
    name: "Vikram Singh",
    eventType: "Birthday Party",
    rating: 4,
    review:
      "Great decoration for my son's superhero themed birthday party! The balloon sculptures were impressive, and kids loved the photo booth. The team was very friendly and accommodating. Minor delay in setup but overall very satisfied.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    location: "Ghaziabad",
    date: "June 2025",
  },
  {
    id: "8",
    name: "Ananya & Karan Mehta",
    eventType: "Wedding Decoration",
    rating: 5,
    review:
      "From mandap decoration to entrance gate, everything was spectacular! They handled our outdoor wedding beautifully and even had backup plans for the weather. The team's dedication and creativity made our wedding truly memorable. Thank you, Shubh Celebration!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    location: "Delhi",
    date: "May 2025",
  },
  {
    id: "9",
    name: "Pooja Agarwal",
    eventType: "Baby Shower",
    rating: 5,
    review:
      "The traditional Godh Bharai decoration was beautiful! They understood our cultural requirements perfectly and created a setup that honored traditions while looking modern and elegant. The swing decoration for the ceremony was the highlight!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150",
    location: "Noida",
    date: "April 2025",
  },
  {
    id: "10",
    name: "Startup Hub",
    eventType: "Corporate Event",
    rating: 5,
    review:
      "Excellent execution of our product launch event! The team created an immersive experience with themed decorations and branded elements. Very responsive to our last-minute changes and delivered beyond expectations. Highly recommend for corporate events!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
    location: "Gurgaon",
    date: "March 2025",
  },
];
