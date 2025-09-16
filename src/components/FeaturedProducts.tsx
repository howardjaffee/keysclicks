import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

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
    name: "Kaspersky Antivirus 1PC 1 Year",
    price: 225.00,
    originalPrice: 699.00,
    discount: 68,
    rating: 4.8,
    reviews: 2456,
    image: kasperskyAntivirusImg,
    badge: "Best Seller",
    category: "Antivirus"
  },
  {
    id: 2,
    name: "McAfee Total Protection 1PC 3 Years",
    price: 999.00,
    originalPrice: 2999.00,
    discount: 67,
    rating: 4.7,
    reviews: 1834,
    image: mcafeeTotalImg,
    badge: "Hot Deal",
    category: "Total Protection"
  },
  {
    id: 3,
    name: "K7 Anti Virus Premium 1PC 1 Year",
    price: 170.00,
    originalPrice: 699.00,
    discount: 76,
    rating: 4.6,
    reviews: 987,
    image: k7AntivirusImg,
    badge: "Top Rated",
    category: "Antivirus"
  },
  {
    id: 4,
    name: "Windows 11 Pro Product Key",
    price: 1299.00,
    originalPrice: 2499.00,
    discount: 48,
    rating: 4.9,
    reviews: 3421,
    image: windows11Img,
    badge: "Premium",
    category: "Windows Keys"
  },
  {
    id: 5,
    name: "CCleaner Professional License",
    price: 599.00,
    originalPrice: 999.00,
    discount: 40,
    rating: 4.5,
    reviews: 1245,
    image: ccleanerImg,
    badge: "Popular",
    category: "Software"
  },
  {
    id: 6,
    name: "Quick Heal Antivirus Pro 1PC 1 Year",
    price: 310.00,
    originalPrice: 700.00,
    discount: 56,
    rating: 4.7,
    reviews: 876,
    image: quickhealImg,
    badge: "Trending",
    category: "Antivirus"
  },
  {
    id: 7,
    name: "Windows 10 Home Product Key",
    price: 899.00,
    originalPrice: 1699.00,
    discount: 47,
    rating: 4.8,
    reviews: 2134,
    image: windows10Img,
    badge: "Great Value",
    category: "Windows Keys"
  },
  {
    id: 8,
    name: "Microsoft Office 2021 Professional",
    price: 1999.00,
    originalPrice: 3499.00,
    discount: 43,
    rating: 4.9,
    reviews: 1876,
    image: office2021Img,
    badge: "Premium",
    category: "Office Keys"
  },
  {
    id: 9,
    name: "NPAV Total Security 1PC 1 Year",
    price: 299.00,
    originalPrice: 1250.00,
    discount: 76,
    rating: 4.6,
    reviews: 756,
    image: npavImg,
    badge: "Best Value",
    category: "Total Protection"
  }
];

export const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
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
              className="group hover:shadow-card transition-all duration-300 cursor-pointer border-0 bg-card overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  
                  {/* Favorite & Quick Actions */}
                  <div className="absolute top-3 right-3 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-foreground rounded-full p-2 h-auto"
                      onClick={() => toggleFavorite(product.id)}
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
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
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
                  
                  {/* Buy Now Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </Button>
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
      </div>
    </section>
  );
};