import { User, Menu, LogOut, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { openCookiePreferences } from "@/lib/consent";

const navLinks = [
  { label: "Compatibility Matrix", to: "/#analyzer" },
  { label: "Knowledge Base", to: "/#knowledge-base" },
  { label: "Architecture Insights", to: "/insights" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <>
      {/* Independence disclosure */}
      <div className="bg-accent px-4 py-2 text-center text-xs text-accent-foreground md:text-sm">
        KeysClicks is an independent educational portal and software compatibility reference guide. We do not sell
        software keys directly, manage licensing, or provide technical support services.{" "}
        <Link to="/affiliate-disclosure" className="font-semibold underline underline-offset-2 hover:text-primary">
          Read our affiliate and independence disclosure
        </Link>
      </div>

      <div className="bg-hero px-4 py-2 text-xs text-hero-foreground md:text-sm">
        <div className="container mx-auto flex flex-col items-center justify-between gap-1 sm:flex-row">
          <span className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary-glow" />
            Reference documentation on editions, licensing models and system requirements
          </span>
          <span className="flex items-center gap-4">
            <Link to="/privacy" className="hidden transition-colors hover:text-primary-glow md:inline">Privacy Policy</Link>
            <Link to="/terms" className="hidden transition-colors hover:text-primary-glow md:inline">Terms of Service</Link>
            <Link to="/cookies" className="hidden transition-colors hover:text-primary-glow md:inline">Cookie Policy</Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hidden underline underline-offset-2 transition-colors hover:text-primary-glow md:inline"
            >
              Manage cookie preferences
            </button>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex shrink-0 items-center gap-2">
              <img src={logo} alt="Keys & Clicks logo" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-bold md:text-xl">
                Keys <span className="text-primary">&amp;</span> Clicks
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`whitespace-nowrap rounded-full ${pathname === link.to ? "bg-accent text-primary" : ""}`}
                >
                  <Link to={link.to}>{link.label}</Link>
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" aria-label="Open account menu">
                      <User className="h-5 w-5" />
                      <span className="ml-2 hidden lg:inline">{user.email?.split("@")[0]}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="z-50 bg-popover">
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" /> My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" /> Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/auth" aria-label="Sign in to your account">
                    <User className="h-5 w-5" />
                    <span className="ml-2 hidden lg:inline">Sign In</span>
                  </Link>
                </Button>
              )}

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

          {mobileOpen && (
            <div className="space-y-3 pb-4 md:hidden">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Button key={link.to} variant="secondary" size="sm" asChild onClick={() => setMobileOpen(false)}>
                    <Link to={link.to}>{link.label}</Link>
                  </Button>
                ))}
                <Button variant="ghost" size="sm" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/privacy">Privacy Policy</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/terms">Terms of Service</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/cookies">Cookie Policy</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setMobileOpen(false);
                    openCookiePreferences();
                  }}
                >
                  Manage cookies
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
