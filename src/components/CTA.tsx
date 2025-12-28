import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const CTA = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-8 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Clock className="w-4 h-4" />
            Limited — Next Cohort Only
          </div>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-foreground leading-[1.2] mb-6 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Ready to Start Your Engineering Journey?
          </h2>

          <p 
            className={`text-lg text-primary-foreground/80 mb-10 leading-relaxed transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Apply now to secure your spot in the next cohort. With our 90% scholarship, expert mentorship, and project-based curriculum, your future in tech starts here.
          </p>

          <div 
            className={`transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button 
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
          </div>

          <p 
            className={`mt-6 text-sm text-primary-foreground/60 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            90% scholarship available for qualified applicants — next cohort only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
