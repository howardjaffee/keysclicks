import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { DealsSection } from "@/components/DealsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SupportPromise } from "@/components/SupportPromise";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <WhyChooseUs />
        <DealsSection />
        <SupportPromise />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
