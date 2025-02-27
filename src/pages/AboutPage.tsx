
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
                src="lovable-uploads/631913a5-9f66-4880-9217-bc731ff91c36.png" 
                alt="Medical Team at CGC Mohali" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            
            <div className="animate-fade-in animate-stagger-2">
              <p className="text-gray-600 mb-6">
                Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently
                at Chandigarh Group of Colleges (CGC), Mohali. At Prescripto, we understand the challenges individuals face 
                when it comes to scheduling doctor appointments and managing their health records.
              </p>
              
              <p className="text-gray-600 mb-6">
                Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our
                platform, integrating the latest advancements to improve user experience and deliver superior service
                to the CGC community and beyond. Whether you're booking your first appointment or managing ongoing care, 
                Prescripto is here to support you every step of the way.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              
              <p className="text-gray-600 mb-6">
                Our vision at Prescripto is to create a seamless healthcare experience for every user in Mohali and surrounding
                regions. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access 
                the care you need, when you need it.
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
                Streamlined appointment scheduling that fits into your busy lifestyle at CGC Mohali campus.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in animate-stagger-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Convenience</h3>
              <p className="text-gray-600">
                Access to a network of trusted healthcare professionals in Mohali and surrounding areas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in animate-stagger-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Personalization</h3>
              <p className="text-gray-600">
                Tailored recommendations and reminders to help you stay on top of your health while at CGC.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section with high-quality images */}
      <section className="py-16">
        <div className="prescripto-container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR TEAM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of professionals committed to providing exceptional healthcare services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-stagger-1">
              <img 
                src="lovable-uploads/3a6d6e46-850e-4789-997e-86e3a1da97b2.png" 
                alt="Dr. Richard James" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">Dr. Richard James</h3>
                <p className="text-gray-600">Medical Director</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-stagger-2">
              <img 
                src="lovable-uploads/abb005d8-2aac-4930-8f19-1970d2d10708.png" 
                alt="Dr. Sarah Chen" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">Dr. Sarah Chen</h3>
                <p className="text-gray-600">Chief Medical Officer</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-stagger-3">
              <img 
                src="lovable-uploads/6916c512-1348-4b9d-a5fc-97052b6636bb.png" 
                alt="Dr. Emily Johnson" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">Dr. Emily Johnson</h3>
                <p className="text-gray-600">Head of Patient Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-prescripto-blue text-white">
        <div className="prescripto-container">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to experience better healthcare at CGC Mohali?</h2>
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
