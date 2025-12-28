import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const Hero = () => {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Subtle background pattern - geometric, low opacity */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div 
        ref={heroRef}
        className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-24 text-center"
      >
        {/* Gold Scholarship Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-8 transition-all duration-500 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Clock className="w-4 h-4" />
          90% Scholarship — Next Cohort Only
        </div>

        {/* Headline */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground max-w-4xl leading-[1.15] transition-all duration-500 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Building Africa's Next Generation of Software Engineers
        </h1>

        {/* Subheadline */}
        <p 
          className={`mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed transition-all duration-500 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Practical software engineering education. From fundamentals to production-ready backend development.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-500 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Button 
            variant="heroOutline" 
            size="xl" 
            className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses
          </Button>
        </div>

        {/* Stats row */}
        <div 
          className={`grid grid-cols-3 gap-8 md:gap-16 mt-20 pt-10 border-t border-primary-foreground/10 transition-all duration-500 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">12</div>
            <div className="text-sm text-primary-foreground/60 mt-1">Week Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">3</div>
            <div className="text-sm text-primary-foreground/60 mt-1">Expert Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">1:1</div>
            <div className="text-sm text-primary-foreground/60 mt-1">Mentorship</div>
          </div>
        </div>
      </div>

      {/* Clean geometric divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
      }} />
    </section>
  );
};

export default Hero;
