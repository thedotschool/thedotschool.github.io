const features = [
  {
    title: "Practical curriculum",
    description: "Every lesson connects to real projects. No theory without application."
  },
  {
    title: "12-week programs",
    description: "Structured courses designed to take you from beginner to job-ready."
  },
  {
    title: "1:1 mentorship",
    description: "Work directly with experienced engineers who guide your learning."
  },
  {
    title: "Project-based",
    description: "Build a portfolio of real projects to show employers."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is dotSchool?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            dotSchool is an online software engineering school focused on teaching practical, job-ready skills. We believe in learning by building — every concept is taught through real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
