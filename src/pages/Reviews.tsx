import { Seo } from "@/components/Seo";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Users, ThumbsUp, Quote, Filter, MapPin, Calendar } from "lucide-react";

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const customerReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Austin, TX",
      rating: 5,
      date: "2024-01-15",
      product: "Norton 360 Deluxe",
      category: "Antivirus",
      review: "Outstanding protection! Norton 360 caught several threats that my previous antivirus missed. The VPN is super fast and the password manager is incredibly convenient. Setup was effortless and it runs quietly in the background. Worth every penny for the peace of mind.",
      verified: true,
      helpful: 42
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Phoenix, AZ",
      rating: 5,
      date: "2024-01-12",
      product: "Canon PIXMA TS8320",
      category: "Printer",
      review: "This printer exceeded my expectations! Photo quality is professional-grade and wireless setup was incredibly easy. The 6-color system produces vibrant, accurate colors. Mobile printing works flawlessly from my iPhone. Best printer I've owned in years.",
      verified: true,
      helpful: 38
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Seattle, WA",
      rating: 5,
      date: "2024-01-10",
      product: "Kaspersky Total Security",
      category: "Antivirus",
      review: "Kaspersky's protection is top-notch. It detected and blocked several phishing attempts that could have compromised my banking information. The interface is clean and doesn't slow down my computer at all. Great value for protecting 10 devices.",
      verified: true,
      helpful: 35
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Denver, CO",
      rating: 4,
      date: "2024-01-08",
      product: "HP DeskJet 3755",
      category: "Printer",
      review: "Perfect for my small home office. The compact size saves valuable desk space and wireless printing works great. Print quality is good for documents and decent for photos. Only minor complaint is the small paper tray, but that's expected for the size.",
      verified: true,
      helpful: 29
    },
    {
      id: 5,
      name: "Lisa Anderson",
      location: "Miami, FL",
      rating: 5,
      date: "2024-01-05",
      product: "McAfee Total Protection",
      category: "Antivirus",
      review: "Excellent family protection! Covers all our devices (laptops, tablets, phones) under one subscription. The identity monitoring feature alerted me to a data breach involving my email. Parental controls work perfectly for keeping kids safe online.",
      verified: true,
      helpful: 41
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "San Francisco, CA",
      rating: 5,
      date: "2024-01-03",
      product: "Windows 11 Pro",
      category: "Software",
      review: "Upgraded from Windows 10 and love the new interface. Much more intuitive and the performance improvements are noticeable. BitLocker encryption gives me confidence for business use. The virtual desktop feature has improved my productivity significantly.",
      verified: true,
      helpful: 33
    },
    {
      id: 7,
      name: "Amanda Foster",
      location: "Chicago, IL",
      rating: 5,
      date: "2024-01-01",
      product: "ASUS AX6000 Router",
      category: "Networking",
      review: "This router completely transformed our home network. WiFi 6 speeds are incredible - streaming 4K on multiple devices simultaneously without any lag. Setup was straightforward and the range covers our entire 3,000 sq ft home perfectly.",
      verified: true,
      helpful: 36
    },
    {
      id: 8,
      name: "James Wilson",
      location: "Houston, TX",
      rating: 4,
      date: "2023-12-28",
      product: "Bitdefender Total Security",
      category: "Antivirus",
      review: "Lightweight and effective antivirus. Barely notice it's running but it provides excellent protection. The web protection has saved me from several suspicious sites. VPN could use more server locations, but overall very satisfied with the security.",
      verified: true,
      helpful: 27
    },
    {
      id: 9,
      name: "Maria Garcia",
      location: "Las Vegas, NV",
      rating: 5,
      date: "2023-12-25",
      product: "Brother MFC-L2750DW",
      category: "Printer",
      review: "Perfect for our small business. Print speed is fantastic and the automatic duplex saves paper and time. Wireless printing from all our devices works flawlessly. The toner lasts much longer than inkjet cartridges - great cost savings.",
      verified: true,
      helpful: 44
    },
    {
      id: 10,
      name: "Kevin Martinez",
      location: "Atlanta, GA",
      rating: 5,
      date: "2023-12-22",
      product: "Office 2021 Professional",
      category: "Software",
      review: "Comprehensive office suite that handles all our business needs. Excel's new features are particularly impressive and PowerPoint presentations look more professional. One-time purchase is great value compared to subscription models.",
      verified: true,
      helpful: 31
    },
    {
      id: 11,
      name: "Rachel Brown",
      location: "Portland, OR",
      rating: 4,
      date: "2023-12-20",
      product: "CCleaner Professional",
      category: "Software",
      review: "Keeps my computer running smoothly. The automatic cleaning features save time and the registry cleaner fixed several issues. Real-time monitoring is helpful. Wish it had more customization options, but overall does exactly what I need.",
      verified: true,
      helpful: 26
    },
    {
      id: 12,
      name: "Christopher Lee",
      location: "Boston, MA",
      rating: 5,
      date: "2023-12-18",
      product: "Norton AntiVirus Plus",
      category: "Antivirus",
      review: "Reliable basic protection at a great price. Catches malware effectively and the firewall provides good network security. Customer support responded quickly when I had activation questions. Perfect for users who want solid protection without extra features.",
      verified: true,
      helpful: 24
    },
    {
      id: 13,
      name: "Nicole Taylor",
      location: "Nashville, TN",
      rating: 5,
      date: "2023-12-15",
      product: "NETGEAR Nighthawk Router",
      category: "Networking",
      review: "Gaming performance is outstanding! No more lag during online gaming sessions. The QoS features prioritize gaming traffic perfectly. Setup was easy with the app and the range is excellent throughout our two-story home.",
      verified: true,
      helpful: 39
    },
    {
      id: 14,
      name: "Daniel Clark",
      location: "San Diego, CA",
      rating: 4,
      date: "2023-12-12",
      product: "Windows 10 Home",
      category: "Software",
      review: "Solid and reliable operating system. Runs all my software without issues and is very stable. The interface is familiar and user-friendly. While Windows 11 is available, Windows 10 still meets all my needs perfectly.",
      verified: true,
      helpful: 22
    },
    {
      id: 15,
      name: "Stephanie White",
      location: "Orlando, FL",
      rating: 5,
      date: "2023-12-10",
      product: "Epson EcoTank Printer",
      category: "Printer",
      review: "The ink tank system is revolutionary! No more expensive cartridges - just refill the tanks. Print quality is excellent and the cost savings are significant for high-volume printing. Wireless setup was simple and works reliably.",
      verified: true,
      helpful: 47
    },
    {
      id: 16,
      name: "Andrew Davis",
      location: "Detroit, MI",
      rating: 5,
      date: "2023-12-08",
      product: "ESET Internet Security",
      category: "Antivirus",
      review: "Professional-grade security that's perfect for tech-savvy users. The advanced settings allow fine-tuning protection levels. Banking protection is excellent and it caught several sophisticated attacks. Light system impact is impressive.",
      verified: true,
      helpful: 28
    },
    {
      id: 17,
      name: "Michelle Johnson",
      location: "Tampa, FL",
      rating: 4,
      date: "2023-12-05",
      product: "Adobe Acrobat Pro",
      category: "Software",
      review: "Essential tool for document management. PDF editing capabilities are comprehensive and the e-signature features streamline business workflows. Integration with cloud services is seamless. Price is high but worth it for professional use.",
      verified: true,
      helpful: 25
    },
    {
      id: 18,
      name: "Thomas Miller",
      location: "Minneapolis, MN",
      rating: 5,
      date: "2023-12-03",
      product: "Trend Micro Maximum Security",
      category: "Antivirus",
      review: "Excellent web protection and social media privacy tools. The ransomware protection gives me confidence when downloading files. Family protection features are comprehensive. Installation was smooth and it doesn't interfere with daily computer use.",
      verified: true,
      helpful: 32
    },
    {
      id: 19,
      name: "Jessica Moore",
      location: "Charlotte, NC",
      rating: 5,
      date: "2023-12-01",
      product: "Canon ImageCLASS Printer",
      category: "Printer",
      review: "Outstanding laser printer for office use. Print speed is impressive and text quality is crisp and professional. Toner cartridges last much longer than expected. Network printing works perfectly with all our computers.",
      verified: true,
      helpful: 34
    },
    {
      id: 20,
      name: "Ryan Adams",
      location: "Salt Lake City, UT",
      rating: 5,
      date: "2023-11-28",
      product: "Malwarebytes Premium",
      category: "Antivirus",
      review: "Exceptional malware detection and removal. Works perfectly alongside my primary antivirus for layered protection. The real-time protection caught threats that other scanners missed. Lightweight and effective - highly recommended.",
      verified: true,
      helpful: 37
    },
    {
      id: 21,
      name: "Lauren Wilson",
      location: "Raleigh, NC",
      rating: 4,
      date: "2023-11-25",
      product: "Logitech Wireless Mouse",
      category: "Accessories",
      review: "Comfortable ergonomic design that reduces hand fatigue during long work sessions. Battery life is excellent and the wireless connection is reliable. Scroll wheel is smooth and precise. Great value for a quality wireless mouse.",
      verified: true,
      helpful: 19
    },
    {
      id: 22,
      name: "Brandon Taylor",
      location: "Kansas City, MO",
      rating: 5,
      date: "2023-11-22",
      product: "F-Secure SAFE",
      category: "Antivirus",
      review: "Clean, simple interface with powerful protection underneath. Family controls are excellent for managing children's online activities. Banking protection works seamlessly. Scandinavian privacy focus gives me confidence in data handling.",
      verified: true,
      helpful: 23
    },
    {
      id: 23,
      name: "Samantha Green",
      location: "Indianapolis, IN",
      rating: 5,
      date: "2023-11-20",
      product: "Wireless Charging Pad",
      category: "Accessories",
      review: "Convenient wireless charging for my phone and earbuds. The LED indicator is helpful but not too bright at night. Charges through most phone cases without issue. Great addition to my desk setup - no more cable clutter.",
      verified: true,
      helpful: 21
    },
    {
      id: 24,
      name: "Gregory Harris",
      location: "Columbus, OH",
      rating: 4,
      date: "2023-11-18",
      product: "External Hard Drive 2TB",
      category: "Accessories",
      review: "Reliable storage for backups and file archiving. USB 3.0 transfer speeds are good for large files. Compact design doesn't take up much desk space. Comes with useful backup software. Great value for the storage capacity.",
      verified: true,
      helpful: 18
    }
  ];

  const categories = Array.from(new Set(customerReviews.map(review => review.category)));
  
  const filteredReviews = customerReviews.filter(review => {
    const matchesRating = selectedRating === null || review.rating === selectedRating;
    const matchesCategory = selectedCategory === null || review.category === selectedCategory;
    return matchesRating && matchesCategory;
  });

  const averageRating = customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length;
  const totalReviews = customerReviews.length;
  
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: customerReviews.filter(r => r.rating === rating).length,
    percentage: (customerReviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Software & Hardware Reviews | Keys & Clicks"} description={"Independent, hands-on reviews of antivirus suites, accounting software, printers and networking gear."} path="/reviews" />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Customer Reviews</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Reviews from Real Customers
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Read authentic reviews from thousands of satisfied customers across the United States. 
              See why people trust our recommendations for their tech needs.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'fill-deal text-deal' : 'text-muted-foreground/40'}`} 
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalReviews.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Reviews</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Rating Breakdown */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Rating Breakdown</h3>
                <div className="space-y-2">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 w-20">
                        <span className="text-sm font-medium">{rating}</span>
                        <Star className="h-4 w-4 fill-deal text-deal" />
                      </div>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">94%</div>
                    <div className="text-sm text-muted-foreground">5-Star Reviews</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">2.5M+</div>
                    <div className="text-sm text-muted-foreground">Products Sold</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">99%</div>
                    <div className="text-sm text-muted-foreground">Verified Purchases</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filter Reviews:</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Rating Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedRating === null ? "default" : "outline"}
                onClick={() => setSelectedRating(null)}
                size="sm"
              >
                All Ratings
              </Button>
              {[5, 4, 3, 2, 1].map(rating => (
                <Button
                  key={rating}
                  variant={selectedRating === rating ? "default" : "outline"}
                  onClick={() => setSelectedRating(rating)}
                  size="sm"
                  className="flex items-center gap-1"
                >
                  {rating} <Star className="h-3 w-3 fill-current" />
                </Button>
              ))}
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                size="sm"
              >
                All Categories
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredReviews.length} of {totalReviews} reviews
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{review.name}</h4>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs bg-primary/10 text-green-700 border-green-200">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3" />
                        <span>{review.location}</span>
                        <Calendar className="h-3 w-3 ml-2" />
                        <span>{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'fill-deal text-deal' : 'text-muted-foreground/40'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {review.product}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {review.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="relative">
                    <Quote className="h-4 w-4 text-muted-foreground/50 absolute -top-1 -left-1" />
                    <p className="text-sm leading-relaxed pl-3 mb-4">
                      {review.review}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-muted-foreground hover:text-primary"
                    >
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Join Thousands of Satisfied Customers
            </h2>
            <p className="text-muted-foreground mb-8">
              Experience the same great products and service that our customers love. 
              Get genuine software, instant delivery, and expert support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/hot-deals">
                  Shop Best Deals
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;