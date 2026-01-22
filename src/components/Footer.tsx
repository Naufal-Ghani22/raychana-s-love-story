import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-rose-soft">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-primary" size={20} fill="currentColor" />
            <span className="font-display text-lg text-foreground">LOVE U</span>
            <Heart className="text-primary" size={20} fill="currentColor" />
          </div>
          
          <p className="text-sm text-muted-foreground font-body mb-2">
            Dibuat oleh Naufal untuk Raychana Maharani Zahra
          </p>
          
          <p className="text-xs text-muted-foreground/70 font-body">
            Celamat Ulang Tahun Bubbbbb... • 2 Februari 2025
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
