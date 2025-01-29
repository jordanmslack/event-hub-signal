import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
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
    setCheckIns((prev) => [newCheckIn, ...prev].slice(0, 5));
  };

  // Get the current URL for the QR code
  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold" style={{ color: "rgba(129, 90, 243, 1.0)" }}>Event Check-in</h1>
          <p className="text-muted-foreground">Welcome your guests efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <CheckInCounter count={checkIns.length} />
            <CheckInForm onCheckIn={handleCheckIn} />
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4" style={{ color: "rgba(129, 90, 243, 1.0)" }}>Mobile Check-in</h2>
              <div className="flex flex-col items-center space-y-4">
                <QRCodeSVG value={currentUrl} size={200} />
                <p className="text-sm text-muted-foreground">Scan to check in on your mobile device</p>
              </div>
            </div>
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