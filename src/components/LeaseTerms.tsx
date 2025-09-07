import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, FileText, CheckCircle } from "lucide-react";
import ContactModal from "./ContactModal";

const LeaseTerms = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const features = [
    {
      icon: Calendar,
      title: "Flexible Duration",
      description: "30 to 180 days",
      detail: "No long-term commitment required"
    },
    {
      icon: CreditCard,
      title: "Direct Billing",
      description: "Corporate invoicing available",
      detail: "Seamless expense management for your company"
    },
    {
      icon: FileText,
      title: "Simple Process",
      description: "Quick application and approval",
      detail: "Move in within 48 hours of approval"
    },
    {
      icon: CheckCircle,
      title: "No Hidden Fees",
      description: "Transparent pricing",
      detail: "All costs clearly outlined upfront"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Flexible Lease Terms</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Designed for the modern corporate traveler with flexible timing and simple billing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary font-medium mb-2">{feature.description}</p>
              <p className="text-sm text-muted-foreground">{feature.detail}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h3>
          <p className="text-xl mb-8 text-white/90">
            Contact us today for availability and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Check Availability
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => setShowContactModal(true)}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </section>
  );
};

export default LeaseTerms;