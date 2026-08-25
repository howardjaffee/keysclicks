import { Seo } from "@/components/Seo";
import { useState } from "react";
// Import product images
import nortonImage from "@/assets/products/norton-360-deluxe-new.jpg";
import canonPixmaImage from "@/assets/products/canon-pixma-new.jpg";
import windows11ProImage from "@/assets/products/windows-11-pro.jpg";
import kasperskySecurityImage from "@/assets/products/kaspersky-security.jpg";
import hpDeskjetImage from "@/assets/products/hp-deskjet-3755-new.jpg";
import asusRouterImage from "@/assets/products/asus-router.jpg";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { 
  Flame, 
  Star, 
  ExternalLink, 
  Clock, 
  Shield, 
  Printer, 
  Laptop,
  Timer,
  TrendingUp,
  Filter
} from "lucide-react";

const HotDeals = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const hotDeals = [
    {
      id: 1,
      name: "Norton 360 Deluxe",
      category: "antivirus",
      originalPrice: "$99.99",
      salePrice: "$39.99",
      savings: 60,
      rating: 4.8,
      reviews: 15420,
      badge: "Limited Time",
      timeLeft: "2d 14h 23m",
      description: "Complete protection for 5 devices with VPN, password manager, and 50GB cloud backup.",
      features: ["5 Device Protection", "Secure VPN", "Password Manager", "Identity Protection"],
      image: nortonImage,
      affiliateLink: "https://amazon.com/norton-360-deluxe-deal",
      dealType: "flash"
    },
    {
      id: 2,
      name: "Canon PIXMA TS8320",
      category: "printers",
      originalPrice: "$199.99",
      salePrice: "$129.99",
      savings: 35,
      rating: 4.7,
      reviews: 8420,
      badge: "Best Seller",
      timeLeft: "5d 8h 45m",
      description: "6-color photo printer with wireless connectivity and 4.3\" touchscreen display.",
      features: ["6-Color System", "Wireless Printing", "Auto Duplex", "Photo Quality"],
      image: canonPixmaImage,
      affiliateLink: "https://amazon.com/canon-pixma-deal",
      dealType: "sale"
    },
    {
      id: 3,
      name: "Windows 11 Pro",
      category: "software",
      originalPrice: "$199.99",
      salePrice: "$89.99",
      savings: 55,
      rating: 4.5,
      reviews: 5680,
      badge: "Hot Deal",
      timeLeft: "1d 6h 12m",
      description: "Latest Windows operating system with enhanced security and productivity features.",
      features: ["Enhanced Security", "New Interface", "Microsoft Teams", "Business Features"],
      image: windows11ProImage,
      affiliateLink: "https://amazon.com/windows-11-pro-deal",
      dealType: "flash"
    },
    {
      id: 4,
      name: "Kaspersky Total Security",
      category: "antivirus",
      originalPrice: "$79.99",
      salePrice: "$29.99",
      savings: 63,
      rating: 4.9,
      reviews: 12850,
      badge: "Editor's Choice",
      timeLeft: "3d 19h 56m",
      description: "Advanced protection for up to 10 devices with VPN and parental controls.",
      features: ["10 Device Coverage", "Advanced Protection", "Secure VPN", "Anti-Phishing"],
      image: kasperskySecurityImage,
      affiliateLink: "https://amazon.com/kaspersky-deal",
      dealType: "sale"
    },
    {
      id: 5,
      name: "HP DeskJet 3755",
      category: "printers",
      originalPrice: "$129.99",
      salePrice: "$79.99",
      savings: 38,
      rating: 4.5,
      reviews: 12650,
      badge: "Compact Design",
      timeLeft: "4d 12h 30m",
      description: "World's smallest all-in-one printer with wireless printing capabilities.",
      features: ["Ultra Compact", "Wireless Printing", "Mobile Apps", "Auto Document Feeder"],
      image: hpDeskjetImage,
      affiliateLink: "https://amazon.com/hp-deskjet-deal",
      dealType: "sale"
    },
    {
      id: 6,
      name: "ASUS AX6000 Router",
      category: "networking",
      originalPrice: "$349.99",
      salePrice: "$229.99",
      savings: 34,
      rating: 4.6,
      reviews: 3420,
      badge: "WiFi 6",
      timeLeft: "6d 2h 18m",
      description: "Next-gen WiFi 6 router with ultra-fast speeds and advanced security features.",
      features: ["WiFi 6 Technology", "AX6000 Speed", "8 Antennas", "Gaming Mode"],
      image: asusRouterImage,
      affiliateLink: "https://amazon.com/asus-router-deal",
      dealType: "sale"
    }
  ];

  const categories = [
    { id: "antivirus", name: "Antivirus", icon: Shield, count: hotDeals.filter(d => d.category === "antivirus").length },
    { id: "printers", name: "Printers", icon: Printer, count: hotDeals.filter(d => d.category === "printers").length },
    { id: "software", name: "Software", icon: Laptop, count: hotDeals.filter(d => d.category === "software").length },
    { id: "networking", name: "Networking", icon: TrendingUp, count: hotDeals.filter(d => d.category === "networking").length }
  ];

  const filteredDeals = selectedCategory 
    ? hotDeals.filter(deal => deal.category === selectedCategory)
    : hotDeals;

  const flashDeals = hotDeals.filter(deal => deal.dealType === "flash");

  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Today's Software & Tech Deals | Keys & Clicks"} description={"Live discounts on antivirus, Windows keys, QuickBooks, printers and networking gear from trusted retailers."} path="/hot-deals" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Hot Deals", path: "/hot-deals" }]} />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full mb-6 animate-pulse">
              <Flame className="h-5 w-5 text-red-500" />
              <span className="text-red-500 font-medium">Hot Deals - Limited Time</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🔥 Exclusive Tech Deals
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Save up to 70% on premium antivirus software, printers, and tech accessories. 
              Limited-time offers with genuine products and instant digital delivery.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium text-sm">Genuine Products</span>
              </div>
              <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <Timer className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium text-sm">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-primary font-medium text-sm">Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals Banner */}
      <section className="py-8 bg-gradient-deal text-deal-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Flame className="h-6 w-6 animate-bounce" />
              ⚡ Flash Deals - Ending Soon!
              <Flame className="h-6 w-6 animate-bounce" />
            </h2>
            <p className="text-red-100">
              Limited quantity available. These deals won't last long!
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filter by Category:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Deals ({hotDeals.length})
            </Button>
            
            {categories.map(category => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {category.name} ({category.count})
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hot Deals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔥 Current Hot Deals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked deals on the best tech products. All offers include genuine products, 
              instant delivery, and our satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal, index) => (
              <Card 
                key={deal.id} 
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Deal Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge 
                    className={`${
                      deal.dealType === 'flash' 
                        ? 'bg-destructive text-destructive-foreground animate-pulse' 
                        : 'bg-primary text-primary-foreground'
                    } shadow-lg`}
                  >
                    {deal.badge}
                  </Badge>
                </div>

                {/* Savings Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    Save {deal.savings}%
                  </Badge>
                </div>

                {/* Timer */}
                {deal.dealType === 'flash' && (
                  <div className="absolute bottom-4 right-4 z-10">
                    <Badge variant="destructive" className="animate-pulse">
                      <Clock className="mr-1 h-3 w-3" />
                      {deal.timeLeft}
                    </Badge>
                  </div>
                )}

                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(deal.rating) ? 'fill-deal text-deal' : 'text-muted-foreground/40'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">
                        {deal.rating} ({deal.reviews.toLocaleString()})
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {deal.name}
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-2">
                    {deal.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">{deal.salePrice}</span>
                    <span className="text-lg text-muted-foreground line-through">{deal.originalPrice}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {deal.features.map((feature, i) => (
                        <div key={i} className="text-xs bg-muted/50 px-2 py-1 rounded">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Remaining */}
                  {deal.timeLeft && (
                    <div className="flex items-center justify-center gap-2 bg-destructive/10 p-3 rounded-lg">
                      <Clock className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium text-destructive">
                        Ends in: {deal.timeLeft}
                      </span>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <Button 
                      asChild 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg text-lg py-6"
                      size="lg"
                    >
                      <a href={deal.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Claim Deal Now
                      </a>
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Deals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Deals?</h2>
            <p className="text-muted-foreground">
              We partner with trusted retailers to bring you the best prices on genuine products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Genuine Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All products are genuine and come with full manufacturer warranties and support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Timer className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Instant Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Digital products are delivered instantly via email with product keys and download links.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Best Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We monitor prices across multiple retailers to ensure you get the absolute best deals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Flame className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Never Miss a Hot Deal!
            </h2>
            <p className="text-muted-foreground mb-8">
              Get notified instantly when we add new deals. Join thousands of smart shoppers 
              who save money on tech products every day.
            </p>
            
            <div className="flex gap-4 max-w-md mx-auto mb-6">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              🎯 Exclusive deals • 📧 Weekly newsletter • 🚫 No spam ever
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotDeals;