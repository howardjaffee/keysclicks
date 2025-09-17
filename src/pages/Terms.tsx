import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Terms & Conditions</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <div className="mb-6">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using digitalcorner.lovable.app ("Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="mb-4">
              This Website provides reviews, comparisons, and recommendations for digital products available through our Amazon affiliate partnerships. We are not the direct seller of any products featured on this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Affiliate Disclosure & Third-Party Relationships</h2>
            <p className="mb-4">
              <strong>Important:</strong> This website participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
            <p className="mb-4">
              When you click on links to Amazon or other affiliate partners and make a purchase, we may earn a commission at no additional cost to you. This helps support our website and allows us to continue providing valuable content and reviews.
            </p>
            <p className="mb-4">
              We are not affiliated with, sponsored by, or endorsed by Amazon, Microsoft, Norton, McAfee, Kaspersky, or any other companies whose products we review, except through official affiliate partnerships.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Product Information & Reviews</h2>
            <p className="mb-4">
              All product information, reviews, and recommendations on this Website are provided for informational purposes only. While we strive for accuracy, product features, pricing, and availability may change without notice.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Product prices and availability are subject to change on retailer websites</li>
              <li>We are not responsible for pricing errors or inventory availability</li>
              <li>Our reviews reflect our honest opinions based on research and testing</li>
              <li>Individual results may vary when using reviewed products</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Intellectual Property Rights</h2>
            <p className="mb-4">
              All content on this Website, including text, graphics, logos, images, and software, is the property of Digitalcorner or its content suppliers and is protected by copyright laws.
            </p>
            <p className="mb-4">
              Company names, product names, and logos used on this Website are trademarks of their respective owners. Their use is for informational and review purposes only and does not imply endorsement or affiliation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              <strong>Important Disclaimer:</strong> Digitalcorner serves as an informational resource and affiliate partner only. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Product quality, performance, or compatibility issues</li>
              <li>Customer service or technical support for purchased products</li>
              <li>Shipping delays, damaged products, or returns</li>
              <li>Any disputes between you and third-party retailers</li>
              <li>Changes to product specifications or availability</li>
            </ul>
            <p className="mb-4">
              For all product-related issues, please contact the manufacturer or retailer directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. User Conduct</h2>
            <p className="mb-4">
              You agree not to use this Website for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Website in any way that could damage the Website or impair anyone else's use of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Privacy & Data Collection</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Website, to understand our practices regarding data collection and affiliate tracking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Nevada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mb-2">Email: legal@digitalcorner.com</p>
            <p className="mb-2">Phone: 540 242 3003</p>
            <p className="mb-2">Address: #04 S Jones, Las Vegas NV 89107</p>
          </section>
        </div>
      </div>
    </div>
  );
};