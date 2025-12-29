import { Clock } from "lucide-react";

const courses = [
  {
    title: "Introduction to Software Engineering",
    duration: "12 Weeks",
    description:
      "Perfect for complete beginners. Learn programming fundamentals, version control, Python, databases, and build your first web application.",
  },
  {
    title: "Backend Web Development (Python & Django)",
    duration: "12 Weeks",
    description:
      "Master backend development with Python and Django. Build production-ready REST APIs, handle authentication, and deploy scalable applications.",
  },
  {
    title: "Backend Web Development (Node.js)",
    duration: "12 Weeks",
    description:
      "Become a Node.js backend developer. Learn Express.js, build REST APIs, implement authentication, and create scalable server-side applications.",
  },
  {
    title: "Frontend Web Development (React)",
    duration: "12 Weeks",
    description:
      "Build modern user interfaces with React. Learn component architecture, state management, API integration, and deploy production-ready applications.",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Structured 12-week programs designed to take you from fundamentals to building real-world applications.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-background border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="w-4 h-4" />
                {course.duration}
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
