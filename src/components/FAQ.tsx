import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No prior experience is required for the Introduction course. For Backend courses, we recommend completing the intro course first."
  },
  {
    question: "How do I qualify for the scholarship?",
    answer: "Apply through our enrollment form. We review applications based on commitment to learning. Most dedicated applicants qualify."
  },
  {
    question: "What equipment do I need?",
    answer: "A laptop with at least 4GB RAM and stable internet. We'll help you set up all necessary software in Week 1."
  },
  {
    question: "How are classes conducted?",
    answer: "Online: live sessions, recorded lessons, hands-on projects, and 1:1 mentorship. Learn at your own pace with weekly deadlines."
  },
  {
    question: "What's the time commitment?",
    answer: "15-20 hours per week including live sessions (2-3 hours), self-paced learning, and projects."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. Complete the course and final project to receive a certificate and portfolio of projects."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQ
          </h2>
        </div>

        <div className="max-w-2xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
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
