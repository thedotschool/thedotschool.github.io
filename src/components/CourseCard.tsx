import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

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
  outline: CourseOutline[];
}

const CourseCard = ({
  title,
  description,
  duration,
  originalPrice,
  currentPrice,
  outline,
}: CourseCardProps) => {
  return (
    <div className="rounded-lg bg-card border border-border overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Duration */}
        <div className="text-sm text-foreground mb-4">
          {duration}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-border">
          <span className="text-2xl font-bold text-foreground">
            {currentPrice}
          </span>
          <span className="text-muted-foreground line-through text-sm">
            {originalPrice}
          </span>
          <span className="text-xs text-primary font-medium">
            90% off — Next Cohort Only
          </span>
        </div>

        {/* Course outline accordion */}
        <Accordion type="single" collapsible className="mb-6">
          <AccordionItem value="outline" className="border-none">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-0">
              View 12-week outline
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-2">
                {outline.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-sm">
                    <span className="font-medium text-foreground whitespace-nowrap min-w-[70px]">
                      {item.week}
                    </span>
                    <span className="text-muted-foreground">
                      {item.topic}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Button */}
        <Button className="w-full group" asChild>
          <a 
            href="https://forms.google.com/your-form-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
