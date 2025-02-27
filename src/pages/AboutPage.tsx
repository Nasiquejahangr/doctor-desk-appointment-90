
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-prescripto-lightest-blue py-12">
        <div className="prescripto-container text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">ABOUT US</h1>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16">
        <div className="prescripto-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in animate-stagger-1">
              <img 
                src="/public/lovable-uploads/43c64db8-bdaa-46fe-b409-24ec675a7c9f.png" 
                alt="Doctors Team" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            
            <div className="animate-fade-in animate-stagger-2">
              <p className="text-gray-600 mb-6">
                Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
                At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor 
                appointments and managing their health records.
              </p>
              
              <p className="text-gray-600 mb-6">
                Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our
                platform, integrating the latest advancements to improve user experience and deliver superior service.
                Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you
                every step of the way.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              
              <p className="text-gray-600 mb-6">
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the
                gap between patients and healthcare providers, making it easier for you to access the care you need, when
                you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="prescripto-container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">WHY CHOOSE US</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in animate-stagger-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Efficiency</h3>
              <p className="text-gray-600">
                Streamlined appointment scheduling that fits into your busy lifestyle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in animate-stagger-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Convenience</h3>
              <p className="text-gray-600">
                Access to a network of trusted healthcare professionals in your area.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in animate-stagger-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Personalization</h3>
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
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to experience better healthcare?</h2>
            <p className="mb-8 text-white/90">
              Join thousands of satisfied patients who have simplified their healthcare journey with Prescripto.
            </p>
            <Link to="/signup">
              <Button className="bg-white text-prescripto-blue hover:bg-gray-100 button-hover px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
