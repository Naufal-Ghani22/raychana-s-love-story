import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import QuotesSection from "@/components/QuotesSection";
import LoveCriteriaSection from "@/components/LoveCriteriaSection";
import SpecialMessageSection from "@/components/SpecialMessageSection";
import GallerySection from "@/components/GallerySection";
import PromiseSection from "@/components/PromiseSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import HopesSection from "@/components/HopesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingElements />
      <HeroSection />
      <TimelineSection />
      <QuotesSection />
      <LoveCriteriaSection />
      <SpecialMessageSection />
      <GallerySection />
      <PromiseSection />
      <LoveLetterSection />
      <HopesSection />
      <Footer />
    </main>
  );
};

export default Index;
