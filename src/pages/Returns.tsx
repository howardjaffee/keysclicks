import { Seo } from "@/components/Seo";
import { Separator } from "@/components/ui/separator";

export default function Returns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Returns & Refunds Policy
          </h1>
          <p className="text-xl text-center text-primary-foreground/90 max-w-3xl mx-auto">
            Your satisfaction is our priority. Learn about our return and refund policies for Amazon affiliate purchases.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Important Notice */}
          <div className="bg-accent p-6 rounded-lg border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-accent-foreground mb-4">Important Notice</h2>
            <p className="text-accent-foreground">
              As an Amazon affiliate, all purchases are processed directly through Amazon. This means Amazon's return and refund policies apply to your purchases, not ours. We're here to help guide you through the process.
            </p>
          </div>

          {/* Amazon Returns Policy */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Amazon's Return Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When you purchase products through our affiliate links, you're buying directly from Amazon. Here's what you need to know:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Most items can be returned within 30 days of delivery</li>
                <li>Items must be in original condition and packaging</li>
                <li>Amazon provides prepaid return labels for most returns</li>
                <li>Digital software downloads have specific return policies</li>
                <li>Opened software may have limited return options</li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* How to Return Items */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">How to Return Items to Amazon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Step-by-Step Process:</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Sign in to your Amazon account</li>
                  <li>Go to "Your Orders"</li>
                  <li>Find the item you want to return</li>
                  <li>Select "Return or replace items"</li>
                  <li>Choose your reason for returning</li>
                  <li>Select your preferred return method</li>
                  <li>Print the return label and ship the item</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Return Methods:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Drop off at UPS locations</li>
                  <li>Schedule UPS pickup</li>
                  <li>Amazon Locker returns</li>
                  <li>Whole Foods return counter</li>
                  <li>Kohl's store returns (for eligible items)</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          {/* Refund Information */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Refund Information</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Refund Timeline</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Credit/Debit Cards:</strong> 3-5 business days after Amazon processes the return</p>
                  <p><strong>Gift Cards:</strong> 2-3 hours after Amazon processes the return</p>
                  <p><strong>Bank Account:</strong> Up to 10 business days</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Digital Products & Software</h3>
                <p className="text-muted-foreground mb-3">
                  Digital downloads like antivirus software, Office licenses, and Windows keys have special policies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Must be returned within 30 days of purchase</li>
                  <li>Product key must not have been activated or used</li>
                  <li>Original purchase receipt required</li>
                  <li>Refund processed to original payment method</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          {/* Our Commitment */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Commitment to You</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                While we cannot process returns directly, we're committed to helping you have a positive shopping experience:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Pre-Purchase Support</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Detailed product information</li>
                    <li>Honest reviews and ratings</li>
                    <li>Compatibility guidance</li>
                    <li>Feature comparisons</li>
                  </ul>
                </div>
                <div className="bg-secondary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Post-Purchase Help</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Return process guidance</li>
                    <li>Contact information for support</li>
                    <li>Alternative product suggestions</li>
                    <li>Technical support resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Contact for Help */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Need Help with a Return?</h2>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                We're Here to Help You Navigate the Process
              </h3>
              <p className="text-muted-foreground mb-6">
                If you're having trouble with a return or need guidance on Amazon's policies, don't hesitate to reach out to us.
              </p>
              <div className="space-y-4">
                <p className="text-foreground font-medium">Contact us at:</p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">📧 support@digitaldealsstore.com</p>
                  <p className="text-muted-foreground">📱 1-800-TECH-HELP</p>
                  <p className="text-muted-foreground">💬 Live chat available 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}