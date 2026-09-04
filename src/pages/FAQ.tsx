import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Keys & Clicks and how does it work?",
    a: "Keys & Clicks is an Amazon affiliate website that helps you discover the best deals on digital products like antivirus software, Windows product keys, office applications, printers and PC accessories. When you click our links and make a purchase on Amazon, we earn a small commission at no extra cost to you. This helps us maintain the site and continue providing valuable product recommendations.",
  },
  {
    q: "Are the prices on your site the same as Amazon's?",
    a: "We aim to show the same prices you would see on Amazon, and we update our listings regularly. However, Amazon prices can change frequently, so the final price is always confirmed on the Amazon product page before you buy. We recommend checking the current price on Amazon before completing your purchase.",
  },
  {
    q: "Do you sell products directly or handle shipping?",
    a: "No, we don't sell products directly or handle shipping. We're an affiliate marketing site that directs you to Amazon where you complete your purchase. Amazon handles all aspects of the transaction including payment processing, shipping, customer service, and returns. This ensures you get Amazon's reliable service and protection policies.",
  },
  {
    q: "How do you choose which products to feature?",
    a: "We carefully curate products based on several factors: customer reviews and ratings, price-to-value ratio, brand reputation, current deals and discounts, and overall popularity. Our team researches each category to ensure we're recommending quality products that offer genuine value to our users.",
  },
  {
    q: "Is it safe to buy through your affiliate links?",
    a: "Absolutely! Our affiliate links redirect you directly to Amazon's secure website where you complete your purchase using Amazon's encrypted checkout process. You'll have all the same protections, guarantees, and customer service that come with any Amazon purchase. Your payment information is never shared with us.",
  },
  {
    q: "Will using your links cost me extra?",
    a: "No, using our affiliate links never costs you anything extra. Amazon pays us a small commission from their marketing budget when you make a purchase, but this doesn't affect the price you pay. In many cases, you might even find exclusive deals or coupons through our links that save you money.",
  },
  {
    q: "Can I use my Amazon Prime benefits with your links?",
    a: "Yes! All your Amazon Prime benefits apply when you purchase through our affiliate links, including free shipping, Prime Video, and any Prime member exclusive deals. Simply sign in to your Amazon account during checkout to access all your Prime benefits.",
  },
  {
    q: "What if the product I want is out of stock?",
    a: "If a product is out of stock on Amazon, we recommend adding it to your Amazon wishlist to get notified when it's back in stock. You can also check our site regularly as we update our recommendations and may feature similar alternative products that meet your needs.",
  },
  {
    q: "What's your return policy?",
    a: "Since you purchase directly from Amazon, Amazon's return policy applies to your order. Most items can be returned within 30 days for a full refund. Digital products like software licenses may have different return policies. Visit our Returns & Refunds page for detailed information and step-by-step return instructions.",
  },
  {
    q: "What if I have issues with a product I purchased?",
    a: "For any issues with products purchased through Amazon, you should first contact Amazon's customer service as they handle all post-purchase support. However, if you need help navigating the process or have questions about returns, feel free to contact us and we'll be happy to guide you in the right direction.",
  },
  {
    q: "Do you provide technical support for software products?",
    a: "Yes — every product we recommend comes with our free installation and activation support. If you get stuck installing your antivirus, activating a Windows key or setting up QuickBooks, reach out and we will walk you through it. For manufacturer-level defects, we'll point you to the right official support channel (Norton, McAfee, Microsoft, and so on). See our Support Promise page for details.",
  },
  {
    q: "How do I know if antivirus software is compatible with my computer?",
    a: "Each product page on Amazon includes detailed system requirements. Generally, modern antivirus software supports Windows 10/11, macOS 10.14+, and various mobile platforms. Check the \"Technical Details\" section on the Amazon product page, and feel free to contact us if you need help determining compatibility for your specific system.",
  },
  {
    q: "What's the difference between digital download and physical software?",
    a: "Digital downloads are delivered electronically - you receive a product key and download link via email after purchase. This means instant access but no physical media. Physical software comes with a CD/DVD and printed materials, but may take longer to arrive. Digital downloads are usually cheaper and more convenient for most users.",
  },
  {
    q: "Can I install software on multiple devices?",
    a: "This depends on the specific license you purchase. Many antivirus and office software packages come in multi-device licenses (3, 5, or 10 devices). Always check the product title and description to see how many devices are covered. Single-device licenses are typically cheaper but can only be installed on one computer.",
  },
  {
    q: "How can I contact you for additional help?",
    a: "You can email us at support@keysandclicks.com, or use the form on our Contact page. We typically respond to emails within 24 hours, and our free setup support covers every product we recommend.",
  },
  {
    q: "Do you have a deals alert service?",
    a: "Yes — our Hot Deals page is updated regularly with the latest offers on antivirus, software keys, printers and PC gear. Bookmark it and check back often, or create a free account to keep track of the products you're interested in.",
  },
  {
    q: "Can you recommend products for my specific needs?",
    a: "Absolutely! Contact us with your specific requirements (budget, intended use, system specifications, etc.) and our team can provide personalized product recommendations. We love helping customers find exactly what they need, whether it's the right antivirus for a small business or the perfect printer for home use.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Software Buying FAQ | Keys & Clicks"
        description="Answers about buying antivirus, Windows keys, QuickBooks, printers and routers through our Amazon affiliate links — pricing, returns and free setup help."
        path="/faq"
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <Header />

      {/* Hero */}
      <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-center text-primary-foreground/90 max-w-3xl mx-auto">
            Find answers to the most common questions about our products, services, and Amazon affiliate program.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <Badge variant="secondary" className="px-4 py-2">General Questions</Badge>
            <Badge variant="secondary" className="px-4 py-2">Purchasing</Badge>
            <Badge variant="secondary" className="px-4 py-2">Returns</Badge>
            <Badge variant="secondary" className="px-4 py-2">Technical Support</Badge>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`} className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is ready to help you with any questions or concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> support@keysandclicks.com
              </span>
            </div>
            <Button asChild className="rounded-full">
              <Link to="/contact">Visit our Contact page</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
