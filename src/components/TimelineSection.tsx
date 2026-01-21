import { motion } from "framer-motion";
import { Heart, Star, Home, Sparkles, GraduationCap } from "lucide-react";

interface TimelinePhase {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const timelineData: TimelinePhase[] = [
  {
    year: "Tahun 1",
    title: "Awal Mula",
    description: "Pertemuan pertama kita di SMA. Saat mata kita bertemu untuk pertama kalinya, aku tahu ada sesuatu yang istimewa. Kamu mengubah hariku menjadi lebih berwarna.",
    icon: <GraduationCap size={24} />,
    accent: "from-rose-blush to-rose-soft",
  },
  {
    year: "Tahun 2",
    title: "Masa Pertumbuhan",
    description: "Kenangan-kenangan indah mulai terukir. Kita belajar memahami satu sama lain, berbagi tawa dan air mata. Setiap momen bersamamu adalah pelajaran berharga.",
    icon: <Sparkles size={24} />,
    accent: "from-lavender to-lavender-soft",
  },
  {
    year: "Tahun 3",
    title: "Kedewasaan",
    description: "Komitmen kita semakin kuat. Kita melewati badai bersama dan menjadi lebih dewasa. Cintaku padamu tumbuh lebih dalam setiap harinya.",
    icon: <Star size={24} />,
    accent: "from-gold-soft to-cream",
  },
  {
    year: "Tahun 4",
    title: "Perjalanan Luar Biasa",
    description: "Empat tahun yang penuh warna. Kita telah melewati begitu banyak hal bersama. Terima kasih telah menjadi bagian terindah dalam hidupku.",
    icon: <Heart size={24} />,
    accent: "from-rose-deep/20 to-primary/20",
  },
  {
    year: "Masa Depan",
    title: "Membangun Rumah Tangga",
    description: "Komitmenku untuk membangun masa depan bersamamu. Aku ingin menghabiskan sisa hidupku denganmu, membangun rumah tangga yang penuh cinta dan kebahagiaan.",
    icon: <Home size={24} />,
    accent: "from-primary/30 to-lavender/30",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-romantic">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Cerita Kita
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Perjalanan Kita
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-primary/30" />
            <Heart className="text-primary" size={16} fill="currentColor" />
            <div className="h-px w-16 bg-primary/30" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-lavender/40 to-primary/40 transform md:-translate-x-1/2" />

          {timelineData.map((phase, index) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${phase.accent} border-4 border-background flex items-center justify-center text-primary shadow-lg`}
                >
                  {phase.icon}
                </motion.div>
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-romantic rounded-2xl p-6 md:p-8"
                >
                  <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-rose-soft text-rose-deep rounded-full mb-4">
                    {phase.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  
                  {/* Photo placeholder */}
                  <div className="aspect-video rounded-xl bg-rose-soft/50 border-2 border-dashed border-primary/20 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      📷 Foto {phase.year}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
