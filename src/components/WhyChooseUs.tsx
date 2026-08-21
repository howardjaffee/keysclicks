import { Headphones, ShieldCheck, Wallet, Search, LifeBuoy, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Researched, not scraped",
    body: "We read the spec sheets, the release notes and hundreds of buyer reviews before a product earns a place here.",
  },
  {
    icon: Wallet,
    title: "You pay the retailer's price",
    body: "Our links carry no markup. You check out on Amazon or the software vendor's own site at their listed price.",
  },
  {
    icon: Headphones,
    title: "Free setup help, forever",
    body: "Installation, product-key activation, moving a licence to a new PC — we guide you personally and never charge for it.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine licences only",
    body: "No grey-market keys. Everything we list is sold by the brand or an authorised retailer with a real warranty.",
  },
  {
    icon: FileCheck,
    title: "Clear, honest disclosure",
    body: "We state plainly where we earn a commission, and it never changes which product we rank first.",
  },
  {
    icon: LifeBuoy,
    title: "Troubleshooting on tap",
    body: "Antivirus blocking QuickBooks? Printer offline? Send us the error and we will work through it with you.",
  },
];

export const WhyChooseUs = () => (
  <section className="py-20 bg-gradient-to-b from-background to-secondary/40">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Keys &amp; Clicks</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          An affiliate store that actually looks after you afterwards
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We are an independent affiliate partner: we recommend digital products from Amazon and other trusted stores,
          and earn a small commission when you buy. What makes us different is what happens next — every customer gets
          unlimited, free, human help getting the product installed, activated and working properly.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <article key={b.title} className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <b.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
