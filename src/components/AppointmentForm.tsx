
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AppointmentFormProps {
  doctorId: string;
  doctorName: string;
  doctorImage?: string;
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const AppointmentForm = ({ doctorId, doctorName, doctorImage }: AppointmentFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        title: "Please select a date and time",
        description: "Both date and time are required to book an appointment",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to book appointment
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Success message
      toast({
        title: "Appointment Booked!",
        description: `Your appointment with Dr. ${doctorName} on ${format(date, "PPP")} at ${timeSlot} has been confirmed.`,
      });
      
      // Reset form
      setDate(undefined);
      setTimeSlot("");
      setNotes("");
    }, 1500);
  };
  
  return (
    <div className="border-t border-gray-100 pt-6 mt-6">
      <div className="flex items-center mb-6">
        {doctorImage && (
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={doctorImage} alt={`Dr. ${doctorName}`} />
            <AvatarFallback>{doctorName.substr(0, 2)}</AvatarFallback>
          </Avatar>
        )}
        <h3 className="text-xl font-semibold text-gray-800">Book Appointment with Dr. {doctorName}</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label htmlFor="date">Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-12",
                    !date && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                    date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Time Slot Picker */}
          <div className="space-y-2">
            <Label htmlFor="time">Select Time</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger id="time" className="h-12">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Notes */}
        <div className="space-y-2 mb-6">
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            placeholder="Any specific concerns or information you'd like the doctor to know"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-prescripto-blue hover:bg-prescripto-light-blue button-hover h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
