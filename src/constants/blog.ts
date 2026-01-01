export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  featuredImage: string;
  category: string;
  author: Author;
  date: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

const defaultAuthor: Author = {
  name: "Shubh Celebration Team",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  role: "Event Specialists",
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-wedding-decoration-trends-delhi-2025",
    title: "Top 10 Wedding Decoration Trends in Delhi 2025",
    excerpt:
      "Discover the latest wedding decoration trends that are taking Delhi NCR by storm. From sustainable decor to tech-integrated designs.",
    content: `
# Top 10 Wedding Decoration Trends in Delhi 2025

The wedding industry in Delhi NCR is constantly evolving, and 2025 brings exciting new trends that blend tradition with modernity.

## 1. Sustainable & Eco-Friendly Decorations
Environmental consciousness is at the forefront of wedding planning.

## 2. Pastel Color Palettes
Soft pastels like dusty rose, sage green, and lavender are dominating wedding decor.

## 3. Organic Balloon Installations
Balloon decorations have evolved beyond simple arches.

## 4. LED & Neon Elements
Technology meets tradition with LED installations and custom neon signs.

## 5. Fusion Themes
Delhi couples are embracing fusion themes that combine different cultural elements.

## Planning Your 2025 Wedding?
At Shubh Celebration, we stay ahead of trends while honoring your vision.
    `,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    featuredImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    category: "Wedding",
    author: defaultAuthor,
    date: "Jan 1, 2025",
    publishedAt: "2025-01-01",
    readTime: "8 min read",
    tags: ["wedding", "decoration trends", "Delhi", "2025"],
    metaTitle:
      "Top 10 Wedding Decoration Trends in Delhi 2025 | Shubh Celebration",
    metaDescription:
      "Discover the latest wedding decoration trends in Delhi NCR for 2025.",
  },
  {
    id: "2",
    slug: "balloon-decoration-cost-delhi-ncr",
    title: "How Much Does Balloon Decoration Cost in Delhi NCR?",
    excerpt:
      "Complete guide to balloon decoration pricing in Delhi, Gurgaon, and Noida.",
    content: `
# How Much Does Balloon Decoration Cost in Delhi NCR?

Planning an event and wondering about balloon decoration costs? This comprehensive guide breaks down pricing factors.

## Average Balloon Decoration Prices

### Birthday Parties
- **Basic Package**: ₹5,000 - ₹10,000
- **Premium Package**: ₹15,000 - ₹30,000

### Wedding Decorations  
- **Simple Setup**: ₹25,000 - ₹50,000
- **Grand Celebration**: ₹1,00,000+

## Factors Affecting Price
1. Type and quantity of balloons
2. Venue size and location
3. Complexity of design
4. Additional elements (LED, florals)
    `,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    featuredImage:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    category: "Pricing",
    author: defaultAuthor,
    date: "Dec 28, 2024",
    publishedAt: "2024-12-28",
    readTime: "6 min read",
    tags: ["pricing", "balloon decoration", "Delhi NCR", "budget"],
    metaTitle: "Balloon Decoration Cost in Delhi NCR 2025 | Shubh Celebration",
    metaDescription:
      "Complete guide to balloon decoration pricing in Delhi, Gurgaon, and Noida.",
  },
  {
    id: "3",
    slug: "birthday-party-themes-kids",
    title: "15 Trending Birthday Party Themes for Kids in 2025",
    excerpt:
      "From superheroes to unicorns, discover the most popular birthday party themes that kids absolutely love.",
    content: `
# 15 Trending Birthday Party Themes for Kids in 2025

Looking for the perfect theme for your child's birthday? Here are the most requested themes.

## Popular Themes
1. **Superhero Adventures** - Marvel, DC characters
2. **Princess Palace** - Disney princesses
3. **Dinosaur Discovery** - Prehistoric fun
4. **Unicorn Magic** - Magical creatures
5. **Space Exploration** - Astronauts and rockets

## Theme Elements
- Matching balloons and backdrops
- Themed cake table
- Photo booth props
- Party favors
    `,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
    featuredImage:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
    category: "Birthday",
    author: defaultAuthor,
    date: "Dec 25, 2024",
    publishedAt: "2024-12-25",
    readTime: "7 min read",
    tags: ["birthday", "kids party", "themes", "decoration ideas"],
    metaTitle: "15 Birthday Party Themes for Kids 2025 | Shubh Celebration",
    metaDescription:
      "Discover trending birthday party themes for kids in 2025.",
  },
  {
    id: "4",
    slug: "corporate-event-decoration-tips",
    title:
      "Corporate Event Decoration: Professional Tips for Impressive Events",
    excerpt:
      "Learn how to create impactful corporate event decorations that align with your brand and impress attendees.",
    content: `
# Corporate Event Decoration: Professional Tips

Corporate events require a balance of professionalism and creativity.

## Key Considerations
1. **Brand Alignment** - Use company colors
2. **Venue Assessment** - Work with existing architecture
3. **Lighting** - Set the right mood
4. **Signage** - Clear wayfinding

## Popular Corporate Themes
- Annual conferences
- Product launches
- Award ceremonies
- Team celebrations
    `,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    featuredImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    category: "Corporate",
    author: defaultAuthor,
    date: "Dec 20, 2024",
    publishedAt: "2024-12-20",
    readTime: "5 min read",
    tags: ["corporate events", "professional decoration", "brand events"],
    metaTitle: "Corporate Event Decoration Tips | Shubh Celebration",
    metaDescription:
      "Professional tips for impressive corporate event decorations.",
  },
  {
    id: "5",
    slug: "diy-balloon-decoration-tips",
    title: "DIY Balloon Decoration Tips for Home Celebrations",
    excerpt:
      "Simple yet stunning balloon decoration ideas you can try at home for small celebrations.",
    content: `
# DIY Balloon Decoration Tips

Create beautiful decorations for intimate home celebrations.

## Easy DIY Ideas
1. **Balloon Garlands** - Simple cluster arrangements
2. **Centerpieces** - Weighted balloon bouquets
3. **Door Arches** - Welcome guests in style
4. **Number Balloons** - Age displays

## Pro Tips
- Use quality balloons
- Inflate day-of for best results
- Mix sizes for visual interest
- Add ribbon tails
    `,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    featuredImage:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    category: "DIY",
    author: defaultAuthor,
    date: "Dec 15, 2024",
    publishedAt: "2024-12-15",
    readTime: "4 min read",
    tags: ["DIY", "home decoration", "balloon tips", "easy decoration"],
    metaTitle: "DIY Balloon Decoration Tips | Shubh Celebration",
    metaDescription: "Simple balloon decoration ideas for home celebrations.",
  },
  {
    id: "6",
    slug: "choosing-event-decorator-delhi",
    title: "How to Choose the Right Event Decorator in Delhi NCR",
    excerpt:
      "A comprehensive guide to selecting the perfect event decorator for your celebration in Delhi NCR.",
    content: `
# How to Choose the Right Event Decorator

Finding the right decorator can make or break your event.

## What to Look For
1. **Portfolio Review** - Check past work
2. **Client Reviews** - Read testimonials
3. **Budget Transparency** - No hidden costs
4. **Communication** - Responsive team

## Questions to Ask
- What's included in packages?
- Do you offer customization?
- What's your cancellation policy?
- Can you visit the venue?
    `,
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    featuredImage:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    category: "Guide",
    author: defaultAuthor,
    date: "Dec 10, 2024",
    publishedAt: "2024-12-10",
    readTime: "6 min read",
    tags: ["guide", "choosing decorator", "Delhi NCR", "event planning"],
    metaTitle: "How to Choose Event Decorator in Delhi | Shubh Celebration",
    metaDescription:
      "Guide to selecting the perfect event decorator in Delhi NCR.",
  },
];
