import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, MessageCircleHeart, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const specialMessages = [
  {
    title: "Pesan Pertama",
    content: "Klik untuk membaca pesan spesial dariku...",
    icon: "💌",
  },
  {
    title: "Pesan Kedua",
    content: "Klik untuk membaca pesan spesial dariku...",
    icon: "💕",
  },
  {
    title: "Pesan Ketiga",
    content: "Klik untuk membaca pesan spesial dariku...",
    icon: "💖",
  },
  {
    title: "Pesan Rahasia",
    content: "Klik untuk membaca pesan spesial dariku...",
    icon: "🤫",
  },
];

const SpecialMessageSection = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-lavender-soft to-cream relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 right-20 text-4xl"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💝
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-3xl"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💗
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-soft rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircleHeart className="text-rose-deep" size={20} />
            <span className="text-rose-deep text-sm font-body tracking-wider">PESAN SPESIAL</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Buka Pesan Rahasia
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Klik salah satu kartu untuk membaca pesan-pesan spesial yang sudah kusiapkan untukmu.
          </p>
        </motion.div>

        {/* Message Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {specialMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMessage(index)}
              className="card-romantic rounded-2xl p-6 cursor-pointer text-center border-2 border-transparent hover:border-rose-soft hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <motion.span
                className="text-4xl md:text-5xl block mb-4 pointer-events-none"
                animate={{ scale: 1 }}
              >
                {message.icon}
              </motion.span>
              <h3 className="font-display font-semibold text-foreground text-sm md:text-base mb-2 pointer-events-none">
                {message.title}
              </h3>
              <p className="text-xs text-muted-foreground font-body pointer-events-none">
                Klik untuk buka
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMessage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedMessage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-soft to-lavender-soft rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-rose-soft transition-colors"
                >
                  <X size={18} className="text-muted-foreground" />
                </button>

                <div className="relative z-10 text-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-6xl block mb-6"
                  >
                    {specialMessages[selectedMessage].icon}
                  </motion.span>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-display font-bold text-foreground mb-4"
                  >
                    {specialMessages[selectedMessage].title}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-rose-soft/50 rounded-2xl p-6 mb-6"
                  >
                    <p className="text-foreground font-body leading-relaxed italic">
                      "{specialMessages[selectedMessage].content}"
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-2 text-muted-foreground"
                  >
                    <Sparkles size={16} className="text-gold" />
                    <span className="text-sm font-body">Dengan segenap cinta</span>
                    <Sparkles size={16} className="text-gold" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpecialMessageSection;
