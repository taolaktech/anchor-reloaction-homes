import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Contact Anchor Relocation Homes</DialogTitle>
          <DialogDescription className="text-center">
            Get in touch with us for your quote and booking needs
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
            <div className="p-2 bg-primary/10 rounded-full">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <a 
                href="tel:+1-555-ANCHOR" 
                className="text-primary hover:underline"
              >
                +1 (555) ANCHOR-1
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
            <div className="p-2 bg-primary/10 rounded-full">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <a 
                href="mailto:info@anchorrelocation.com" 
                className="text-primary hover:underline"
              >
                info@anchorrelocation.com
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>We typically respond within 2-4 hours during business hours</p>
            <p className="mt-1">Monday - Friday: 8AM - 6PM EST</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;