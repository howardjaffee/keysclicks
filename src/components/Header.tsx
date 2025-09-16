import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <>
      {/* Top notification bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-medium">🚀 Free shipping on orders over $50 • Limited time deal!</span>
      </div>
      
      {/* Main header */}
      <header className="bg-background border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top row with support info */}
          <div className="flex justify-between items-center py-2 text-sm text-muted-foreground border-b">
            <div className="flex items-center gap-4">
              <span>📧 support@digitalcorner.com</span>
              <span>📞 +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-xs">
                Free Tech Guide Download
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                Register / Sign In
              </Button>
            </div>
          </div>
          
          {/* Main navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Digitalcorner" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-primary">Digitalcorner</span>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 text-base"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1 bottom-1 px-4 bg-primary hover:bg-primary/90"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Account</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Cart</span>
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-deal text-deal-foreground">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Category navigation */}
          <nav className="py-3 border-t">
            <div className="flex items-center gap-8 text-sm">
              <Button variant="ghost" className="text-primary font-medium hover:bg-primary/10">
                All Categories
              </Button>
              <Button variant="ghost" className="hover:text-primary">Electronics</Button>
              <Button variant="ghost" className="hover:text-primary">Computers</Button>
              <Button variant="ghost" className="hover:text-primary">Gaming</Button>
              <Button variant="ghost" className="hover:text-primary">Mobile</Button>
              <Button variant="ghost" className="hover:text-primary">Smart Home</Button>
              <Button variant="ghost" className="hover:text-primary">Accessories</Button>
              <Button variant="ghost" className="bg-deal/10 text-deal hover:bg-deal/20">
                🔥 Deals
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};