import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, FileText, Mail } from "lucide-react";

const covered = [
  "Downloading and installing your software correctly",
  "Entering and activating product keys that will not accept",
  "Moving a licence from an old computer to a new one",
  "Removing a conflicting antivirus before installing a new one",
  "Getting QuickBooks, printers or routers talking to your network",
  "Understanding renewals so you are never double-charged",
];

export const SupportPromise = () => (
  <section className="py-20 bg-hero text-hero-foreground">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Our support promise</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Buy through our links and setup help costs you nothing
          </h2>
          <p className="mt-5 text-hero-foreground/80 leading-relaxed">
            Most stores hand you a licence key and disappear. We stay with you. Tell us what you bought through
            Keys &amp; Clicks and a real person will help you get it running — by email or phone, as many times as you
            need, for free. We never ask for payment for support and we never take remote control of your machine
            without your explicit permission.
          </p>

          <ul className="mt-8 space-y-3">
            {covered.map((item) => (
              <li key={item} className="flex gap-3 text-hero-foreground/85">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">Get free setup help</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-hero-foreground/30 bg-hero-foreground/5 text-hero-foreground hover:bg-hero-foreground/15"
              asChild
            >
              <Link to="/faq">Read the FAQ</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-hero-foreground/15 bg-hero-foreground/5 p-6">
            <FileText className="h-6 w-6 text-primary-glow" />
            <h3 className="mt-4 font-semibold">Written enquiries</h3>
            <span className="mt-1 block text-hero-foreground/80">Use the form on our Contact page</span>
          </div>
          <div className="rounded-2xl border border-hero-foreground/15 bg-hero-foreground/5 p-6">
            <Mail className="h-6 w-6 text-primary-glow" />
            <h3 className="mt-4 font-semibold">Email us</h3>
            <a href="mailto:support@keysandclicks.com" className="mt-1 block break-all text-hero-foreground/80 hover:text-primary-glow">
              support@keysandclicks.com
            </a>
          </div>
          <div className="sm:col-span-2 rounded-2xl border border-primary/30 bg-primary/10 p-6">
            <h3 className="font-semibold">How the affiliate model works</h3>
            <p className="mt-2 text-sm text-hero-foreground/80 leading-relaxed">
              Keys &amp; Clicks is a participant in the Amazon Services LLC Associates Program and other affiliate
              programs. When you click a buy button you complete your purchase on the retailer's own website, under
              their pricing, payment, warranty and returns policies. We receive a small commission from the retailer —
              you pay nothing extra, and that commission is what funds our free support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
