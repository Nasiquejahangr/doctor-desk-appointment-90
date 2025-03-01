import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext"; // ✅ Ensured this is included

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  
  return (
    <nav className="w-full bg-white py-3 shadow-sm">
      <div className="prescripto-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 bg-prescripto-blue rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M19 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z" />
              <path d="M12 4v16M8 4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-800">Prescripto</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium">
            HOME
          </Link>
          <Link to="/doctors" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium">
            ALL DOCTORS
          </Link>
          <Link to="/appointments" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium">
            APPOINTMENTS {/* ✅ Ensured this link is included */}
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium">
            ABOUT
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium">
            CONTACT
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <User size={20} className="text-gray-600" />
                <span className="text-sm text-gray-600">{user.email}</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  user.profileStatus === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.profileStatus}
                </span>
                <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800 capitalize">
                  {user.role}
                </span>
              </div>
              <Button 
                variant="outline"
                onClick={logout}
                className="border-prescripto-blue text-prescripto-blue hover:bg-prescripto-blue hover:text-white"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-prescripto-blue text-prescripto-blue hover:bg-prescripto-blue hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-prescripto-blue hover:bg-prescripto-light-blue button-hover">
                  Create account
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-700 hover:text-prescripto-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 animate-fade-in">
          <div className="prescripto-container flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ALL DOCTORS
            </Link>
            <Link to="/appointments" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              APPOINTMENTS {/* ✅ Ensured this link is included */}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-prescripto-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>

            {user ? (
              <>
                <div className="flex items-center space-x-2 py-2">
                  <User size={20} className="text-gray-600" />
                  <span className="text-sm text-gray-600">{user.email}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.profileStatus === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.profileStatus}
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800 capitalize">
                    {user.role}
                  </span>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full border-prescripto-blue text-prescripto-blue hover:bg-prescripto-blue hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full border-prescripto-blue text-prescripto-blue hover:bg-prescripto-blue hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link 
                  to="/signup" 
                  className="inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-prescripto-blue hover:bg-prescripto-light-blue">
                    Create account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
