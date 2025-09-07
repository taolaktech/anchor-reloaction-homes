import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import property1 from "@/assets/property-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${property1})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Corporate Housing
            <span className="block text-accent">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Premium furnished accommodations for business travelers and corporate relocations. 
            Flexible lease terms from 30-180 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              View Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:info@anchorrelocation.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Branding */}
      <div className="absolute bottom-8 left-8 text-white/80">
        <h2 className="text-2xl font-bold">Anchor Relocation Homes</h2>
        <p className="text-sm">Your trusted corporate housing partner</p>
      </div>
    </section>
  );
};

export default Hero;