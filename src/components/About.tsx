import { Code, Users, Target, Briefcase } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Practical curriculum",
    description: "Every lesson connects to real projects. No theory without application."
  },
  {
    icon: Users,
    title: "Mentorship & community",
    description: "Work with experienced engineers and learn alongside committed peers."
  },
  {
    icon: Target,
    title: "Discipline-focused",
    description: "We select for commitment. Success requires consistency and dedication."
  },
  {
    icon: Briefcase,
    title: "Job-ready portfolio",
    description: "Graduate with a portfolio of real projects to show employers."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is The dotSchool?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The dotSchool is an online software engineering school built for beginners and early-career developers. 
            We focus on practical, project-based learning that prepares you for real engineering work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="p-6 rounded-lg bg-card border border-border"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
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
