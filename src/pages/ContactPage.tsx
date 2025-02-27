
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Success message
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-prescripto-lightest-blue py-12">
        <div className="prescripto-container text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">CONTACT US</h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="prescripto-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">OUR OFFICE</h2>
              
              <div className="mb-8">
                <address className="not-italic">
                  <p className="text-gray-600 mb-1">Chandigarh Group of Colleges (CGC)</p>
                  <p className="text-gray-600">Landran, Mohali, Punjab, India</p>
                </address>
              </div>
              
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-prescripto-blue mr-3" />
                <p className="text-gray-600">Tel: +919508904653</p>
              </div>
              
              <div className="flex items-center mb-8">
                <Mail className="h-5 w-5 text-prescripto-blue mr-3" />
                <p className="text-gray-600">Email: Mohdnasique@gmail.com</p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">CAREERS AT PRESCRIPTO</h2>
              <p className="text-gray-600 mb-6">
                Learn more about our teams and job openings.
              </p>
              
              <Button className="bg-prescripto-blue hover:bg-prescripto-light-blue button-hover">
                Explore Jobs
              </Button>
              
              {/* Map or Image Placeholder - Updated with higher quality image of CGC Mohali */}
              <div className="mt-12 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/public/lovable-uploads/996facef-3351-4f01-adaf-2ed9e8dce71a.png" 
                  alt="CGC Mohali Campus" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in animate-stagger-1">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-prescripto-blue hover:bg-prescripto-light-blue button-hover h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
