import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface CheckInFormProps {
  onCheckIn: (name: string, ticketNumber: string) => void;
}

const CheckInForm = ({ onCheckIn }: CheckInFormProps) => {
  const [name, setName] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !ticketNumber.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    onCheckIn(name, ticketNumber);
    setName("");
    setTicketNumber("");
    toast.success("Check-in successful!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <Input
          type="text"
          placeholder="Guest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Ticket Number"
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value)}
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full">
        Check In
      </Button>
    </form>
  );
};

export default CheckInForm;