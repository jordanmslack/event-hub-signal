import { Card } from "@/components/ui/card";

interface CheckInCounterProps {
  count: number;
}

const CheckInCounter = ({ count }: CheckInCounterProps) => {
  return (
    <Card className="p-6 text-center">
      <h2 className="text-2xl font-bold text-primary">{count}</h2>
      <p className="text-muted-foreground">Total Check-ins</p>
    </Card>
  );
};

export default CheckInCounter;