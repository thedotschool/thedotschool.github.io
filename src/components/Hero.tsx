import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            90% Scholarship — Next Cohort Only
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-foreground leading-[1.1] mb-6">
            Learn software engineering the practical way
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            dotSchool is a 12-week program that teaches you real software engineering skills — from fundamentals to production-ready backend development.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="group" asChild>
              <a 
                href="https://forms.google.com/your-form-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Apply for Next Cohort
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
