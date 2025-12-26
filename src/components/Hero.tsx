import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Sparkles } from "lucide-react";
import { useInView, useCountUp } from "@/hooks/use-animations";

const Hero = () => {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { count: weeksCount, ref: weeksRef } = useCountUp(12, 1500);
  const { count: coursesCount, ref: coursesRef } = useCountUp(3, 1500);

  return (
    <section className="relative min-h-screen bg-hero-gradient pattern-african overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-1.5s" }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-[15%] w-4 h-4 bg-accent/40 rotate-45 animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/3 left-[10%] w-3 h-3 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-1/3 right-[20%] w-5 h-5 border-2 border-accent/30 rotate-12 animate-float" style={{ animationDelay: "-1s" }} />
      </div>

      <div 
        ref={heroRef}
        className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-20 text-center"
      >
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-8 backdrop-blur-sm transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span>Enrollment Now Open</span>
        </div>

        {/* Headline */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground max-w-5xl leading-tight transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Building Africa's Next Generation of{" "}
          <span className="text-gradient relative">
            Software Engineers
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 rounded-full" />
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Learn practical software engineering skills — from foundations to real-world backend development.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <Button 
            variant="hero" 
            size="xl" 
            className="group"
            asChild
          >
            <a 
              href="https://forms.google.com/your-form-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply for Next Cohort
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            className="group"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses
            <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
          </Button>
        </div>

        {/* Scholarship note */}
        <p 
          className={`mt-6 text-sm text-primary-foreground/70 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <span className="inline-flex items-center gap-1">
            <GraduationCap className="w-4 h-4 text-accent" />
            <strong className="text-accent">90% scholarship</strong> available for qualified students
          </span>
        </p>

        {/* Stats with count-up animation */}
        <div 
          className={`grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-16 border-t border-primary-foreground/10 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <div className="text-center" ref={weeksRef}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
              {weeksCount}
            </div>
            <div className="text-sm text-primary-foreground/70 mt-1">Week Programs</div>
          </div>
          <div className="text-center" ref={coursesRef}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
              {coursesCount}
            </div>
            <div className="text-sm text-primary-foreground/70 mt-1">Expert Courses</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="flex items-center justify-center gap-1">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-accent transition-transform group-hover:scale-110" />
            </div>
            <div className="text-sm text-primary-foreground/70 mt-1">Mentorship</div>
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
