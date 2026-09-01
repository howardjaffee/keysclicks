import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { DealsSection } from "@/components/DealsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SoftwareFinderQuiz } from "@/components/SoftwareFinderQuiz";
import { SoftwareBuyingGuide } from "@/components/SoftwareBuyingGuide";
import { SupportPromise } from "@/components/SupportPromise";
import { Footer } from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Keys & Clicks — Genuine Software Keys, Antivirus & Free Setup Help"
        description="Curated antivirus, QuickBooks, Windows keys, printers and PC gear from trusted retailers — plus free lifetime installation and activation support."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <WhyChooseUs />
        <SoftwareFinderQuiz />
        <SoftwareBuyingGuide />
        <DealsSection />
        <SupportPromise />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
