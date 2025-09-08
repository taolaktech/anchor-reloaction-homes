import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Anchor Relocation Homes</h3>
            <p className="text-background/80 mb-4">
              Your trusted partner for corporate housing solutions. Professional, comfortable, and convenient accommodations for business travelers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>(512) 676-9497</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@anchorelocation.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Serving major metropolitan areas</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Corporate Housing</li>
              <li>Extended Stay Solutions</li>
              {/* <li>Relocation Services</li> */}
              <li>Direct Corporate Billing</li>
              <li>Flexible Lease Terms</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Taolak LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;