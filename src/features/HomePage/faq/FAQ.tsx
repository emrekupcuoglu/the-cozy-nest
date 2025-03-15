"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="pb-24">
      <Accordion type="single" className="flex flex-col gap-8">
        <AccordionItem className="" value="1">
          <AccordionTrigger
            className="bg-card-grey p-4 text-2xl"
            onClick={() => setSelectedIndex(0)}
            icon={
              selectedIndex === 0 ? (
                <span className="w-16 rounded-full bg-white px-4 py-2 text-center text-xl font-bold text-black">
                  <IoClose className="mx-auto" />
                </span>
              ) : (
                <span className="w-16 rounded-full bg-white px-4 py-2 text-center text-xl font-bold text-black">
                  <HiArrowLongRight className="mx-auto text-center" />
                </span>
              )
            }
          >
            What is your return policy?
          </AccordionTrigger>
          <AccordionContent className="data-[state=open]:bg-background-hero p-4">
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
            onClick={() => setSelectedIndex(1)}
            icon={
              selectedIndex === 1 ? (
                <span className="w-16 rounded-full bg-white px-4 py-2 text-center text-xl font-bold text-black">
                  <IoClose className="mx-auto" />
                </span>
              ) : (
                <span className="w-16 rounded-full bg-white px-4 py-2 text-center text-xl font-bold text-black">
                  <HiArrowLongRight className="mx-auto text-center" />
                </span>
              )
            }
          >
            <p>How long does shipping take?</p>
          </AccordionTrigger>
          <AccordionContent className="data-[state=open]:bg-background-hero p-4">
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
