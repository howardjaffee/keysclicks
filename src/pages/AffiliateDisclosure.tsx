import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BadgeCheck, DollarSign, Eye, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: DollarSign,
    title: "You never pay more",
    text: "Affiliate commissions are paid by the retailer out of their margin. The price you see on Amazon is the same whether you arrive through our link or not.",
  },
  {
    icon: Eye,
    title: "Every commercial link is labelled",
    text: "Buy buttons, price tables, deal cards and in-article product links on Keys & Clicks are affiliate links. A disclosure banner appears at the top of every page.",
  },
  {
    icon: BadgeCheck,
    title: "Commissions never buy a recommendation",
    text: "Rankings are based on protection results, feature set, renewal pricing and real-world setup experience. We list drawbacks even for products that earn us money.",
  },
  {
    icon: ShieldCheck,
    title: "We are not the seller",
    text: "Checkout, payment, licence delivery, warranty and returns are handled entirely by the retailer under their own policies. We never take your card details.",
  },
];

const AffiliateDisclosure = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Affiliate Disclosure | Keys & Clicks"
      description="How Keys & Clicks earns money: Amazon Associates and other affiliate programs, what our links mean, and why commissions never influence our recommendations."
      path="/affiliate-disclosure"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Affiliate Disclosure", path: "/affiliate-disclosure" },
      ]}
    />
    <Header />

    <main>
      <section className="bg-hero text-hero-foreground py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Transparency</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold font-display">Affiliate Disclosure</h1>
          <p className="mt-5 text-lg text-hero-foreground/80 leading-relaxed">
            Keys &amp; Clicks is an independent review and comparison site. We are reader-supported: when you buy
            through links on this site, we may earn an affiliate commission at no additional cost to you.
          </p>
          <p className="mt-3 text-sm text-hero-foreground/60">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold">Amazon Associates Program disclosure</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Keys &amp; Clicks is a participant in the Amazon Services LLC Associates Program, an affiliate
                advertising program designed to provide a means for sites to earn advertising fees by advertising and
                linking to Amazon.com. As an Amazon Associate we earn from qualifying purchases. We also participate in
                other retailer and software affiliate programs on the same terms.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <Card key={p.title} className="surface-card">
                <CardContent className="p-6">
                  <p.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>Which links are affiliate links?</h2>
            <p>
              Assume that any link taking you to Amazon or another retailer — including "Buy on Amazon" buttons,
              product cards, deal listings, comparison tables and product mentions inside our blog posts and reviews —
              is an affiliate link. Links to our own pages, to brand support documentation, to independent testing
              labs and to news sources are not monetised.
            </p>

            <h2>How we choose what to recommend</h2>
            <p>
              We prioritise independent lab results (AV-TEST, AV-Comparatives), renewal pricing rather than first-year
              teaser pricing, device coverage, system impact and how painful the product is to install and activate.
              Products we would not install on our own machines are not listed, regardless of commission rate.
            </p>

            <h2>Pricing and availability</h2>
            <p>
              Prices, discounts and availability shown on Keys &amp; Clicks are captured at the time of writing and can
              change at any moment. The price displayed at the retailer's checkout is the price that applies. Always
              confirm the edition, device count and licence term on the retailer's page before you buy.
            </p>

            <h2>Trademarks</h2>
            <p>
              Norton, McAfee, Bitdefender, Kaspersky, CCleaner, QuickBooks, Intuit, Microsoft, Windows, HP, Canon,
              Brother, NETGEAR and ASUS are trademarks of their respective owners. Keys &amp; Clicks is not affiliated
              with, endorsed by or authorised by any of these brands, and uses their names only to identify and review
              the products they make.
            </p>

            <h2>Questions</h2>
            <p>
              If anything about how we make money is unclear, email{" "}
              <a href="mailto:support@keysandclicks.com">support@keysandclicks.com</a> or call 540 242 3003 and we will
              answer plainly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/support-promise">Our free support promise</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default AffiliateDisclosure;
