
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shield, MapPin, Calendar } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import DoctorCard from "@/components/DoctorCard";

// Sample data - would come from API in real application
const doctorsData = [
  {
    id: "1",
    name: "Richard James",
    specialty: "General Physician",
    image: "/public/lovable-uploads/3a6d6e46-850e-4789-997e-86e3a1da97b2.png",
    isAvailable: true,
    experience: "8 Years",
    education: "MBBS",
    about: "Dr. James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. He believes in building long-term relationships with patients and providing personalized care.",
    address: "123 Medical Plaza, Suite 456, New York, NY 10001",
    fee: "$100",
  },
  {
    id: "2",
    name: "Sarah Chen",
    specialty: "Gynecologist",
    image: "/public/lovable-uploads/abb005d8-2aac-4930-8f19-1970d2d10708.png",
    isAvailable: true,
    experience: "12 Years",
    education: "MD, Gynecology",
    about: "Dr. Chen specializes in women's health with a focus on preventive care, reproductive health, and gynecological surgeries. She is known for her compassionate approach and thorough consultations.",
    address: "456 Women's Health Center, Suite 200, New York, NY 10002",
    fee: "$150",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    specialty: "Dermatologist",
    image: "/public/lovable-uploads/141c3dbf-4429-4a84-92a3-e54d532d90f3.png",
    isAvailable: true,
    experience: "10 Years",
    education: "MD, Dermatology",
    about: "Dr. Rodriguez is a board-certified dermatologist with expertise in treating a wide range of skin conditions. He offers both medical and cosmetic dermatology services.",
    address: "789 Skin Care Center, Floor 3, New York, NY 10003",
    fee: "$120",
  },
  {
    id: "4",
    name: "Emily Johnson",
    specialty: "Pediatrician",
    image: "/public/lovable-uploads/6916c512-1348-4b9d-a5fc-97052b6636bb.png",
    isAvailable: true,
    experience: "15 Years",
    education: "MD, Pediatrics",
    about: "Dr. Johnson is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages. She believes in partnering with parents to promote their child's physical and emotional wellbeing.",
    address: "101 Children's Clinic, Suite 300, New York, NY 10004",
    fee: "$90",
  },
];

// Similar doctors (for related doctors section)
const similarDoctors = doctorsData.slice(0, 3);

const DoctorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch doctor details
    setLoading(true);
    setTimeout(() => {
      const foundDoctor = doctorsData.find(doc => doc.id === id);
      if (foundDoctor) {
        setDoctor(foundDoctor);
      }
      setLoading(false);
    }, 500);
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <p className="text-gray-500">Loading doctor profile...</p>
        </div>
      </div>
    );
  }
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h2>
          <p className="text-gray-600">The doctor you are looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="prescripto-container">
        {/* Doctor Card and Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doctor Image */}
          <div className="animate-fade-in">
            <div className="bg-prescripto-blue rounded-lg overflow-hidden">
              <img
                src={doctor.image}
                alt={`Dr. ${doctor.name}`}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Doctor Information */}
          <div className="md:col-span-2 animate-fade-in animate-stagger-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Dr. {doctor.name}</h1>
                    <div className="ml-2 bg-prescripto-blue rounded-full p-1">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded">
                      {doctor.experience}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-gray-600">{doctor.about}</p>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">{doctor.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="font-semibold mb-2">Appointment fee: <span className="text-prescripto-blue">{doctor.fee}</span></h3>
              </div>
              
              {/* Appointment Booking Form */}
              <AppointmentForm doctorId={doctor.id} doctorName={doctor.name} />
            </div>
          </div>
        </div>
        
        {/* Related Doctors Section */}
        <div className="mt-16 animate-fade-in animate-stagger-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Related Doctors</h2>
            <p className="text-gray-600">Simply browse through our extensive list of trusted doctors.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarDoctors.map((doctor, index) => (
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
      </div>
    </div>
  );
};

export default DoctorDetail;
