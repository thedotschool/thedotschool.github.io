import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2026-02-22T23:59:00");
  
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
      <div className="bg-accent/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[56px] border border-accent/40">
        <span className="text-2xl md:text-3xl font-bold text-background font-heading tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-background/80 mt-2 uppercase tracking-wider font-medium">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-background/10 backdrop-blur-md border border-accent/30">
      <div className="flex items-center gap-2 text-accent text-base font-semibold">
        <Clock className="w-5 h-5" />
        <span>Enrollment closes March 22, 11:59 PM</span>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-3xl text-accent font-bold">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-3xl text-accent font-bold">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <span className="text-3xl text-accent font-bold">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;
