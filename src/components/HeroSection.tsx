import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-02-02T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const } 
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-hero overflow-hidden">
      {/* Photo placeholder area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-rose-soft border-4 border-primary/20 flex items-center justify-center glow-soft overflow-hidden">
          <span className="text-muted-foreground text-sm text-center px-4 font-body">
            Foto Cover
            <br />
            <span className="text-xs">(Upload foto di sini)</span>
          </span>
        </div>
        <motion.div
          className="absolute -bottom-2 -right-2 text-primary"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart size={32} fill="currentColor" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase mb-4 font-body"
        >
          2 Februari 2025
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-gradient leading-tight mb-6"
        >
          Selamat Ulang Tahun ke-20,
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8"
        >
          Raychana Maharani Zahra
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-12 md:w-24 bg-primary/30" />
          <Heart className="text-primary" size={20} fill="currentColor" />
          <div className="h-px w-12 md:w-24 bg-primary/30" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground font-body italic max-w-2xl mx-auto mb-12"
        >
          "4 tahun bersamamu adalah perjalanan terbaik dalam hidupku. 
          Setiap momen bersamamu adalah hadiah yang tak ternilai."
        </motion.p>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            Hitung Mundur Menuju Hari Spesialmu
          </p>
          <div className="flex justify-center gap-3 md:gap-6">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours, label: "Jam" },
              { value: timeLeft.minutes, label: "Menit" },
              { value: timeLeft.seconds, label: "Detik" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="card-romantic rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[90px]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  key={item.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="block text-2xl md:text-4xl font-display font-bold text-rose-deep"
                >
                  {String(item.value).padStart(2, "0")}
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground font-body">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-muted-foreground mb-2">Gulir ke bawah</p>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
