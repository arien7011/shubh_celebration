import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";

// Lazy load pages for better performance
const HomePage = lazy(() => import("@/features/home/HomePage"));
const ServicesPage = lazy(() => import("@/features/services/ServicesPage"));
const ServiceDetailPage = lazy(() => import("@/features/services/ServiceDetailPage"));
const GalleryPage = lazy(() => import("@/features/gallery/GalleryPage"));
const AboutPage = lazy(() => import("@/features/about/AboutPage"));
const ContactPage = lazy(() => import("@/features/contact/ContactPage"));
const PackagesPage = lazy(() => import("@/features/packages/PackagesPage"));
const BlogPage = lazy(() => import("@/features/blog/BlogPage"));
const BlogDetailPage = lazy(() => import("@/features/blog/BlogDetailPage"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// 404 Page
const NotFoundPage = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-muted-foreground mb-6 max-w-md">
      Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
    </p>
    <a 
      href="/" 
      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      Go Back Home
    </a>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="packages" element={<PackagesPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<BlogDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
