import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>dotSchool — Learn Software Engineering</title>
        <meta 
          name="description" 
          content="dotSchool is a 12-week program that teaches practical software engineering skills. 90% scholarship available for the next cohort." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Courses />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
