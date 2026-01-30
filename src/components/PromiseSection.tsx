import { motion } from "framer-motion";
import { Heart, Repeat, CircleDot, Home, Shield, Sparkles } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface PromiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const promises: PromiseItem[] = [
  {
    icon: Shield,
    title: "Memberi Rasa Aman",
    description: "Aku pastikan kamu bakal ngerasa aman bersamaku yaahhh",
  },
  {
    icon: Heart,
    title: "Cinta yg Hangat",
    description: "Tiap versi kita kedepannya tak boleh padam sedikitpun!",
  },
  {
    icon: Home,
    title: "Membangun Rumah Tangga",
    description: "Bersama membangun kehidupan yang kita impikan",
  },
  {
    icon: Repeat,
    title: "Selamanya",
    description: "Sampai napas terakhirku, aku akan terus bersamamu",
  },
];

const PromiseSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-rose-deep via-primary to-accent relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <CircleDot className="text-white" size={32} />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Janjiku Untukmu
          </h2>
          <p className="text-white/80 font-body max-w-xl mx-auto">
            Ini adalah janji-janji yang kuucapkan dari lubuk hati terdalam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20"
              >
                <motion.div
                  className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <IconComponent className="text-white" size={32} />
                </motion.div>
                
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {promise.title}
                </h3>
                
                <p className="text-white/70 font-body text-sm leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-gold" size={24} />
            <span className="text-white font-display text-lg">
              Forever & Always
            </span>
            <Sparkles className="text-gold" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;
