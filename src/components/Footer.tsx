import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Shield, Headphones, BadgeCheck, Clock } from "lucide-react";
import logo from "@/assets/logo-keys-clicks.png";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/contact" },
  { label: "Affiliate Disclosure", to: "/affiliate-disclosure" },
  { label: "Free Support Promise", to: "/support-promise" },
  { label: "Returns & Refunds", to: "/returns" },
  { label: "FAQ", to: "/faq" },
];

const categoryLinks = [
  { label: "Antivirus & Security", to: "/antivirus" },
  { label: "Printers & Scanners", to: "/printers" },
  { label: "Hot Deals", to: "/hot-deals" },
  { label: "Buying Guides", to: "/blog" },
  { label: "Product Reviews", to: "/reviews" },
  { label: "My Account", to: "/account" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
    toast.success("You're subscribed — deals and guides are on the way.");
  };

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="border-b border-hero-foreground/15">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 text-center">
          {[
            { icon: BadgeCheck, title: "Genuine licences", sub: "Bought from official retailers" },
            { icon: Headphones, title: "Free setup support", sub: "Unlimited, never charged" },
            { icon: Shield, title: "Honest reviews", sub: "Pros and cons, always" },
            { icon: Clock, title: "Instant delivery", sub: "Digital keys in minutes" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-2">
              <item.icon className="h-7 w-7 text-primary-glow" />
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs text-hero-foreground/60">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-hero-foreground/15">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Keys & Clicks logo" loading="lazy" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold font-display">Keys &amp; Clicks</span>
            </Link>
            <p className="text-sm leading-relaxed text-hero-foreground/75">
              An independent affiliate store for digital software and PC hardware. We recommend the best products from
              Amazon and other trusted retailers — and help every customer install and activate them free of charge.
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:support@keysandclicks.com" className="flex items-center gap-2 hover:text-primary-glow">
                <Mail className="h-4 w-4 text-primary-glow" /> support@keysandclicks.com
              </a>
              <a href="tel:5402423003" className="flex items-center gap-2 hover:text-primary-glow">
                <Phone className="h-4 w-4 text-primary-glow" /> 540 242 3003
              </a>
              <span className="flex items-center gap-2 text-hero-foreground/75">
                <MapPin className="h-4 w-4 text-primary-glow" /> #04 S Jones, Las Vegas, NV 89107
              </span>
            </div>
          </div>

          <nav className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            {quickLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-hero-foreground/75 hover:text-primary-glow transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className="space-y-3">
            <h3 className="text-lg font-semibold">Shop</h3>
            {categoryLinks.map((l) => (
              <Link key={l.label} to={l.to} className="block text-sm text-hero-foreground/75 hover:text-primary-glow transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-hero-foreground/75">
              Monthly deals, security alerts and setup guides. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/50"
              />
              <Button type="submit" className="w-full rounded-full">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-b border-hero-foreground/15">
        <div className="container mx-auto px-4 py-6 text-center">
          <h4 className="mb-2 text-sm font-semibold text-hero-foreground/80">Affiliate &amp; Trademark Disclaimer</h4>
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-hero-foreground/60">
            Keys &amp; Clicks is an independent affiliate publisher and is not affiliated with, endorsed by or
            authorised by any software brand. "Norton", "McAfee", "Bitdefender", "Kaspersky", "CCleaner", "QuickBooks",
            "Intuit", "Microsoft", "Windows", "HP", "Canon", "Brother", "NETGEAR" and "ASUS" are trademarks of their
            respective owners and are used here for identification and review purposes only. All purchases are
            completed on the retailer's own website under their pricing, warranty and returns policies. As an Amazon
            Associate we earn from qualifying purchases.
          </p>
          <Link
            to="/affiliate-disclosure"
            className="mt-3 inline-block text-xs font-semibold text-primary-glow underline underline-offset-4"
          >
            Read our full Affiliate Disclosure
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-hero-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Keys &amp; Clicks. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-primary-glow">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-glow">Terms &amp; Conditions</Link>
            <Link to="/returns" className="hover:text-primary-glow">Returns</Link>
            <Link to="/affiliate-disclosure" className="hover:text-primary-glow">Affiliate Disclosure</Link>
            <Link to="/support-promise" className="hover:text-primary-glow">Support Promise</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
