import { Search, User, Menu, LogOut, X, Headphones, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo-keys-clicks.png";
import { CategoryProducts } from "./CategoryProducts";

const navLinks = [
  { label: "Antivirus", to: "/antivirus" },
  { label: "Printers", to: "/printers" },
  { label: "Reviews", to: "/reviews" },
  { label: "Blog", to: "/blog" },
  { label: "Free Support", to: "/support-promise" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const closeProducts = () => {
    setSelectedCategory(null);
    setActiveQuery("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setActiveQuery(searchQuery);
    setSelectedCategory("all");
    setMobileOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <>
      {/* Affiliate disclosure */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-xs md:text-sm">
        Affiliate disclosure: Keys &amp; Clicks earns a commission from qualifying purchases made through our links,
        at no extra cost to you. As an Amazon Associate we earn from qualifying purchases.{" "}
        <Link to="/affiliate-disclosure" className="font-semibold underline underline-offset-2 hover:text-primary">
          Learn more
        </Link>
      </div>

      {/* Value bar */}
      <div className="bg-hero text-hero-foreground py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <Link to="/support-promise" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
            <Headphones className="h-4 w-4 text-primary-glow" />
            Free lifetime installation &amp; activation help on every product we recommend
          </Link>
          <span className="flex items-center gap-4">
            <a href="tel:5402423003" className="flex items-center gap-1 hover:text-primary-glow transition-colors">
              <Phone className="h-3.5 w-3.5" /> 540 242 3003
            </a>
            <a href="mailto:support@keysandclicks.com" className="hidden md:inline hover:text-primary-glow transition-colors">
              support@keysandclicks.com
            </a>
            <Link to="/privacy" className="hidden md:inline hover:text-primary-glow transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hidden md:inline hover:text-primary-glow transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hidden md:inline hover:text-primary-glow transition-colors">
              Cookie Policy
            </Link>

          </span>
        </div>
      </div>

      <header className="bg-background/90 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="Keys & Clicks logo" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-lg md:text-xl font-bold font-display">
                Keys <span className="text-primary">&amp;</span> Clicks
              </span>
            </Link>

            <form onSubmit={handleSearch} className="hidden md:block flex-1 max-w-xl">
              <div className="relative">
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search antivirus, Windows keys, printers…"
                  aria-label="Search products"
                  className="w-full rounded-full pl-5 pr-12 h-11"
                />
                <Button
                  type="submit"
                  size="sm"
                  aria-label="Search"
                  className="absolute right-1 top-1 bottom-1 rounded-full px-4"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            <div className="flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <User className="h-5 w-5" />
                      <span className="ml-2 hidden lg:inline">{user.email?.split("@")[0]}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover z-50">
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" /> My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/auth">
                    <User className="h-5 w-5" />
                    <span className="ml-2 hidden lg:inline">Sign In</span>
                  </Link>
                </Button>
              )}

              <Button size="sm" className="hidden sm:inline-flex rounded-full" asChild>
                <Link to="/hot-deals">Today's Deals</Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full whitespace-nowrap"
              onClick={() => setSelectedCategory("all")}
            >
              All Products
            </Button>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                variant="ghost"
                size="sm"
                asChild
                className={`rounded-full whitespace-nowrap ${pathname === link.to ? "text-primary bg-accent" : ""}`}
              >
                <Link to={link.to}>{link.label}</Link>
              </Button>
            ))}
            <Button variant="ghost" size="sm" asChild className="rounded-full whitespace-nowrap text-deal hover:bg-deal/10">
              <Link to="/hot-deals">Hot Deals</Link>
            </Button>
          </nav>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products…"
                  aria-label="Search products"
                  className="rounded-full pl-5 pr-12 h-11"
                />
                <Button type="submit" size="sm" aria-label="Search" className="absolute right-1 top-1 bottom-1 rounded-full px-4">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm" onClick={() => { setSelectedCategory("all"); setMobileOpen(false); }}>
                  All Products
                </Button>
                {navLinks.map((link) => (
                  <Button key={link.to} variant="secondary" size="sm" asChild onClick={() => setMobileOpen(false)}>
                    <Link to={link.to}>{link.label}</Link>
                  </Button>
                ))}
                <Button size="sm" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/hot-deals">Hot Deals</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/privacy">Privacy Policy</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/terms">Terms of Service</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {selectedCategory && (
        <CategoryProducts category={selectedCategory} query={activeQuery} onClose={closeProducts} />
      )}
    </>
  );
};
