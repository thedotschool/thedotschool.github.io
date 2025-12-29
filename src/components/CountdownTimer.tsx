import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2025-01-25T23:59:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-background/15 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[48px] border border-background/20">
        <span className="text-xl md:text-2xl font-bold text-background font-heading tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] text-background/70 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-background/80 text-sm">
        <Clock className="w-4 h-4" />
        <span>Enrollment closes Jan 25, 11:59 PM</span>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl text-accent font-bold">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-2xl text-accent font-bold">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <span className="text-2xl text-accent font-bold">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;
