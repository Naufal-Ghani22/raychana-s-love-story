import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, Trash2, Sparkles, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface Hope {
  id: string;
  text: string;
  createdAt: Date;
}

const HopesSection = () => {
  const [hopes, setHopes] = useState<Hope[]>([]);
  const [newHope, setNewHope] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load hopes from localStorage on mount
  useEffect(() => {
    const savedHopes = localStorage.getItem("raychana-hopes");
    if (savedHopes) {
      const parsed = JSON.parse(savedHopes);
      setHopes(parsed.map((h: Hope) => ({ ...h, createdAt: new Date(h.createdAt) })));
    }
  }, []);

  // Save hopes to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("raychana-hopes", JSON.stringify(hopes));
  }, [hopes]);

  const handleSubmit = () => {
    if (!newHope.trim()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const hope: Hope = {
        id: Date.now().toString(),
        text: newHope.trim(),
        createdAt: new Date(),
      };
      setHopes((prev) => [hope, ...prev]);
      setNewHope("");
      setIsSubmitting(false);
    }, 500);
  };

  const handleDelete = (id: string) => {
    setHopes((prev) => prev.filter((hope) => hope.id !== id));
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-rose-soft to-lavender-soft relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-[10%] text-3xl opacity-50"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute top-[30%] right-[15%] text-2xl opacity-50"
          animate={{ y: [0, 10, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[20%] text-3xl opacity-40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌟
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="text-gold" size={20} fill="currentColor" />
            <span className="text-gold-soft text-sm font-body tracking-wider">HARAPAN & DOA</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tulis Doa dan Harapan
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Tulis harapan dan doa kamu disini yaaa sayaanggkuuuu
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="card-romantic rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-soft items-center justify-center flex-shrink-0">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <Textarea
                  value={newHope}
                  onChange={(e) => setNewHope(e.target.value)}
                  placeholder="Tuliskan harapan atau doamu di sini, sayang... 💫"
                  className="min-h-[120px] bg-transparent border-none focus-visible:ring-0 text-foreground font-body placeholder:text-muted-foreground resize-none text-lg"
                />
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-muted-foreground">
                    {newHope.length} karakter
                  </span>
                  <Button
                    onClick={handleSubmit}
                    disabled={!newHope.trim() || isSubmitting}
                    className="bg-gradient-to-r from-gold to-gold-soft hover:opacity-90 text-white font-body gap-2"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✨
                      </motion.span>
                    ) : (
                      <Send size={18} />
                    )}
                    Kirim Harapan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hopes List */}
        <div className="max-w-3xl mx-auto">
          {hopes.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground font-body mb-6"
            >
              ✨ {hopes.length} harapan tersimpan
            </motion.p>
          )}
          
          <AnimatePresence mode="popLayout">
            {hopes.map((hope, index) => (
              <motion.div
                key={hope.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="card-romantic rounded-2xl p-5 md:p-6 group relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent" />
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-soft to-lavender-soft flex items-center justify-center">
                        <Heart size={18} className="text-rose-deep" fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-body leading-relaxed mb-3 whitespace-pre-wrap">
                        {hope.text}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        {formatDate(hope.createdAt)}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(hope.id)}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10"
                    >
                      <Trash2 size={16} className="text-muted-foreground hover:text-destructive" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {hopes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <motion.span
                className="text-6xl block mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💫
              </motion.span>
              <p className="text-muted-foreground font-body">
                Belum ada harapan yang ditulis.
              </p>
              <p className="text-muted-foreground font-body text-sm">
                Tuliskan harapan pertamamu di atas!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HopesSection;
