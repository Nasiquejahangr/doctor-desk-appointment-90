import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBookAppointment = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login as a patient to book an appointment",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (user.role !== "patient") {
      toast({
        title: "Invalid Access",
        description: "Only patients can book appointments",
        variant: "destructive",
      });
      return;
    }

    navigate("/doctors");
  };

  return (
    <section className="bg-prescripto-blue text-white overflow-hidden relative">
      <div className="prescripto-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="z-10 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Appointment<br />With Trusted Doctors
            </h1>
            <p className="text-white/90 mb-8 max-w-md">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
            
            <div className="flex items-center">
              <Button 
                onClick={handleBookAppointment}
                className="bg-white text-prescripto-blue hover:bg-gray-100 button-hover"
              >
                Book appointment <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative z-10 animate-slide-in-right">
            <img 
              src="lovable-uploads/631913a5-9f66-4880-9217-bc731ff91c36.png" 
              alt="Doctors Team" 
              className="w-full max-w-md ml-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-64 h-64 rounded-full bg-white absolute -top-32 -left-32"></div>
        <div className="w-96 h-96 rounded-full bg-white absolute -bottom-32 -right-32"></div>
      </div>
    </section>
  );
};

export default Hero;
