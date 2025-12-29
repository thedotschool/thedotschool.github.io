import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Scholarship = () => {
  return (
    <section id="scholarship" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              90% Scholarship for the Next Cohort
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe talent is everywhere, opportunity isn't. Our scholarship program makes quality tech education accessible to committed learners.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground">Limited slots available each cohort</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground">Selection based on commitment and potential</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground">Apply through our enrollment form</p>
              </div>
            </div>

            <Button size="lg" asChild>
              <a
                href="https://forms.gle/FYkPynguzYwhhHDz5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Scholarship
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Right pricing card */}
          <div className="bg-secondary/50 border border-border rounded-2xl p-8 md:p-10">
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Course Investment
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                ₦10,000
              </span>
              <span className="text-xl text-muted-foreground line-through">₦100,000</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-sm font-medium mb-6">
              <span className="text-accent-foreground">90% Scholarship Applied</span>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Scholarship is subject to review and qualification. Apply through our enrollment form to be considered for the next cohort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
