"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="pb-24">
      <Accordion type="single" className="flex flex-col gap-8">
        <AccordionItem className="" value="1">
          <AccordionTrigger
            className="bg-card-grey p-4 text-2xl"
            isSelected={selectedIndex === 0}
            onClick={() => setSelectedIndex(0)}
          >
            What is your return policy?
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <p className="text-lg">
              We offer a 30-day return policy. If you are not satisfied with
              your purchase, you can return it within 30 days of receiving your
              order.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger
            className="bg-card-grey p-4 text-2xl"
            isSelected={selectedIndex === 1}
            onClick={() => setSelectedIndex(1)}
          >
            <p>How long does shipping take?</p>
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <p className="text-lg">
              Shipping times vary depending on your location. Typically, orders
              are processed within 2-3 business days and shipping takes an
              additional 5-7 business days.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;
