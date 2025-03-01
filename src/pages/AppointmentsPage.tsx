//src/pages/AppointmentPage.tsx
import AppointmentForm from "@/components/AppointmentForm";

const AppointmentsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Book an Appointment</h1>
      <AppointmentForm doctorId="12345" doctorName="Dr. John Doe" />
    </div>
  );
};

export default AppointmentsPage;
