import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    rating: 4.8,
    reviews: 2456,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Best Seller",
    category: "Audio"
  },
  {
    id: 2,
    name: "Gaming Mechanical Keyboard",
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    rating: 4.7,
    reviews: 1834,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    badge: "Hot Deal",
    category: "Gaming"
  },
  {
    id: 3,
    name: "4K Webcam for Streaming",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.6,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    badge: "New Arrival",
    category: "Cameras"
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 349.99,
    discount: 29,
    rating: 4.9,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "Premium",
    category: "Wearables"
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.5,
    reviews: 1245,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    badge: "Budget Pick",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    rating: 4.7,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    badge: "Trending",
    category: "Audio"
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
            Hot Selling Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most popular tech products
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
                  
                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};