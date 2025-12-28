import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, ArrowRight, Check } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

interface CourseOutline {
  week: string;
  topic: string;
}

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  originalPrice: string;
  currentPrice: string;
  discount: string;
  outline: CourseOutline[];
  color: "indigo" | "terracotta" | "gold";
  index: number;
}

const colorStyles = {
  indigo: {
    badge: "bg-primary/10 text-primary",
    border: "border-primary/20 hover:border-primary/40",
    accent: "text-primary",
    button: "default" as const,
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(235_50%_25%/0.3)]",
  },
  terracotta: {
    badge: "bg-secondary/10 text-secondary",
    border: "border-secondary/20 hover:border-secondary/40",
    accent: "text-secondary",
    button: "terracotta" as const,
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(18_60%_50%/0.3)]",
  },
  gold: {
    badge: "bg-accent/20 text-accent-foreground",
    border: "border-accent/30 hover:border-accent/50",
    accent: "text-gold-dark",
    button: "gold" as const,
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(42_90%_55%/0.3)]",
  },
};

const CourseCard = ({
  title,
  description,
  duration,
  originalPrice,
  currentPrice,
  discount,
  outline,
  color,
  index,
}: CourseCardProps) => {
  const styles = colorStyles[color];
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      ref={ref}
      className={`group rounded-2xl bg-card border-2 ${styles.border} ${styles.glow} shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount badge */}
      <div className="bg-secondary/10 px-6 py-3 flex items-center justify-between relative overflow-hidden">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground relative z-10">
          <span className={`flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs transition-transform duration-300 ${isHovered ? "rotate-180 scale-110" : ""}`}>
            ✦
          </span>
          {discount} Scholarship
        </span>
        <span className="text-xs font-medium text-secondary relative z-10">Next Cohort Only</span>
        <div className={`absolute inset-0 bg-secondary/5 transition-transform duration-500 ${isHovered ? "translate-x-0" : "-translate-x-full"}`} />
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-6">
          <Clock className={`w-5 h-5 ${styles.accent} transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`} />
          <span className="text-sm font-medium text-foreground">{duration}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
          <span className={`text-3xl md:text-4xl font-heading font-bold text-foreground transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}>
            {currentPrice}
          </span>
          <span className="text-lg text-muted-foreground line-through">
            {originalPrice}
          </span>
        </div>

        {/* Course outline accordion */}
        <Accordion type="single" collapsible className="mb-6">
          <AccordionItem value="outline" className="border-none">
            <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3 px-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <span className="flex items-center gap-2">
                <Check className={`w-4 h-4 ${styles.accent}`} />
                View 12-Week Course Outline
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-2">
                {outline.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex gap-3 p-3 rounded-lg bg-background hover:bg-muted/30 transition-all duration-200 hover:translate-x-1"
                  >
                    <span className={`text-sm font-semibold ${styles.accent} whitespace-nowrap`}>
                      {item.week}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.topic}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Button */}
        <Button 
          variant={styles.button}
          size="lg" 
          className="w-full group/btn" 
          asChild
        >
          <a 
            href="https://forms.google.com/your-form-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
