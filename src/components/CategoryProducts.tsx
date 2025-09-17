import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

// Import product images
import nortonImage from "@/assets/products/norton-360-deluxe-new.jpg";
import mcafeeImage from "@/assets/products/mcafee-total-protection.jpg";
import bitdefenderImage from "@/assets/products/bitdefender-antivirus.jpg";
import kaspersky from "@/assets/products/kaspersky-security.jpg";
import hpPrinter from "@/assets/products/hp-deskjet-3755-new.jpg";
import canonPrinter from "@/assets/products/canon-pixma-new.jpg";
import brotherPrinter from "@/assets/products/brother-laser-printer.jpg";
import netgearRouter from "@/assets/products/netgear-nighthawk.jpg";
import asusRouter from "@/assets/products/asus-router.jpg";

// Existing product images
import ccleanerPro from "@/assets/products/ccleaner-pro.jpg";
import k7Antivirus from "@/assets/products/k7-antivirus.jpg";
import kaspersky2 from "@/assets/products/kaspersky-antivirus.jpg";
import mcafeeAntivirus from "@/assets/products/mcafee-antivirus.jpg";
import mcafeeTotal from "@/assets/products/mcafee-total-protection.jpg";
import npavSecurity from "@/assets/products/npav-total-security.jpg";
import office2021 from "@/assets/products/office-2021.jpg";
import quickhealAntivirus from "@/assets/products/quickheal-antivirus.png";
import windows10 from "@/assets/products/windows-10-home.jpg";
import windows11 from "@/assets/products/windows-11-pro.jpg";

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
      image: nortonImage,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av2', 
      name: "McAfee Total Protection 2025 - 5 Devices",
      price: 29.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 11847,
      image: mcafeeImage,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av3',
      name: "Bitdefender Total Security 2025 - 5 Devices",
      price: 23.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 3245,
      image: bitdefenderImage,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av4',
      name: "Kaspersky Internet Security 2025 - 3 Devices",
      price: 27.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 6876,
      image: kaspersky,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av5',
      name: "ESET Internet Security 2025 - 3 Devices",
      price: 21.99,
      originalPrice: 69.99,
      rating: 4.6,
      reviews: 4521,
      image: kaspersky2,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av6',
      name: "Trend Micro Internet Security 2025 - 3 Devices",
      price: 19.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 2876,
      image: mcafeeAntivirus,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av7',
      name: "Avast Premium Security 2025 - 10 Devices",
      price: 39.99,
      originalPrice: 89.99,
      rating: 4.4,
      reviews: 8934,
      image: quickhealAntivirus,
      affiliateLink: "https://amzn.to/3Ifn6Sw"  
    },
    {
      id: 'av8',
      name: "AVG Internet Security 2025 - Unlimited Devices",
      price: 29.99,
      originalPrice: 79.99,
      rating: 4.3,
      reviews: 5432,
      image: k7Antivirus,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av9',
      name: "Webroot SecureAnywhere Internet Security Plus 2025",
      price: 34.99,
      originalPrice: 69.99,
      rating: 4.7,
      reviews: 1876,
      image: npavSecurity,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av10',
      name: "F-Secure Internet Security 2025 - 3 Devices",
      price: 32.99,
      originalPrice: 89.99,
      rating: 4.6,
      reviews: 2341,
      image: mcafeeTotal,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av11',
      name: "Malwarebytes Premium 2025 - 5 Devices",
      price: 39.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 7543,
      image: nortonImage,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av12',
      name: "G DATA Internet Security 2025 - 3 Devices", 
      price: 26.99,
      originalPrice: 69.99,
      rating: 4.4,
      reviews: 1987,
      image: bitdefenderImage,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av13',
      name: "K7 Total Security 2025 - 10 Devices",
      price: 18.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviews: 3456,
      image: k7Antivirus,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av14',
      name: "Quick Heal Internet Security 2025 - 5 Devices",
      price: 22.99,
      originalPrice: 59.99,
      rating: 4.2,
      reviews: 2876,
      image: quickhealAntivirus,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    },
    {
      id: 'av15',
      name: "NPAV Total Security 2025 - Unlimited Devices",
      price: 19.99,
      originalPrice: 79.99,
      rating: 4.1,
      reviews: 1654,
      image: npavSecurity,
      affiliateLink: "https://amzn.to/3Ifn6Sw"
    }
  ],
  
  printers: [
    {
      id: 'pr1',
      name: "HP DeskJet 3755 All-in-One Compact Printer",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.2,
      reviews: 8456,
      image: hpPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr2',
      name: "Canon PIXMA TS3520 Wireless All-in-One Printer",
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.1,
      reviews: 6234,
      image: canonPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr3',
      name: "Brother HL-L2350DW Monochrome Laser Printer",
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviews: 12876,
      image: brotherPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr4',
      name: "HP ENVY Inspire 7955e All-in-One Printer",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.3,
      reviews: 5432,
      image: hpPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr5',
      name: "Canon PIXMA TR8620 Wireless All-in-One",
      price: 179.99,
      originalPrice: 249.99,
      rating: 4.4,
      reviews: 3876,
      image: canonPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr6',
      name: "Epson EcoTank ET-2720 Wireless All-in-One",
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.6,
      reviews: 9234,
      image: canonPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr7',
      name: "Brother MFC-J995DW INKvestmentTank Printer",
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviews: 7654,
      image: brotherPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr8',
      name: "HP OfficeJet Pro 9015e All-in-One Printer",
      price: 159.99,
      originalPrice: 229.99,
      rating: 4.2,
      reviews: 4321,
      image: hpPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr9',
      name: "Canon PIXMA G3260 Wireless MegaTank",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 2876,
      image: canonPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr10',
      name: "Brother MFC-L2750DW Monochrome Laser",
      price: 219.99,
      originalPrice: 299.99,
      rating: 4.6,
      reviews: 6543,
      image: brotherPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr11',
      name: "HP LaserJet Pro M404dn Monochrome",
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.4,
      reviews: 3456,
      image: hpPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr12',
      name: "Canon imageCLASS MF445dw Monochrome",
      price: 229.99,
      originalPrice: 319.99,
      rating: 4.3,
      reviews: 2109,
      image: canonPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr13',
      name: "Epson WorkForce Pro WF-3730 Wireless",
      price: 169.99,
      originalPrice: 249.99,
      rating: 4.1,
      reviews: 1876,
      image: canonPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr14',
      name: "HP Smart Tank 7602 Wireless All-in-One",
      price: 279.99,
      originalPrice: 399.99,
      rating: 4.5,
      reviews: 5432,
      image: hpPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    },
    {
      id: 'pr15',
      name: "Brother HL-L3270CDW Color Laser Printer",
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.6,
      reviews: 4321,
      image: brotherPrinter,
      affiliateLink: "https://amzn.to/4nuQgfb"
    }
  ],
  
  networking: [
    {
      id: 'net1',
      name: "NETGEAR Nighthawk AX12 12-Stream WiFi 6 Router",
      price: 399.99,
      originalPrice: 499.99,
      rating: 4.7,
      reviews: 8765,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net2',
      name: "ASUS AX6000 WiFi 6 Gaming Router (RT-AX88U)",
      price: 349.99,
      originalPrice: 449.99,
      rating: 4.6,
      reviews: 5432,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net3',
      name: "NETGEAR Nighthawk Pro Gaming XR500",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.4,
      reviews: 3456,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net4',
      name: "TP-Link Archer AX73 AX5400 WiFi 6 Router",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.5,
      reviews: 6789,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net5',
      name: "ASUS ROG Strix AX5400 Gaming Router",
      price: 279.99,
      originalPrice: 349.99,
      rating: 4.8,
      reviews: 2345,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net6',
      name: "NETGEAR Orbi WiFi 6E Mesh System (RBKE963)",
      price: 699.99,
      originalPrice: 899.99,
      rating: 4.6,
      reviews: 1876,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net7',
      name: "Linksys Velop AX4200 WiFi 6 Mesh System",
      price: 399.99,
      originalPrice: 499.99,
      rating: 4.3,
      reviews: 4321,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net8',
      name: "TP-Link Deco X60 AX3000 WiFi 6 Mesh System",
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.4,
      reviews: 5678,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net9',
      name: "NETGEAR Nighthawk AX8 8-Stream WiFi 6 Router",
      price: 249.99,
      originalPrice: 329.99,
      rating: 4.5,
      reviews: 3210,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net10',
      name: "ASUS ZenWiFi AX6600 WiFi 6 Mesh System",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.7,
      reviews: 2987,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net11',
      name: "TP-Link Archer C80 AC1900 Wireless Router",
      price: 79.99,
      originalPrice: 109.99,
      rating: 4.2,
      reviews: 8765,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net12',
      name: "D-Link DIR-X6060 AX6000 WiFi 6 Router",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.3,
      reviews: 1543,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net13',
      name: "Motorola MG7700 Cable Modem Router Combo",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.1,
      reviews: 7654,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net14',
      name: "ARRIS SURFboard SBG8300 Cable Modem",
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.4,
      reviews: 4567,
      image: asusRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    },
    {
      id: 'net15',
      name: "Eero Pro 6E WiFi 6E Mesh Router System",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      reviews: 3456,
      image: netgearRouter,
      affiliateLink: "https://amzn.to/3ItE6V7"
    }
  ],
  
  computers: [
    {
      id: 'comp1',
      name: "ASUS VivoBook 15 Laptop - Intel i5, 8GB RAM, 256GB SSD",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.3,
      reviews: 5467,
      image: windows11,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'comp2',
      name: "Acer Aspire 5 Laptop - AMD Ryzen 5, 8GB RAM, 512GB SSD",
      price: 379.99,
      originalPrice: 529.99,
      rating: 4.2,
      reviews: 8765,
      image: windows10,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'comp3',
      name: "HP Pavilion Desktop - Intel i7, 16GB RAM, 512GB SSD",
      price: 649.99,
      originalPrice: 799.99,
      rating: 4.4,
      reviews: 3456,
      image: office2021,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'comp4',
      name: "Lenovo ThinkPad E15 - Intel i5, 8GB RAM, 256GB SSD",
      price: 529.99,
      originalPrice: 699.99,
      rating: 4.5,
      reviews: 2345,
      image: windows11,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'comp5',
      name: "Dell Inspiron 3000 Desktop - AMD Ryzen 3, 8GB RAM",
      price: 349.99,
      originalPrice: 449.99,
      rating: 4.1,
      reviews: 6789,
      image: windows10,
      affiliateLink: "https://www.amazon.com"
    }
  ],
  
  office: [
    {
      id: 'off1',
      name: "Microsoft Office 2021 Home & Student",
      price: 149.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviews: 12456,
      image: office2021,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'off2',
      name: "Microsoft Windows 11 Pro",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.3,
      reviews: 8765,
      image: windows11,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'off3',
      name: "Microsoft Windows 10 Home",
      price: 139.99,
      originalPrice: 199.99,
      rating: 4.4,
      reviews: 9876,
      image: windows10,
      affiliateLink: "https://www.amazon.com"
    },
    {
      id: 'off4',
      name: "CCleaner Professional 2025",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.2,
      reviews: 5432,
      image: ccleanerPro,
      affiliateLink: "https://www.amazon.com"
    }
  ]
};

