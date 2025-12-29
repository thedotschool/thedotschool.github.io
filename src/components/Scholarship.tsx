import { GraduationCap, CheckCircle2, Star } from "lucide-react";

const benefits = [
  "90% reduction on course fees (₦100,000 → ₦10,000)",
  "Full access to all course materials and resources",
  "Direct mentorship from experienced engineers",
  "Certificate of completion",
  "Access to alumni community and job opportunities",
];

const Scholarship = () => {
  return (
    <section id="scholarship" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-african-dark" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-foreground text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Limited Scholarship
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              90% Scholarship{" "}
              <span className="text-secondary">Available</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe quality tech education should be accessible. That's why we offer a 90% scholarship to qualified students, reducing the course fee from ₦100,000 to just ₦10,000.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Visual card */}
          <div className="relative">
            <div className="bg-primary rounded-3xl p-8 md:p-10 shadow-elevated pattern-african">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-accent mx-auto mb-6" />
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                  How to Qualify
                </h3>
                
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Simply apply through our enrollment form. We review each application to ensure students are committed to learning and growth.
                </p>

                <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-primary-foreground/70 mb-1">Original Price</div>
                      <div className="text-xl text-primary-foreground/60 line-through">₦100,000</div>
                    </div>
                    <div className="w-8 h-0.5 bg-accent rounded-full" />
                    <div className="text-center">
                      <div className="text-sm text-accent mb-1">With Scholarship</div>
                      <div className="text-3xl font-heading font-bold text-accent">₦10,000</div>
                    </div>
                  </div>
                  <p className="text-xs text-primary-foreground/60">
                    *Scholarship subject to qualification review
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
