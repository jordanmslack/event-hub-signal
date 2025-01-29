import { useState } from "react";
import CheckInForm from "@/components/CheckInForm";
import RecentCheckIns from "@/components/RecentCheckIns";
import CheckInCounter from "@/components/CheckInCounter";

interface CheckIn {
  id: number;
  name: string;
  ticketNumber: string;
  timestamp: Date;
}

const Index = () => {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);

  const handleCheckIn = (name: string, ticketNumber: string) => {
    const newCheckIn = {
      id: Date.now(),
      name,
      ticketNumber,
      timestamp: new Date(),
    };
    setCheckIns((prev) => [newCheckIn, ...prev].slice(0, 5)); // Keep only 5 most recent
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">Event Check-in</h1>
          <p className="text-muted-foreground">Welcome your guests efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <CheckInCounter count={checkIns.length} />
            <CheckInForm onCheckIn={handleCheckIn} />
          </div>
          
          <div>
            <RecentCheckIns checkIns={checkIns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;