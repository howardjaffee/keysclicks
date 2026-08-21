import { Seo } from "@/components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
            
            {/* General Questions */}
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What is Digital Deals Store and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Digital Deals Store is an Amazon affiliate website that helps you discover the best deals on digital products like antivirus software, office applications, computer hardware, and accessories. When you click our links and make a purchase on Amazon, we earn a small commission at no extra cost to you. This helps us maintain the site and continue providing valuable product recommendations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Are the prices on your site the same as Amazon's?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! The prices you see on our site are pulled directly from Amazon and are updated regularly. However, Amazon prices can change frequently, so the final price will be confirmed when you visit Amazon to complete your purchase. We always recommend checking the current price on Amazon before buying.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you sell products directly or handle shipping?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, we don't sell products directly or handle shipping. We're an affiliate marketing site that directs you to Amazon where you complete your purchase. Amazon handles all aspects of the transaction including payment processing, shipping, customer service, and returns. This ensures you get Amazon's reliable service and protection policies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How do you choose which products to feature?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We carefully curate products based on several factors: customer reviews and ratings, price-to-value ratio, brand reputation, current deals and discounts, and overall popularity. Our team researches each category to ensure we're recommending quality products that offer genuine value to our users.
              </AccordionContent>
            </AccordionItem>

            {/* Purchasing Questions */}
            <AccordionItem value="item-5" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is it safe to buy through your affiliate links?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Our affiliate links redirect you directly to Amazon's secure website where you complete your purchase using Amazon's encrypted checkout process. You'll have all the same protections, guarantees, and customer service that come with any Amazon purchase. Your payment information is never shared with us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Will using your links cost me extra?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, using our affiliate links never costs you anything extra. Amazon pays us a small commission from their marketing budget when you make a purchase, but this doesn't affect the price you pay. In many cases, you might even find exclusive deals or coupons through our links that save you money.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I use my Amazon Prime benefits with your links?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! All your Amazon Prime benefits apply when you purchase through our affiliate links, including free shipping, Prime Video, and any Prime member exclusive deals. Simply sign in to your Amazon account during checkout to access all your Prime benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What if the product I want is out of stock?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If a product is out of stock on Amazon, we recommend adding it to your Amazon wishlist to get notified when it's back in stock. You can also check our site regularly as we update our recommendations and may feature similar alternative products that meet your needs.
              </AccordionContent>
            </AccordionItem>

            {/* Returns & Support */}
            <AccordionItem value="item-9" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What's your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Since you purchase directly from Amazon, Amazon's return policy applies to your order. Most items can be returned within 30 days for a full refund. Digital products like software licenses may have different return policies. Visit our Returns & Refunds page for detailed information and step-by-step return instructions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What if I have issues with a product I purchased?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For any issues with products purchased through Amazon, you should first contact Amazon's customer service as they handle all post-purchase support. However, if you need help navigating the process or have questions about returns, feel free to contact us and we'll be happy to guide you in the right direction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you provide technical support for software products?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We don't provide direct technical support for software products, as this is handled by the software manufacturers (like Norton, McAfee, Microsoft, etc.). However, we can help you find the right contact information for technical support and provide guidance on installation processes and system requirements.
              </AccordionContent>
            </AccordionItem>

            {/* Product Specific */}
            <AccordionItem value="item-12" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How do I know if antivirus software is compatible with my computer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each product page on Amazon includes detailed system requirements. Generally, modern antivirus software supports Windows 10/11, macOS 10.14+, and various mobile platforms. Check the "Technical Details" section on the Amazon product page, and feel free to contact us if you need help determining compatibility for your specific system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What's the difference between digital download and physical software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Digital downloads are delivered electronically - you receive a product key and download link via email after purchase. This means instant access but no physical media. Physical software comes with a CD/DVD and printed materials, but may take longer to arrive. Digital downloads are usually cheaper and more convenient for most users.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I install software on multiple devices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This depends on the specific license you purchase. Many antivirus and office software packages come in multi-device licenses (3, 5, or 10 devices). Always check the product title and description to see how many devices are covered. Single-device licenses are typically cheaper but can only be installed on one computer.
              </AccordionContent>
            </AccordionItem>

            {/* Contact & Support */}
            <AccordionItem value="item-15" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How can I contact you for additional help?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We're here to help! You can reach us through multiple channels:
                <br />• Email: support@digitaldealsstore.com
                <br />• Phone: 1-800-TECH-HELP (1-800-832-4435)
                <br />• Live Chat: Available on our website 9 AM - 6 PM EST
                <br />• Contact Form: Visit our Contact Us page
                <br /><br />We typically respond to emails within 24 hours and phone calls during business hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you have a newsletter or deals alert service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Sign up for our newsletter to receive weekly deal alerts, new product announcements, and exclusive discounts. We also send special notifications during major sale events like Black Friday, Cyber Monday, and Amazon Prime Day. You can subscribe at the bottom of any page on our website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can you recommend products for my specific needs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Contact us with your specific requirements (budget, intended use, system specifications, etc.) and our team can provide personalized product recommendations. We love helping customers find exactly what they need, whether it's the right antivirus for a small business or the perfect printer for home use.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* Still have questions section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is ready to help you with any questions or concerns.
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-medium">Get in touch:</p>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <span>📧 support@digitaldealsstore.com</span>
                <span>📱 1-800-TECH-HELP</span>
                <span>💬 Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}