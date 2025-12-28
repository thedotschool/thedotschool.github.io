import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/use-animations";

const faqs = [
  {
    question: "Do I need prior coding experience to enroll?",
    answer: "No prior experience is required for our Introduction to Software Engineering course. It's designed for complete beginners. However, for the Backend Web Development courses (Python or Node.js), we recommend completing the introductory course first or having equivalent foundational knowledge."
  },
  {
    question: "How do I qualify for the 90% scholarship?",
    answer: "Simply apply through our enrollment form. We review each application based on your commitment to learning and career goals. Most students who demonstrate genuine interest and dedication qualify for the scholarship."
  },
  {
    question: "What equipment do I need?",
    answer: "You'll need a laptop or desktop computer with at least 4GB RAM and a stable internet connection. We'll guide you through setting up all necessary software during the first week of the course."
  },
  {
    question: "How are classes conducted?",
    answer: "Our programs combine live online sessions, recorded lessons, hands-on projects, and one-on-one mentorship. You'll have access to our learning platform 24/7 and can learn at your own pace while meeting weekly project deadlines."
  },
  {
    question: "What is the time commitment per week?",
    answer: "We recommend dedicating 15-20 hours per week to the program. This includes live sessions (2-3 hours), self-paced learning, and project work. The program is designed to be manageable alongside work or school."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes! Upon successfully completing the course and final project, you'll receive a certificate of completion. You'll also have a portfolio of projects to showcase to potential employers."
  },
  {
    question: "What happens if I miss a class?",
    answer: "All live sessions are recorded and available on our platform. If you miss a class, you can watch the recording and catch up. Our mentors are also available to help you with any questions."
  },
  {
    question: "Can I take multiple courses?",
    answer: "Absolutely! Many students start with the Introduction course and then progress to one of the Backend Development courses. Each course builds on the previous one, creating a comprehensive learning path."
  },
];

const FAQ = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: accordionRef, isInView: accordionInView } = useInView({ threshold: 0.1 });

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Got Questions?
          </span>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-[1.2] transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className={`mt-6 text-muted-foreground leading-relaxed transition-all duration-500 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Everything you need to know about our programs, enrollment, and learning experience.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto" ref={accordionRef}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-card border border-border/60 rounded-lg px-6 shadow-subtle transition-all duration-500 data-[state=open]:shadow-card ${
                  accordionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Minimal divider */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <div className="h-px w-12 bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
