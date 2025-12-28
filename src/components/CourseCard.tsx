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

const CourseCard = ({
  title,
  description,
  duration,
  originalPrice,
  currentPrice,
  discount,
  outline,
  index,
}: CourseCardProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`rounded-lg bg-card border border-border/60 shadow-card transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gold scholarship badge */}
      <div className="bg-accent px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-accent-foreground">
          {discount} Scholarship
        </span>
        <span className="text-xs font-medium text-accent-foreground/80">Next Cohort Only</span>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-5">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{duration}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
          <span className="text-3xl font-heading font-bold text-foreground">
            {currentPrice}
          </span>
          <span className="text-muted-foreground line-through">
            {originalPrice}
          </span>
        </div>

        {/* Course outline accordion */}
        <Accordion type="single" collapsible className="mb-6">
          <AccordionItem value="outline" className="border-none">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3 px-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                View 12-Week Outline
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-2">
                {outline.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <span className="text-sm font-medium text-primary whitespace-nowrap">
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
          variant="default"
          size="lg" 
          className="w-full group" 
          asChild
        >
          <a 
            href="https://forms.google.com/your-form-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
