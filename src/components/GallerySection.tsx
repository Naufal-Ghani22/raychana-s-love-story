import { motion } from "framer-motion";
import { Heart, Image } from "lucide-react";
import { useState } from "react";

// Generate placeholder photos (replace with actual photos later)
const generatePlaceholders = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    placeholder: true,
  }));
};

const photos = generatePlaceholders(50);

const GallerySection = () => {
  const [activeView, setActiveView] = useState<"slider" | "grid">("slider");

  // Duplicate photos for infinite scroll effect
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Kenangan Berharga
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Memories
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-16 bg-primary/30" />
            <Heart className="text-primary" size={16} fill="currentColor" />
            <div className="h-px w-16 bg-primary/30" />
          </div>

          {/* View Toggle */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveView("slider")}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeView === "slider"
                  ? "bg-primary text-primary-foreground"
                  : "bg-rose-soft text-foreground hover:bg-rose-blush"
              }`}
            >
              Auto Slider
            </button>
            <button
              onClick={() => setActiveView("grid")}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeView === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "bg-rose-soft text-foreground hover:bg-rose-blush"
              }`}
            >
              Grid View
            </button>
          </div>
        </motion.div>

        {/* Infinite Auto-Scroll Slider */}
        {activeView === "slider" && (
          <div className="relative">
            {/* Row 1 - Left to Right */}
            <div className="overflow-hidden mb-4">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  x: { repeat: Infinity, duration: 30, ease: "linear" },
                }}
              >
                {duplicatedPhotos.slice(0, 20).map((photo, index) => (
                  <PhotoCard key={`row1-${index}`} index={photo.id} />
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="overflow-hidden mb-4">
              <motion.div
                className="flex gap-4"
                animate={{ x: ["-50%", 0] }}
                transition={{
                  x: { repeat: Infinity, duration: 35, ease: "linear" },
                }}
              >
                {duplicatedPhotos.slice(10, 30).map((photo, index) => (
                  <PhotoCard key={`row2-${index}`} index={photo.id} />
                ))}
              </motion.div>
            </div>

            {/* Row 3 - Left to Right (slower) */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  x: { repeat: Infinity, duration: 40, ease: "linear" },
                }}
              >
                {duplicatedPhotos.slice(20, 40).map((photo, index) => (
                  <PhotoCard key={`row3-${index}`} index={photo.id} />
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {/* Grid View */}
        {activeView === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              >
                <PhotoCard index={photo.id} isGrid />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface PhotoCardProps {
  index: number;
  isGrid?: boolean;
}

const PhotoCard = ({ index, isGrid = false }: PhotoCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer
        bg-rose-soft border border-primary/10
        ${isGrid ? "aspect-square" : "w-48 h-48 md:w-56 md:h-56"}
        transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/20
      `}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
        <Image size={24} className="mb-2 opacity-50" />
        <span className="text-xs opacity-70">Foto {index}</span>
      </div>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default GallerySection;
