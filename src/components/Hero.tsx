import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Headphones, BadgeCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-keys-clicks.jpg";
import { CategoryProducts } from "./CategoryProducts";

export const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-hero text-hero-foreground">
        <img
          src={heroBg}
          alt="Digital security and software licences"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/85 to-primary/25" />

        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary-glow backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Curated affiliate store for digital products
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Genuine software keys,
                <span className="block text-gradient">plus free setup help for life.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl text-hero-foreground/85 leading-relaxed">
                Keys &amp; Clicks hand-picks antivirus suites, QuickBooks and accounting software, Windows licences,
                printers and networking gear from Amazon and other trusted retailers. You buy at the retailer's own
                price — and we install, activate and troubleshoot it with you, free of charge, for as long as you own it.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 shadow-primary group"
                  onClick={() => setSelectedCategory("all")}
                >
                  Browse all products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-hero-foreground/30 bg-hero-foreground/5 text-hero-foreground hover:bg-hero-foreground/15"
                  asChild
                >
                  <Link to="/antivirus">Shop antivirus</Link>
                </Button>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <dt className="text-2xl font-bold text-primary-glow">300+</dt>
                  <dd className="text-sm text-hero-foreground/70">Products reviewed</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-primary-glow">$0</dt>
                  <dd className="text-sm text-hero-foreground/70">Charged for support</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-primary-glow">24/7</dt>
                  <dd className="text-sm text-hero-foreground/70">Setup guidance</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5 space-y-4 animate-scale-in">
              {[
                {
                  icon: BadgeCheck,
                  title: "Bought from official retailers",
                  body: "Every buy button sends you to Amazon or the brand's own store — genuine licences, retailer warranty, retailer checkout.",
                },
                {
                  icon: Headphones,
                  title: "Free installation & activation help",
                  body: "Stuck on a product key, a failed install or a licence transfer? Message us and we walk you through it at no cost, ever.",
                },
                {
                  icon: ShieldCheck,
                  title: "Honest, tested recommendations",
                  body: "Independent comparisons with real pros and cons so you buy the right tool the first time.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-hero-foreground/15 bg-hero-foreground/5 p-5 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-glow">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="mt-1 text-sm text-hero-foreground/75 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCategory && (
        <CategoryProducts category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      )}
    </>
  );
};
