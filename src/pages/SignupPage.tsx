
import { useEffect } from "react";
import SignupForm from "@/components/SignupForm";

const SignupPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="prescripto-container">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
