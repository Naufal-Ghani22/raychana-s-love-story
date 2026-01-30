import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

// 1. Data 50 foto dengan path: /Photo-Gallery/foto-x.jpg
const photos = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  src: `/Photo-Gallery/foto-${i + 1}.jpg`, 
}));

const GallerySection = () => {
  const [activeView, setActiveView] = useState<"slider" | "grid">("slider");
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

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveView("slider")}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeView === "slider" ? "bg-primary text-primary-foreground shadow-md" : "bg-rose-soft text-foreground"
              }`}
            >
              Auto Slider
            </button>
            <button
              onClick={() => setActiveView("grid")}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeView === "grid" ? "bg-primary text-primary-foreground shadow-md" : "bg-rose-soft text-foreground"
              }`}
            >
              Grid View
            </button>
          </div>
        </motion.div>

        {/* 5 BARIS AUTO SLIDER SESUAI REQUES */}
        {activeView === "slider" && (
          <div className="relative space-y-4">
            {/* Baris 1 - Kiri ke Kanan */}
            <div className="overflow-hidden">
              <motion.div className="flex gap-4" animate={{ x: [0, "-50%"] }} transition={{ x: { repeat: Infinity, duration: 30, ease: "linear" } }}>
                {duplicatedPhotos.slice(0, 20).map((photo, index) => (
                  <PhotoCard key={`row1-${index}`} src={photo.src} id={photo.id} />
                ))}
              </motion.div>
            </div>
            {/* Baris 2 - Kanan ke Kiri */}
            <div className="overflow-hidden">
              <motion.div className="flex gap-4" animate={{ x: ["-50%", 0] }} transition={{ x: { repeat: Infinity, duration: 35, ease: "linear" } }}>
                {duplicatedPhotos.slice(10, 30).map((photo, index) => (
                  <PhotoCard key={`row2-${index}`} src={photo.src} id={photo.id} />
                ))}
              </motion.div>
            </div>
            {/* Baris 3 - Kiri ke Kanan */}
            <div className="overflow-hidden">
              <motion.div className="flex gap-4" animate={{ x: [0, "-50%"] }} transition={{ x: { repeat: Infinity, duration: 40, ease: "linear" } }}>
                {duplicatedPhotos.slice(20, 40).map((photo, index) => (
                  <PhotoCard key={`row3-${index}`} src={photo.src} id={photo.id} />
                ))}
              </motion.div>
            </div>
            {/* Baris 4 - Kanan ke Kiri */}
            <div className="overflow-hidden">
              <motion.div className="flex gap-4" animate={{ x: ["-50%", 0] }} transition={{ x: { repeat: Infinity, duration: 32, ease: "linear" } }}>
                {duplicatedPhotos.slice(5, 25).map((photo, index) => (
                  <PhotoCard key={`row4-${index}`} src={photo.src} id={photo.id} />
                ))}
              </motion.div>
            </div>
            {/* Baris 5 - Kiri ke Kanan */}
            <div className="overflow-hidden">
              <motion.div className="flex gap-4" animate={{ x: [0, "-50%"] }} transition={{ x: { repeat: Infinity, duration: 38, ease: "linear" } }}>
                {duplicatedPhotos.slice(15, 35).map((photo, index) => (
                  <PhotoCard key={`row5-${index}`} src={photo.src} id={photo.id} />
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {/* Grid View (2-5 Kolom) */}
        {activeView === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                <PhotoCard src={photo.src} id={photo.id} isGrid />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface PhotoCardProps {
  src: string;
  id: number;
  isGrid?: boolean;
}

const PhotoCard = ({ src, id, isGrid = false }: PhotoCardProps) => {
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
      <img 
        src={src} 
        alt={`Kenangan ${id}`} 
        className="w-full h-full object-cover" 
        onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400?text=Foto+Kenangan"; }} 
      />
      <motion.div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0" whileHover={{ opacity: 1 }} />
    </motion.div>
  );
};

export default GallerySection;
