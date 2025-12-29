import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Sparkles } from "lucide-react";

const FORM_LINK = "https://forms.gle/FYkPynguzYwhhHDz5";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with darker overlay for readability */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="absolute inset-0 pattern-african" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-20 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 text-background text-sm mb-8 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Enrollment Now Open</span>
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-background max-w-5xl leading-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Building Africa's Next Generation of{" "}
          <span className="text-gradient">Software Engineers</span>
        </h1>

        {/* Subheadline */}
        <p 
          className="mt-6 text-lg md:text-xl text-background/90 max-w-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Learn practical software engineering skills — from foundations to real-world backend development.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Button 
            variant="hero" 
            size="xl" 
            asChild
          >
            <a 
              href={FORM_LINK}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply for Next Cohort
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses
          </Button>
        </div>

        {/* Scholarship note */}
        <p 
          className="mt-6 text-sm text-background/80 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <span className="inline-flex items-center gap-1">
            <GraduationCap className="w-4 h-4 text-accent" />
            <strong className="text-accent">90% scholarship</strong> available for qualified students
          </span>
        </p>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-16 border-t border-background/10 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-accent">12</div>
            <div className="text-sm text-background/80 mt-1">Week Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-accent">3</div>
            <div className="text-sm text-background/80 mt-1">Expert Courses</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            <div className="text-sm text-background/80 mt-1">Mentorship</div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(35, 30%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
