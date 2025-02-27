
import { useState, useEffect } from "react";
import DoctorCard from "@/components/DoctorCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample data - would come from API in real application
const allDoctors = [
  {
    id: "1",
    name: "Richard James",
    specialty: "General physician",
    image: "/public/lovable-uploads/3a6d6e46-850e-4789-997e-86e3a1da97b2.png",
  },
  {
    id: "2",
    name: "Sarah Chen",
    specialty: "Gynecologist",
    image: "/public/lovable-uploads/abb005d8-2aac-4930-8f19-1970d2d10708.png",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    specialty: "Dermatologist",
    image: "/public/lovable-uploads/141c3dbf-4429-4a84-92a3-e54d532d90f3.png",
  },
  {
    id: "4",
    name: "Emily Johnson",
    specialty: "Pediatrician",
    image: "/public/lovable-uploads/6916c512-1348-4b9d-a5fc-97052b6636bb.png",
  },
  {
    id: "5",
    name: "David Lee",
    specialty: "Neurologist",
    image: "/public/lovable-uploads/075d65b3-6c5f-48a6-800a-22daeea6fa5f.png",
  },
  {
    id: "6",
    name: "Maria Perez",
    specialty: "Cardiologist",
    image: "/public/lovable-uploads/3f2268b1-abea-4ea7-9c51-23cca90f54cb.png",
  },
  {
    id: "7",
    name: "James Wilson",
    specialty: "Orthopedic",
    image: "/public/lovable-uploads/3f28f25a-11c2-4654-88ea-090dcf15b0b6.png",
  },
  {
    id: "8",
    name: "Lisa Chen",
    specialty: "General physician",
    image: "/public/lovable-uploads/4f3a4e15-f69c-4a76-a2d4-cf2425f6838d.png",
  },
];

const specialties = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
];

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(allDoctors);
  
  // Filter doctors based on search term and specialty
  useEffect(() => {
    let results = allDoctors;
    
    if (searchTerm) {
      results = results.filter(
        doctor => 
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedSpecialty) {
      results = results.filter(
        doctor => doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
      );
    }
    
    setFilteredDoctors(results);
  }, [searchTerm, selectedSpecialty]);
  
  // Toggle specialty selection
  const handleSpecialtyClick = (specialty: string) => {
    if (selectedSpecialty === specialty.toLowerCase()) {
      setSelectedSpecialty("");
    } else {
      setSelectedSpecialty(specialty.toLowerCase());
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="prescripto-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse through the doctors specialist</h1>
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search doctors by name or specialty..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Specialty Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => handleSpecialtyClick(specialty)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedSpecialty === specialty.toLowerCase()
                    ? "bg-prescripto-blue text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
        
        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DoctorCard
                  id={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  image={doctor.image}
                  isAvailable={true}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No doctors found</h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
