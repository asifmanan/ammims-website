// src/app/admissions/FAQ.tsx

import { FaqSectionData } from "@/types/Admissions";
interface FaqSectionDataProps {
  data: FaqSectionData;
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ({data}: FaqSectionDataProps) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-jet">
          {data.title}
        </h2>
        <p className="mt-4 text-center text-jet/80 max-w-2xl mx-auto">
          {data.description}
        </p>

        <div className="mt-10">
          {data.questions.map((item) => (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
