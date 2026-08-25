import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportPromise } from "@/components/SupportPromise";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Wrench, ShieldCheck, RotateCcw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    title: "1. Tell us what happened",
    text: "Email or call with the product name, your operating system and the exact error message or screenshot. No purchase proof games — the order confirmation from the retailer is enough.",
  },
  {
    title: "2. We diagnose within one business day",
    text: "A real person replies with step-by-step instructions. Most licence-activation and installation problems are solved in the first reply.",
  },
  {
    title: "3. Guided setup if you want it",
    text: "Prefer someone to walk you through it? Book a phone call. We guide you; we never take remote control of your computer without your explicit, case-by-case permission.",
  },
  {
    title: "4. Escalation to the vendor or retailer",
    text: "If the key is faulty or the hardware is defective, we help you open the vendor or Amazon case and tell you exactly what to say so it is resolved quickly.",
  },
];

const covered = [
  "Download, installation and first-run configuration",
  "Product keys that will not activate or report as already used",
  "Removing conflicting antivirus before a new install",
  "Moving a licence to a replacement computer",
  "Printer, scanner and router setup on your home or office network",
  "Renewal and auto-renew settings so you are never double-charged",
  "Choosing the right edition and device count before you buy",
];

const notCovered = [
  "Data recovery, virus cleanup of an already-infected machine, or hardware repair",
  "Pirated, resold or grey-market licences not bought through the retailer",
  "Custom development, server administration or business IT management",
  "Refunds and replacements — those are issued by the retailer, though we help you request them",
];


const faqs = [
  {
    q: "My antivirus product key says it is invalid or already used. What do I do?",
    a: "Nine times out of ten this is a typing or region mismatch, not a bad key. Copy the key straight from the retailer email rather than retyping it, make sure you are signed into the correct vendor account, and check the key matches the edition you installed. If it still fails, send us the key and the exact error text and we will confirm the fault and help you open a replacement claim with the seller.",
  },
  {
    q: "How do I remove my old antivirus before installing a new one?",
    a: "Uninstall the old suite from Windows Settings, then run the vendor's dedicated removal tool (Norton Remove and Reinstall, McAfee MCPR, Avast Clear and similar) and restart the computer before installing the new product. Leftover drivers from the old suite are the most common cause of a failed install, and we can walk you through the cleanup step by step.",
  },
  {
    q: "Can I move my licence to a new computer?",
    a: "Almost always yes. Deactivate the licence on the old machine through the vendor account or by uninstalling, then sign into the same account on the new computer and reactivate. Windows retail keys transfer as long as the old install is removed; OEM keys stay with the original hardware. Tell us the product and we will confirm which type you have.",
  },
  {
    q: "My printer or router will not connect to the network. Where do I start?",
    a: "Connect the device to the 2.4 GHz band rather than 5 GHz during setup, keep it within a few metres of the router, and install the manufacturer's own setup app instead of the generic Windows driver. If the device is invisible on the network, restart the router first, then the device. We can talk you through the setup on the phone if you prefer.",
  },
  {
    q: "How long does free support take, and does it cost anything?",
    a: "Email is answered within one business day and usually much sooner. Support is free and unlimited on anything you buy through our links, funded by the commission the retailer pays us. We never charge for help and never take remote control of your computer without your explicit permission for that specific session.",
  },
  {
    q: "Who handles refunds, replacements and warranty claims?",
    a: "The retailer and the manufacturer do, because your purchase is completed on their website, not ours. Amazon generally allows 30 days for physical goods, while digital licences are refundable only while unredeemed. Contact us first: if the fault is a setup issue we fix it for free, and if it is not we help you file the claim with the right evidence.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SupportPromisePage = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Free Support Promise, Troubleshooting & Warranty Policy | Keys & Clicks"
      description="Free lifetime installation and activation help on everything we recommend, plus how troubleshooting, warranty claims and retailer returns are handled."
      path="/support-promise"
      jsonLd={faqJsonLd}
    />
    <Header />

    <main>
      <SupportPromise />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold font-display">
            Support promise, troubleshooting &amp; warranty policy
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Every product recommended on Keys &amp; Clicks comes with free, unlimited setup and troubleshooting help
            from us — funded by the affiliate commission the retailer pays, never by you. This page explains exactly
            what that covers, how to claim it, and how warranties and returns work when the seller is Amazon or another
            retailer rather than us.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {steps.map((s) => (
              <Card key={s.title} className="surface-card">
                <CardContent className="p-6">
                  <h2 className="font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <Wrench className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-lg font-semibold">What free support covers</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {covered.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-primary">•</span> {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ShieldCheck className="h-6 w-6 text-muted-foreground" />
                <h2 className="mt-4 text-lg font-semibold">What it does not cover</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {notCovered.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-muted-foreground">•</span> {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 prose max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>Warranty policy</h2>
            <p>
              Keys &amp; Clicks does not sell products and therefore does not issue warranties. Every purchase is
              completed on the retailer's website, and the manufacturer's warranty plus the retailer's own guarantee
              apply. Software licences are typically covered by the publisher for the length of the subscription term;
              hardware such as printers and routers usually carries a one- to three-year manufacturer warranty.
            </p>
            <p>
              If a product fails inside its warranty period, contact us first. We will identify whether the fault is a
              setup issue we can fix for free, and if it is not, we will help you file the manufacturer or retailer
              claim with the right evidence attached.
            </p>

            <h2>Returns and refunds</h2>
            <p>
              Refunds are issued by the retailer under their policy — for Amazon that is generally 30 days for physical
              goods, with digital software licences refundable only if unredeemed. See our{" "}
              <Link to="/returns">Returns &amp; Refunds page</Link> for the full detail. We cannot process a refund on
              a retailer's behalf, but we will tell you whether you qualify and how to request it.
            </p>

            <h2>Response times</h2>
            <p>
              Email is answered within one business day, usually much faster. Phone support runs Monday to Saturday.
              There is no ticket limit, no paid tier and no upsell: we will never ask you to pay for support, and
              anyone claiming to be us and asking for payment or remote access is not us — report it to{" "}
              <a href="mailto:support@keysandclicks.com">support@keysandclicks.com</a>.
            </p>
          </div>

          <section id="faq" className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold font-display">Troubleshooting FAQ</h2>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              The questions we are asked most often. If yours is not here, email or call us — the answer is still free.
            </p>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Request free help
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="tel:5402423003">
                <Phone className="mr-2 h-4 w-4" /> 540 242 3003
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link to="/returns">
                <RotateCcw className="mr-2 h-4 w-4" /> Returns policy
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default SupportPromisePage;
