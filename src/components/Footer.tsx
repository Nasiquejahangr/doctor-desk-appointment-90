
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="prescripto-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-prescripto-blue rounded-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M19 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  <path d="M12 4v16M8 4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">Prescripto</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your trusted partner in managing your healthcare needs conveniently and efficiently.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/appointments" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  Patient Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-prescripto-blue transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>123 Medical Center Drive</p>
              <p>New York, NY 10001</p>
              <p className="mt-3">support@prescripto.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Prescripto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
