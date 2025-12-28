import { GraduationCap, CheckCircle2, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const benefits = [
  "90% reduction on course fees (₦100,000 → ₦10,000)",
  "Full access to all course materials and resources",
  "Direct mentorship from experienced engineers",
  "Certificate of completion",
  "Access to alumni community and job opportunities",
];

const Scholarship = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="scholarship" className="py-24 md:py-32 bg-background">
      <div className="container" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span 
              className={`inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <Clock className="w-4 h-4" />
              Limited Time Offer
            </span>
            
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-[1.2] mb-6 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              90% Scholarship for the Next Cohort
            </h2>
            
            <p 
              className={`text-muted-foreground leading-relaxed mb-8 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              We believe quality tech education should be accessible. For the next cohort only, we're offering a 90% scholarship to qualified students, reducing the course fee from ₦100,000 to just ₦10,000.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Card */}
          <div 
            className={`transition-all duration-600 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-primary rounded-lg p-8 shadow-card">
              <div className="text-center">
                <GraduationCap className="w-14 h-14 text-primary-foreground mx-auto mb-6" />
                
                <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-4">
                  How to Qualify
                </h3>
                
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Apply through our enrollment form. We review each application to ensure students are committed to learning and growth.
                </p>

                <div className="bg-primary-foreground/10 rounded-lg p-6">
                  <div className="flex items-center justify-center gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-primary-foreground/60 mb-1">Original</div>
                      <div className="text-lg text-primary-foreground/50 line-through">₦100,000</div>
                    </div>
                    <div className="w-8 h-px bg-primary-foreground/20" />
                    <div className="text-center">
                      <div className="text-sm text-accent mb-1">With Scholarship</div>
                      <div className="text-3xl font-heading font-bold text-accent">₦10,000</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                    <Clock className="w-3 h-3" />
                    Next cohort only
                  </div>
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
