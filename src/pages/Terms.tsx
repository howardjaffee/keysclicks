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
              By accessing and using Digitalcorner ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Affiliate Disclosure</h2>
            <p className="mb-4">
              Digitalcorner is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
            <p className="mb-4">
              When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate links are disclosed clearly throughout the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Product Information</h2>
            <p className="mb-4">
              We strive to provide accurate product information, including prices, descriptions, and availability. However, we cannot guarantee that all information is completely accurate, complete, or current.
            </p>
            <p className="mb-4">
              Prices and availability of products are subject to change without notice. All purchases are made directly through Amazon or other merchant partners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. External Links</h2>
            <p className="mb-4">
              Our website contains links to external websites. We are not responsible for the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the site are protected under applicable copyrights, trademarks, and other proprietary rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Digitalcorner be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mb-2">Email: support@digitalcorner.com</p>
            <p className="mb-2">Phone: 540 242 3003</p>
          </section>
        </div>
      </div>
    </div>
  );
};