interface CategoryProductsProps {
  category: string;
  onClose: () => void;
}

export const CategoryProducts = ({ category, onClose }: CategoryProductsProps) => {
  console.log('CategoryProducts rendered with category:', category);
  
  // Get products for the selected category
  const getProducts = () => {
    if (category === 'all') {
      // Combine all products from all categories
      const allProducts = [
        ...amazonProducts.antivirus,
        ...amazonProducts.printers,
        ...amazonProducts.networking,
        ...amazonProducts.computers,
        ...amazonProducts.office
      ];
      console.log('All products combined:', allProducts.length);
      return allProducts;
    }
    
    const products = amazonProducts[category as keyof typeof amazonProducts] || [];
    console.log(`Products for ${category}:`, products.length);
    return products;
  };

  const products = getProducts();
  
  const handleBuyNow = (affiliateLink: string) => {
    window.open(affiliateLink, '_blank');
  };
  
  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'antivirus': return 'Antivirus & Security Software';
      case 'printers': return 'Printers & Scanners';
      case 'networking': return 'Routers & Networking';
      case 'computers': return 'Computers & Laptops';
      case 'office': return 'Office Software';
      case 'all': return 'All Digital Products';
      default: return 'Products';
    }
  };
  
  if (products.length === 0) {
    console.log('No products found for category:', category);
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-lg shadow-xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{getCategoryTitle(category)}</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-muted-foreground text-center py-8">
            Coming Soon! We're adding more products to this category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-auto">
      <div className="min-h-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-lg shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{getCategoryTitle(category)}</h2>
                <p className="text-muted-foreground mt-1">{products.length} products available</p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground text-3xl font-bold transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Products Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      {/* Product Image */}
                      <div className="relative mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg"
                          onError={(e) => {
                            console.log('Image failed to load:', product.image);
                            e.currentTarget.src = "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=Product+Image";
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', product.image);
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
  );
};
