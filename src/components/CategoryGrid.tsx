import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Monitor, FileText, Wifi, Printer, Lock, Settings, Smartphone, ArrowRight } from "lucide-react";
import { CategoryProducts } from "./CategoryProducts";

const categories = [
  { id: 1, name: "Antivirus & Security", icon: Shield, category: "antivirus", deal: "Up to 75% off", count: "50+ products" },
  { id: 2, name: "Computers & Laptops", icon: Monitor, category: "computers", deal: "Best sellers", count: "40+ products" },
  { id: 3, name: "Office & Accounting", icon: FileText, category: "office", deal: "QuickBooks & Office", count: "15+ versions" },
  { id: 4, name: "Printers & Scanners", icon: Printer, category: "printers", deal: "Home & office", count: "45+ models" },
  { id: 5, name: "Routers & Networking", icon: Wifi, category: "networking", deal: "Wi-Fi 6 ready", count: "35+ options" },
  { id: 6, name: "Total Protection Suites", icon: Lock, category: "antivirus", deal: "All-in-one security", count: "25+ suites" },
  { id: 7, name: "System Utilities", icon: Settings, category: "office", deal: "Tune up your PC", count: "20+ tools" },
  { id: 8, name: "Mobile Security", icon: Smartphone, category: "antivirus", deal: "Phones & tablets", count: "30+ apps" },
];

export const CategoryGrid = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Browse the store</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Shop by category</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every category opens a curated list with live pricing, ratings and a direct buy link to the retailer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(category.category)}
                onKeyDown={(e) => e.key === "Enter" && setSelected(category.category)}
                className="group cursor-pointer rounded-2xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-1 font-semibold leading-snug group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="mb-3 text-xs text-muted-foreground">{category.count}</p>
                  <Badge variant="secondary" className="text-xs">{category.deal}</Badge>
                  <div className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View products <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selected && <CategoryProducts category={selected} onClose={() => setSelected(null)} />}
    </>
  );
};
