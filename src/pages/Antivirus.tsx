// Import product images
import nortonImage from "@/assets/products/norton-360-deluxe-new.jpg";
import kasperskySecurityImage from "@/assets/products/kaspersky-security.jpg";
import mcafeeProtectionImage from "@/assets/products/mcafee-total-protection.jpg";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Star, ExternalLink, CheckCircle, AlertTriangle, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Antivirus = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Norton 360 Deluxe",
      price: "$49.99/year",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 15420,
      badge: "Editor's Choice",
      features: [
        "Real-time threat protection",
        "50GB secure cloud backup",
        "VPN for up to 5 devices",
        "Password manager",
        "SafeCam webcam protection",
        "Parental controls"
      ],
      pros: [
        "Industry-leading malware detection",
        "Comprehensive feature set",
        "Excellent customer support"
      ],
      cons: [
        "Can be resource-intensive",
        "Higher price point"
      ],
      image: nortonImage,
      affiliateLink: "https://amazon.com/norton-360-deluxe"
    },
    {
      id: 2,
      name: "Kaspersky Total Security",
      price: "$39.99/year",
      originalPrice: "$79.99",
      rating: 4.9,
      reviews: 12850,
      badge: "Best Protection",
      features: [
        "Advanced threat defense",
        "Multi-layered ransomware protection",
        "Secure VPN included",
        "Password manager & vault",
        "Parental controls",
        "Safe money for banking"
      ],
      pros: [
        "Highest malware detection rates",
        "Lightweight system impact",
        "Advanced behavioral analysis"
      ],
      cons: [
        "Limited VPN data in basic plan",
        "Complex interface for beginners"
      ],
      image: kasperskySecurityImage,
      affiliateLink: "https://amazon.com/kaspersky-total-security"
    },
    {
      id: 3,
      name: "McAfee Total Protection",
      price: "$39.99/year",
      originalPrice: "$119.99",
      rating: 4.6,
      reviews: 9640,
      badge: "Best Value",
      features: [
        "Unlimited device coverage",
        "Identity theft protection",
        "Secure VPN (unlimited)",
        "Password manager",
        "File encryption",
        "Web protection"
      ],
      pros: [
        "Covers unlimited devices",
        "Strong identity protection",
        "Unlimited VPN included"
      ],
      cons: [
        "Can slow older systems",
        "Occasional false positives"
      ],
      image: mcafeeProtectionImage,
      affiliateLink: "https://amazon.com/mcafee-total-protection"
    }
  ];

  const comparisonFeatures = [
    { feature: "Real-time Protection", norton: true, kaspersky: true, mcafee: true },
    { feature: "VPN Included", norton: true, kaspersky: "Limited", mcafee: true },
    { feature: "Password Manager", norton: true, kaspersky: true, mcafee: true },
    { feature: "Parental Controls", norton: true, kaspersky: true, mcafee: true },
    { feature: "Identity Protection", norton: true, kaspersky: false, mcafee: true },
    { feature: "Cloud Backup", norton: "50GB", kaspersky: false, mcafee: false },
    { feature: "Device Coverage", norton: "5", kaspersky: "10", mcafee: "Unlimited" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Antivirus Software</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Antivirus Software for 2024
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect your devices with top-rated antivirus solutions. Compare features, 
              read expert reviews, and find the perfect security software for your needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="#products">
                  <Shield className="mr-2 h-5 w-5" />
                  View Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog?category=antivirus">
                  View Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Trusted by 2M+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Expert Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">4.8/5 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Antivirus Recommendations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experts have tested and reviewed the leading antivirus solutions. 
              Here are our top picks for 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    {product.badge}
                  </Badge>
                </div>

                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">
                        {product.rating} ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Save {Math.round((1 - parseFloat(product.price.replace('$', '').replace('/year', '')) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">✓ Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-600 mb-1">Pros</h5>
                      <ul className="space-y-1">
                        {product.pros.slice(0, 2).map((pro, i) => (
                          <li key={i} className="text-xs text-green-600">+ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-600 mb-1">Cons</h5>
                      <ul className="space-y-1">
                        {product.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="text-xs text-orange-600">- {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button 
                      asChild 
                      className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg"
                      size="lg"
                    >
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Get Best Deal
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/product/${product.id}`}>
                        Full Review
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-muted-foreground">
              Compare the key features of our top antivirus recommendations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold text-primary">Norton 360</th>
                  <th className="text-center p-4 font-semibold text-primary">Kaspersky</th>
                  <th className="text-center p-4 font-semibold text-primary">McAfee</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="p-4 text-center">
                      {typeof item.norton === 'boolean' ? (
                        item.norton ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm font-medium">{item.norton}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.kaspersky === 'boolean' ? (
                        item.kaspersky ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm font-medium">{item.kaspersky}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.mcafee === 'boolean' ? (
                        item.mcafee ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )
                      ) : (
                        <span className="text-sm font-medium">{item.mcafee}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Get answers to common questions about antivirus software.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Which antivirus software offers the best protection in 2024?
                </AccordionTrigger>
                <AccordionContent>
                  Based on independent lab tests and our evaluations, Kaspersky Total Security currently offers the highest malware detection rates at 99.9%. However, Norton 360 Deluxe provides the best overall value with comprehensive features including VPN, identity protection, and excellent customer support. The "best" choice depends on your specific needs and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Do I need antivirus software if I have Windows Defender?
                </AccordionTrigger>
                <AccordionContent>
                  While Windows Defender has improved significantly, dedicated antivirus solutions like Norton, Kaspersky, or McAfee offer superior protection with advanced features such as real-time web protection, email security, VPN, identity theft protection, and better customer support. For comprehensive security, a premium antivirus is recommended.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  How much should I expect to pay for good antivirus software?
                </AccordionTrigger>
                <AccordionContent>
                  Quality antivirus software typically costs between $30-60 per year. Norton 360 Deluxe ($49.99/year), Kaspersky Total Security ($39.99/year), and McAfee Total Protection ($39.99/year) all offer excellent value. Avoid extremely cheap options as they often lack essential features and reliable protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I install antivirus software on multiple devices?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Most premium antivirus solutions support multiple devices. Norton 360 Deluxe covers up to 5 devices, Kaspersky Total Security covers up to 10 devices, and McAfee Total Protection offers unlimited device coverage. This makes them excellent for families with multiple computers, phones, and tablets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Will antivirus software slow down my computer?
                </AccordionTrigger>
                <AccordionContent>
                  Modern antivirus solutions are designed to have minimal impact on system performance. Kaspersky and Bitdefender are particularly known for their lightweight operation. However, during initial setup and full system scans, you may notice temporary slowdowns. Real-time protection typically has negligible impact on daily computer use.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Digital Life Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Don't wait for a cyber attack. Get premium antivirus protection with exclusive deals 
              and start securing your devices immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/hot-deals">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View All Deals
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog?category=antivirus">
                  Read Expert Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Antivirus;