# Shubh Celebration - Event Services Platform

A premium event decoration and management services website built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Shubh Celebration](https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200)

## 🎉 Features

- **Modern UI/UX**: Beautiful, responsive design with animations
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Multiple Pages**: Home, Services, Gallery, About, Contact, Packages, Blog
- **Interactive Components**: Lightbox, filters, search, forms
- **WhatsApp Integration**: Quick inquiry via WhatsApp
- **Performance**: Lazy loading, code splitting, optimized images

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **UI Components**: Radix UI primitives (ShadCN-style)
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet Async
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/          # Form components (ContactForm)
│   ├── layout/         # Layout components (Header, Footer, Layout)
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   ├── shared/         # Shared components (SEO, Cards, etc.)
│   └── ui/             # UI primitives (Button, Card, Input, etc.)
├── constants/          # Data files (services, testimonials, etc.)
├── features/           # Feature-based pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── gallery/
│   ├── home/
│   ├── packages/
│   └── services/
├── hooks/              # Custom hooks (useToast)
├── lib/                # Utilities (cn)
├── styles/             # Global styles
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shubh-celebration.git
cd shubh-celebration
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📄 Pages

| Route           | Page               |
| --------------- | ------------------ |
| `/`             | Home Page          |
| `/services`     | All Services       |
| `/services/:id` | Service Detail     |
| `/gallery`      | Photo Gallery      |
| `/about`        | About Us           |
| `/contact`      | Contact Us         |
| `/packages`     | Packages & Pricing |
| `/blog`         | Blog List          |
| `/blog/:slug`   | Blog Article       |

## 🎨 Design System

### Colors

- **Primary**: Purple (`hsl(270, 70%, 50%)`)
- **Secondary**: Gold (`hsl(45, 90%, 55%)`)
- **Background**: Light/Dark mode support
- **Muted**: Subtle backgrounds and text

### Typography

- **Font Family**: Inter
- **Headings**: Bold, responsive sizes
- **Body**: Regular weight, optimized line height

### Components

Built with Radix UI primitives following ShadCN patterns:

- Button (7 variants)
- Card
- Input, Textarea, Label
- Select, Accordion, Dialog, Tabs
- Toast notifications
- Badge, Separator

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized navigation for all devices

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific settings:

```env
VITE_SITE_URL=https://shubhcelebration.com
VITE_GOOGLE_MAPS_KEY=your_api_key
```

### Customization

- Edit `src/constants/site-config.ts` for site settings
- Modify `tailwind.config.js` for theme customization
- Update `src/constants/services.ts` for service data

## 📈 Performance

- Code splitting with lazy loading
- Optimized images with loading="lazy"
- CSS containment for animations
- Minimal bundle size with tree-shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Contact

**Shubh Celebration**

- Website: [shubhcelebration.com](https://shubhcelebration.com)
- Email: info@shubhcelebration.com
- Phone: +91 98765 43210
- WhatsApp: +91 98765 43211

---

Made with ❤️ by Shubh Celebration Team
