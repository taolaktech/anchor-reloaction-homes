import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Wifi, Car, Utensils, Shield, MapPin, Building2, Stethoscope, Calendar, CreditCard, CheckCircle } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const nextImage = () => {
    if (property) {
      setSelectedImage((prev) => (prev + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property) {
      setSelectedImage((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  const properties = {
    "executive-suite": {
      name: "Executive Suite Downtown",
      images: [property1, property2, property3],
      price: "$3,200/month",
      type: "1 Bedroom Suite",
      location: "Downtown Business District",
      description: "Luxury furnished suite in the heart of downtown, perfect for executives and business travelers. This premium accommodation features high-end furnishings, a fully equipped kitchen, and stunning city views.",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Enterprise-grade internet connection" },
        { icon: Utensils, name: "Fully Furnished", description: "Complete furniture and kitchen setup" },
        { icon: Shield, name: "Utilities Included", description: "All utilities and cleaning service" },
        { icon: Car, name: "Pet-Friendly", description: "Pets welcome with deposit" }
      ],
      locationBenefits: [
        { icon: Building2, title: "Downtown Core", distance: "Walking distance", description: "Major corporate offices and business centers" },
        { icon: Stethoscope, title: "Medical Center", distance: "8 minutes", description: "City General Hospital and medical facilities" },
        { icon: MapPin, title: "Airport", distance: "25 minutes", description: "Direct highway access to international airport" }
      ]
    },
    "corporate-apartment": {
      name: "Corporate Apartment West",
      images: [property2, property1, property3],
      price: "$2,800/month",
      type: "2 Bedroom Apartment",
      location: "Tech Corridor",
      description: "Spacious apartment near major tech companies and innovation hubs. Perfect for longer stays with separate work areas and comfortable living spaces.",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Fiber optic internet connection" },
        { icon: Utensils, name: "Fully Furnished", description: "Modern furniture and appliances" },
        { icon: Shield, name: "Utilities Included", description: "All utilities and weekly cleaning" },
        { icon: Car, name: "Pet-Friendly", description: "Pet-friendly with nearby parks" }
      ],
      locationBenefits: [
        { icon: Building2, title: "Tech Companies", distance: "5 minutes", description: "Major technology and innovation centers" },
        { icon: Stethoscope, title: "Regional Hospital", distance: "12 minutes", description: "Comprehensive medical facilities" },
        { icon: MapPin, title: "Transit Hub", distance: "10 minutes", description: "Light rail and bus connections" }
      ]
    },
    "medical-housing": {
      name: "Medical District Residence",
      images: [property3, property1, property2],
      price: "$3,000/month",
      type: "1 Bedroom Residence",
      location: "Medical District",
      description: "Convenient location for medical professionals and visiting patients' families. Quiet environment with easy access to major medical facilities.",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Reliable internet for telemedicine" },
        { icon: Utensils, name: "Fully Furnished", description: "Comfortable and practical furnishings" },
        { icon: Shield, name: "Utilities Included", description: "All utilities and bi-weekly cleaning" },
        { icon: Car, name: "Pet-Friendly", description: "Pet-friendly with veterinary nearby" }
      ],
      locationBenefits: [
        { icon: Stethoscope, title: "Medical District", distance: "2 minutes", description: "Leading hospitals and medical centers" },
        { icon: Building2, title: "Research Centers", distance: "5 minutes", description: "Medical research and biotech facilities" },
        { icon: MapPin, title: "Medical Transit", distance: "3 minutes", description: "Dedicated medical shuttle service" }
      ]
    }
  };

  const property = properties[id as keyof typeof properties];

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.name}</h1>
              <p className="text-xl text-white/90">{property.location}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-2xl font-bold">{property.price}</div>
              <Badge className="bg-white/20 text-white mt-1">Move-In Ready</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative group">
                <div 
                  className="aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setIsImageEnlarged(true)}
                >
                  <img 
                    src={property.images[selectedImage]} 
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      disabled={selectedImage === 0}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      disabled={selectedImage === property.images.length - 1}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {property.images.length}
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col gap-2">
              {property.images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${property.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">About This Property</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Key Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <Card key={index} className="p-4 hover:shadow-card transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                            <amenity.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{amenity.name}</h3>
                          <p className="text-sm text-muted-foreground">{amenity.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Location Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Location Benefits</h2>
                <div className="space-y-4">
                  {property.locationBenefits.map((benefit, index) => (
                    <Card key={index} className="p-6 hover:shadow-card transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                            <benefit.icon className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{benefit.title}</h3>
                            <Badge variant="secondary">{benefit.distance}</Badge>
                          </div>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div>
              <Card className="p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Flexible Lease Terms</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>30 - 180 days available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span>Direct billing available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Move-in ready</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Check Availability
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => setShowContactModal(true)}
                  >
                    Request Quote
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Contact for Direct Billing
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Insurance companies welcome!</strong> We handle direct billing and provide all necessary documentation for corporate housing reimbursement.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Enlarged Modal */}
      {isImageEnlarged && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageEnlarged(false)}
        >
          <div className="relative max-w-6xl max-h-full group">
            <img 
              src={property.images[selectedImage]} 
              alt={property.name}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Modal Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-opacity duration-300"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-opacity duration-300"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-white/80 bg-black/50 hover:bg-black/70 rounded-full p-2"
              onClick={() => setIsImageEnlarged(false)}
            >
              ✕
            </button>
            
            {/* Image Counter for Modal */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {property.images.length}
            </div>
          </div>
        </div>
      )}
      
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </div>
  );
};

export default PropertyDetail;