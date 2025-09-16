import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { DealsSection } from "@/components/DealsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <DealsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
