import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const quotes = [
  {
    text: "Kamu adalah alasanku untuk tersenyum setiap pagi",
    emoji: "🌅",
  },
  {
    text: "Dalam setiap langkahku, ada kamu yang jadi kekuatanku",
    emoji: "💪",
  },
  {
    text: "Rumah bukanlah tempat, tapi perasaan. Dan rumahku adalah bersamamu",
    emoji: "🏠",
  },
  {
    text: "Aku tidak mencari kesempurnaan, aku menemukan keindahan dalam dirimu",
    emoji: "✨",
  },
];

const QuotesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-rose-soft/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-5.5 0-10 4.5-10 10 0 8 10 15 10 15s10-7 10-15c0-5.5-4.5-10-10-10z' fill='%23e91e63' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Quote className="text-primary/30 mx-auto mb-4" size={48} />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Kata-Kata Cinta
          </h2>
          <p className="text-muted-foreground font-body">
            Ungkapan hati yang tidak bisa diucapkan dengan biasa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-romantic rounded-3xl p-8 relative overflow-hidden group"
            >
              <motion.span
                className="absolute top-4 right-4 text-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {quote.emoji}
              </motion.span>
              
              <Quote className="text-primary/20 mb-4" size={32} />
              
              <p className="text-lg md:text-xl font-letter text-foreground leading-relaxed italic">
                "{quote.text}"
              </p>
              
              <motion.div className="flex items-center gap-2 mt-6">
                <Heart size={16} className="text-rose-deep" fill="currentColor" />
                <span className="text-sm text-muted-foreground font-body">
                  Untukmu, Raychana
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
