import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages, galleryCategories } from "@/constants/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImageLightbox } from "@/components/shared/ImageLightbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { GalleryImage } from "@/constants/gallery";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages.slice(0, 8)
      : galleryImages
          .filter((img) => img.category === activeCategory)
          .slice(0, 8);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          badge="Our Portfolio"
          title="Celebrations We've Crafted"
          subtitle="Browse through our gallery of stunning event decorations and get inspired for your own celebration."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.slice(0, 5).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 || index === 3 ? "h-[400px]" : "h-[200px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Badge className="mb-2">{image.category}</Badge>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
