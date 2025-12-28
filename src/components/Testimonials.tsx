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
    quote: "Concepts were explained simply without dumbing them down. That's rare.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What students say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
