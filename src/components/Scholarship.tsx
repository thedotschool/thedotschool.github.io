import { GraduationCap, CheckCircle2, Clock } from "lucide-react";
import { useInView, useCountUp } from "@/hooks/use-animations";

const benefits = [
  "90% reduction on course fees (₦100,000 → ₦10,000)",
  "Full access to all course materials and resources",
  "Direct mentorship from experienced engineers",
  "Certificate of completion",
  "Access to alumni community and job opportunities",
];

const Scholarship = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const { count: discountCount, ref: discountRef } = useCountUp(90, 2000);

  return (
    <section id="scholarship" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container relative z-10" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div 
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <Clock className="w-4 h-4" />
              Limited Time Scholarship
            </div>
            
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span ref={discountRef}>{discountCount}%</span> Scholarship{" "}
              <span className="text-secondary">for Next Cohort</span>
            </h2>
            
            <p 
              className={`text-lg text-muted-foreground leading-relaxed mb-8 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              We believe quality tech education should be accessible. For the next cohort only, we're offering a 90% scholarship to qualified students, reducing the course fee from ₦100,000 to just ₦10,000.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Visual card */}
          <div 
            className={`relative transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-primary rounded-3xl p-8 md:p-10 shadow-elevated">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                  How to Qualify
                </h3>
                
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Simply apply through our enrollment form. We review each application to ensure students are committed to learning and growth.
                </p>

                <div className="bg-primary-foreground/10 rounded-2xl p-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-primary-foreground/70 mb-1">Original Price</div>
                      <div className="text-xl text-primary-foreground/60 line-through">₦100,000</div>
                    </div>
                    <div className="w-8 h-0.5 bg-secondary rounded-full" />
                    <div className="text-center">
                      <div className="text-sm text-accent mb-1">With Scholarship</div>
                      <div className="text-3xl font-heading font-bold text-accent">₦10,000</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
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
