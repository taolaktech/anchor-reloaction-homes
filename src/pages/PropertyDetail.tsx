import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dog, Baby, Waves, Ham, Maximize2,Blinds, ArrowLeft, ChevronLeft, ChevronRight, Wifi, Car, Utensils, Shield, MapPin, Building2, Stethoscope, Calendar, CreditCard, CheckCircle, Hospital, Plane, University, PartyPopper, Building, LampDesk, ShipWheel, Weight } from "lucide-react";
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

  const coolGrayImages = [
    "https://anchorelocation.s3.us-east-1.amazonaws.com/02-20241213_4504_Cool_Gray_101.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/47-20241213_4504_Cool_Gray_302-min.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/48-20241213_4504_Cool_Gray_303-min.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/17-20241213_4504_Cool_Gray_209.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/18-20241213_4504_Cool_Gray_210.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/20-20241213_4504_Cool_Gray_212.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/21-20241213_4504_Cool_Gray_213.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/24-20241213_4504_Cool_Gray_216.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/25-20241213_4504_Cool_Gray_217.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/26-20241213_4504_Cool_Gray_218.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/29-20241213_4504_Cool_Gray_221.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/30-20241213_4504_Cool_Gray_222.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/34-20241213_4504_Cool_Gray_226.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/35-20241213_4504_Cool_Gray_227.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/38-20241213_4504_Cool_Gray_230.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/43-20241213_4504_Cool_Gray_235.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/008_20230811_4504_cool_gray_08.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/009_20230811_4504_cool_gray_09.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/12-20241213_4504_Cool_Gray_204.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/019_20230811_4504_cool_gray_19.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/020_20230811_4504_cool_gray_20.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/022_20230811_4504_cool_gray_22.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/08-20241213_4504_Cool_Gray_107-min.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/09-20241213_4504_Cool_Gray_201.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/11-20241213_4504_Cool_Gray_203.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/12-20241213_4504_Cool_Gray_204.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/13-20241213_4504_Cool_Gray_205.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/14-20241213_4504_Cool_Gray_206.jpg",
  ];
  
  const reinliCondoImages = [
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/1-web-or-mls-909_Reinli_116_01.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/2-web-or-mls-909_Reinli_116_02.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/3-web-or-mls-909_Reinli_116_03.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/4-web-or-mls-909_Reinli_116_04.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/5-web-or-mls-909_Reinli_116_05.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/6-web-or-mls-909_Reinli_116_06.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/7-web-or-mls-909_Reinli_116_07.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/8-web-or-mls-909_Reinli_116_08.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/9-web-or-mls-909_Reinli_116_09.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/10-web-or-mls-909_Reinli_116_10.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/11-web-or-mls-909_Reinli_116_11.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/12-web-or-mls-909_Reinli_116_12.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/13-web-or-mls-909_Reinli_116_13.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/14-web-or-mls-909_Reinli_116_14.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/15-web-or-mls-909_Reinli_116_15.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/16-web-or-mls-909_Reinli_116_16.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/17-web-or-mls-909_Reinli_116_17.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/18-web-or-mls-909_Reinli_116_18.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/19-web-or-mls-909_Reinli_116_19.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/20-web-or-mls-909_Reinli_116_20.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/web_909_Reinli_116_33.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/web_909_Reinli_116_36.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/web_909_Reinli_116_34.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/21-web-or-mls-909_Reinli_116_21.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/22-web-or-mls-909_Reinli_116_22.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/23-web-or-mls-909_Reinli_116_23.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/24-web-or-mls-909_Reinli_116_24.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/25-web-or-mls-909_Reinli_116_25.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/26-web-or-mls-909_Reinli_116_26.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/27-web-or-mls-909_Reinli_116_27.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/28-web-or-mls-909_Reinli_116_28.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/29-web-or-mls-909_Reinli_116_29.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/30-web-or-mls-909_Reinli_116_30.JPG",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/31-web-or-mls-909_Reinli_116_31.JPG"
  ];

  const petersDallasSuiteImages = [
    "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1717190672542_IMG-1776.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1717190672862_IMG-1754.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1715025100175_IMG_0654.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1725651826072_D-Lobby(3).jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1725651826697_D-lobby.jpg",
    "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1725651828906_Gym.jpg",
  ];

  const properties = {
    "executive-suite": {
      name: "Executive Home in South Austin",
      images: coolGrayImages,
      price: "2,781 sqft",
      type: "4 Bedroom, 3 Bathroom",
      location: "Onion Creek, Austin, TX 78747",
      availability: "Move-In Ready",
      description: "Our beautifully maintained home offering the perfect balance of comfort, style, and convenience in South Austin. This thoughtfully furnished property is designed for mid-term stays, making it ideal for relocating families, traveling professionals, or insurance clients in need of temporary housing. Featuring spacious living areas, modern finishes, and abundant natural light, the home provides a true “home-away-from-home” experience. The open-concept kitchen and dining area are fully equipped for everyday living, while the comfortable bedrooms ensure restful nights.",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Enterprise-grade internet connection" },
        { icon: Utensils, name: "Fully Furnished", description: "Complete furniture and kitchen setup" },
        { icon: Shield, name: "Utilities Included", description: "All utilities and cleaning service" },
        { icon: Dog, name: "Pet-Friendly", description: "Upon request and pet fence included" },
        { icon: Blinds, name: "Automatic Window Blinds", description: "Living room & Office blinds go up and down" },
        { icon: Maximize2, name: "High Ceilings", description: "Come enjoy 10 - 20 foot ceilings" },
        { icon: Ham, name: "Backyard Grill", description: "Full functional grill in the backyard" },
        { icon: Waves, name: "Swimming Pool", description: "You will gain access to the beautiful community pool" },
        { icon: Baby, name: "Baby Friendly", description: "Baby crib included with toddler beddings" },
        { icon: Car, name: "Onsite Parking", description: "You can park up to 6 cars" },
      ],
      locationBenefits: [
        { icon: Stethoscope, title: "Austin Supercenter", distance: "8 minutes", description: "Comprehensive medical services and emergency care" },
        { icon: MapPin, title: "Southpark Meadows", distance: "8 minutes", description: "Shopping and entertainment district with highway access" },
        { icon: Hospital, title: "St. David's South Austin Medical Center", distance: "15 minutes", description: "Full-service hospital with specialized medical care" },
        { icon: Building2, title: "Downtown Core", distance: "18 mins", description: "Major corporate offices and business centers" },
        { icon: Plane, title: "Airport", distance: "18 minutes", description: "Direct highway access to international airport" }
      ]
    },
    "corporate-apartment": {
      name: "Charming Central Austin Condo",
      images: reinliCondoImages,
      price: "915 sqft",
      type: "2 Bedroom, 2 Bathroom",
      availability: "November 1, 2025",
      location: "North Loop, Austin, TX 78751",
      description: "Look no further than this 2BR condo if you are wanting a convenient stay in Austin, centrally located and close to the Downtown action. This condo features a cozy living area with an entertaining living room and modern dining area connected to the fully equipped kitchen. Two highly comfortable bedrooms and two full bathrooms are designed for a perfect stay.",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Fiber optic internet connection" },
        { icon: Utensils, name: "Fully Furnished", description: "Modern furniture and appliances" },
        { icon: Shield, name: "Utilities Included", description: "All utilities and weekly cleaning" },
        { icon: Waves, name: "Swimming Pool", description: "Swimming pool with tubes on site" },
        { icon: Ham, name: "Grill", description: "Full functional grill next to the pool" },
        { icon: Dog, name: "Pet-Friendly", description: "Pet-friendly with nearby parks" },
        { icon: LampDesk, name: "Dedicated Workspace", description: "Work from hom friendly" },
        { icon: Car, name: "Onsite Parking", description: "You can park up to 3 cars" },
      ],
      locationBenefits: [
        { icon: University, title: "The University of Texas at Austin (UT)", distance: "6 minutes", description: "Best for students and researchers" },
        { icon: Hospital, title: "St. David's North Austin Medical Center", distance: "7 minutes", description: "Best for travel nurses" },
        { icon: Hospital, title: "Ascension Seton Medical Center Austin", distance: "9 minutes", description: "Medical research and biotech facilities" },
        { icon: PartyPopper, title: "Downtown Core", distance: "4 minutes", description: "Close to downtown restaurants and bars" },
        { icon: Building, title: "Google & Meta Office", distance: "10 minutes", description: "Best for tech workers relocating to the area" },
        { icon: Building2, title: "Zilker Park", distance: "15 minutes", description: "Close parks and green spaces used for ACL and SXSW" },
        { icon: Plane, title: "Airport", distance: "15 minutes", description: "Direct highway access to international airport" }
      ]
    },
    "medical-housing": {
      name: "Downtown Dallas Suite",
      images: [...petersDallasSuiteImages, "https://anchorelocation.s3.us-east-1.amazonaws.com/Screenshot+2025-09-07+at+5.58.29%E2%80%AFPM.png"],
      price: "975 sqft",
      type: "1 Bedroom, 1 Bathroom",
      availability: "Move-In Ready",
      location: "Deep Ellum district, Dallas, TX 75215",
      description: "Located at the Destinations community in Dallas, this modern 1-bedroom, 1-bathroom unit features an open-concept layout with wide plank engineered hardwood floors, large Pella windows, and central heating and cooling. The galley-style kitchen includes white quartz countertops, a tile backsplash, Nolte cabinets, and high-end Samsung and Kohler stainless steel appliances, plus an in-unit washer and dryer. The bedroom offers a large reach-in closet, and the bathroom has ceramic tile flooring and chic fixtures. Residents enjoy access to community amenities such as an outdoor sky lounge, grand lobby, elevator, EV charging stations, and a private parking garage. Flexible lease terms and furnished units are available. Ideally situated near Deep Ellum's dining, shopping, and parks.",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Reliable internet for telemedicine" },
        { icon: Utensils, name: "Fully Furnished", description: "Comfortable and practical furnishings" },
        { icon: Shield, name: "Utilities Included", description: "All utilities and bi-weekly cleaning" },
        { icon: Car, name: "Onsite Parking", description: "You have free parking on site" },
        { icon: Dog, name: "Pet-Friendly", description: "Pet-friendly with veterinary nearby" },
        { icon: LampDesk, name: "Dedicated Workspace", description: "Work from hom friendly" },
        { icon: ShipWheel, name: "Peloton Bike", description: "Enjoy the indoor workout with a Peloton bike facing the downtown view" },
        { icon: Building, name: "Downtown View", description: "Enjoy the downtomn view from your patio" },
        { icon: Weight, name: "Gym", description: "Enjoy on-site gym with state-of-the-art equipment" },
      ],
      locationBenefits: [
        { icon: Building2, title: "Downtown Core", distance: "15 minutes walk", description: "Close to downtown restaurants and bars" },
        { icon: PartyPopper, title: "Cotton Bowl Stadium", distance: "5 minutes", description: "Direct highway access to international airport" },
        { icon: Hospital, title: "UT Southwest Medical Center", distance: "9 minutes", description: "Best for travel nurses & medical professionals" },
        { icon: Hospital, title: "Baylor University Medical Center", distance: "9 minutes", description: "Medical research and biotech facilities" },
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
              <Badge className="bg-white/20 text-white mt-1">{property.availability}</Badge>
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
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 overflow-x-auto">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-24 h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
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
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold">About This Property</h2>
                <h6 className="text-md font-bold mb-2 mb-4">{property.type}</h6>
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
                  {/* <Button className="w-full" size="lg">
                    Check Availability
                  </Button> */}
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => setShowContactModal(true)}
                  >
                    Request Pricing
                  </Button>
                  {/* <Button variant="ghost" className="w-full">
                    Contact for Direct Billing
                  </Button> */}
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