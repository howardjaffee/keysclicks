import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  ShoppingCart, 
  Shield, 
  ArrowLeft, 
  Heart,
  Share2,
  CheckCircle,
  Users,
  Award,
  Download
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Sample product data - in a real app, this would come from an API
const sampleProducts = {
  "norton-360-deluxe": {
    id: "norton-360-deluxe",
    name: "Norton 360 Deluxe 2025 - 5 Devices",
    price: 24.99,
    originalPrice: 89.99,
    discount: 72,
    rating: 4.8,
    reviews: 15657,
    images: [
      "https://m.media-amazon.com/images/I/51EzRHdZ7lL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51K2-uKBURL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41VjDhKZYoL._AC_SL1000_.jpg"
    ],
    badge: "Best Seller",
    category: "Antivirus",
    affiliateLink: "https://amzn.to/3Ifn6Sw",
    description: "Norton 360 Deluxe provides comprehensive protection for up to 5 devices with antivirus, VPN, password manager, and Dark Web monitoring. Stay safe with industry-leading cybersecurity technology.",
    longDescription: "Norton 360 Deluxe is the ultimate cybersecurity solution for your digital life. With award-winning antivirus protection, secure VPN, password manager, and Dark Web monitoring, you get complete peace of mind across all your devices. Whether you're banking online, shopping, or just browsing, Norton 360 Deluxe keeps you safe from viruses, malware, ransomware, and identity theft.",
    features: [
      "Real-time threat protection for 5 devices",
      "Secure VPN (unlimited data)",
      "Password Manager with secure vault",
      "Dark Web Monitoring for personal info",
      "100GB cloud backup storage",
      "Smart Firewall for PC/Mac",
      "SafeCam for webcam protection",
      "Parental Control features"
    ],
    specifications: {
      "Supported Devices": "Windows, Mac, Android, iOS",
      "Device Limit": "5 devices",
      "VPN Data": "Unlimited",
      "Cloud Backup": "100GB",
      "License Duration": "1 year",
      "Language Support": "Multiple languages",
      "Customer Support": "24/7 phone, chat, online"
    },
    systemRequirements: {
      "Windows": "Windows 10/11 (all versions), 2GB RAM, 300MB disk space",
      "Mac": "macOS 10.15 or later, 2GB RAM, 300MB disk space",
      "Android": "Android 6.0 or later",
      "iOS": "iOS 10.0 or later"
    }
  }
};

export const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = sampleProducts[productId as keyof typeof sampleProducts];
  
  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBuyNow = () => {
    window.open(product.affiliateLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/500x500/f3f4f6/6b7280?text=Product+Image";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-deal text-deal-foreground">
                    {product.discount}% OFF
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/90 hover:bg-white rounded-full p-2"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/90 hover:bg-white rounded-full p-2"
                  >
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/80x80/f3f4f6/6b7280?text=Image";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-2xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-deal text-deal-foreground text-lg px-3 py-1">
                    Save {product.discount}%
                  </Badge>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">Genuine License</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Download className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">Instant Download</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">24/7 Support</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleBuyNow}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now on Amazon
                  </Button>
                </div>

                {/* Key Features */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {product.longDescription}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">All Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Product Details</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                            <span className="font-medium">{key}:</span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">System Requirements</h4>
                      <div className="space-y-3">
                        {Object.entries(product.systemRequirements).map(([key, value]) => (
                          <div key={key} className="p-4 bg-secondary/50 rounded-lg">
                            <div className="font-medium mb-1">{key}:</div>
                            <div className="text-muted-foreground text-sm">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Customer Reviews</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-lg font-medium">{product.rating} out of 5</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                              />
                            ))}
                          </div>
                          <span className="font-medium">John D.</span>
                          <span className="text-sm text-muted-foreground">Verified Purchase</span>
                        </div>
                        <p className="text-muted-foreground">
                          "Excellent protection software. Easy to install and works flawlessly across all my devices. The VPN is fast and the password manager is very convenient."
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="font-medium">Sarah M.</span>
                          <span className="text-sm text-muted-foreground">Verified Purchase</span>
                        </div>
                        <p className="text-muted-foreground">
                          "Great value for money. The dark web monitoring feature gave me peace of mind. Customer support was helpful when I had installation questions."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline">View All Reviews on Amazon</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Back to Products */}
          <div className="text-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};