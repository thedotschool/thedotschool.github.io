import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need any prior coding experience?",
    answer: "No! Our Introduction to Software Engineering course is designed for complete beginners. We start from the basics and gradually build up your skills. All you need is a working laptop and a willingness to learn."
  },
  {
    question: "How does the 90% scholarship work?",
    answer: "Thanks to our community contributors, the first 100 students in each course have their scholarships fully sponsored. This reduces the course fee from ₦100,000 to just ₦10,000. Simply apply through our enrollment form and we will review your application."
  },
  {
    question: "What happens after I apply?",
    answer: "Once you submit your application, our team will review it within 2-3 business days. If approved for the scholarship, you will receive an email with payment instructions and your course start date."
  },
  {
    question: "How are the classes delivered?",
    answer: "Classes are delivered through a combination of live virtual sessions, recorded lessons, and hands-on projects. You'll also have access to mentors for one-on-one support throughout the program."
  },
  {
    question: "What if I can't keep up with the pace?",
    answer: "We understand everyone learns differently. Our instructors ensure you truly understand each concept before moving on. You will also have access to recorded sessions to review at your own pace, plus dedicated office hours for extra help."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Yes! Upon successful completion of the program and your capstone project, you will receive a certificate of completion. More importantly, you will have a portfolio of real projects to showcase to potential employers."
  },
  {
    question: "What equipment do I need?",
    answer: "You will need a laptop (Windows, Mac, or Linux) with at least 4GB RAM and a stable internet connection. We will guide you through setting up all the necessary software during the first week."
  },
  {
    question: "Can I take multiple courses?",
    answer: "Absolutely! Many students start with the Introduction to Software Engineering course and then proceed to either the Backend (Python or Node.js) or Frontend track. Each course is self-contained but builds on foundational skills."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-foreground text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our programs
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
