import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Apply for the Next Cohort
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Scholarship slots are limited. Apply now to secure your spot and begin your journey in software engineering.
          </p>
          <Button size="xl" asChild>
            <a
              href="https://forms.gle/FYkPynguzYwhhHDz5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for 90% Scholarship
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Enrollment subject to review and scholarship qualification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
