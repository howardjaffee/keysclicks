// Import product images
import canonPixmaImage from "@/assets/products/canon-pixma-new.jpg";
import hpDeskjetImage from "@/assets/products/hp-deskjet-3755-new.jpg";
import brotherPrinterImage from "@/assets/products/brother-laser-printer.jpg";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Printer, Star, ExternalLink, CheckCircle, Wifi, Zap, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Printers = () => {
  const featuredPrinters = [
    {
      id: 1,
      name: "Canon PIXMA TS8320",
      type: "All-in-One Inkjet",
      price: "$149.99",
      originalPrice: "$199.99",
      rating: 4.7,
      reviews: 8420,
      badge: "Best Overall",
      features: [
        "6-color individual ink system",
        "Wireless and mobile printing",
        "Auto duplex printing",
        "4.3\" LCD touchscreen",
        "Memory card slots",
        "Cloud printing support"
      ],
      pros: [
        "Excellent photo quality",
        "Compact design",
        "Easy wireless setup"
      ],
      cons: [
        "Ink can be expensive",
        "Slower text printing"
      ],
      image: canonPixmaImage,
      affiliateLink: "https://amazon.com/canon-pixma-ts8320"
    },
    {
      id: 2,
      name: "HP DeskJet 3755",
      type: "All-in-One Inkjet",
      price: "$89.99",
      originalPrice: "$129.99",
      rating: 4.5,
      reviews: 12650,
      badge: "Most Compact",
      features: [
        "World's smallest all-in-one",
        "Wireless printing",
        "Mobile printing apps",
        "Auto document feeder",
        "Borderless photo printing",
        "Easy setup with HP Smart"
      ],
      pros: [
        "Ultra-compact size",
        "Affordable price",
        "Good mobile integration"
      ],
      cons: [
        "Limited paper capacity",
        "No LCD screen"
      ],
      image: hpDeskjetImage,
      affiliateLink: "https://amazon.com/hp-deskjet-3755"
    },
    {
      id: 3,
      name: "Brother MFC-L2750DW",
      type: "Monochrome Laser",
      price: "$199.99",
      originalPrice: "$279.99",
      rating: 4.6,
      reviews: 5840,
      badge: "Best for Business",
      features: [
        "Fast laser printing (36 ppm)",
        "Automatic duplex printing",
        "50-sheet ADF",
        "Wireless connectivity",
        "Large paper capacity",
        "Mobile device printing"
      ],
      pros: [
        "Very fast printing",
        "Low cost per page",
        "Reliable for high volume"
      ],
      cons: [
        "Monochrome only",
        "Larger footprint"
      ],
      image: brotherPrinterImage,
      affiliateLink: "https://amazon.com/brother-mfc-l2750dw"
    }
  ];

  const printerTypes = [
    {
      type: "Inkjet Printers",
      icon: "🖨️",
      description: "Best for photos and color documents",
      pros: ["Excellent photo quality", "Lower upfront cost", "Compact size"],
      cons: ["Higher ink costs", "Slower printing", "Ink can dry up"],
      bestFor: "Home users, photo printing, occasional use"
    },
    {
      type: "Laser Printers",
      icon: "⚡",
      description: "Fast, efficient for text and business documents",
      pros: ["Fast printing speed", "Low cost per page", "Sharp text quality"],
      cons: ["Higher upfront cost", "Limited photo quality", "Larger size"],
      bestFor: "Office use, high-volume printing, text documents"
    },
    {
      type: "All-in-One",
      icon: "🔄",
      description: "Print, scan, copy, and sometimes fax",
      pros: ["Multiple functions", "Space-saving", "Convenient for home office"],
      cons: ["More complex", "Higher failure risk", "Compromise on specialization"],
      bestFor: "Small offices, home offices, versatile needs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Printer className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Printers & All-in-One</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Printers for Home & Office 2024
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find the perfect printer for your needs. Compare inkjet vs laser, all-in-one solutions, 
              and get expert recommendations with exclusive deals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="#products">
                  <Printer className="mr-2 h-5 w-5" />
                  View Printers
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog?category=printers">
                  Troubleshooting Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Printer Types Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose the Right Printer Type</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding different printer technologies helps you make the best choice for your specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {printerTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">{type.icon}</div>
                  <CardTitle className="text-xl">{type.type}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {type.pros.map((pro, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Considerations</h4>
                    <ul className="space-y-1">
                      {type.cons.map((con, i) => (
                        <li key={i} className="text-sm text-orange-600">• {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium text-primary">Best For:</p>
                    <p className="text-sm text-muted-foreground">{type.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Printer Recommendations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experts have tested and reviewed the best printers across different categories. 
              Find your perfect match here.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPrinters.map((printer, index) => (
              <Card 
                key={printer.id} 
                className="group relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    {printer.badge}
                  </Badge>
                </div>

                <div className="aspect-video bg-secondary rounded-t-lg relative overflow-hidden">
                  <img 
                    src={printer.image} 
                    alt={printer.name}
                    className="h-full w-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{printer.type}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(printer.rating) ? 'fill-deal text-deal' : 'text-muted-foreground/40'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">
                        {printer.rating} ({printer.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{printer.name}</CardTitle>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{printer.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{printer.originalPrice}</span>
                    <Badge variant="outline" className="text-primary border-green-600">
                      Save {Math.round((1 - parseFloat(printer.price.replace('$', '')) / parseFloat(printer.originalPrice.replace('$', ''))) * 100)}%
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">✓ Key Features</h4>
                    <ul className="space-y-1">
                      {printer.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-primary mb-1">Pros</h5>
                      <ul className="space-y-1">
                        {printer.pros.map((pro, i) => (
                          <li key={i} className="text-xs text-primary">+ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-600 mb-1">Cons</h5>
                      <ul className="space-y-1">
                        {printer.cons.map((con, i) => (
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
                      <a href={printer.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Get Best Deal
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/product/${printer.id}`}>
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

      {/* Buying Guide */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Printer Buying Guide</h2>
              <p className="text-muted-foreground">
                Make an informed decision with our comprehensive buying guide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Look for Wi-Fi, Ethernet, and mobile app support for flexible printing from any device.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <CardTitle className="text-lg">Speed & Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consider pages per minute (PPM) and monthly duty cycle based on your printing needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-lg">Running Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Factor in ink/toner costs, not just the initial printer price. Cost per page varies significantly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Printer FAQ</h2>
              <p className="text-muted-foreground">
                Get answers to the most common printer questions.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Should I choose an inkjet or laser printer?
                </AccordionTrigger>
                <AccordionContent>
                  Choose inkjet for photo printing, color documents, and lower upfront costs. Choose laser for high-volume text printing, faster speeds, and lower cost per page. For most home users, a good inkjet all-in-one like the Canon PIXMA TS8320 offers the best versatility.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  What's the difference between original and compatible ink?
                </AccordionTrigger>
                <AccordionContent>
                  Original (OEM) ink cartridges are made by the printer manufacturer and guarantee the best quality and compatibility. Compatible cartridges are third-party alternatives that cost less but may have variable quality. For important documents and photos, use original ink. For everyday printing, quality compatible cartridges can save money.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  How do I fix common printing problems?
                </AccordionTrigger>
                <AccordionContent>
                  Common solutions include: 1) Check ink levels and replace empty cartridges, 2) Clean print heads through printer software, 3) Ensure paper is loaded correctly, 4) Restart both printer and computer, 5) Update printer drivers. For detailed troubleshooting guides, check our <Link to="/blog?category=printers" className="text-primary hover:underline">printer troubleshooting section</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I print from my phone or tablet?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Most modern printers support mobile printing through manufacturer apps (HP Smart, Canon PRINT, Brother iPrint&Scan), Apple AirPrint, or Google Cloud Print. Ensure your printer has Wi-Fi connectivity and download the appropriate app for your device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  How much should I expect to spend on a good printer?
                </AccordionTrigger>
                <AccordionContent>
                  For home use, expect $100-300 for a quality all-in-one printer. The Canon PIXMA TS8320 ($149) and HP DeskJet 3755 ($89) offer excellent value. For office use, laser printers range from $200-500. Remember to factor in ongoing ink/toner costs, which can be $50-150 per year depending on usage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Printer className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Find Your Perfect Printer Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you need photo-quality printing, fast office documents, or an all-in-one solution, 
              we have the perfect printer recommendations with exclusive deals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/hot-deals">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View All Printer Deals
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog?category=printers">
                  Setup & Troubleshooting Guides
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

export default Printers;