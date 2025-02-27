
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SpecialtyCardProps {
  title: string;
  icon: ReactNode;
  link: string;
}

const SpecialtyCard = ({ title, icon, link }: SpecialtyCardProps) => {
  return (
    <Link 
      to={link}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 card-hover overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-prescripto-lightest-blue to-white opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
      
      <div className="specialty-icon mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-base font-medium text-gray-800 group-hover:text-prescripto-blue transition-colors duration-300 relative z-10">{title}</h3>
    </Link>
  );
};

export default SpecialtyCard;
