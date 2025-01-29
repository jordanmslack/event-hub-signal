import { Card } from "@/components/ui/card";

interface CheckIn {
  id: number;
  name: string;
  ticketNumber: string;
  timestamp: Date;
}

interface RecentCheckInsProps {
  checkIns: CheckIn[];
}

const RecentCheckIns = ({ checkIns }: RecentCheckInsProps) => {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold">Recent Check-ins</h2>
      <div className="space-y-2">
        {checkIns.map((checkIn) => (
          <Card key={checkIn.id} className="p-4 check-in-success">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{checkIn.name}</p>
                <p className="text-sm text-muted-foreground">#{checkIn.ticketNumber}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {checkIn.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentCheckIns;