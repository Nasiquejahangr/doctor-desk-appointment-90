
import { useState, useEffect } from "react";
import SpecialtyCard from "./SpecialtyCard";

const SpecialtiesSection = () => {
  const [isInView, setIsInView] = useState(false);
  
  // Improved intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('specialties-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  const specialties = [
    { 
      id: 1, 
      title: "General physician", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      link: "/doctors?specialty=general"
    },
    { 
      id: 2, 
      title: "Gynecologist", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21.5c-4.076 0-8-1-8-5 0-3 4-3 4-10 0-4 3.5-6.5 7.5-6 3.5.5 4.5 3.5 4.5 6 0 7 4 7 4 10 0 4-3.924 5-8 5Z"/>
          <path d="M12 16v3M9 9h6"/>
        </svg>
      ),
      link: "/doctors?specialty=gynecologist"
    },
    { 
      id: 3, 
      title: "Dermatologist", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <path d="M9 9h.01M15 9h.01" />
        </svg>
      ),
      link: "/doctors?specialty=dermatologist"
    },
    { 
      id: 4, 
      title: "Pediatrician", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="5" />
          <path d="M8 14h8M10 19l-2-2M14 19l2-2" />
        </svg>
      ),
      link: "/doctors?specialty=pediatrician"
    },
    { 
      id: 5, 
      title: "Neurologist", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8Z"/>
          <path d="M15 9c-.974 0-9.539 5.185-9.539 5.185" />
          <path d="M15 15c-.974 0-9.539-5.185-9.539-5.185" />
        </svg>
      ),
      link: "/doctors?specialty=neurologist"
    },
    { 
      id: 6, 
      title: "Gastroenterologist", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-prescripto-blue" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      ),
      link: "/doctors?specialty=gastroenterologist" 
    }
  ];
  
  return (
    <section id="specialties-section" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-prescripto-lightest-blue rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-prescripto-lightest-blue rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      <div className="prescripto-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Find by Speciality
            <span className="absolute bottom-0 left-0 w-full h-1 bg-prescripto-blue opacity-70 rounded"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Simply browse through our extensive list of trusted doctors, schedule 
            your appointment hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={specialty.id} 
              className={`transform ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '600ms',
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <SpecialtyCard
                title={specialty.title}
                icon={specialty.icon}
                link={specialty.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
