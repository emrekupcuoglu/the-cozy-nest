"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rounded-t-full", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  icon,
  isSelected,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  icon?: React.ReactNode;
  isSelected?: boolean;
}) {
  return (
    <AccordionPrimitive.Header className="flex data-[state=open]:text-white">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 data-[state=open]:bg-background-hero flex flex-1 items-start justify-between gap-4 rounded-t-md py-4 text-left text-sm font-medium outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        {/* {!icon && (
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        )}
        {icon} */}
        {isSelected && (
          <span className="w-16 rounded-full bg-white px-4 py-2 text-center text-xl font-bold text-black">
            <IoClose className="mx-auto" />
          </span>
        )}
        {!isSelected && (
          <span className="w-16 rounded-full bg-white px-4 py-2 text-center text-xl font-bold text-black">
            <HiArrowLongRight className="mx-auto text-center" />
          </span>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-background-hero overflow-hidden rounded-b-md text-sm data-[state=open]:text-white"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
