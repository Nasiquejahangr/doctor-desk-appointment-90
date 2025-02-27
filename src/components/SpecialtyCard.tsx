
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
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover"
    >
      <div className="specialty-icon mb-4">
        {icon}
      </div>
      <h3 className="text-base font-medium text-gray-800">{title}</h3>
    </Link>
  );
};

export default SpecialtyCard;
