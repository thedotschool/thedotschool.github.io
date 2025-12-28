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
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Student Stories
          </div>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            What Our{" "}
            <span className="text-primary">Students Say</span>
          </h2>
          <p 
            className={`mt-6 text-lg text-muted-foreground leading-relaxed transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Hear from students who have transformed their careers through our programs.
          </p>
        </div>

        {/* Testimonials grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 ${
                gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Quote text */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder with initials */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
