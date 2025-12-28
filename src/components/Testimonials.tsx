import { Quote } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const testimonials = [
  {
    name: "Samuel Adeyemi",
    role: "Backend Developer",
    quote: "dotSchool gave me the structure I was missing. I finally understood how backend systems actually work.",
  },
  {
    name: "Aisha Bello",
    role: "Software Engineering Student",
    quote: "The curriculum is practical and clear. I stopped guessing and started building with confidence.",
  },
  {
    name: "Chinedu Okafor",
    role: "Junior Backend Engineer",
    quote: "What stood out was how concepts were explained simply without dumbing them down.",
  },
  {
    name: "Tolu Ogunleye",
    role: "Computer Science Graduate",
    quote: "This was the first program that connected theory to real projects for me.",
  },
];

const Testimonials = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Student Stories
          </span>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-[1.2] transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            What Our Students Say
          </h2>
          <p 
            className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Hear from students who have transformed their careers through our programs.
          </p>
        </div>

        {/* Testimonials grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`p-6 rounded-lg bg-card border border-border/60 shadow-card transition-all duration-500 hover:-translate-y-1 ${
                gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <Quote className="w-6 h-6 text-primary/30 mb-4" />
              
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
