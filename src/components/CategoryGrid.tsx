import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  Smartphone, 
  Gamepad2, 
  Headphones, 
  Camera, 
  Watch,
  Home,
  Wifi
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Laptops & Computers",
    icon: Laptop,
    color: "bg-blue-50 hover:bg-blue-100 text-blue-600",
    deal: "Up to 40% off",
    count: "1,200+ items"
  },
  {
    id: 2,
    name: "Smartphones",
    icon: Smartphone,
    color: "bg-purple-50 hover:bg-purple-100 text-purple-600",
    deal: "Best prices",
    count: "800+ items"
  },
  {
    id: 3,
    name: "Gaming",
    icon: Gamepad2,
    color: "bg-red-50 hover:bg-red-100 text-red-600",
    deal: "Gaming week",
    count: "500+ items"
  },
  {
    id: 4,
    name: "Audio & Headphones",
    icon: Headphones,
    color: "bg-green-50 hover:bg-green-100 text-green-600",
    deal: "Premium sound",
    count: "650+ items"
  },
  {
    id: 5,
    name: "Cameras",
    icon: Camera,
    color: "bg-orange-50 hover:bg-orange-100 text-orange-600",
    deal: "New arrivals",
    count: "300+ items"
  },
  {
    id: 6,
    name: "Smartwatches",
    icon: Watch,
    color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-600",
    deal: "Latest models",
    count: "200+ items"
  },
  {
    id: 7,
    name: "Smart Home",
    icon: Home,
    color: "bg-teal-50 hover:bg-teal-100 text-teal-600",
    deal: "Connected living",
    count: "400+ items"
  },
  {
    id: 8,
    name: "Networking",
    icon: Wifi,
    color: "bg-cyan-50 hover:bg-cyan-100 text-cyan-600",
    deal: "Fast internet",
    count: "250+ items"
  }
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive range of tech products organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-card transition-all duration-300 cursor-pointer border-0 bg-card hover:scale-105"
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className={`absolute inset-0 ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${category.color} flex items-center justify-center transition-colors duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.count}
                    </p>
                    
                    <Badge variant="secondary" className="text-xs">
                      {category.deal}
                    </Badge>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Browse Category
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};