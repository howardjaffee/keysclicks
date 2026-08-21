import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { ProductModal } from "./ProductModal";

import k7AntivirusImg from "@/assets/products/k7-antivirus.jpg";
import kasperskyAntivirusImg from "@/assets/products/kaspersky-antivirus.jpg";
import mcafeeAntivirusImg from "@/assets/products/mcafee-antivirus.jpg";
import mcafeeTotalImg from "@/assets/products/mcafee-total-protection.jpg";
import quickhealImg from "@/assets/products/quickheal-antivirus.png";
import npavImg from "@/assets/products/npav-total-security.jpg";
import windows11Img from "@/assets/products/windows-11-pro.jpg";
import windows10Img from "@/assets/products/windows-10-home.jpg";
import ccleanerImg from "@/assets/products/ccleaner-pro.jpg";
import office2021Img from "@/assets/products/office-2021.jpg";

const products = [
  {
    id: 1,
    name: "Norton 360 Deluxe 2025 - 5 Devices",
    price: 24.99,
    originalPrice: 89.99,
    discount: 72,
    rating: 4.8,
    reviews: 15657,
    image: kasperskyAntivirusImg,
    badge: "Best Seller",
    category: "Antivirus",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "Norton 360 Deluxe provides comprehensive protection for up to 5 devices with antivirus, VPN, password manager, and Dark Web monitoring.",
    features: [
      "Real-time threat protection for 5 devices",
      "Secure VPN (unlimited data)",
      "Password Manager with secure vault",
      "Dark Web Monitoring for personal info",
      "100GB cloud backup storage",
      "Smart Firewall for PC/Mac"
    ]
  },
  {
    id: 2,
    name: "McAfee Total Protection 2025 - 5 Devices",
    price: 29.99,
    originalPrice: 119.99,
    discount: 75,
    rating: 4.7,
    reviews: 11847,
    image: mcafeeTotalImg,
    badge: "Hot Deal",
    category: "Total Protection",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "McAfee Total Protection offers award-winning antivirus, identity monitoring, and secure VPN for comprehensive digital security.",
    features: [
      "Antivirus protection for 5 devices",
      "Identity monitoring and restoration",
      "Secure VPN with bank-grade encryption",
      "Password Manager with biometric login",
      "Safe browsing and anti-phishing",
      "File shredder for sensitive data"
    ]
  },
  {
    id: 3,
    name: "Norton AntiVirus Plus 2025 - 1 Device",
    price: 19.99,
    originalPrice: 59.99,
    discount: 67,
    rating: 4.6,
    reviews: 8987,
    image: k7AntivirusImg,
    badge: "Budget Pick",
    category: "Antivirus",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "Essential antivirus protection for 1 PC or Mac with real-time threat protection and Smart Firewall.",
    features: [
      "Real-time threat protection",
      "Advanced malware detection",
      "Smart Firewall for PC/Mac",
      "Automatic security updates",
      "24/7 customer support",
      "2GB cloud backup storage"
    ]
  },
  {
    id: 4,
    name: "Microsoft Windows 11 Pro (Digital License)",
    price: 199.99,
    originalPrice: 399.99,
    discount: 50,
    rating: 4.9,
    reviews: 5421,
    image: windows11Img,
    badge: "Premium",
    category: "Operating Systems",
    affiliateLink: "https://amzn.to/4poVKtF",
    description: "Genuine Microsoft Windows 11 Pro digital license with enhanced security, productivity features, and business tools.",
    features: [
      "Enhanced security with TPM 2.0",
      "Microsoft Teams integration",
      "BitLocker device encryption",
      "Windows Hello biometric login",
      "Hyper-V virtualization",
      "Remote Desktop functionality"
    ]
  },
  {
    id: 5,
    name: "Bitdefender Antivirus Plus 2025",
    price: 23.99,
    originalPrice: 59.99,
    discount: 60,
    rating: 4.8,
    reviews: 3245,
    image: ccleanerImg,
    badge: "Editor's Choice",
    category: "Antivirus",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "Award-winning antivirus protection with minimal impact on system performance and advanced threat detection.",
    features: [
      "Advanced threat defense",
      "Web attack prevention",
      "Anti-fraud protection",
      "Secure browsing",
      "Rescue mode for infected systems",
      "Multi-layer ransomware protection"
    ]
  },
  {
    id: 6,
    name: "Kaspersky Internet Security 2025",
    price: 27.99,
    originalPrice: 79.99,
    discount: 65,
    rating: 4.7,
    reviews: 6876,
    image: quickhealImg,
    badge: "Trending",
    category: "Internet Security",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "Multi-device protection with privacy tools, safe banking, and parental controls for comprehensive family security.",
    features: [
      "Multi-device protection (3 devices)",
      "Safe Money for secure banking",
      "Privacy Cleaner for browsing data",
      "Webcam protection",
      "Parental Control tools",
      "Password Manager included"
    ]
  },
  {
    id: 7,
    name: "Microsoft Windows 10 Home (Digital License)",
    price: 139.99,
    originalPrice: 199.99,
    discount: 30,
    rating: 4.8,
    reviews: 8134,
    image: windows10Img,
    badge: "Reliable Choice",
    category: "Operating Systems",
    affiliateLink: "https://amzn.to/4poVKtF",
    description: "Genuine Windows 10 Home digital license with familiar interface and essential features for home users.",
    features: [
      "Familiar Windows interface",
      "Microsoft Edge browser",
      "Windows Hello login",
      "Cortana voice assistant",
      "Xbox app integration",
      "Regular security updates"
    ]
  },
  {
    id: 8,
    name: "Microsoft Office 2021 Professional Plus",
    price: 249.99,
    originalPrice: 439.99,
    discount: 43,
    rating: 4.9,
    reviews: 4876,
    image: office2021Img,
    badge: "Professional",
    category: "Office Software",
    affiliateLink: "https://amzn.to/4poVKtF",
    description: "Complete Office suite with Word, Excel, PowerPoint, Outlook, and more for professional productivity.",
    features: [
      "Word, Excel, PowerPoint, Outlook",
      "Access database management",
      "Publisher desktop publishing",
      "OneNote digital notebook",
      "Skype for Business communication",
      "One-time purchase (no subscription)"
    ]
  },
  {
    id: 9,
    name: "ESET Internet Security 2025",
    price: 39.99,
    originalPrice: 89.99,
    discount: 56,
    rating: 4.6,
    reviews: 2756,
    image: npavImg,
    badge: "Advanced Protection",
    category: "Internet Security",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "Premium internet security with banking protection, anti-theft features, and parental control.",
    features: [
      "Multi-layered protection",
      "Banking & payment protection",
      "Anti-theft for laptops",
      "Parental Control",
      "Social media scanner",
      "Cloud-powered scanning"
    ]
  }
];

