import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { CategoryProducts } from "./CategoryProducts";

export const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const handleShopProducts = () => {
    setSelectedCategory('all');
  };
  
  const handleBrowseAntivirus = () => {
    setSelectedCategory('antivirus');
  };
  
  const handleCloseProducts = () => {
    setSelectedCategory(null);
  };
  
  return (
    <>
      <section 
        className="relative bg-gradient-hero text-hero-foreground py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 37, 64, 0.9), rgba(40, 47, 84, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/20 text-primary-glow px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30 animate-fade-in">
              <Shield className="h-4 w-4 mr-2" />
              Digital Security & Software Store
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Your Corner for
              <span className="block text-transparent bg-gradient-to-r from-primary-glow to-primary bg-clip-text">
                Digital Product Keys & Software
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-hero-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Find honest reviews, expert comparisons, and exclusive deals on top-rated antivirus software, Windows licenses, and essential PC tools.
            </p>
            
            <div className="text-lg mb-8 text-hero-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              <p>
                Welcome to Digital Corner, your go-to source for everything digital. We understand how overwhelming it can be to choose the right software to protect your devices and enhance your productivity. Our mission is to simplify this process by providing comprehensive guides, in-depth reviews, and side-by-side comparisons of popular digital products. Whether you need a robust antivirus like McAfee or Norton, a new operating system like Windows 11, or a utility tool like CCleaner, we've got you covered. We've done the research so you can make an informed decision and get the best value.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-primary group transition-all duration-300 hover:scale-105"
                onClick={handleShopProducts}
              >
                Shop Digital Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={handleBrowseAntivirus}
              >
                Browse Antivirus
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-hero-foreground/80 animate-fade-in">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-glow" />
                <span className="text-sm font-medium">Genuine Licenses</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-glow" />
                <span className="text-sm font-medium">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary-glow" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-hero-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-glow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Category Products Modal */}
      {selectedCategory && (
        <CategoryProducts 
          category={selectedCategory} 
          onClose={handleCloseProducts}
        />
      )}
    </>
  );
};