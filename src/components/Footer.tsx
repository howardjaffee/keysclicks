import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Shield,
  Truck,
  RefreshCw,
  CreditCard
} from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      {/* Main Footer */}
      <div className="border-b border-hero-foreground/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logo} alt="Digitalcorner" className="h-8 w-auto brightness-0 invert" />
                <span className="ml-2 text-xl font-bold">Digitalcorner</span>
              </div>
              <p className="text-hero-foreground/80 leading-relaxed">
                Your trusted partner for all things digital. We provide the latest electronics, 
                gadgets, and tech accessories at unbeatable prices.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm">support@digitalcorner.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm">123 Tech Street, Digital City, DC 12345</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                <Link to="/about" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Contact Us
                </Link>
                <Link to="/returns" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Returns & Refunds
                </Link>
                <Link to="/faq" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  FAQ
                </Link>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Track Your Order
                </a>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Shipping Info
                </a>
              </nav>
            </div>
            
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Electronics
                </a>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Computers & Laptops
                </a>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Gaming
                </a>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Mobile & Accessories
                </a>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Smart Home
                </a>
                <a href="#" className="block text-hero-foreground/80 hover:text-primary-glow transition-colors">
                  Audio & Video
                </a>
              </nav>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-hero-foreground/80 text-sm">
                Subscribe to our newsletter for the latest deals and tech news.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm mb-3">Follow us:</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="border-b border-hero-foreground/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary-glow" />
              <div className="text-sm font-medium">Secure Shopping</div>
              <div className="text-xs text-hero-foreground/60">SSL Protected</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-primary-glow" />
              <div className="text-sm font-medium">Fast Delivery</div>
              <div className="text-xs text-hero-foreground/60">2-3 Business Days</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RefreshCw className="h-8 w-8 text-primary-glow" />
              <div className="text-sm font-medium">Easy Returns</div>
              <div className="text-xs text-hero-foreground/60">30-Day Policy</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="h-8 w-8 text-primary-glow" />
              <div className="text-sm font-medium">Safe Payment</div>
              <div className="text-xs text-hero-foreground/60">Multiple Options</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-hero-foreground/60 text-center md:text-left">
            © 2024 Digitalcorner. All rights reserved. | 
            <Link to="/privacy" className="hover:text-primary-glow ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-primary-glow ml-1">Terms of Service</Link>
          </div>
          <div className="text-sm text-hero-foreground/60">
            Affiliate Disclosure: As an Amazon Associate, we earn from qualifying purchases.
          </div>
        </div>
      </div>
    </footer>
  );
};