import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

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
  isNew?: boolean;
}

const CourseCard = ({
  title,
  description,
  duration,
  originalPrice,
  currentPrice,
  outline,
  isNew,
}: CourseCardProps) => {
  return (
    <div className="rounded-lg bg-card border border-border overflow-hidden flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {title}
            </h3>
            {isNew && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary shrink-0">
                <Sparkles className="w-3 h-3" />
                NEW
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-foreground mb-4">
          <Clock className="w-4 h-4 text-muted-foreground" />
          {duration}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
          <span className="text-2xl font-bold text-foreground">
            {currentPrice}
          </span>
          <span className="text-muted-foreground line-through text-sm">
            {originalPrice}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-scholarship/10 text-scholarship-foreground">
            90% off
          </span>
        </div>

        {/* Course outline accordion */}
        <Accordion type="single" collapsible className="mb-6 flex-1">
          <AccordionItem value="outline" className="border-none">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-0">
              View course outline
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-2">
                {outline.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-sm">
                    <span className="font-medium text-foreground whitespace-nowrap min-w-[72px]">
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
        <Button className="w-full group mt-auto" asChild>
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
