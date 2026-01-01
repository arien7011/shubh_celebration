import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { SEO } from "@/components/shared/SEO";
import { ImageLightbox } from "@/components/shared/ImageLightbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CTASection } from "@/components/sections/CTASection";
import {
  galleryImages,
  galleryCategories,
  venueTypes,
  budgetRanges,
  type GalleryImage,
} from "@/constants/gallery";

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [venue, setVenue] = useState("All");
  const [budget, setBudget] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredImages = useMemo(() => {
    return galleryImages.filter((image) => {
      const matchesSearch =
        search === "" ||
        image.description.toLowerCase().includes(search.toLowerCase()) ||
        image.category.toLowerCase().includes(search.toLowerCase()) ||
        image.colorTheme.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || image.category === category;
      const matchesVenue = venue === "All" || image.venue === venue;
      const matchesBudget = budget === "All" || image.budget === budget;

      return matchesSearch && matchesCategory && matchesVenue && matchesBudget;
    });
  }, [search, category, venue, budget]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setVenue("All");
    setBudget("All");
  };

  const hasActiveFilters =
    search !== "" || category !== "All" || venue !== "All" || budget !== "All";

  return (
    <>
      <SEO
        title="Portfolio Gallery"
        description="Browse our stunning portfolio of event decorations including weddings, birthdays, corporate events, and more. Get inspired for your celebration in Delhi NCR."
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Celebrations We've Crafted
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse through our gallery of stunning event decorations and get
              inspired for your own celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b py-4">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search gallery..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3 items-center">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {galleryCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={venue} onValueChange={setVenue}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Venue" />
                </SelectTrigger>
                <SelectContent>
                  {venueTypes.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                No results found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {visibleImages.length} of {filteredImages.length} images
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {visibleImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index % 12) * 0.05 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="mb-2">{image.category}</Badge>
                      <p className="text-white text-sm line-clamp-2">
                        {image.description}
                      </p>
                      <p className="text-white/60 text-xs mt-1">
                        {image.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setVisibleCount((prev) => prev + 12)}
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection />

      {/* Lightbox */}
      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
