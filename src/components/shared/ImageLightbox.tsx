import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppLink } from "@/constants/site-config";
import type { GalleryImage } from "@/constants/gallery";

interface ImageLightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const [isSharing, setIsSharing] = useState(false);

  if (!image) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.alt,
          text: image.description,
          url: window.location.href,
        });
      } catch {
        // User cancelled sharing
      }
    } else {
      setIsSharing(true);
      navigator.clipboard.writeText(window.location.href);
      setTimeout(() => setIsSharing(false), 2000);
    }
  };

  const enquiryMessage = `Hi! I saw this beautiful ${image.category} decoration (${image.description}) on your website and would like to enquire about a similar setup.`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-2/3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 lg:h-[500px] object-cover"
              />
            </div>

            {/* Details */}
            <div className="lg:w-1/3 p-6 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{image.category}</Badge>
                <Badge variant="outline">{image.venue}</Badge>
                <Badge variant="secondary">{image.budget}</Badge>
              </div>

              <h3 className="font-heading text-xl font-semibold mb-2">
                {image.description}
              </h3>

              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>
                  <strong>Color Theme:</strong> {image.colorTheme}
                </p>
                <p>
                  <strong>Location:</strong> {image.location}
                </p>
                <p>
                  <strong>Venue Type:</strong> {image.venue}
                </p>
              </div>

              <div className="mt-auto space-y-3">
                <a
                  href={getWhatsAppLink(enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="gradient" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enquire About This Design
                  </Button>
                </a>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {isSharing ? "Link Copied!" : "Share"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
