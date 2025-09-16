import { Badge } from "@/components/ui/badge";
import kasperskyLogo from "@/assets/brands/kaspersky.png";
import mcafeeLogo from "@/assets/brands/mcafee.png";
import nortonLogo from "@/assets/brands/norton.png";
import avastLogo from "@/assets/brands/avast.png";
import ccleanerLogo from "@/assets/brands/ccleaner.jpg";
import esetLogo from "@/assets/brands/eset.png";

const brands = [
  { id: 1, name: "Kaspersky", logo: kasperskyLogo },
  { id: 2, name: "McAfee", logo: mcafeeLogo },
  { id: 3, name: "Norton", logo: nortonLogo },
  { id: 4, name: "AVAST", logo: avastLogo },
  { id: 5, name: "CCleaner", logo: ccleanerLogo },
  { id: 6, name: "ESET", logo: esetLogo },
];

export const BrandsCarousel = () => {
  return (
    <section className="py-8 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
            Trusted Brands
          </Badge>
        </div>
        
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto pb-4">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="flex-shrink-0 group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm group-hover:shadow-md transition-shadow border border-gray-100">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-12 w-auto object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};