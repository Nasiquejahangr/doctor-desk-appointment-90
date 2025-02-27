
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  isAvailable?: boolean;
}

const DoctorCard = ({ id, name, specialty, image, isAvailable = true }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover animate-fade-in">
      <div className="bg-prescripto-lightest-blue p-4">
        <img 
          src={image} 
          alt={`Dr. ${name}`} 
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      
      <div className="p-5">
        {isAvailable && (
          <div className="mb-2">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
              Available
            </Badge>
          </div>
        )}
        
        <h3 className="text-lg font-bold text-gray-800">Dr. {name}</h3>
        <p className="text-gray-600 mb-4">{specialty}</p>
        
        <Link to={`/doctors/${id}`}>
          <Button 
            className="w-full bg-prescripto-blue hover:bg-prescripto-light-blue button-hover"
          >
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
