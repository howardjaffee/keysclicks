import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Privacy = () => {
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
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
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
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              As an Amazon affiliate website, we collect information you provide directly to us, such as when you subscribe to our newsletter, contact us for support, or interact with our content.
            </p>
            <h3 className="text-lg font-medium mb-2">Information collected automatically:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and browser information for analytics and fraud prevention</li>
              <li>Pages visited and time spent on site to improve user experience</li>
              <li>Referral source and affiliate link tracking for commission purposes</li>
              <li>Device and browser type for responsive design optimization</li>
              <li>Cookies and tracking technologies as described below</li>
              <li>Purchase data from Amazon for commission tracking (anonymized)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and maintain our service</li>
              <li>Send you newsletters and promotional content (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns to improve our website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except as described in this policy.
            </p>
            <h3 className="text-lg font-medium mb-2">We may share information:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>With service providers who assist in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Amazon Associates Program</h2>
            <p className="mb-4">
              As a participant in the Amazon Associates Program, we may collect and share information with Amazon as required by the program terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website and track affiliate sales. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand user behavior</li>
              <li><strong>Affiliate Tracking:</strong> Amazon Associates tracking cookies for commission purposes</li>
              <li><strong>Advertising Cookies:</strong> Google Ads conversion tracking</li>
            </ul>
            <p className="mb-4">
              You can control cookie settings through your browser preferences, but disabling cookies may affect website functionality and our ability to provide personalized recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2">Email: privacy@keysandclicks.com</p>
            <p className="mb-2">Phone: 540 242 3003</p>
          </section>
        </div>
      </div>
    </div>
  );
};