import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Samuel Adeyemi",
    role: "Backend Developer",
    quote: "The dotSchool gave me the structure and confidence I was missing. I finally understood how backend systems actually work.",
  },
  {
    name: "Aisha Bello",
    role: "Software Engineering Student",
    quote: "The curriculum is practical and clear. I stopped guessing and started building with real confidence. The mentorship was invaluable.",
  },
  {
    name: "Chinedu Okafor",
    role: "Junior Backend Engineer",
    quote: "Concepts were explained simply without dumbing them down. That's rare. I landed my first tech job 3 months after graduating.",
  },
  {
    name: "Funke Adeola",
    role: "Frontend Developer",
    quote: "I tried learning on my own for years. The dotSchool's structured approach and community made all the difference.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What students say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from developers who've completed our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-medium text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
