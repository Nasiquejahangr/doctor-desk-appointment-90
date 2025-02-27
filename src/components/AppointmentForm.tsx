
import { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { id: '1', time: '8:00 am', available: true },
  { id: '2', time: '8:30 am', available: true },
  { id: '3', time: '9:00 am', available: true },
  { id: '4', time: '9:30 am', available: true },
  { id: '5', time: '10:00 am', available: true },
  { id: '6', time: '10:30 am', available: true },
  { id: '7', time: '11:00 am', available: true },
  { id: '8', time: '11:30 am', available: true },
];

interface AppointmentFormProps {
  doctorId: string;
  doctorName: string;
}

const AppointmentForm = ({ doctorId, doctorName }: AppointmentFormProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  const handleBookAppointment = () => {
    if (!date || !selectedTimeSlot) {
      toast({
        title: "Please select both date and time",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Appointment booked successfully!",
      description: `Your appointment with Dr. ${doctorName} on ${format(date, "PPP")} at ${timeSlots.find(slot => slot.id === selectedTimeSlot)?.time} has been confirmed.`,
    });
    
    // Reset form
    setSelectedTimeSlot(null);
  };
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-6">Booking slots</h3>
      
      {/* Date Selection */}
      <div className="mb-6">
        <div className="flex overflow-x-auto py-2 space-x-2 max-w-full">
          {Array.from({ length: 7 }).map((_, index) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + index);
            
            const dayName = format(currentDate, "E").toUpperCase();
            const dayNumber = format(currentDate, "d");
            
            const isSelected = date && 
              date.getDate() === currentDate.getDate() && 
              date.getMonth() === currentDate.getMonth();
            
            return (
              <button
                key={index}
                onClick={() => setDate(new Date(currentDate))}
                className={`flex-shrink-0 w-16 h-20 rounded-lg flex flex-col items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-prescripto-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-sm font-medium">{dayName}</span>
                <span className="text-xl font-bold mt-1">{dayNumber}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Time Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => setSelectedTimeSlot(slot.id)}
            disabled={!slot.available}
            className={`py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTimeSlot === slot.id
                ? "bg-prescripto-blue text-white"
                : slot.available
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {slot.time}
          </button>
        ))}
      </div>
      
      <Button 
        onClick={handleBookAppointment}
        className="w-full py-6 bg-prescripto-blue hover:bg-prescripto-light-blue button-hover text-lg"
      >
        Book an appointment
      </Button>
    </div>
  );
};

export default AppointmentForm;
