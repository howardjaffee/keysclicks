import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ShoppingCart, TrendingUp, Users, Package } from "lucide-react";

export const DealsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-deal/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Deal of the Day - Large Card */}
          <Card className="lg:col-span-2 lg:row-span-2 bg-gradient-deal text-deal-foreground border-0 overflow-hidden relative">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <Badge className="bg-white/20 text-deal-foreground border-0 mb-4">
                  🔥 Deal of the Day
                </Badge>
                <h3 className="text-3xl font-bold mb-4">
                  Save Up to 70% OFF
                </h3>
                <p className="text-deal-foreground/90 mb-6 text-lg">
                  Limited time offer on premium electronics. Don't miss out on these incredible savings!
                </p>
                
                {/* Countdown */}
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="h-5 w-5" />
                  <div className="flex gap-2">
                    <div className="bg-white/20 px-3 py-1 rounded text-sm font-mono">12h</div>
                    <div className="bg-white/20 px-3 py-1 rounded text-sm font-mono">34m</div>
                    <div className="bg-white/20 px-3 py-1 rounded text-sm font-mono">56s</div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-white text-deal hover:bg-white/90 font-semibold px-8"
                >
                  Shop Deals Now
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Top Selling Products */}
          <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Top Selling</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Most popular products this week
              </p>
              <div className="text-2xl font-bold text-primary mb-2">1,200+</div>
              <p className="text-xs text-muted-foreground mb-4">Products sold</p>
              <Button variant="outline" size="sm" className="w-full">
                Shop Now
              </Button>
            </CardContent>
          </Card>
          
          {/* Bulk Orders */}
          <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Bulk Orders</h3>
              <p className="text-purple-700 text-sm mb-4">
                Special pricing for business customers
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-2">Save 15%</div>
              <p className="text-xs text-purple-600 mb-4">On orders over $500</p>
              <Button variant="outline" size="sm" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          {/* Flash Sale */}
          <Card className="lg:col-span-2 border-0 bg-gradient-to-r from-pink-50 to-red-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="bg-red-100 text-red-600 border-0 mb-2">
                    ⚡ Flash Sale
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 text-red-900">
                    Limited Time Offers
                  </h3>
                  <p className="text-red-700 mb-4">
                    Grab these deals before they're gone!
                  </p>
                  <Button 
                    className="bg-destructive/100 hover:bg-red-600 text-white"
                    size="lg"
                  >
                    Shop Flash Sales
                  </Button>
                </div>
                <div className="text-right">
                  <div className="w-20 h-20 bg-red-200 rounded-2xl flex items-center justify-center">
                    <Clock className="h-10 w-10 text-red-600" />
                  </div>
                  <div className="mt-3 text-sm text-red-600 font-medium">
                    Ends in 2 hours
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Customer Reviews */}
          <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-100">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-900">Happy Customers</h3>
              <p className="text-green-700 text-sm mb-4">
                Join thousands of satisfied customers
              </p>
              <div className="text-2xl font-bold text-primary mb-2">50K+</div>
              <p className="text-xs text-primary mb-4">5-star reviews</p>
              <Button variant="outline" size="sm" className="w-full border-green-300 text-primary hover:bg-primary/10">
                Read Reviews
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};