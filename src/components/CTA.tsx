import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const CTA = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-primary-foreground text-sm mb-8 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Clock className="w-4 h-4 text-secondary" />
            <span className="font-semibold">Limited Time — Next Cohort Only</span>
          </div>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Ready to Start Your{" "}
            <span className="text-secondary">Engineering Journey?</span>
          </h2>

          <p 
            className={`text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Apply now to secure your spot in the next cohort. With our 90% scholarship (next cohort only), expert mentorship, and project-based curriculum, your future in tech starts here.
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
            className={`mt-6 text-sm text-primary-foreground/70 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            90% scholarship available for qualified applicants — next cohort only. Enrollment subject to review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
