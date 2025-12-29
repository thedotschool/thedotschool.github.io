const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Backend Developer",
    quote:
      "The structured curriculum and hands-on projects helped me transition from complete beginner to landing my first developer role in 6 months.",
  },
  {
    name: "Tunde Afolabi",
    role: "Software Engineer",
    quote:
      "Best decision I made for my career. The mentorship and real-world projects gave me confidence to build production applications.",
  },
  {
    name: "Chidinma Eze",
    role: "Full Stack Developer",
    quote:
      "Clear, practical teaching. No fluff. I learned more in 12 weeks than I did in months of self-study.",
  },
  {
    name: "Olumide Balogun",
    role: "Junior Developer",
    quote:
      "The scholarship made it possible for me to access quality education. Now I'm working at a tech company I never thought I could join.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from graduates who transformed their careers through our programs.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background border border-border rounded-xl p-6 md:p-8"
            >
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
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
