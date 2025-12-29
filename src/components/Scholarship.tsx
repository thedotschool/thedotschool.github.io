import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const qualifications = [
  "Complete a simple application form",
  "Show genuine interest in learning software engineering",
  "Commit to attending sessions and completing assignments",
  "Have access to a laptop and stable internet connection",
];

const Scholarship = () => {
  return (
    <section id="scholarship" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-scholarship/10 text-sm font-medium text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-scholarship" />
              Limited Availability
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              90% Scholarship for the Next Cohort
            </h2>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              We believe in making quality tech education accessible. For the upcoming cohort, 
              qualified applicants can access our courses at just <strong className="text-foreground">₦10,000</strong> instead of ₦100,000.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              This scholarship is not free — it's earned. We select students who demonstrate 
              commitment and a genuine desire to learn. Limited slots are available.
            </p>

            {/* Qualification criteria */}
            <div className="space-y-3 mb-8">
              <p className="font-medium text-foreground text-sm">To qualify:</p>
              {qualifications.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="group" asChild>
              <a 
                href="https://forms.google.com/your-form-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Apply for Scholarship
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          {/* Pricing card */}
          <div className="lg:justify-self-end w-full max-w-sm">
            <div className="rounded-lg border border-border bg-card p-8">
              <p className="text-sm text-muted-foreground mb-2">Course fee</p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-foreground">₦10,000</span>
                <span className="text-lg text-muted-foreground line-through">₦100,000</span>
              </div>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-scholarship text-scholarship-foreground text-sm font-medium mb-6">
                90% Scholarship Applied
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground font-medium">12 weeks</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Format</span>
                  <span className="text-foreground font-medium">Online, live sessions</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Certificate</span>
                  <span className="text-foreground font-medium">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
