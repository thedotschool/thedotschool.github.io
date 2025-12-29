import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No prior experience is required for the Introduction to Software Engineering course. For Backend and Frontend courses, we recommend completing the intro course first or having equivalent foundational knowledge."
  },
  {
    question: "How do I qualify for the 90% scholarship?",
    answer: "Apply through our enrollment form. We review applications based on your commitment to learning and ability to dedicate time to the program. Most dedicated applicants qualify for the scholarship."
  },
  {
    question: "What equipment do I need?",
    answer: "A laptop with at least 4GB RAM and stable internet connection. We'll help you set up all necessary software during Week 1 of your course."
  },
  {
    question: "How are classes conducted?",
    answer: "Classes are fully online with live sessions, recorded lessons, hands-on projects, and mentorship. You'll learn through a mix of self-paced content and weekly live sessions with instructors."
  },
  {
    question: "What's the weekly time commitment?",
    answer: "Plan for 15-20 hours per week, including 2-3 hours of live sessions, self-paced learning, and project work. Consistency is more important than cramming."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. Upon completing your course and final project, you'll receive a certificate of completion along with a portfolio of projects you can show to employers."
  },
  {
    question: "Is the scholarship available every cohort?",
    answer: "The 90% scholarship is currently available for the next cohort only. Future scholarship availability depends on funding and may vary. Apply now to secure your spot."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about The dotSchool.
          </p>
        </div>

        <div className="max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-5 bg-card data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4 text-[15px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
