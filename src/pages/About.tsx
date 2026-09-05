import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Heart, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const About = () => {
  return (
    <div className="min-h-screen">
      <Seo title={"About Keys & Clicks — Genuine Keys, Free Setup Help"} description={"We hand-pick digital software and tech from trusted retailers and help you install and activate it, free of charge."} path="/about" breadcrumbs={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-hero-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
                About Keys & Clicks
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Trusted Partner in 
                <span className="block text-transparent bg-gradient-to-r from-primary-glow to-primary bg-clip-text">
                  Digital Security
                </span>
              </h1>
              <p className="text-xl text-hero-foreground/90 max-w-3xl mx-auto">
                We've been helping customers find the best digital security solutions, software, and tech products since 2020. Your digital safety is our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Founded in 2020, Keys & Clicks started with a simple mission: to make digital security and software selection accessible and informed for everyone. We understand how overwhelming it can be to choose the right software to protect your devices and enhance your productivity in today's digital world.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                Our mission is to simplify this process by providing comprehensive guides, in-depth reviews, and side-by-side comparisons of popular digital products. Whether you need robust antivirus protection like McAfee or Norton, a new operating system like Windows 11, or utility tools like CCleaner, we've done the research so you can make informed decisions and get the best value.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Today, we're proud to serve customers worldwide through our Amazon affiliate partnerships, offering carefully curated selections of antivirus software, office applications, computer hardware, printers, and networking equipment from trusted brands we genuinely recommend.
              </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100K+</div>
                    <div className="text-sm text-muted-foreground">Products Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Curated Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Trusted Products</h3>
                    <p className="text-sm text-muted-foreground">Amazon verified digital products</p>
                  </CardContent>
                </Card>
                <Card className="bg-deal/10 border-deal/20">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-deal mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Best Prices</h3>
                    <p className="text-sm text-muted-foreground">Up to 75% off retail prices</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground">Product recommendations & support</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Customer Focus</h3>
                    <p className="text-sm text-muted-foreground">Your satisfaction is our priority</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Keys & Clicks
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">Authentic Products</h3>
                  <p className="text-muted-foreground">
                    We partner with Amazon to bring you only genuine, licensed software and hardware from official vendors. Every product is verified and authentic.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">Digital Security</h3>
                  <p className="text-muted-foreground">
                    Your digital safety is our mission. We curate the best antivirus, security software, and protective solutions to keep you safe online.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <Star className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">Customer Success</h3>
                  <p className="text-muted-foreground">
                    We measure our success by your satisfaction. Our expert recommendations and support help you make the best purchasing decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital World?</h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust Keys & Clicks for their digital security needs.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="bg-background text-primary hover:bg-background/90 font-semibold px-8"
                >
                  <Link to="/#analyzer">Open the compatibility analyzer</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};