import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Shield, CheckCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  category: string;
  description?: string;
  features?: string[];
  affiliateLink: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleBuyNow = () => {
    window.open(product.affiliateLink, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-80 w-full object-contain rounded-xl border bg-secondary p-6"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3">
                <Badge 
                  className={`
                    ${product.badge === 'Best Seller' ? 'bg-primary text-primary-foreground' : ''}
                    ${product.badge === 'Hot Deal' ? 'bg-deal text-deal-foreground' : ''}
                    ${product.badge === 'Premium' ? 'bg-gold text-black' : ''}
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
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'fill-deal text-deal' 
                          : 'text-muted-foreground/40'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <Badge className="bg-primary text-primary-foreground">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || `${product.name} provides comprehensive digital security and protection for your devices. This premium software ensures your digital life remains safe and secure.`}
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="space-y-2">
                {(product.features || [
                  "Real-time threat protection",
                  "Advanced malware detection",
                  "Secure VPN included",
                  "Password manager",
                  "Identity theft monitoring",
                  "24/7 customer support"
                ]).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Security Badge */}
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">100% Genuine Digital License</span>
            </div>
            
            {/* Buy Button */}
            <Button 
              onClick={handleBuyNow}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Buy Now on Amazon
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              * You will be redirected to Amazon to complete your purchase
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};