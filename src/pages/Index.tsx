import Hero from "@/components/Hero";
import PropertyGallery from "@/components/PropertyGallery";
import Amenities from "@/components/Amenities";
import LocationBenefits from "@/components/LocationBenefits";
import LeaseTerms from "@/components/LeaseTerms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertyGallery />
      <Amenities />
      <LocationBenefits />
      <LeaseTerms />
      <Footer />
    </div>
  );
};

export default Index;
