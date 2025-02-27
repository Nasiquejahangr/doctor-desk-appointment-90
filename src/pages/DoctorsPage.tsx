
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
    image: "lovable-uploads/f757e857-f1cb-4e0c-8aef-1309f140140e.png",
  },
  {
    id: "2",
    name: "Sarah Chen",
    specialty: "Gynecologist",
    image: "lovable-uploads/4ec11d84-be1c-424f-a2ec-30adcb451e0e.png",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    specialty: "Dermatologist",
    image: "lovable-uploads/ee5b1de4-c6c8-4e90-9147-58457a057b50.png",
  },
  {
    id: "4",
    name: "Emily Johnson",
    specialty: "Pediatrician",
    image: "lovable-uploads/75372ee7-3c0b-44be-9fba-f5182167ae89.png",
  },
  {
    id: "5",
    name: "David Lee",
    specialty: "Neurologist",
    image: "lovable-uploads/1ddcb307-15ce-4433-913c-28a5ba076cc7.png",
  },
  {
    id: "6",
    name: "Maria Perez",
    specialty: "Cardiologist",
    image: "lovable-uploads/649fddc2-e011-444b-87b9-9608cd269401.png",
  },
  {
    id: "7",
    name: "James Wilson",
    specialty: "Orthopedic",
    image: "lovable-uploads/08404d7b-965c-4f90-84fc-8feb51d0d647.png",
  },
  {
    id: "8",
    name: "Lisa Chen",
    specialty: "General physician",
    image: "lovable-uploads/ee5b1de4-c6c8-4e90-9147-58457a057b50.png",
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
