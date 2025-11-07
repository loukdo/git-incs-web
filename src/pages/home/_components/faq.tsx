import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "Eiusmod id laboris nulla dolor veniam nisi consequat velit est?",
    answer:
      "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud velit et qu",
  },
  {
    id: "item-2",
    question: "Enim dolore veniam labore commodo mollit enim?",
    answer:
      "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint.",
  },
  {
    id: "item-3",
    question: "Eu ex officia nostrud excepteur qui?",
    answer:
      "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint.",
  },
  {
    id: "item-4",
    question: "Sint occaecat dolor ea officia dolore veniam minim aliquip?",
    answer:
      "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint.",
  },
  {
    id: "item-5",
    question: "Velit nulla ex nostrud consequat incididunt sint qui sint?",
    answer:
      "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint.",
  },
];

export default function FAQ() {
  return (
    <div className="py-12 md:py-20 bg-white -mx-5">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-32">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 text-[#FF6B35]">
          Frequently asked questions
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-12 md:mb-16">
          Exercitation dolore reprehenderit fugi
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-8xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqData.map(faq => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-bold text-gray-900  transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
