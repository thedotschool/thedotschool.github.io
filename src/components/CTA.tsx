import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const FORM_LINK = "https://forms.gle/FYkPynguzYwhhHDz5";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="absolute inset-0 pattern-african" />

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 text-background text-sm mb-8">
            <Rocket className="w-4 h-4 text-accent" />
            <span>Next Cohort Starting Soon</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-background mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient">Engineering Journey?</span>
          </h2>

          <p className="text-lg md:text-xl text-background/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Apply now to secure your spot in the next cohort. With our 90% scholarship, world-class curriculum, and expert mentorship, your future in tech starts here.
          </p>

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

          <p className="mt-6 text-sm text-background/70">
            Enrollment subject to review and scholarship qualification.
          </p>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-background/30" />
      </div>
    </section>
  );
};

export default CTA;
