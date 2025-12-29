import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Scholarship badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              90% Scholarship Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-foreground leading-[1.1] mb-6">
              Learn practical software engineering skills
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Hands-on, real-world training in 12-week programs. Build production-ready applications and launch your career in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <a
                  href="https://forms.gle/FYkPynguzYwhhHDz5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for 90% Scholarship
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Week Programs</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Expert Courses</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Scholarship</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating on code in a modern learning environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
