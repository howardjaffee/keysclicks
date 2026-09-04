import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, BookOpen, Layers, FileText, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo-keys-clicks.png";
import { openCookiePreferences } from "@/lib/consent";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Affiliate & Independence Disclosure", to: "/affiliate-disclosure" },
  { label: "Cookie Policy", to: "/cookies" },
  { label: "FAQ", to: "/faq" },
];

const knowledgeLinks = [
  { label: "Compatibility Matrix", to: "/#analyzer" },
  { label: "Licensing Models Explained", to: "/#licensing-models" },
  { label: "Installation & Upgrade Protocols", to: "/#deployment-protocols" },
  { label: "Activation Error Code Directory", to: "/#activation-errors" },
  { label: "Antivirus & Endpoint Security Guide", to: "/#endpoint-security" },
  { label: "Software Architecture Insights", to: "/insights" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
    toast.success("You're subscribed — new reference guides will reach your inbox.");
  };

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="border-b border-hero-foreground/15">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 text-center md:grid-cols-4">
          {[
            { icon: BookOpen, title: "Educational portal", sub: "Reference documentation only" },
            { icon: Layers, title: "Edition comparisons", sub: "Feature-level, vendor-neutral" },
            { icon: FileText, title: "Original research", sub: "Written and maintained in-house" },
            { icon: ShieldCheck, title: "No sales, no support desk", sub: "We do not sell or activate licences" },
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
              <span className="font-display text-xl font-bold">Keys &amp; Clicks</span>
            </Link>
            <p className="text-sm leading-relaxed text-hero-foreground/75">
              An independent educational portal covering software editions, licensing models, system architecture
              requirements and deployment documentation.
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:support@keysandclicks.com" className="flex items-center gap-2 hover:text-primary-glow">
                <Mail className="h-4 w-4 text-primary-glow" /> support@keysandclicks.com
              </a>
              <span className="flex items-center gap-2 text-hero-foreground/75">
                <MapPin className="h-4 w-4 text-primary-glow" /> #04 S Jones, Las Vegas, NV 89107
              </span>
            </div>
          </div>

          <nav className="space-y-3">
            <h3 className="text-lg font-semibold">Company &amp; Legal</h3>
            {quickLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-hero-foreground/75 transition-colors hover:text-primary-glow">
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className="space-y-3">
            <h3 className="text-lg font-semibold">Knowledge Base</h3>
            {knowledgeLinks.map((l) => (
              <Link key={l.label} to={l.to} className="block text-sm text-hero-foreground/75 transition-colors hover:text-primary-glow">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Guide Updates</h3>
            <p className="text-sm text-hero-foreground/75">
              Occasional notes when a guide is revised for a new servicing release. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="border-hero-foreground/20 bg-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/50"
              />
              <Button type="submit" className="w-full rounded-full">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-b border-hero-foreground/15">
        <div className="container mx-auto px-4 py-6 text-center">
          <h4 className="mb-2 text-sm font-semibold text-hero-foreground/80">Independence Disclaimer</h4>
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-hero-foreground/75">
            KeysClicks is an independent educational portal and software compatibility reference guide. We do not sell
            software keys directly, manage licensing, or provide technical support services. All product names, logos,
            and trademarks belong to their respective owners.
          </p>
          <Link
            to="/affiliate-disclosure"
            className="mt-3 inline-block text-xs font-semibold text-primary-glow underline underline-offset-4"
          >
            Read our full Affiliate &amp; Independence Disclosure
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-hero-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Keys &amp; Clicks. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-primary-glow">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-glow">Terms of Service</Link>
            <Link to="/affiliate-disclosure" className="hover:text-primary-glow">Affiliate &amp; Independence Disclosure</Link>
            <Link to="/about" className="hover:text-primary-glow">About Us</Link>
            <Link to="/contact" className="hover:text-primary-glow">Contact Us</Link>
            <Link to="/cookies" className="hover:text-primary-glow">Cookie Policy</Link>
            <button type="button" onClick={openCookiePreferences} className="underline underline-offset-2 hover:text-primary-glow">
              Manage cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
