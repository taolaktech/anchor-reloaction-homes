import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property3 from "@/assets/property-3.jpg";
import { useForm } from "@formspree/react";
import { useRef } from "react";

const Properties = () => {
  const [state, handleSubmit] = useForm("xvgbkped"); // from Formspree dashboard
    const formRef = useRef<HTMLFormElement | null>(null);
    const navigate = useNavigate();
    
    const onSubmit = async (e, id: string) => {    
      e.preventDefault();
      try {
        await handleSubmit(e);
        if (state.succeeded) {
            formRef.current.reset();
        }
      } catch (error) {
        console.log(error);
      }
      
      navigate(`/property/${id}`);
    };
  const properties = [
    {
      id: "executive-suite",
      name: "Executive Home in South Austin",
      image: property1,
      price: "2,781 sqft",
      type: "4 Bedroom, 3 Bathroom",
      location: "Onion Creek, Austin, TX 78747",
      description: "Beautifully maintained home offering the perfect balance of comfort, style, and convenience"
    },
    {
      id: "corporate-apartment",
      name: "Charming Central Austin Condo",
      image: "https://anchorelocation.s3.us-east-1.amazonaws.com/reinli/1-web-or-mls-909_Reinli_116_01.JPG",
      price: "915 sqft",
      type: "2 Bedroom, 2 Bathroom",
      location: "North Loop, Austin, TX 78751",
      description: "Look no further than this 2BR condo if you are wanting a convenient centrally located stay in Austin."
    },
    {
      id: "medical-housing",
      name: "Downtown Dallas Suite",
      image: "https://anchorelocation.s3.us-east-1.amazonaws.com/peters/1717190672542_IMG-1776.jpg",
      price: "975 sqft",
      type: "1 Bedroom, 1 Bathroom (sleeps 2-4)",
      location: "Medical District",
      description: "Convenient location for medical professionals and traveling executives' families."
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back Home
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Properties</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Premium corporate housing solutions tailored for business travelers
            </p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{property.name}</h3>
                    <span className="text-sm font-bold text-primary">{property.price}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{property.type}</p>
                  <p className="text-muted-foreground mb-4">{property.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">📍 {property.location}</p>
                  <form ref={formRef} onSubmit={(e) => onSubmit(e, property.id)} method="POST">
                    <input type="hidden" name="name" value={`Viewed Details for ${property.name}`} onChange={(e) => console.log("view details clicked")} />
                      <Button disabled={state.submitting} type="submit" className="w-full group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                  </form>
                  {/* <Link to={}>
                    <Button >
                      
                    </Button>
                  </Link> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;