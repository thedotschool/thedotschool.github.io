import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="rounded-2xl bg-foreground text-background p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-scholarship text-scholarship-foreground text-sm font-medium mb-6">
              Limited slots for next cohort
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your journey?
            </h2>
            
            <p className="text-background/70 leading-relaxed mb-8 text-lg">
              Apply now for the next cohort. The 90% scholarship is available for committed applicants only. 
              Selection is based on your dedication to learning, not your background.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="group bg-background text-foreground hover:bg-background/90" 
                asChild
              >
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
                className="border-background/30 text-background hover:bg-background/10 hover:text-background"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
