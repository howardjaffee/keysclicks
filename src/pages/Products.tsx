import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryProducts } from "@/components/CategoryProducts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Monitor, 
  FileText, 
  Printer, 
  Wifi, 
  Lock,
  Smartphone,
  Settings,
  Filter
} from "lucide-react";

const categories = [
  {
    id: "antivirus",
    name: "Antivirus Software",
    icon: Shield,
    color: "bg-accent text-accent-foreground",
    description: "Complete protection against malware, viruses, and cyber threats",
    count: "50+ products"
  },
  {
    id: "computers",
    name: "Computers & Laptops",
    icon: Monitor,
    color: "bg-accent hover:bg-accent text-primary",
    description: "Latest computers, laptops, and desktop systems",
    count: "200+ products"
  },
  {
    id: "office",
    name: "Office Software",
    icon: FileText,
    color: "bg-primary/10 hover:bg-primary/10 text-primary",
    description: "Microsoft Office, productivity suites, and business software",
    count: "15+ products"
  },
  {
    id: "printers",
    name: "Printers & Scanners",
    icon: Printer,
    color: "bg-accent text-accent-foreground",
    description: "Inkjet, laser printers, and all-in-one solutions",
    count: "100+ products"
  },
  {
    id: "networking",
    name: "Network Equipment",
    icon: Wifi,
    color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-600",
    description: "Routers, WiFi systems, and networking hardware",
    count: "50+ products"
  },
  {
    id: "security",
    name: "Security Suites",
    icon: Lock,
    color: "bg-orange-50 hover:bg-orange-100 text-orange-600",
    description: "Complete security solutions and total protection suites",
    count: "25+ products"
  },
  {
    id: "utilities",
    name: "System Utilities",
    icon: Settings,
    color: "bg-teal-50 hover:bg-teal-100 text-teal-600",
    description: "PC optimization, cleaning, and maintenance tools",
    count: "30+ products"
  },
  {
    id: "mobile",
    name: "Mobile Security",
    icon: Smartphone,
    color: "bg-cyan-50 hover:bg-cyan-100 text-cyan-600",
    description: "Mobile antivirus and security apps",
    count: "40+ products"
  }
];

export const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(selectedCategory || null);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCloseProducts = () => {
    setActiveCategory(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-hero-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
                Digital Products Store
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find the Perfect 
                <span className="block text-transparent bg-gradient-to-r from-primary-glow to-primary bg-clip-text">
                  Tech Solution
                </span>
              </h1>
              <p className="text-xl text-hero-foreground/90 max-w-3xl mx-auto">
                Browse our extensive collection of genuine software, security solutions, and tech products from trusted brands.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully curated categories to find exactly what you need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="group hover:shadow-card transition-all duration-300 cursor-pointer border-0 bg-card hover:scale-105"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      {/* Background decoration */}
                      <div className={`absolute inset-0 ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${category.color} flex items-center justify-center transition-colors duration-300`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {category.description}
                        </p>
                        
                        <Badge variant="secondary" className="text-xs mb-4">
                          {category.count}
                        </Badge>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        >
                          Browse Products
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
              <p className="text-lg text-muted-foreground">
                Most searched categories this month
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card 
                className="cursor-pointer hover:shadow-card transition-all duration-300 hover:scale-105"
                onClick={() => handleCategoryClick('antivirus')}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-10 w-10 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Antivirus & Security</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Protect your devices with premium antivirus solutions from Norton, McAfee, Kaspersky, and more.
                  </p>
                  <div className="text-center">
                    <Badge className="bg-destructive/10 text-destructive">Up to 75% OFF</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="cursor-pointer hover:shadow-card transition-all duration-300 hover:scale-105"
                onClick={() => handleCategoryClick('printers')}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Printer className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Printers & Scanners</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Find the perfect printer for home or office with our wide selection of inkjet and laser printers.
                  </p>
                  <div className="text-center">
                    <Badge className="bg-accent text-accent-foreground">Best Deals</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="cursor-pointer hover:shadow-card transition-all duration-300 hover:scale-105"
                onClick={() => handleCategoryClick('networking')}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Wifi className="h-10 w-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">WiFi & Networking</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Upgrade your home network with high-speed routers, mesh systems, and networking equipment.
                  </p>
                  <div className="text-center">
                    <Badge className="bg-indigo-100 text-indigo-600">Fast Shipping</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Category Products Modal */}
      {activeCategory && (
        <CategoryProducts 
          category={activeCategory} 
          onClose={handleCloseProducts}
        />
      )}
    </div>
  );
};