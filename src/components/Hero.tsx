import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Scholarship Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-scholarship/10 text-sm font-medium text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-scholarship" />
              90% Scholarship — Next Cohort Only
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-foreground leading-[1.1] mb-5 text-balance">
              Learn practical software engineering skills
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The dotSchool is a 12-week program for beginners and early-career developers. 
              Build real projects, gain job-ready skills, and join a community of committed learners.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="group" asChild>
                <a 
                  href="https://forms.google.com/your-form-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply for 90% Scholarship
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Courses
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>

            {/* Trust indicators */}
            <p className="mt-8 text-sm text-muted-foreground">
              Selection based on commitment • Limited slots available
            </p>
          </div>

          {/* Image placeholder - students learning */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-muted overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=faces"
                alt="Students collaborating on coding projects"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-lg p-4 shadow-lg max-w-[200px]">
              <div className="text-2xl font-bold text-foreground">12 weeks</div>
              <div className="text-sm text-muted-foreground">to job-ready skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
