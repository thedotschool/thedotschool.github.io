import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Scholarship from "@/components/Scholarship";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TechSchool - Building Africa's Next Generation of Software Engineers</title>
        <meta 
          name="description" 
          content="Learn practical software engineering skills with our 12-week programs. From Python to Node.js backend development. 90% scholarship available for qualified students." 
        />
        <meta name="keywords" content="software engineering, coding bootcamp, Africa tech, Python, Django, Node.js, backend development, programming courses" />
        <link rel="canonical" href="https://techschool.africa" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Courses />
          <FAQ />
          <Scholarship />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
