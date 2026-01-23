import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
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
    const targetDate = new Date("2026-03-23T00:00:00");

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-deep via-primary to-accent">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-body tracking-wider">
                2 FEBRUARI 2025 • 4 TAHUN BERSAMA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display font-bold text-white leading-none mb-4"
            >
              <span className="text-5xl md:text-7xl lg:text-8xl block">SELAMAT</span>
              <span className="text-5xl md:text-7xl lg:text-8xl block">ULANG</span>
              <span className="text-5xl md:text-7xl lg:text-8xl block relative">
                TAHUN
                <motion.span
                  className="absolute -right-4 top-0 text-gold"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-1 w-16 bg-gold rounded-full" />
              <span className="text-gold text-2xl md:text-3xl font-display">ke-20</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/90 font-body text-lg md:text-xl max-w-md mb-8 italic"
            >
              "4 tahun bersamamu adalah perjalanan terbaik dalam hidupku."
            </motion.p>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 md:gap-4"
            >
              {[
                { value: timeLeft.days, label: "Hari" },
                { value: timeLeft.hours, label: "Jam" },
                { value: timeLeft.minutes, label: "Menit" },
                { value: timeLeft.seconds, label: "Detik" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 min-w-[60px] md:min-w-[80px] text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    key={item.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="block text-xl md:text-3xl font-bold text-white"
                  >
                    {String(item.value).padStart(2, "0")}
                  </motion.span>
                  <span className="text-xs md:text-sm text-white/80 font-body">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo container */}
              <motion.div
                  className="w-80 h-100 md:w-80 md:h-96 lg:w-96 lg:h-[500px] rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-white/20 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/Hero-Foto.png" // Ganti dengan nama file di folder public kamu
                    alt="Raychana Maharani Zahra"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x800?text=Foto+Raychana";
                    }}
                  />
              </motion.div>

              {/* Decorative badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-8 md:-right-8 bg-gold text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-wider">Anniversary</p>
                <p className="text-lg font-display font-bold">4 Tahun</p>
              </motion.div>

              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <p className="text-rose-deep font-display font-bold text-lg md:text-xl text-center">
                  Raychana Maharani Zahra
                </p>
                <p className="text-muted-foreground text-sm text-center font-body">
                  My Forever Love 💕
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
