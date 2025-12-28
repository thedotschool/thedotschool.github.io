import { Target, BookOpen, Users, Code2 } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

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
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div 
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            About Our School
          </div>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Building Real{" "}
            <span className="text-secondary">Engineering Skills</span>
          </h2>
          <p 
            className={`mt-6 text-lg text-muted-foreground leading-relaxed transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            dotSchool Africa is on a mission to help beginners and aspiring developers build practical software engineering skills. Our programs focus on backend engineering, problem-solving, and real-world project experience.
          </p>
        </div>

        {/* Features grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group p-6 md:p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-border/50 cursor-pointer ${
                gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary transition-transform group-hover:rotate-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mt-16">
          <div className={`h-1 rounded-full bg-secondary transition-all duration-700 ${gridInView ? "w-8" : "w-0"}`} style={{ transitionDelay: "600ms" }} />
          <div className={`h-1 rounded-full bg-accent transition-all duration-700 ${gridInView ? "w-4" : "w-0"}`} style={{ transitionDelay: "700ms" }} />
          <div className={`h-1 rounded-full bg-primary transition-all duration-700 ${gridInView ? "w-8" : "w-0"}`} style={{ transitionDelay: "800ms" }} />
        </div>
      </div>
    </section>
  );
};

export default About;
