import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-primary/10">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-10 right-10 text-lavender/20">
        <Heart size={80} fill="currentColor" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Dari Hatiku
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Surat Cinta
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-primary/30" />
            <Heart className="text-primary" size={16} fill="currentColor" />
            <div className="h-px w-16 bg-primary/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="card-romantic rounded-3xl p-8 md:p-12 lg:p-16 relative"
        >
          {/* Decorative corner hearts */}
          <div className="absolute top-4 left-4 text-primary/20">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="absolute top-4 right-4 text-primary/20">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="absolute bottom-4 left-4 text-primary/20">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="absolute bottom-4 right-4 text-primary/20">
            <Heart size={24} fill="currentColor" />
          </div>

          <div className="letter-text text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-display text-rose-deep italic"
            >
              Untuk Raychana tersayang,
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Hari ini, di usiamu yang ke-20, aku ingin mengatakan sesuatu yang sangat penting. 
              Empat tahun bukan waktu yang singkat. Empat tahun adalah ribuan momen, jutaan kenangan, 
              dan satu juta alasan mengapa aku semakin yakin bahwa kamu adalah orang yang tepat untukku.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Dari pertemuan pertama kita di SMA hingga hari ini, kamu telah menjadi saksi 
              perjalanan hidupku. Kamu adalah rumahku, tempat di mana aku selalu ingin pulang. 
              Setiap tawa, setiap air mata, setiap tantangan yang kita hadapi bersama—semuanya 
              telah membentuk kita menjadi seperti sekarang.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              Aku tidak hanya mencintaimu, tapi aku juga sangat bangga padamu. 
              Melihatmu tumbuh, melihatmu berjuang, dan melihatmu menjadi wanita yang luar biasa 
              seperti sekarang—itu adalah kebahagiaan terbesarku.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="text-rose-deep font-medium"
            >
              Dan aku berjanji, ini baru permulaan. Aku sangat serius untuk masa depan kita. 
              Aku ingin membangun rumah tangga bersamamu, menghabiskan sisa hidupku denganmu, 
              dan terus mencintaimu lebih dalam setiap harinya.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
            >
              Selamat ulang tahun ke-20, sayangku. Semoga tahun ini membawa lebih banyak 
              kebahagiaan, kesuksesan, dan cinta. Dan aku berharap bisa selalu ada di sisimu 
              untuk merayakan setiap momen indahmu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="pt-8 text-right"
            >
              <p className="text-xl md:text-2xl font-display italic text-rose-deep">
                Dengan cinta yang tak terbatas,
              </p>
              <p className="text-2xl md:text-3xl font-display font-semibold mt-2 text-foreground">
                ♡ Kekasihmu ♡
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="text-primary w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
          </motion.div>
          <p className="text-xl md:text-2xl font-display italic text-muted-foreground mt-4">
            "Forever and Always"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
