import { Target, BookOpen, Users, Code2 } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const features = [
  {
    icon: Target,
    title: "Practical Learning",
    description: "No fluff — real engineering skills you can apply immediately in the industry."
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "12-week programs taking you from fundamentals to building production projects."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from experienced software engineers who guide you every step."
  },
  {
    icon: Code2,
    title: "Project-Based",
    description: "Build a portfolio of real projects that showcase your skills to employers."
  }
];

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span 
            className={`inline-block text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About dotSchool
          </span>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-[1.2] transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Building Real Engineering Skills
          </h2>
          <p 
            className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            dotSchool Africa is on a mission to help beginners and aspiring developers build practical software engineering skills. Our programs focus on backend engineering, problem-solving, and real-world project experience.
          </p>
        </div>

        {/* Features grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`p-6 rounded-lg bg-card border border-border/60 shadow-card transition-all duration-500 hover:-translate-y-1 ${
                gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal geometric divider */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <div className="h-px w-12 bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
};

export default About;
