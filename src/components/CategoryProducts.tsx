import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

// Amazon products data by category
const amazonProducts = {
  antivirus: [
    {
      id: 'av1',
      name: "Norton 360 Deluxe 2025 - 5 Devices",
      price: 24.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 15657,
      image: "https://m.media-amazon.com/images/I/51EzRHdZ7lL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av2', 
      name: "McAfee Total Protection 2025 - 5 Devices",
      price: 29.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 11847,
      image: "https://m.media-amazon.com/images/I/51K2-uKBURL._AC_SL1024_.jpg",
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av3',
      name: "Bitdefender Antivirus Plus 2025",
      price: 23.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 3245,
      image: "https://m.media-amazon.com/images/I/41VjDhKZYoL._AC_SL1024_.jpg",
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av4',
      name: "Kaspersky Internet Security 2025",
      price: 27.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 6876,
      image: "https://m.media-amazon.com/images/I/51h7Q3jqbFL._AC_SL1024_.jpg",
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    }
  ],
  computers: [
    {
      id: 'pc1',
      name: "Dell Inspiron 15 3000 Laptop",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.4,
      reviews: 2341,
      image: "https://m.media-amazon.com/images/I/61Qe0euJJZL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'pc2',
      name: "HP Pavilion Desktop Computer",
      price: 529.99,
      originalPrice: 699.99,
      rating: 4.3,
      reviews: 1876,
      image: "https://m.media-amazon.com/images/I/61VuVU94-1L._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'pc3',
      name: "ASUS VivoBook 15 Thin Laptop",
      price: 399.99,
      originalPrice: 549.99,
      rating: 4.2,
      reviews: 5432,
      image: "https://m.media-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'pc4',
      name: "Acer Aspire 5 Slim Laptop",
      price: 379.99,
      originalPrice: 499.99,
      rating: 4.1,
      reviews: 8765,
      image: "https://m.media-amazon.com/images/I/71czGb00k7L._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    }
  ],
  office: [
    {
      id: 'of1',
      name: "Microsoft Office 2021 Home & Business",
      price: 249.99,
      originalPrice: 439.99,
      rating: 4.9,
      reviews: 4876,
      image: "https://m.media-amazon.com/images/I/51rZKQ8a2TL._AC_SL1024_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'of2',
      name: "Microsoft Office 365 Personal",
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 3421,
      image: "https://m.media-amazon.com/images/I/51P1X9z7CmL._AC_SL1024_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    }
  ],
  printers: [
    {
      id: 'pr1',
      name: "HP DeskJet 3755 All-in-One Printer",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.3,
      reviews: 12456,
      image: "https://m.media-amazon.com/images/I/71QT8+bJoIL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'pr2',
      name: "Canon PIXMA TS3520 Wireless Printer",
      price: 59.99,
      originalPrice: 99.99,
      rating: 4.2,
      reviews: 8734,
      image: "https://m.media-amazon.com/images/I/61QE6KqFBdL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'pr3',
      name: "Brother HL-L2350DW Laser Printer",
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.4,
      reviews: 5678,
      image: "https://m.media-amazon.com/images/I/61KGOXuGrVL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    }
  ],
  networking: [
    {
      id: 'net1',
      name: "TP-Link AC1750 Smart WiFi Router",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 15234,
      image: "https://m.media-amazon.com/images/I/61K2a7iBPuL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'net2',
      name: "NETGEAR Nighthawk AX12 Router",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.3,
      reviews: 7894,
      image: "https://m.media-amazon.com/images/I/61QJKKqOqtL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    },
    {
      id: 'net3',
      name: "Linksys Velop Mesh WiFi System",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.2,
      reviews: 4567,
      image: "https://m.media-amazon.com/images/I/61VUgCdNwgL._AC_SL1500_.jpg",
      affiliateLink: "https://amzn.to/4poVKtF"
    }
  ]
};

interface CategoryProductsProps {
  category: string;
  onClose: () => void;
}

export const CategoryProducts = ({ category, onClose }: CategoryProductsProps) => {
  const products = amazonProducts[category as keyof typeof amazonProducts] || [];
  
  const handleBuyNow = (affiliateLink: string) => {
    window.open(affiliateLink, '_blank');
  };

  const getCategoryTitle = (cat: string) => {
    const titles = {
      antivirus: "Antivirus & Security Software",
      computers: "Computers & Laptops", 
      office: "Office Software & Productivity",
      printers: "Printers & Scanners",
      networking: "Network & WiFi Equipment"
    };
    return titles[cat as keyof typeof titles] || "Products";
  };

  if (products.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md mx-4">
          <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-4">Products for this category will be available soon!</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl">
            {/* Header */}
            <div className="border-b p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-primary">
                  {getCategoryTitle(category)}
                </h2>
                <Button variant="ghost" onClick={onClose}>
                  ✕
                </Button>
              </div>
              <p className="text-muted-foreground mt-2">
                {products.length} products available
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      {/* Product Image */}
                      <div className="relative mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/300x200?text=Product+Image";
                          }}
                        />
                        <Badge className="absolute top-2 right-2 bg-deal text-deal-foreground">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                      
                      {/* Product Info */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
                          {product.name}
                        </h3>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) 
                                    ? 'fill-yellow-400 text-yellow-400' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {product.rating} ({product.reviews.toLocaleString()})
                          </span>
                        </div>
                        
                        {/* Price */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">
                              ${product.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          </div>
                        </div>
                        
                        {/* Buy Button */}
                        <Button 
                          onClick={() => handleBuyNow(product.affiliateLink)}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="sm"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Buy on Amazon
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};