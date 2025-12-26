import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const CTA = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-hero-gradient pattern-african relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-8 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Rocket className="w-4 h-4 text-accent animate-bounce" />
            <span>Next Cohort Starting Soon</span>
          </div>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Ready to Start Your{" "}
            <span className="text-gradient">Engineering Journey?</span>
          </h2>

          <p 
            className={`text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Apply now to secure your spot in the next cohort. With our 90% scholarship, world-class curriculum, and expert mentorship, your future in tech starts here.
          </p>

          <div 
            className={`transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
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
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
            </Button>
          </div>

          <p 
            className={`mt-6 text-sm text-primary-foreground/60 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Enrollment subject to review and scholarship qualification.
          </p>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-primary-foreground/30" />
      </div>
    </section>
  );
};

export default CTA;
