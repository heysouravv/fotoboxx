'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive exhibition services including booth design, construction, project management, and various add-on services like event catering and technology rentals.",
  },
  {
    question: "How long does it take to build an exhibition stand?",
    answer: "The timeline varies depending on the complexity and size of the stand. Typically, it takes 2-4 weeks for design and 3-7 days for construction.",
  },
  {
    question: "Do you provide international services?",
    answer: "Yes, while we're based in Dubai, we provide exhibition services across the UAE and can support international exhibitions through our global network of partners.",
  },
  {
    question: "What is included in your project management service?",
    answer: "Our project management service includes timeline planning, resource allocation, on-site supervision, quality control, and 24/7 support throughout the exhibition period.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

