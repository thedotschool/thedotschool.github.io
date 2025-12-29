import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Introduction to Software Engineering",
    description: "For complete beginners. Learn programming fundamentals, version control, Python basics, and build your first web application.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    outline: [
      { week: "Week 1", topic: "Developer mindset & environment setup" },
      { week: "Week 2", topic: "Shell basics & systems engineering" },
      { week: "Week 3", topic: "Git & GitHub" },
      { week: "Week 4", topic: "Python basics" },
      { week: "Week 5", topic: "Python data structures" },
      { week: "Week 6", topic: "Control flow & iterations" },
      { week: "Week 7", topic: "Functions & OOP introduction" },
      { week: "Week 8", topic: "Files & exceptions" },
      { week: "Week 9", topic: "Databases & SQL" },
      { week: "Week 10", topic: "Web development basics" },
      { week: "Week 11", topic: "Building a web application" },
      { week: "Week 12", topic: "Final project" },
    ],
  },
  {
    title: "Backend Web Development (Python & Django)",
    description: "Master backend development with Python and Django. Build production-ready REST APIs, authentication, and scalable applications.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    outline: [
      { week: "Week 1–3", topic: "Engineering foundations" },
      { week: "Week 4", topic: "OOP in Python" },
      { week: "Week 5", topic: "Django architecture" },
      { week: "Week 6", topic: "Models & database design" },
      { week: "Week 7", topic: "REST APIs & DRF" },
      { week: "Week 8", topic: "Authentication & authorization" },
      { week: "Week 9", topic: "Filtering & pagination" },
      { week: "Week 10", topic: "Performance & security" },
      { week: "Week 11", topic: "Testing & documentation" },
      { week: "Week 12", topic: "Capstone project" },
    ],
  },
  {
    title: "Backend Web Development (Node.js)",
    description: "Become a Node.js developer. Learn Express.js, build REST APIs, implement authentication, and create scalable server applications.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    outline: [
      { week: "Week 1–3", topic: "Engineering foundations" },
      { week: "Week 4", topic: "JavaScript for backend" },
      { week: "Week 5", topic: "Node.js runtime" },
      { week: "Week 6", topic: "Express.js & REST APIs" },
      { week: "Week 7", topic: "Databases & modeling" },
      { week: "Week 8", topic: "Authentication & JWT" },
      { week: "Week 9", topic: "Middleware & error handling" },
      { week: "Week 10", topic: "Performance & security" },
      { week: "Week 11", topic: "Testing & documentation" },
      { week: "Week 12", topic: "Capstone project" },
    ],
  },
  {
    title: "Frontend Web Development (React)",
    description: "Build modern web interfaces with React. Learn component architecture, state management, API integration, and responsive design.",
    duration: "12 Weeks",
    originalPrice: "₦100,000",
    currentPrice: "₦10,000",
    isNew: true,
    outline: [
      { week: "Week 1–2", topic: "HTML, CSS & JavaScript fundamentals" },
      { week: "Week 3", topic: "Modern JavaScript (ES6+)" },
      { week: "Week 4", topic: "React fundamentals & JSX" },
      { week: "Week 5", topic: "Components & props" },
      { week: "Week 6", topic: "State management & hooks" },
      { week: "Week 7", topic: "Forms & user input" },
      { week: "Week 8", topic: "API integration & async" },
      { week: "Week 9", topic: "Routing & navigation" },
      { week: "Week 10", topic: "Styling & responsive design" },
      { week: "Week 11", topic: "Testing & deployment" },
      { week: "Week 12", topic: "Capstone project" },
    ],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Courses
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Choose the path that fits your goals. Each course is 12 weeks of structured, hands-on learning with real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
