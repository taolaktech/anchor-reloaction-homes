import { Card } from "@/components/ui/card";
import { Wifi, Home, Zap, PawPrint, Car, Utensils, Tv, Shield } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Home,
      title: "Fully Furnished",
      description: "Move-in ready with premium furniture and decor"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Reliable internet for remote work and video calls"
    },
    {
      icon: Zap,
      title: "Utilities Included",
      description: "Electricity, water, heating, and cooling covered"
    },
    {
      icon: PawPrint,
      title: "Pet-Friendly Options",
      description: "Select properties welcome your furry companions"
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Secure parking spaces at most locations"
    },
    {
      icon: Utensils,
      title: "Full Kitchen",
      description: "Complete with appliances, cookware, and dining sets"
    },
    {
      icon: Tv,
      title: "Entertainment",
      description: "Smart TVs and streaming services included"
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Dedicated support team for any concerns"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Amenities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable stay, from day one
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <amenity.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;