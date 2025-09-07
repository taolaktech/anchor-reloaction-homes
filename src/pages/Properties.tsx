import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Properties = () => {
  const properties = [
    {
      id: "executive-suite",
      name: "Executive Suite Downtown",
      image: property1,
      price: "$3,200/month",
      type: "1 Bedroom Suite",
      location: "Downtown Business District",
      description: "Luxury furnished suite in the heart of downtown, perfect for executives and business travelers."
    },
    {
      id: "corporate-apartment",
      name: "Corporate Apartment West",
      image: property2,
      price: "$2,800/month",
      type: "2 Bedroom Apartment",
      location: "Tech Corridor",
      description: "Spacious apartment near major tech companies and innovation hubs."
    },
    {
      id: "medical-housing",
      name: "Medical District Residence",
      image: property3,
      price: "$3,000/month",
      type: "1 Bedroom Residence",
      location: "Medical District",
      description: "Convenient location for medical professionals and visiting patients' families."
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Properties</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Premium corporate housing solutions tailored for business travelers
            </p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{property.name}</h3>
                    <span className="text-lg font-bold text-primary">{property.price}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{property.type}</p>
                  <p className="text-muted-foreground mb-4">{property.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">📍 {property.location}</p>
                  <Link to={`/property/${property.id}`}>
                    <Button className="w-full group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;