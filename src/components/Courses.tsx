import CourseCard from "./CourseCard";
import AnimatedSection from "./AnimatedSection";

const courses = [
  {
    title: "Introduction to Software Engineering",
    description: "Perfect for complete beginners. Learn programming fundamentals, version control, Python, databases, and build your first web application with Django.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    discount: "90%",
    color: "indigo" as const,
    outline: [
      { week: "Week 1", topic: "Onboarding, Developer Mindset & PC Setup" },
      { week: "Week 2", topic: "Shell Basics & Systems Engineering" },
      { week: "Week 3", topic: "Git & GitHub (Version Control)" },
      { week: "Week 4", topic: "Python Basics" },
      { week: "Week 5", topic: "Python Data Structures" },
      { week: "Week 6", topic: "Conditions, Booleans, Loops & Iterations" },
      { week: "Week 7", topic: "Functions, Modules & Intro to OOP" },
      { week: "Week 8", topic: "Files, OS Module & Exceptions" },
      { week: "Week 9", topic: "Databases & SQL Fundamentals" },
      { week: "Week 10", topic: "Intro to Web Development & Django" },
      { week: "Week 11", topic: "Django Models, Views & Templates" },
      { week: "Week 12", topic: "Final Project & Review" },
    ],
  },
  {
    title: "Backend Web Development (Python)",
    description: "Master backend development with Python and Django. Build production-ready REST APIs, handle authentication, and deploy scalable applications.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    discount: "90%",
    color: "terracotta" as const,
    outline: [
      { week: "Week 1–3", topic: "Common Engineering Foundations" },
      { week: "Week 4", topic: "Object-Oriented Programming (OOP) in Python" },
      { week: "Week 5", topic: "Django Architecture & Project Structure" },
      { week: "Week 6", topic: "Models, ORM & Database Design" },
      { week: "Week 7", topic: "REST APIs & Django REST Framework" },
      { week: "Week 8", topic: "Authentication & Authorization" },
      { week: "Week 9", topic: "Filtering, Pagination & Optimization" },
      { week: "Week 10", topic: "Caching, Performance & Security" },
      { week: "Week 11", topic: "Testing & Documentation" },
      { week: "Week 12", topic: "Capstone Backend Project" },
    ],
  },
  {
    title: "Backend Web Development (Node.js)",
    description: "Become a Node.js backend developer. Learn Express.js, build REST APIs, implement authentication, and create scalable server-side applications.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    discount: "90%",
    color: "gold" as const,
    outline: [
      { week: "Week 1–3", topic: "Common Engineering Foundations" },
      { week: "Week 4", topic: "JavaScript Fundamentals for Backend" },
      { week: "Week 5", topic: "Node.js Runtime & Project Structure" },
      { week: "Week 6", topic: "Express.js & REST APIs" },
      { week: "Week 7", topic: "Databases & Data Modeling" },
      { week: "Week 8", topic: "Authentication & Authorization" },
      { week: "Week 9", topic: "Middleware & Error Handling" },
      { week: "Week 10", topic: "Performance, Caching & Security" },
      { week: "Week 11", topic: "Testing & Documentation" },
      { week: "Week 12", topic: "Capstone Backend Project" },
    ],
  },
  {
    title: "Frontend Web Development (React)",
    description: "Build modern, responsive, and interactive web interfaces using industry-standard frontend tools including React and modern JavaScript.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    discount: "90%",
    color: "indigo" as const,
    outline: [
      { week: "Week 1", topic: "Onboarding, Developer Mindset & PC Setup" },
      { week: "Week 2", topic: "Shell Basics & Systems Engineering" },
      { week: "Week 3", topic: "Git & GitHub (Version Control)" },
      { week: "Week 4", topic: "JavaScript Fundamentals for Frontend (Syntax, Functions, DOM Basics)" },
      { week: "Week 5", topic: "Modern JavaScript (ES6+, Modules, Async & Fetch)" },
      { week: "Week 6", topic: "Web Fundamentals (HTML, CSS & Responsive Design Essentials)" },
      { week: "Week 7", topic: "React Fundamentals (Components, JSX, Props & State)" },
      { week: "Week 8", topic: "React Hooks & Component Lifecycle" },
      { week: "Week 9", topic: "Routing, Layouts & State Management" },
      { week: "Week 10", topic: "Consuming APIs, Forms & Authentication Flows" },
      { week: "Week 11", topic: "Performance, Reusability & Frontend Best Practices" },
      { week: "Week 12", topic: "Capstone React Project & Review" },
    ],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-foreground text-sm font-medium mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Choose Your{" "}
            <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Whether you're starting from scratch or leveling up your skills, we have a program designed for your goals.
          </p>
        </AnimatedSection>

        {/* Course cards grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {courses.map((course, index) => (
            <AnimatedSection
              key={course.title}
              animation="scale-in"
              delay={index * 100}
            >
              <CourseCard {...course} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
