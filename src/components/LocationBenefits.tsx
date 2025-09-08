import { Card } from "@/components/ui/card";
import { MapPin, Building2, Stethoscope, UtensilsCrossed } from "lucide-react";

const LocationBenefits = () => {
  const locations = [
    {
      icon: Stethoscope,
      title: "Near Major Hospitals",
      description: "5-15 minutes from leading medical centers",
      details: "Perfect for traveling medical professionals and patients' families"
    },
    {
      icon: Building2,
      title: "Downtown Access",
      description: "Quick commute to business districts",
      details: "Central locations with easy access to corporate offices and meeting venues"
    },
    {
      icon: UtensilsCrossed,
      title: "Dining & Shopping Access",
      description: "Close to major restaurants and stores",
      details: "Conveniently located near top dining spots, retail centers, and everyday essentials"
    },
    {
      icon: MapPin,
      title: "Transportation Hubs",
      description: "Near airports and transit",
      details: "Convenient access to public transportation and major travel routes"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our properties are positioned for your professional success and convenience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="p-8 hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <location.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{location.title}</h3>
                  <p className="text-primary font-medium mb-3">{location.description}</p>
                  <p className="text-muted-foreground">{location.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;