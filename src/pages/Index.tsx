import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Scholarship from "@/components/Scholarship";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The dotSchool - Learn Practical Software Engineering Skills</title>
        <meta
          name="description"
          content="Hands-on software engineering training in 12-week programs. Build production-ready applications with Python, Django, Node.js, and React. 90% scholarship available."
        />
        <meta
          name="keywords"
          content="software engineering, coding bootcamp, Python, Django, Node.js, React, backend development, frontend development, programming courses"
        />
        <link rel="canonical" href="https://dotschool.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Courses />
          <Scholarship />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
