import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, MessageCircle, MapPin, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-hero-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We're Here to 
                <span className="block text-transparent bg-gradient-to-r from-primary-glow to-primary bg-clip-text">
                  Help You
                </span>
              </h1>
              <p className="text-xl text-hero-foreground/90 max-w-3xl mx-auto">
                Have questions about our products or need technical support? Our expert team is ready to assist you 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-3">Get help via email</p>
                  <p className="text-primary font-medium">support@keysandclicks.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-deal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-deal" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                  <p className="text-muted-foreground text-sm mb-3">Call us directly</p>
                  <p className="text-deal font-medium">540 242 3003</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-3">Instant assistance</p>
                  <p className="text-green-600 font-medium">Available 24/7</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                  <p className="text-muted-foreground text-sm mb-3">Quick replies</p>
                  <p className="text-purple-600 font-medium">Within 2 hours</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="What's this about?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us how we can help you..."
                        rows={6}
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Our Office</h4>
                          <p className="text-muted-foreground">
                            #04 S jones<br />
                            Las Vegas, NV 89107
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-deal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-deal" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Phone Numbers</h4>
                          <p className="text-muted-foreground">
                            Support: 540 242 3003<br />
                            Sales: 540 242 3004<br />
                            Fax: 540 242 3005
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Email Addresses</h4>
                          <p className="text-muted-foreground">
                            General: info@keysandclicks.com<br />
                            Support: support@keysandclicks.com<br />
                            Sales: sales@keysandclicks.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Business Hours</h4>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                            Saturday: 10:00 AM - 4:00 PM PST<br />
                            Sunday: Emergency support only
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-primary text-primary-foreground border-0">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Our technical support team is available 24/7 to help you with any urgent issues.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 font-semibold"
                    >
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};