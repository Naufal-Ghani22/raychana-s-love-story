import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Crown, Gem, Gift } from "lucide-react";

const criteriaItems = [
  {
    icon: Heart,
    title: "Kesetiaan",
    description: "Kamu selalu ada untukku di saat susah maupun senang",
    color: "text-rose-deep",
  },
  {
    icon: Star,
    title: "Pengertian",
    description: "Kamu selalu mengerti keadaanku tanpa perlu aku jelaskan",
    color: "text-gold",
  },
  {
    icon: Sparkles,
    title: "Kasih Sayang",
    description: "Setiap sentuhan dan kata-katamu penuh dengan cinta",
    color: "text-primary",
  },
  {
    icon: Crown,
    title: "Kebanggaan",
    description: "Kamu adalah wanita yang membuatku bangga setiap hari",
    color: "text-accent",
  },
  {
    icon: Gem,
    title: "Berharga",
    description: "Kamu adalah permata terindah dalam hidupku",
    color: "text-lavender",
  },
  {
    icon: Gift,
    title: "Anugerah",
    description: "Kehadiranmu adalah hadiah terbaik dari Tuhan",
    color: "text-rose-deep",
  },
];

const LoveCriteriaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-rose-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-lavender/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body tracking-wider mb-4">
            MENGAPA AKU MENCINTAIMU
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Kriteria Cinta Kita
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Setiap hari bersamamu mengajarkanku arti cinta yang sesungguhnya.
            Ini adalah alasan mengapa kamu begitu berharga bagiku.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {criteriaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-romantic rounded-3xl p-8 cursor-pointer group"
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-soft to-lavender-soft flex items-center justify-center mb-6 ${item.color}`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon size={32} />
              </motion.div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-rose-deep transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                {item.description}
              </p>
              
              <motion.div
                className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent mt-4 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground font-body italic mt-12"
        >
          ✨ Dan masih banyak lagi alasan yang tidak bisa kusebutkan satu per satu...
        </motion.p>
      </div>
    </section>
  );
};

export default LoveCriteriaSection;
