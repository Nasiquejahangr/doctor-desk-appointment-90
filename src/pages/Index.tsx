
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorCard from "@/components/DoctorCard";
import { ArrowRight } from "lucide-react";

const doctorsData = [
  {
    id: "1",
    name: "Richard James",
    specialty: "General physician",
    image: "lovable-uploads/3a6d6e46-850e-4789-997e-86e3a1da97b2.png",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Sarah Chen",
    specialty: "Gynecologist",
    image: "lovable-uploads/abb005d8-2aac-4930-8f19-1970d2d10708.png",
    isAvailable: true,
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    specialty: "Dermatologist",
    image: "lovable-uploads/141c3dbf-4429-4a84-92a3-e54d532d90f3.png",
    isAvailable: true,
  },
  {
    id: "4",
    name: "Emily Johnson",
    specialty: "Pediatrician",
    image: "lovable-uploads/6916c512-1348-4b9d-a5fc-97052b6636bb.png",
    isAvailable: true,
  },
];

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <SpecialtiesSection />
      
      {/* Featured Doctors Section */}
      <section className="py-16">
        <div className="prescripto-container">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Featured Doctors</h2>
              <p className="text-gray-600 mt-2">Top rated doctors available for consultation</p>
            </div>
            
            <Link to="/doctors">
              <Button variant="outline" className="border-prescripto-blue text-prescripto-blue hover:bg-prescripto-lightest-blue">
                View all <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {doctorsData.map((doctor, index) => (
              <div 
                key={doctor.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <DoctorCard
                  id={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  image={doctor.image}
                  isAvailable={doctor.isAvailable}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="prescripto-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prescripto provides a seamless healthcare experience, making it easier for you to access care when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-stagger-1">
              <div className="mb-4">
                <div className="w-12 h-12 bg-prescripto-lightest-blue rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Streamlined appointment scheduling that fits into your busy lifestyle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-stagger-2">
              <div className="mb-4">
                <div className="w-12 h-12 bg-prescripto-lightest-blue rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7h-9m-7 0h3m13 10h-3m-7 0h-3" />
                    <circle cx="8" cy="7" r="3" />
                    <circle cx="16" cy="17" r="3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Convenience</h3>
              <p className="text-gray-600">
                Access to a network of trusted healthcare professionals in your area.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-stagger-3">
              <div className="mb-4">
                <div className="w-12 h-12 bg-prescripto-lightest-blue rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalization</h3>
              <p className="text-gray-600">
                Tailored recommendations and reminders to help you stay on top of your health.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-prescripto-blue text-white">
        <div className="prescripto-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to book your appointment?</h2>
            <p className="mb-8 text-white/90">
              Join thousands of satisfied patients who have simplified their healthcare journey with Prescripto.
            </p>
            <Link to="/signup">
              <Button className="bg-white text-prescripto-blue hover:bg-gray-100 button-hover px-8 py-6 text-lg">
                Create your account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
