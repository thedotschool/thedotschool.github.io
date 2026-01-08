import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, ChevronDown, ArrowRight, Check } from "lucide-react";

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
}

const colorStyles = {
  indigo: {
    badge: "bg-primary/10 text-primary",
    border: "border-primary/20 hover:border-primary/40",
    accent: "text-primary",
    button: "default" as const,
  },
  terracotta: {
    badge: "bg-secondary/10 text-secondary",
    border: "border-secondary/20 hover:border-secondary/40",
    accent: "text-secondary",
    button: "secondary" as const,
  },
  gold: {
    badge: "bg-accent/20 text-accent-foreground",
    border: "border-accent/30 hover:border-accent/50",
    accent: "text-accent",
    button: "accent" as const,
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
}: CourseCardProps) => {
  const styles = colorStyles[color];

  return (
    <div className={`group rounded-2xl bg-card border-2 ${styles.border} shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden`}>
      {/* Discount badge */}
      <div className="bg-accent/10 px-6 py-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs">✦</span>
          {discount} Scholarship
        </span>
        <span className="text-xs text-muted-foreground">Limited spots</span>
      </div>

      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-6">
          <Clock className={`w-5 h-5 ${styles.accent}`} />
          <span className="text-sm font-medium text-foreground">{duration}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-border">
          <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            {currentPrice}
          </span>
          <span className="text-base text-muted-foreground line-through">
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
                {outline.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-3 p-3 rounded-lg bg-background hover:bg-muted/30 transition-colors"
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
          className="w-full" 
          asChild
        >
          <a 
            href="https://forms.gle/FYkPynguzYwhhHDz5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
