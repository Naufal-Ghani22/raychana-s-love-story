import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import LoveLetterSection from "@/components/LoveLetterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingElements />
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <LoveLetterSection />
      <Footer />
    </main>
  );
};

export default Index;
