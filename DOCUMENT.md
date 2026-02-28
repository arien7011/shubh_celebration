# Shubh Celebration — Technical Documentation

**Version:** 1.0.0  
**Last Updated:** February 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Prerequisites](#2-prerequisites)
3. [Getting Started](#3-getting-started)
4. [Project Structure](#4-project-structure)
5. [Architecture & Design Patterns](#5-architecture--design-patterns)
6. [Component Documentation](#6-component-documentation)
7. [Routing & Pages](#7-routing--pages)
8. [API Layer](#8-api-layer)
9. [State Management](#9-state-management)
10. [Styling Guide](#10-styling-guide)
11. [Form & Validation Patterns](#11-form--validation-patterns)
12. [SEO & Meta Management](#12-seo--meta-management)
13. [Environment Configuration](#13-environment-configuration)
14. [Linting & Code Quality](#14-linting--code-quality)
15. [Deployment](#15-deployment)
16. [Gotchas & Known Considerations](#16-gotchas--known-considerations)

---

## 1. Project Overview

**Project name:** Shubh Celebration  
**Version:** 1.0.0  
**Runtime environment:** Node.js 18+, browser (SPA — no server-side rendering)

### What This Application Does

Shubh Celebration is a client-facing marketing and booking website for a premium balloon decoration and event management company operating across Delhi NCR, India. The application allows prospective customers to:

- Browse the full catalogue of 8 event services (weddings, birthdays, corporate events, ring ceremonies, anniversaries, baby showers, catering, and event management)
- View service-specific pricing packages (Silver / Gold / Platinum tiers)
- Explore a filterable photo gallery of past events
- Read the company blog for decoration tips and event inspiration
- Submit enquiry forms or initiate direct WhatsApp / phone contact

### Target Users

- **Primary:** Individuals and businesses in Delhi NCR looking to book event decoration and management services
- **Secondary:** Developers maintaining or extending the codebase

---

## 2. Prerequisites

### Node.js

Node.js **18.0.0 or higher** is required. Vite 5 dropped support for Node.js 14 and 16. TypeScript 5.3 also requires at minimum Node.js 16, but Vite 5's native ESM handling mandates Node.js 18+.

Verify your version:

```bash
node --version   # must be >= 18.0.0
```

### Package Manager

The project uses **npm**. A `package-lock.json` is present at the project root. Do not install with Yarn or pnpm unless you delete the lockfile first and accept potential version drift.

```bash
npm --version   # any version compatible with Node.js 18+
```

### Environment Variables

No `.env` file is present in the project and no `import.meta.env` variable access has been introduced in the codebase. All runtime configuration (phone numbers, URLs, social links, etc.) is centralised in [`src/constants/site-config.ts`](src/constants/site-config.ts) as plain TypeScript constants.

> **Note:** If you integrate a real backend (e.g., for the contact form), you will need to create a `.env` file at the project root. See [Section 13](#13-environment-configuration) for conventions.

---

## 3. Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd shubh-celebration
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The Vite dev server starts with Hot Module Replacement (HMR) enabled. By default it is available at **http://localhost:5173**.

### 4. Available Scripts

All scripts are defined in `package.json`:

| Script    | Command                | Description                                                                                                                                                                          |
| --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dev`     | `vite`                 | Starts the Vite development server with HMR. Changes to source files are reflected in the browser immediately without a full reload.                                                 |
| `build`   | `tsc -b && vite build` | Runs TypeScript compilation first (`tsc -b` uses project references), then produces an optimised production bundle in `dist/`. The build will fail if TypeScript errors are present. |
| `lint`    | `eslint .`             | Runs ESLint across all files in the project using the configured rules and plugins.                                                                                                  |
| `preview` | `vite preview`         | Serves the contents of the `dist/` folder locally over HTTP. Use this to verify the production build before deploying. Requires `npm run build` to have been run first.              |

---

## 4. Project Structure

```
shubh-celebration/
├── index.html                  # HTML entry point — mounts <div id="root">
├── package.json                # Dependencies and npm scripts
├── package-lock.json           # npm lockfile
├── vite.config.ts              # Vite configuration (plugins, path alias, chunk splitting)
├── tailwind.config.js          # Tailwind CSS configuration (theme, content, plugins)
├── postcss.config.js           # PostCSS pipeline: tailwindcss + autoprefixer
├── tsconfig.json               # TypeScript config for src/ (strict mode, @/ alias)
├── tsconfig.node.json          # TypeScript config for Vite config file itself
├── dist/                       # Production build output (git-ignored)
└── src/
    ├── main.tsx                # React DOM root — wraps App in StrictMode
    ├── App.tsx                 # Router, HelmetProvider, lazy page imports, route tree
    │
    ├── styles/
    │   └── globals.css         # Google Fonts import, Tailwind directives, CSS variables,
    │                           # custom utility classes, scrollbar overrides
    │
    ├── lib/
    │   └── utils.ts            # cn() helper (clsx + tailwind-merge)
    │
    ├── hooks/
    │   └── use-toast.ts        # Module-level toast state store + useToast hook
    │
    ├── constants/              # All static data — no runtime fetching
    │   ├── site-config.ts      # Brand config: name, phone, WhatsApp, email, social links,
    │   │                       # service areas, business hours, helper link builders
    │   ├── services.ts         # Array of 8 Service objects with packages and FAQs
    │   ├── gallery.ts          # Array of GalleryImage objects + filter enum arrays
    │   ├── testimonials.ts     # Array of Testimonial objects
    │   └── blog.ts             # Array of BlogPost objects with full Markdown content
    │
    ├── components/
    │   ├── layout/             # Site-wide layout wrappers
    │   │   ├── Layout.tsx      # Outlet wrapper with Header + Footer + scroll-to-top
    │   │   ├── Header.tsx      # Fixed navigation bar with dropdown menu, mobile drawer
    │   │   ├── Footer.tsx      # Four-column footer with links, social icons, newsletter input
    │   │   └── index.ts        # Barrel export
    │   │
    │   ├── sections/           # Homepage section components (also reused on inner pages)
    │   │   ├── HeroSection.tsx         # Full-screen hero with animated particles
    │   │   ├── ServicesSection.tsx     # Service card grid
    │   │   ├── WhyChooseUsSection.tsx  # Feature/trust-signal grid
    │   │   ├── GallerySection.tsx      # Filtered photo grid with lightbox
    │   │   ├── ProcessSection.tsx      # Step-by-step booking process
    │   │   ├── TestimonialsSection.tsx # Auto-rotating testimonial carousel
    │   │   ├── ServiceAreasSection.tsx # Coverage map / area chips
    │   │   ├── CTASection.tsx          # Full-width call-to-action banner
    │   │   └── index.ts                # Barrel export
    │   │
    │   ├── shared/             # Reusable atomic/molecular components
    │   │   ├── SEO.tsx         # <Helmet> wrapper with structured data (JSON-LD)
    │   │   ├── SectionHeading.tsx      # Animated heading with badge + title + subtitle
    │   │   ├── ServiceCard.tsx         # Linked card for a single service
    │   │   ├── PackageCard.tsx         # Pricing tier card with feature list
    │   │   ├── TestimonialCard.tsx     # Review card with star rating
    │   │   ├── ImageLightbox.tsx       # Modal overlay for gallery images
    │   │   └── index.ts                # Barrel export
    │   │
    │   ├── forms/
    │   │   ├── ContactForm.tsx  # React Hook Form + Zod contact/enquiry form
    │   │   └── index.ts
    │   │
    │   └── ui/                 # shadcn/ui-style primitive components (Radix-based)
    │       ├── accordion.tsx
    │       ├── badge.tsx
    │       ├── button.tsx      # CVA-powered with 7 variants × 5 sizes
    │       ├── card.tsx
    │       ├── dialog.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── skeleton.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       └── toaster.tsx
    │
    └── features/               # Domain-grouped page components
        ├── home/
        │   ├── HomePage.tsx    # Composes all homepage sections
        │   └── index.ts
        ├── services/
        │   ├── ServicesPage.tsx        # Service catalogue grid
        │   ├── ServiceDetailPage.tsx   # Individual service (uses useParams)
        │   └── index.ts
        ├── gallery/
        │   ├── GalleryPage.tsx  # Filterable gallery with lightbox
        │   └── index.ts
        ├── packages/
        │   ├── PackagesPage.tsx # Cross-service package comparison with tabs
        │   └── index.ts
        ├── blog/
        │   ├── BlogPage.tsx       # Filterable blog listing
        │   ├── BlogDetailPage.tsx # Individual article (uses useParams)
        │   └── index.ts
        ├── about/
        │   ├── AboutPage.tsx    # Company story, team, milestones, values
        │   └── index.ts
        └── contact/
            ├── ContactPage.tsx  # Contact info + ContactForm
            └── index.ts
```

### Folder Philosophy

The project mixes two organisational approaches:

- **`components/`** holds UI building blocks that have no page ownership — they are consumed by multiple features or sections.
- **`features/`** holds full-page components, grouped by domain. Each feature folder owns exactly one or two page components plus an `index.ts` barrel.
- **`constants/`** is a single source of truth for all static data. Nothing in `features/` or `components/` hardcodes business data directly.

---

## 5. Architecture & Design Patterns

### Overall Approach

The application is a **React 18 Single-Page Application (SPA)** with a classic layered structure:

```
index.html → main.tsx → App.tsx (Router + Providers) → Layout → Pages → Components
```

There is no server-side rendering, no API server, and no external data fetching at runtime. All displayed content is sourced from static TypeScript constant files under `src/constants/`.

---

### Routing: React Router DOM v6

File: [`src/App.tsx`](src/App.tsx)

```tsx
<BrowserRouter>
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        {" "}
        {/* layout wrapper */}
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:serviceId" element={<ServiceDetailPage />} />
        {/* ...other routes */}
        <Route path="*" element={<NotFoundPage />} /> {/* catch-all 404 */}
      </Route>
    </Routes>
  </Suspense>
  <Toaster />
</BrowserRouter>
```

Key points:

- A single **layout route** at `"/"` renders the `<Layout>` component, which contains `<Header>`, `<main><Outlet /></main>`, and `<Footer>`.
- **All child routes are public** — no authentication or protected routes exist.
- All page components are **lazy-loaded** via `React.lazy` + `Suspense`. The fallback is a full-screen spinner.
- Scroll is restored to the top on every navigation inside `Layout.tsx` via a `useEffect` on `useLocation().pathname`.
- The `<Toaster />` component is mounted outside `<Routes>` so toast notifications are available globally.

---

### Lazy Loading & Code Splitting

Every page component is split into a separate chunk automatically by Vite/Rollup due to the dynamic `import()` in `React.lazy`. Additionally, `vite.config.ts` defines two manual vendor chunks:

```ts
manualChunks: {
  vendor: ["react", "react-dom", "react-router-dom"],
  ui:     ["framer-motion", "lucide-react"],
},
```

This ensures React core and the heavy animation library are cached independently of application code.

---

### Component Composition: Radix UI Primitives

The `src/components/ui/` directory contains thin wrappers around Radix UI primitives following the [shadcn/ui](https://ui.shadcn.com) pattern:

- Radix handles all accessibility (ARIA attributes, keyboard navigation, focus management).
- Tailwind classes are applied on top via the `cn()` helper.
- Props are forwarded with `React.forwardRef` and spread operators, keeping the surface area minimal.

---

### Styling Pattern: Tailwind CSS + CVA + `cn()`

Three utilities work together:

1. **`cn()`** (in `src/lib/utils.ts`) — merges conditional class strings and resolves Tailwind conflicts via `clsx` + `tailwind-merge`.
2. **CVA** (`class-variance-authority`) — defines typed variant maps for components that have multiple visual states (e.g., `<Button>`).
3. **Tailwind CSS** — all layout, spacing, colour, and typography is expressed as utility classes rather than bespoke CSS.

---

### Animation Pattern: Framer Motion v11

Framer Motion is used in two contexts:

**1. Animate-on-scroll (most common)**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}           // fires only the first time element enters viewport
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

`viewport={{ once: true }}` prevents re-animation on scroll-back. `delay: index * 0.1` creates a staggered entrance for lists.

**2. Conditional mount/unmount animations with `AnimatePresence`**

Used for the navigation dropdown, the testimonial carousel slide transitions, and the `ImageLightbox` modal. `AnimatePresence` enables exit animations before an element is removed from the DOM.

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      {/* dropdown content */}
    </motion.div>
  )}
</AnimatePresence>
```

**3. Hero particle animation (continuous loop)**

```tsx
<motion.div
  animate={{ y: [0, -100], opacity: [0, 1, 0] }}
  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
/>
```

---

### Form Pattern: React Hook Form + Zod

Forms are managed with `react-hook-form` and validated with a Zod schema passed to `zodResolver`. See [Section 11](#11-form--validation-patterns) for the full example.

---

### Data Fetching Pattern

**TanStack React Query and Axios are listed in `package.json` but are not actively used in the current codebase.** All data is sourced from static TypeScript constants under `src/constants/`. The `ContactForm` simulates an API call with `setTimeout`. If you introduce a real backend, React Query + Axios are already installed and ready to wire up.

---

### SEO Pattern: react-helmet-async

A reusable `<SEO>` component in `src/components/shared/SEO.tsx` wraps `<Helmet>` and injects page-specific meta tags. See [Section 12](#12-seo--meta-management) for full details.

---

### Custom Hooks

#### `useToast` — `src/hooks/use-toast.ts`

A module-level toast notification system. It does **not** use React Context; instead it maintains a singleton `memoryState` object and a `listeners` array outside the React tree.

**How it works:**

1. A `dispatch` function updates `memoryState` and calls every registered listener.
2. `useToast()` registers a `setState` listener on mount and deregisters it on unmount.
3. The imperative `toast()` function can be imported and called from anywhere (including outside React components).

**Return value of `useToast()`:**

| Property  | Type                                        | Description               |
| --------- | ------------------------------------------- | ------------------------- |
| `toasts`  | `ToasterToast[]`                            | Current active toasts     |
| `toast`   | `(props: Toast) => { id, dismiss, update }` | Trigger a new toast       |
| `dismiss` | `(toastId?: string) => void`                | Dismiss one or all toasts |

**Usage:**

```tsx
const { toast } = useToast();

toast({
  title: "Success",
  description: "Your booking was submitted.",
  variant: "success",
});
```

**Constants:**

- `TOAST_LIMIT = 1` — only one toast visible at a time.
- `TOAST_REMOVE_DELAY = 1000000` ms — toasts are kept in state for a very long time after dismissal (this is the shadcn/ui default to support exit animations).

---

## 6. Component Documentation

### Layout Components

---

#### `<Layout>`

**File:** `src/components/layout/Layout.tsx`  
**Purpose:** Root layout shell rendered by the React Router layout route. Wraps all pages with `<Header>`, a `<main>` element containing `<Outlet />`, and `<Footer>`. Also handles scroll-to-top on route change.

**Props:** None (receives children via React Router's `<Outlet>`).

**Usage:**

```tsx
<Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
</Route>
```

---

#### `<Header>`

**File:** `src/components/layout/Header.tsx`  
**Purpose:** Fixed top navigation bar. Transitions from transparent to a frosted-glass `bg-white/95` style once the user scrolls more than 50px. Contains logo, desktop navigation links with a hover dropdown for Services, mobile hamburger menu, and two CTA buttons (Call Now + Get Free Quote).

**Internal state:**

| State            | Type             | Description                            |
| ---------------- | ---------------- | -------------------------------------- |
| `isOpen`         | `boolean`        | Mobile drawer open/closed              |
| `isScrolled`     | `boolean`        | Whether page has scrolled > 50px       |
| `activeDropdown` | `string \| null` | Name of the currently hovered nav item |

**Props:** None.

---

#### `<Footer>`

**File:** `src/components/layout/Footer.tsx`  
**Purpose:** Four-column grid footer displaying company description, quick navigation links, service links, and contact information. Includes social media icons, a newsletter email input (UI only — no submission handler), and a bottom bar with copyright and legal links.

**Props:** None.

---

### Section Components

All section components are self-contained and accept no props. Data is imported directly from `src/constants/`.

| Component             | File                               | Purpose                                                                                                       |
| --------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `HeroSection`         | `sections/HeroSection.tsx`         | Full-screen hero with background image, animated floating particles, headline, description, and stat counters |
| `ServicesSection`     | `sections/ServicesSection.tsx`     | Grid of `<ServiceCard>` components for all 8 services                                                         |
| `WhyChooseUsSection`  | `sections/WhyChooseUsSection.tsx`  | Trust-signal feature grid                                                                                     |
| `GallerySection`      | `sections/GallerySection.tsx`      | Category-filtered photo grid (max 8 images) with `<ImageLightbox>`                                            |
| `ProcessSection`      | `sections/ProcessSection.tsx`      | Numbered step-by-step booking process                                                                         |
| `TestimonialsSection` | `sections/TestimonialsSection.tsx` | Auto-rotating testimonial carousel (auto-pauses on hover)                                                     |
| `ServiceAreasSection` | `sections/ServiceAreasSection.tsx` | Service coverage area display                                                                                 |
| `CTASection`          | `sections/CTASection.tsx`          | Full-width CTA banner with phone and WhatsApp buttons                                                         |

---

### Shared Components

---

#### `<SEO>`

**File:** `src/components/shared/SEO.tsx`  
**Purpose:** Injects `<head>` meta tags and a JSON-LD `LocalBusiness` structured data block via `react-helmet-async`. Generates a composed page title (`{title} | Shubh Celebration`).

**Props:**

| Prop          | Type                                                | Required | Default                  | Description                                      |
| ------------- | --------------------------------------------------- | -------- | ------------------------ | ------------------------------------------------ |
| `title`       | `string`                                            | No       | Site default title       | Page-specific title (prepended to site name)     |
| `description` | `string`                                            | No       | `siteConfig.description` | Meta description                                 |
| `keywords`    | `string[]`                                          | No       | —                        | Joined with commas into `<meta name="keywords">` |
| `image`       | `string`                                            | No       | `{siteUrl}/og-image.jpg` | Open Graph image URL                             |
| `canonical`   | `string`                                            | No       | `siteConfig.url`         | Canonical URL                                    |
| `ogImage`     | `string`                                            | No       | same as `image`          | Alias for `image`                                |
| `ogType`      | `"website" \| "article"`                            | No       | `"website"`              | Open Graph type                                  |
| `article`     | `{ publishedTime?, modifiedTime?, author?, tags? }` | No       | —                        | Article-specific OG meta                         |
| `noIndex`     | `boolean`                                           | No       | `false`                  | Adds `<meta name="robots" content="noindex">`    |

**Usage:**

```tsx
<SEO
  title="Wedding Decoration in Delhi NCR"
  description="Premium wedding decoration services..."
  keywords={["wedding decoration", "Delhi", "balloon arch"]}
/>
```

---

#### `<SectionHeading>`

**File:** `src/components/shared/SectionHeading.tsx`  
**Purpose:** Consistent animated section title block used across all pages. Wraps a badge chip, `<h2>` heading, and optional subtitle/description paragraph in a Framer Motion `whileInView` animation.

**Props:**

| Prop          | Type                            | Required | Default                 | Description                                                       |
| ------------- | ------------------------------- | -------- | ----------------------- | ----------------------------------------------------------------- |
| `title`       | `string`                        | **Yes**  | —                       | Main heading text (`<h2>`)                                        |
| `badge`       | `string`                        | No       | —                       | Small pill-shaped label above the heading                         |
| `subtitle`    | `string`                        | No       | —                       | Descriptive paragraph below the heading (alias for `description`) |
| `description` | `string`                        | No       | —                       | Same as `subtitle`; takes precedence if both are provided         |
| `centered`    | `boolean`                       | No       | `true`                  | Controls text alignment when `align` is not set                   |
| `align`       | `"left" \| "center" \| "right"` | No       | Derived from `centered` | Explicit alignment override                                       |
| `className`   | `string`                        | No       | —                       | Additional CSS classes for the wrapper                            |
| `children`    | `ReactNode`                     | No       | —                       | Rendered below the description                                    |

**Usage:**

```tsx
<SectionHeading
  badge="Our Services"
  title="Premium Event Services"
  subtitle="Comprehensive packages for every celebration."
/>
```

---

#### `<ServiceCard>`

**File:** `src/components/shared/ServiceCard.tsx`  
**Purpose:** Clickable card that navigates to a service detail page. Supports two visual modes: with or without an image. Animates into view on scroll with a configurable stagger delay.

**Props:**

| Prop          | Type         | Required | Default | Description                                                     |
| ------------- | ------------ | -------- | ------- | --------------------------------------------------------------- |
| `title`       | `string`     | **Yes**  | —       | Service name                                                    |
| `description` | `string`     | **Yes**  | —       | Short description                                               |
| `icon`        | `LucideIcon` | **Yes**  | —       | Lucide icon component                                           |
| `href`        | `string`     | **Yes**  | —       | React Router link target (e.g., `/services/wedding-decoration`) |
| `image`       | `string`     | No       | —       | Optional image URL; if provided, image fills the card top       |
| `index`       | `number`     | No       | `0`     | Used to compute staggered animation delay (`index * 0.1s`)      |

---

#### `<PackageCard>`

**File:** `src/components/shared/PackageCard.tsx`  
**Purpose:** Pricing tier card showing a package name, price range, feature list, and a WhatsApp booking CTA. Popular packages receive elevated border styling and a "Most Popular" ribbon.

**Props:**

| Prop          | Type      | Required | Default | Description                                               |
| ------------- | --------- | -------- | ------- | --------------------------------------------------------- |
| `pkg`         | `Package` | **Yes**  | —       | Package data object (from `src/constants/services.ts`)    |
| `serviceName` | `string`  | **Yes**  | —       | Parent service name, used in the WhatsApp enquiry message |
| `index`       | `number`  | No       | `0`     | Animation stagger index                                   |

---

#### `<TestimonialCard>`

**File:** `src/components/shared/TestimonialCard.tsx`  
**Purpose:** Review card showing a customer avatar (or initial fallback), name, event type and location, star rating, and review text.

**Props:**

| Prop          | Type          | Required | Default | Description             |
| ------------- | ------------- | -------- | ------- | ----------------------- |
| `testimonial` | `Testimonial` | **Yes**  | —       | Testimonial data object |
| `index`       | `number`      | No       | `0`     | Animation stagger index |

---

#### `<ImageLightbox>`

**File:** `src/components/shared/ImageLightbox.tsx`  
**Purpose:** Full-screen modal overlay that displays a selected gallery image with metadata (category, venue, budget badges) and action buttons (Share via Web Share API / clipboard fallback, and WhatsApp enquiry link). Spring-animated open/close via `AnimatePresence`.

**Props:**

| Prop      | Type                   | Required | Description                                     |
| --------- | ---------------------- | -------- | ----------------------------------------------- |
| `image`   | `GalleryImage \| null` | **Yes**  | The image to display; `null` renders nothing    |
| `onClose` | `() => void`           | **Yes**  | Called when backdrop or close button is clicked |

---

### Form Components

---

#### `<ContactForm>`

**File:** `src/components/forms/ContactForm.tsx`  
**Purpose:** Full event enquiry form. See [Section 11](#11-form--validation-patterns) for the complete form documentation including schema and submission handler.

**Props:** None.

---

### UI Primitives (`src/components/ui/`)

These are thin Radix UI wrappers styled with Tailwind. The most customised is `<Button>`.

#### `<Button>`

**File:** `src/components/ui/button.tsx`  
**Purpose:** Primary interactive element. Built with CVA to support typed variant and size props.

**Variants:**

| `variant`     | Description                                               |
| ------------- | --------------------------------------------------------- |
| `default`     | Solid primary colour with lift shadow hover               |
| `destructive` | Red destructive action                                    |
| `outline`     | Primary-coloured border, transparent fill; fills on hover |
| `secondary`   | Solid secondary (gold) colour                             |
| `ghost`       | No border or fill; subtle hover background                |
| `link`        | Underline-on-hover text link style                        |
| `gradient`    | Left-to-right gradient from primary to secondary          |

**Sizes:**

| `size`    | Height  | Padding |
| --------- | ------- | ------- |
| `default` | 44px    | `px-6`  |
| `sm`      | 36px    | `px-4`  |
| `lg`      | 56px    | `px-8`  |
| `xl`      | 64px    | `px-10` |
| `icon`    | 40×40px | —       |

**Additional props:**

| Prop      | Type      | Default | Description                                                                      |
| --------- | --------- | ------- | -------------------------------------------------------------------------------- |
| `asChild` | `boolean` | `false` | Renders as the child element via Radix `<Slot>` (useful for wrapping `<a>` tags) |

**Usage:**

```tsx
<Button variant="gradient" size="lg">Get Free Quote</Button>
<Button variant="outline" asChild>
  <a href="tel:+919876543210">Call Now</a>
</Button>
```

---

## 7. Routing & Pages

### Route Tree

```
/  (Layout — Header + Footer)
├── /                    → HomePage          [public]
├── /services            → ServicesPage      [public]
├── /services/:serviceId → ServiceDetailPage [public]
├── /gallery             → GalleryPage       [public]
├── /packages            → PackagesPage      [public]
├── /blog                → BlogPage          [public]
├── /blog/:slug          → BlogDetailPage    [public]
├── /about               → AboutPage         [public]
├── /contact             → ContactPage       [public]
└── /*                   → NotFoundPage      [public]
```

All routes are **public** — no authentication layer exists.

### Route Details

| Path                   | Component           | Description                                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`                    | `HomePage`          | Assembles all homepage sections: Hero, Services, WhyChooseUs, Gallery, Process, Testimonials, ServiceAreas, CTA                                                                                                                                                                      |
| `/services`            | `ServicesPage`      | Grid of all 8 service cards linking to detail pages                                                                                                                                                                                                                                  |
| `/services/:serviceId` | `ServiceDetailPage` | Reads `serviceId` param via `useParams`, looks up service from `constants/services.ts`. Redirects to `/services` via `<Navigate>` if slug is not found. Displays service description, gallery images, pricing packages (`<PackageCard>`), FAQs (`<Accordion>`), and related services |
| `/gallery`             | `GalleryPage`       | Filterable image grid with search (text), category, venue type, and budget filters. Uses `useMemo` to derive the filtered list. Supports a "Load More" pattern (`visibleCount` state). Opens `<ImageLightbox>` on click                                                              |
| `/packages`            | `PackagesPage`      | Cross-service package comparison. Uses `<Tabs>` from Radix to filter by package tier (Basic / Standard / Premium / All) and a service selector. Aggregates packages from all services                                                                                                |
| `/blog`                | `BlogPage`          | Blog listing with text search and tag-based category filter. Highlights the first post as a featured article                                                                                                                                                                         |
| `/blog/:slug`          | `BlogDetailPage`    | Finds post by `slug` param. Displays article content, author, reading time, tags, social share buttons (native Web Share API + clipboard fallback), and up to 3 related articles                                                                                                     |
| `/about`               | `AboutPage`         | Company story, founding team, timeline milestones (2014–2024), core values                                                                                                                                                                                                           |
| `/contact`             | `ContactPage`       | Contact info cards (address, phone, email, hours), social links, embedded `<ContactForm>`, and Google Maps iframe                                                                                                                                                                    |
| `/*`                   | `NotFoundPage`      | Inline 404 component with a link back to `/`                                                                                                                                                                                                                                         |

### Layout Behaviour

- `<Layout>` listens to `useLocation().pathname` and calls `window.scrollTo(0, 0)` on every route change — this is the scroll restoration mechanism.
- All page components are wrapped in `<Suspense fallback={<PageLoader />}>` in `App.tsx`, so navigation between any two routes shows the spinner until the lazy-loaded chunk resolves.

---

## 8. API Layer

### Current State

**There are no active API calls in this codebase.** The project is entirely data-static. All content rendered on screen comes from the TypeScript constant arrays in `src/constants/`.

**TanStack React Query (`@tanstack/react-query`) and Axios (`axios`) are declared in `package.json` but are not imported or used anywhere in the current source.** They were likely included during project scaffolding for future integration.

### Simulated Form Submission

The `ContactForm` component simulates an async API submission using `setTimeout`:

```ts
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  await new Promise((resolve) => setTimeout(resolve, 1500)); // placeholder
  console.log("Form submitted:", data);
  toast({ title: "Message Sent Successfully!", ... });
  reset();
  setIsSubmitting(false);
};
```

### Guidance for Integrating a Real Backend

If you add a real endpoint, follow this pattern:

```ts
// src/lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const submitContactForm = (data: ContactFormData) =>
  api.post("/contact", data);
```

```ts
// In a component or service file
import { useMutation } from "@tanstack/react-query";
import { submitContactForm } from "@/lib/api";

const { mutate, isPending } = useMutation({
  mutationFn: submitContactForm,
  onSuccess: () => toast({ title: "Sent!" }),
});
```

---

## 9. State Management

### Strategy

The application uses **local component state only**. There is no global state library (no Redux, Zustand, Jotai, or React Context stores). React Query is not configured.

### State Types in Use

| Mechanism     | Where Used                                | Purpose                                                                                          |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `useState`    | All interactive components                | UI toggles, form inputs, filter selections, visibility counts                                    |
| `useEffect`   | `Header`, `Layout`, `TestimonialsSection` | Scroll listener, route-change side effects, auto-rotate timer                                    |
| `useCallback` | `TestimonialsSection`                     | Stable `nextSlide` reference to safely use inside `useEffect` dependency array                   |
| `useMemo`     | `GalleryPage`, `PackagesPage`, `BlogPage` | Derived filtered/sorted arrays from constant data — avoids recomputation on unrelated re-renders |
| `useParams`   | `ServiceDetailPage`, `BlogDetailPage`     | Read URL parameter for dynamic route data lookup                                                 |
| `useNavigate` | `BlogDetailPage`                          | Programmatic navigation (e.g., back button)                                                      |

### Toast State — Module-Level Singleton

`src/hooks/use-toast.ts` implements a custom pub-sub store outside of React. When `toast()` is called, it updates a module-level `memoryState` variable and notifies all subscribed `useToast()` instances. This means:

- Toast state **persists across component unmounts** (unlike `useState`).
- The `toast()` function can be called from **outside React components** (e.g., in utility functions or Axios interceptors).
- Only **one toast** is visible at a time (`TOAST_LIMIT = 1`).

### React Query (Not Configured)

No `QueryClient` or `QueryClientProvider` is present. If you add React Query:

```tsx
// src/main.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
```

---

## 10. Styling Guide

### Tailwind CSS v3 Setup

**Config file:** `tailwind.config.js`

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
darkMode: ["class"]; // dark mode toggled by adding class="dark" to <html>
```

### Theme Extensions

#### Custom Fonts

Imported from Google Fonts in `src/styles/globals.css`:

| Token          | Font                                    | Usage                                             |
| -------------- | --------------------------------------- | ------------------------------------------------- |
| `font-heading` | Cormorant Garamond (400, 500, 600, 700) | All `<h1>`–`<h2>` headings, logo, card titles     |
| `font-body`    | Inter (300, 400, 500, 600, 700)         | Body text (applied to `<body>` via Tailwind base) |

Usage:

```html
<h1 class="font-heading text-5xl font-bold">Title</h1>
<p class="font-body text-base">Body text</p>
```

#### Custom Border Radius

| Token        | Value                       |
| ------------ | --------------------------- |
| `rounded-lg` | `var(--radius)` (0.75rem)   |
| `rounded-md` | `calc(var(--radius) - 2px)` |
| `rounded-sm` | `calc(var(--radius) - 4px)` |

#### Custom Animations (tailwindcss-animate)

Defined in `tailwind.config.js` under `theme.extend.keyframes` and `theme.extend.animation`:

| Animation class          | Keyframe                  | Use case                     |
| ------------------------ | ------------------------- | ---------------------------- |
| `animate-accordion-down` | Height 0 → content height | Radix Accordion open         |
| `animate-accordion-up`   | Height content → 0        | Radix Accordion close        |
| `animate-fade-in`        | Opacity 0+Y10 → 1+Y0      | Generic reveal               |
| `animate-slide-in-right` | X 100% → X 0              | Drawer/panel entry           |
| `animate-float`          | Y 0 → -10px → 0 (loop)    | Decorative floating elements |

### CSS Custom Properties (Design Tokens)

Defined in `src/styles/globals.css` under `:root`. All colours use the **HSL channel-only format** (no `hsl()` wrapper) so they can be composed with Tailwind's opacity modifier (`text-primary/50`).

#### Light Mode (`:root`)

| Variable                 | HSL Value        | Role                      |
| ------------------------ | ---------------- | ------------------------- |
| `--background`           | `0 0% 100%`      | Page background (white)   |
| `--foreground`           | `240 10% 3.9%`   | Primary text (near-black) |
| `--primary`              | `262 83% 58%`    | Brand purple              |
| `--primary-foreground`   | `0 0% 100%`      | Text on primary bg        |
| `--secondary`            | `45 93% 47%`     | Brand gold/amber          |
| `--secondary-foreground` | `0 0% 100%`      | Text on secondary bg      |
| `--muted`                | `240 4.8% 95.9%` | Subtle backgrounds        |
| `--muted-foreground`     | `240 3.8% 46.1%` | Secondary text            |
| `--accent`               | `240 4.8% 95.9%` | Hover backgrounds         |
| `--accent-foreground`    | `240 5.9% 10%`   | Text on accent            |
| `--destructive`          | `0 84.2% 60.2%`  | Error red                 |
| `--border`               | `240 5.9% 90%`   | Dividers and borders      |
| `--input`                | `240 5.9% 90%`   | Input field border        |
| `--ring`                 | `262 83% 58%`    | Focus ring                |
| `--radius`               | `0.75rem`        | Base border radius        |

A full **dark mode** palette is also defined under `.dark` using the same variable names.

### Custom Utility Classes

Defined in `globals.css` under `@layer utilities`:

| Class               | Equivalent                                                                 | Use                                 |
| ------------------- | -------------------------------------------------------------------------- | ----------------------------------- |
| `.text-gradient`    | `bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent` | Gradient headline text              |
| `.glass`            | `bg-white/80 backdrop-blur-md`                                             | Frosted glass panels                |
| `.section-padding`  | `py-16 md:py-24 px-4 md:px-8`                                              | Consistent vertical section spacing |
| `.container-custom` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`                                   | Max-width content container         |

### `cn()` Utility

**File:** `src/lib/utils.ts`

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

`clsx` resolves conditional class expressions (objects and arrays); `twMerge` then deduplicates conflicting Tailwind utilities (e.g., if both `px-4` and `px-6` are passed, `px-6` wins).

**Standard usage:**

```tsx
<div className={cn("base-class", isActive && "active-class", className)} />
```

### CVA Usage

CVA generates a typed variant factory. The `<Button>` component is the primary example:

```ts
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "...", gradient: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

Consumed in JSX:

```tsx
<button className={cn(buttonVariants({ variant, size, className }))} />
```

The TypeScript type `VariantProps<typeof buttonVariants>` is used to type the component props, giving autocompletion and compile-time validation on variant/size values.

---

## 11. Form & Validation Patterns

### Standard Pattern

Forms use **React Hook Form** for state/event handling and **Zod** for schema definition. The Zod schema is passed to `useForm` via `zodResolver` from `@hookform/resolvers/zod`.

### ContactForm — Full Reference

**File:** `src/components/forms/ContactForm.tsx`

#### Zod Schema

```ts
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;
```

#### Form Setup

```tsx
const {
  register,
  handleSubmit,
  reset,
  setValue, // used for the <Select> component (not a native input)
  formState: { errors },
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});
```

#### Submission Handler

```tsx
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate API call
  toast({ title: "Message Sent Successfully!", variant: "success" });
  reset();
  setIsSubmitting(false);
};
```

#### Fields

| Field       | Type         | Required | Validation                     |
| ----------- | ------------ | -------- | ------------------------------ |
| `name`      | text input   | Yes      | min 2 chars                    |
| `phone`     | text input   | Yes      | min 10 digits, numeric pattern |
| `email`     | text input   | No       | valid email format or empty    |
| `eventType` | `<Select>`   | Yes      | must be non-empty              |
| `eventDate` | date input   | No       | —                              |
| `location`  | text input   | No       | —                              |
| `budget`    | `<Select>`   | No       | —                              |
| `message`   | `<Textarea>` | No       | —                              |

#### Handling Radix `<Select>` with React Hook Form

Radix's `<Select>` is not a native HTML input, so `register()` cannot be used directly. Instead, `setValue` is called in `onValueChange`:

```tsx
<Select onValueChange={(value) => setValue("eventType", value)}>
  <SelectTrigger>
    <SelectValue placeholder="Select event type" />
  </SelectTrigger>
  <SelectContent>
    {services.map((s) => (
      <SelectItem key={s.id} value={s.id}>
        {s.title}
      </SelectItem>
    ))}
  </SelectContent>
</Select>;
{
  errors.eventType && (
    <p className="text-destructive text-sm">{errors.eventType.message}</p>
  );
}
```

Apply the same pattern for any other Radix-controlled component in future forms.

---

## 12. SEO & Meta Management

### Provider Setup

`<HelmetProvider>` is mounted at the root in `src/App.tsx`, wrapping the entire application:

```tsx
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>...</BrowserRouter>
    </HelmetProvider>
  );
}
```

### SEO Component Output

`src/components/shared/SEO.tsx` renders the following tags inside `<Helmet>`:

```html
<title>{title} | Shubh Celebration</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<!-- only if keywords provided -->
<link rel="canonical" href="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website|article" />
<!-- Article-specific tags when ogType="article" -->
<meta property="article:published_time" content="..." />
<meta property="article:modified_time" content="..." />
<meta property="article:author" content="..." />
<meta property="article:tag" content="..." />
<!-- one per tag -->
<!-- noIndex -->
<meta name="robots" content="noindex" />
<!-- only when noIndex=true -->
<!-- JSON-LD structured data -->
<script type="application/ld+json">
  { LocalBusiness schema }
</script>
```

The JSON-LD `LocalBusiness` block is static (same across all pages) and includes name, description, URL, phone, email, address, geo-coordinates, social links, opening hours, price range, and aggregate rating.

### Pages Using `<SEO>`

| Page                | Title                                            | ogType    |
| ------------------- | ------------------------------------------------ | --------- |
| `HomePage`          | "Premium Event Decoration Services in Delhi NCR" | `website` |
| `ServicesPage`      | "Event Decoration Services"                      | `website` |
| `ServiceDetailPage` | `{service.title} in Delhi NCR`                   | `website` |
| `GalleryPage`       | (not observed — add `<SEO>` recommended)         | —         |
| `PackagesPage`      | "Packages & Pricing"                             | `website` |
| `BlogPage`          | "Blog - Decoration Tips & Ideas"                 | `website` |
| `BlogDetailPage`    | `{post.metaTitle}`                               | `article` |
| `AboutPage`         | "About Us"                                       | `website` |
| `ContactPage`       | "Contact Us"                                     | `website` |

---

## 13. Environment Configuration

### Current State

No environment variables are used in the current codebase. The project runs with zero configuration beyond `npm install`.

### Vite Convention

Vite exposes environment variables prefixed with `VITE_` at build time via `import.meta.env`:

```ts
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

Variables without the `VITE_` prefix are **not** accessible in client-side code (they are only available in `vite.config.ts` via `process.env`).

### Required Variables for Backend Integration

Create a `.env` file at the project root when adding a backend:

```env
# .env (never commit to source control)
VITE_API_BASE_URL=https://api.shubhcelebration.com
```

| Variable            | Purpose                         | Required                    | Example                            |
| ------------------- | ------------------------------- | --------------------------- | ---------------------------------- |
| `VITE_API_BASE_URL` | Base URL for all Axios requests | Yes (when backend is added) | `https://api.shubhcelebration.com` |

For different environments, use `.env.development` and `.env.production` — Vite loads them automatically based on the `mode` flag.

---

## 14. Linting & Code Quality

### ESLint Configuration

No standalone ESLint config file (`.eslintrc.js`, `eslint.config.js`, etc.) exists in the project root. ESLint is run via `npm run lint` (`eslint .`), which uses default configuration inferred from the installed plugins.

**Installed plugins:**

| Plugin                        | Purpose                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `eslint-plugin-react-hooks`   | Enforces React Hooks rules: `rules-of-hooks` (no hooks in conditionals/loops) and `exhaustive-deps` (correct `useEffect` dependency arrays) |
| `eslint-plugin-react-refresh` | Ensures that component files export only React components, which is required for Vite's HMR to work correctly                               |

> To add an explicit config file (recommended for team projects), create `eslint.config.js` at the root and configure both plugins explicitly with the desired rule severities.

### TypeScript Configuration

**`tsconfig.json`** (governs all files under `src/`):

| Option                       | Value                               | Effect                                                                                      |
| ---------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| `target`                     | `ES2020`                            | Output target for tsc (Vite transpiles further via esbuild)                                 |
| `lib`                        | `["ES2020", "DOM", "DOM.Iterable"]` | Available type definitions                                                                  |
| `module`                     | `ESNext`                            | ESM output                                                                                  |
| `moduleResolution`           | `bundler`                           | Vite/bundler-aware resolution (supports `exports` field, no `.js` extension requirement)    |
| `jsx`                        | `react-jsx`                         | Uses the automatic JSX transform (no `import React` needed)                                 |
| `strict`                     | `true`                              | Enables all strict checks: `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, etc. |
| `noUnusedLocals`             | `true`                              | Error on declared but unused local variables                                                |
| `noUnusedParameters`         | `true`                              | Error on declared but unused function parameters                                            |
| `noFallthroughCasesInSwitch` | `true`                              | Error on switch case fallthrough                                                            |
| `noEmit`                     | `true`                              | tsc is used only for type-checking; Vite/esbuild handles actual transpilation               |
| `allowImportingTsExtensions` | `true`                              | Allows `import './foo.tsx'` with explicit extension                                         |
| `isolatedModules`            | `true`                              | Each file must be transformable independently (required for esbuild)                        |
| `resolveJsonModule`          | `true`                              | Allows `import data from './data.json'`                                                     |
| `baseUrl`                    | `"."`                               | Base for path resolution                                                                    |
| `paths`                      | `{ "@/*": ["./src/*"] }`            | `@/` alias maps to `src/`                                                                   |

**`tsconfig.node.json`** (governs `vite.config.ts` only):

Uses `composite: true` for project references. Strict mode is enabled. Module resolution uses `bundler`.

### Vite Path Alias

Configured in `vite.config.ts`:

```ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
```

This means `import { cn } from "@/lib/utils"` resolves to `src/lib/utils.ts`. TypeScript is aware of this via the `paths` option in `tsconfig.json`.

---

## 15. Deployment

### Build Output

`npm run build` runs TypeScript compilation followed by Vite's production build. The output is a **static `dist/` folder** containing:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js        # Application chunks
│   ├── vendor-[hash].js       # react, react-dom, react-router-dom
│   ├── ui-[hash].js           # framer-motion, lucide-react
│   └── index-[hash].css       # Compiled Tailwind CSS
└── favicon.svg
```

No backend server is required. The `dist/` folder can be served by any static file host.

### Recommended Hosting

No deployment configuration files (`vercel.json`, `netlify.toml`, `Dockerfile`, `.github/workflows/`) are present. Based on the project type (pure SPA with client-side routing), the following platforms are recommended:

**Vercel (recommended)**

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Vite and sets the build command + output directory. For client-side routing to work, configure a rewrite in `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify**

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

**Any static host (Nginx, Apache, S3 + CloudFront)**

Configure the server to redirect all 404s to `index.html` so that React Router can handle client-side navigation.

### Required Build Environment Variables

Currently none. If `VITE_API_BASE_URL` or other `VITE_` variables are added, they must be set in the hosting provider's environment variable configuration at build time (not just runtime) because Vite inlines them at build time.

### Serving the Preview Build Locally

```bash
npm run build
npm run preview   # starts server at http://localhost:4173
```

---

## 16. Gotchas & Known Considerations

### React 18 StrictMode — Double Effect Invocation

`main.tsx` wraps `<App>` in `<React.StrictMode>`. In development, React 18's StrictMode intentionally mounts → unmounts → remounts every component to help detect side effects. This means `useEffect` runs **twice** on mount in development (but only once in production).

**Impact in this project:**

- The `Header` scroll event listener is registered/unregistered twice on startup — this is harmless because `useEffect` returns a cleanup function.
- The `TestimonialsSection` auto-rotate `setInterval` is set up, torn down, and set up again — again handled correctly by the cleanup return.
- Toast listeners in `use-toast.ts` register and unregister via the `useEffect` in `useToast()` — this is handled correctly.

Do not write effects that assume single-execution during development.

---

### Vite ESM — `"type": "module"`

`package.json` declares `"type": "module"`, making the entire project native ESM. Key implications:

- `require()` and `__dirname` are **not available** in application code. `vite.config.ts` uses `path.resolve(__dirname, ...)` — this works because Vite runs the config through a CommonJS-compatible context, but do not try to use `__dirname` in `src/`.
- All imports should omit file extensions (TypeScript resolves them); if you ever need explicit extensions, `.js` is the ESM convention even for `.ts` source files.
- Third-party packages that are CommonJS-only are handled automatically by Vite's internal pre-bundling (esbuild converts them to ESM).

---

### Framer Motion v11 — API Changes from v10

This project uses Framer Motion **v11**. Breaking changes from v10 to be aware of:

- The `motion` component tree is unchanged; `motion.div`, `motion.h1`, etc. work identically.
- `AnimatePresence` behaviour is unchanged.
- The `LazyMotion` / `domAnimation` / `domMax` APIs for reducing bundle size are available but not used in this project — if bundle size becomes a concern, wrap the app in `<LazyMotion features={domAnimation}>` and replace `motion.div` with `m.div`.
- Framer Motion v11 removed some deprecated v9 APIs (e.g., `useAnimation` is still present but the `AnimationControls.start` signature changed slightly). The project does not use `AnimationControls`.

---

### Embla Carousel — Installed but Unused

`embla-carousel-react` v8 is listed as a dependency but is **not imported or used anywhere** in the current codebase. The `TestimonialsSection` uses a manual `useEffect`-based carousel, and `GalleryPage` uses a masonry-style grid without a carousel. If you implement a carousel with Embla, note that Embla v8 introduced a new plugin API and changed how `useEmblaCarousel` returns its refs from the v7 approach.

---

### Zod v3 — API Differences from v4

The project uses Zod **^3.22.4**. Zod v4 (released in 2025) introduced breaking changes:

- `z.string().email()` behaviour and error messages are slightly different in v4.
- `z.infer<>` is still the correct utility type in v3.
- `.optional().or(z.literal(""))` (used for the optional email field) is the v3 way to allow both `undefined` and `""`. In v4 this pattern changes.

Do **not** upgrade to Zod v4 without reviewing all schemas — the `contactSchema` in `ContactForm.tsx` will require changes.

---

### No Real API Integration

The project ships with **no backend**. The contact form simulates a submission. If you integrate a real API:

1. Create `src/lib/api.ts` with an Axios instance.
2. Add `VITE_API_BASE_URL` to your `.env`.
3. Wrap `<App>` with `<QueryClientProvider>` in `main.tsx`.
4. Replace the `setTimeout` simulation in `ContactForm.onSubmit` with a `useMutation` call.

---

### Performance — Image Loading

All images use direct `<img>` tags with Unsplash CDN URLs. The `react-lazy-load-image-component` package is listed in `package.json` but is **not actively used** in the current codebase. For production with a large gallery, replace `<img>` tags in `GalleryPage` and `ServiceDetailPage` with `<LazyLoadImage>` from that library to defer off-screen image loading.

---

### Dark Mode — Partially Wired

`tailwind.config.js` sets `darkMode: ["class"]` and `globals.css` defines a full `.dark` CSS variable palette. However, **no dark mode toggle UI component exists** in the application. Dark mode is only active if a `dark` class is manually added to the `<html>` element. If you add a theme toggle, update `<html>` by calling `document.documentElement.classList.toggle("dark")`.

---

_End of DOCUMENT.md_
