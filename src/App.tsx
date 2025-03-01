import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext"; // Import Authentication Context
import AboutPage from "./pages/AboutPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import ContactPage from "./pages/ContactPage";
import DoctorDetail from "./pages/DoctorDetail";
import DoctorsPage from "./pages/DoctorsPage";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage"; // Added profile page
import SignupPage from "./pages/SignupPage";
import Chatbot from "./components/Chatbot"; 

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter> {/* Move BrowserRouter to the top */}
    <AuthProvider> {/* Now AuthProvider is inside BrowserRouter */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/doctors/:id" element={<DoctorDetail />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} /> {/* Ensure profile page route exists */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter> 
);

export default App;
