import { Search, ShoppingCart, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";
import { CategoryProducts } from "./CategoryProducts";

export const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleCloseProducts = () => {
    setSelectedCategory(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  
  return (
    <>
      {/* Affiliate Disclosure Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center text-sm text-amber-800">
        <span className="font-medium">
          ⚠️ Disclaimer: This site contains affiliate links. We may receive a small commission for purchases made through these links at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases. This helps support our work in providing valuable information and reviews.
        </span>
      </div>
      
      {/* Top notification bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-medium">🔐 Instant Digital Delivery • Genuine Software Licenses • 24/7 Support</span>
      </div>
      
      {/* Main header */}
      <header className="bg-background border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top row with support info */}
          <div className="flex justify-between items-center py-2 text-sm text-muted-foreground border-b">
            <div className="flex items-center gap-4">
              <span>📧 support@digitalcorner.com</span>
              <span>📞 540 242 3003</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-xs">
                Free Tech Guide Download
              </Button>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Welcome, {user.email?.split('@')[0]}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" />
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" className="text-xs" asChild>
                  <Link to="/auth">Register / Sign In</Link>
                </Button>
              )}
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
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative">
                      <User className="h-5 w-5" />
                      <span className="ml-2 hidden md:inline">Account</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/auth">
                    <User className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">Sign In</span>
                  </Link>
                </Button>
              )}
              
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
            <div className="flex items-center gap-8 text-sm overflow-x-auto">
              <Button 
                variant="ghost" 
                className="text-primary font-medium hover:bg-primary/10 whitespace-nowrap"
                onClick={() => handleCategoryClick('all')}
              >
                All Categories
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary whitespace-nowrap"
                asChild
              >
                <Link to="/antivirus">Antivirus</Link>
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary whitespace-nowrap"
                asChild
              >
                <Link to="/printers">Printers</Link>
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary whitespace-nowrap"
                asChild
              >
                <Link to="/blog">Blog</Link>
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary whitespace-nowrap"
                asChild
              >
                <Link to="/reviews">Reviews</Link>
              </Button>
              <Button 
                variant="ghost" 
                className="bg-deal/10 text-deal hover:bg-deal/20 whitespace-nowrap"
                asChild
              >
                <Link to="/hot-deals">🔥 Hot Deals</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Category Products Modal */}
      {selectedCategory && (
        <CategoryProducts 
          category={selectedCategory} 
          onClose={handleCloseProducts}
        />
      )}
    </>
  );
};