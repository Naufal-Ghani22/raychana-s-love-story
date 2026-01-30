import { motion } from "framer-motion";
import { Heart, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

// 1. Generate Data Foto (Pastikan fungsi ini me-return array)
const photos = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  // Menggunakan penamaan file berurutan di folder public/Photo-Tahun
  src: `/Photo-Tahun/kenangan-${i + 1}.jpg`, 
}));

const GallerySection = () => {
  const [activeView, setActiveView] = useState<"slider" | "grid">("slider");

  // Duplikasi foto untuk efek infinite scroll yang mulus
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
              className={`px-6 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeView === "slider"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-rose-soft text-foreground hover:bg-rose-blush"
              }`}
            >
              Auto Slider
            </button>
            <button
              onClick={() => setActiveView("grid")}
              className={`px-6 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeView === "grid"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-rose-soft text-foreground hover:bg-rose-blush"
              }`}
            >
              Grid View
            </button>
          </div>
        </motion.div>

        {/* Infinite Auto-Scroll Slider */}
        {activeView === "slider" && (
          <div className="relative space-y-4">
            {/* Baris 1 - Kiri ke Kanan */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  x: { repeat: Infinity, duration: 40, ease: "linear" },
                }}
              >
                {duplicatedPhotos.slice(0, 40).map((photo, index) => (
                  <PhotoCard key={`row1-${index}`} src={photo.src} id={photo.id} />
                ))}
              </motion.div>
            </div>

            {/* Baris 2 - Kanan ke Kiri */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: ["-50%", 0] }}
                transition={{
                  x: { repeat: Infinity, duration: 45, ease: "linear" },
                }}
              >
                {duplicatedPhotos.slice(20, 60).map((photo, index) => (
                  <PhotoCard key={`row2-${index}`} src={photo.src} id={photo.id} />
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
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

// 2. Definisi Komponen PhotoCard (Hanya satu versi yang benar)
interface PhotoCardProps {
  src: string;
  id: number;
  isGrid?: boolean;
}

const PhotoCard = ({ src, id, isGrid = false }: PhotoCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: isGrid ? 0 : 2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer
        bg-rose-soft border-2 border-white/50 shadow-sm
        ${isGrid ? "aspect-square" : "w-48 h-48 md:w-60 md:h-60"}
        transition-all duration-300 hover:shadow-xl hover:shadow-primary/20
      `}
    >
      {/* Gambar Asli */}
      <img 
        src={src} 
        alt={`Kenangan ${id}`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Placeholder jika gambar belum ada
          e.currentTarget.src = "https://placehold.co/400x400?text=Memories+💕";
        }}
      />
      
      {/* Overlay Glow saat Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-3 left-3 text-white text-[10px] font-bold uppercase tracking-widest opacity-80">
          Kenangan #{id}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GallerySection;
