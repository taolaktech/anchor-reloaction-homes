import { Card } from "@/components/ui/card";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyGallery = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Executive Living Room",
      description: "Spacious, professionally furnished living areas perfect for relaxation and entertaining"
    },
    {
      id: 2,
      image: property2,
      title: "Corporate Bedroom Suite",
      description: "Comfortable bedrooms with hotel-quality linens and business traveler amenities"
    },
    {
      id: 3,
      image: property3,
      title: "Full Kitchen",
      description: "Fully equipped kitchens with modern appliances and complete dining setups"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Properties</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High-quality, professionally staged accommodations designed for the corporate traveler
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{property.title}</h3>
                <p className="text-muted-foreground">{property.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;