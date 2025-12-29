import { Target, BookOpen, Users, Code2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Target,
    title: "Practical Learning",
    description: "No fluff — just real engineering skills you can use immediately in the industry."
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "12-week programs designed to take you from fundamentals to building real projects."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from experienced software engineers who guide you every step of the way."
  },
  {
    icon: Code2,
    title: "Project-Based",
    description: "Build a portfolio of real projects that showcase your skills to employers."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background pattern-african-dark">
      <div className="container">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            About Our School
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Building Real{" "}
            <span className="text-secondary">Engineering Skills</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We're on a mission to help beginners and aspiring developers in Africa build practical software engineering skills. Our programs cover frontend and backend engineering, problem-solving, and real-world project experience.
          </p>
        </AnimatedSection>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group p-6 md:p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mt-16">
          <div className="h-1 w-8 rounded-full bg-secondary" />
          <div className="h-1 w-4 rounded-full bg-accent" />
          <div className="h-1 w-8 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default About;