export const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBuyNow = (affiliateLink: string) => {
    window.open(affiliateLink, '_blank');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Digital Security Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Digital Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genuine software licenses, antivirus protection, and system optimization tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-card transition-all duration-300 border-0 bg-card overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-64 w-full object-contain bg-secondary p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <Badge 
                      className={`
                        ${product.badge === 'Best Seller' ? 'bg-primary text-primary-foreground' : ''}
                        ${product.badge === 'Hot Deal' ? 'bg-deal text-deal-foreground' : ''}
                        ${product.badge === 'New Arrival' ? 'bg-purple-500 text-white' : ''}
                        ${product.badge === 'Premium' ? 'bg-gold text-black' : ''}
                        ${product.badge === 'Budget Pick' ? 'bg-green-500 text-white' : ''}
                        ${product.badge === 'Trending' ? 'bg-pink-500 text-white' : ''}
                      `}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-deal text-deal-foreground">
                      {product.discount}% OFF
                    </Badge>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-foreground rounded-full p-2 h-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-foreground rounded-full p-2 h-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''
                        }`} 
                      />
                    </Button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 
                    className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleProductClick(product)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleBuyNow(product.affiliateLink)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Digital Products
          </Button>
        </div>
        
        {/* Product Modal */}
        <ProductModal 
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};