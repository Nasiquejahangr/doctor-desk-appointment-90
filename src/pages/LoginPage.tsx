
import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="prescripto-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
