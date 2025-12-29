import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chinedu Okonkwo",
    role: "Software Engineer, Paystack",
    quote: "This program changed my life. I went from writing my first line of code to building production APIs in just 12 weeks.",
    image: null,
  },
  {
    name: "Amina Bello",
    role: "Backend Developer",
    quote: "The mentorship was incredible. My instructor didn't just teach—they made sure I truly understood every concept before moving on. The 90% scholarship made it possible for me to pursue my dream.",
    image: null,
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Junior Developer, Flutterwave",
    quote: "Best decision I ever made. The curriculum is practical and job-focused.",
    image: null,
  },
  {
    name: "Fatima Abdullahi",
    role: "Freelance Developer",
    quote: "I was skeptical at first, but the structured approach and real projects gave me confidence. Within two months of graduating, I landed my first client. The community support continues even after the program ends.",
    image: null,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background pattern-african-dark">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Hear From Our{" "}
            <span className="text-gradient">Graduates</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from students who transformed their careers
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Quote text */}
              <blockquote className="text-foreground leading-relaxed mb-6 pt-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-heading font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
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
