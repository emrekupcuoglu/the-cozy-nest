"use client";
import HeroImage from "./HeroImage";
import image1 from "@/../public/furniture-1.jpg";
import image2 from "@/../public/furniture-2.jpg";
import image3 from "@/../public/furniture-3.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import Button from "@/components/Button";

import { useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

function HeroGallery({ className }: { className?: string }) {
  const [selected, setSelected] = useState(0);

  function handleSelect(index: number) {
    setSelected(index);
  }

  function handleNext() {
    setSelected((prev) => (prev + 1) % 3);
  }

  function handlePrev() {
    setSelected((prev) => (prev - 1 + 3) % 3);
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex gap-2">
        <HeroImage
          quantity={800}
          category="Bed Room"
          onClick={() => handleSelect(0)}
          isActive={selected === 0}
          src={image1}
        />
        <HeroImage
          quantity={300}
          category="Living Room"
          onClick={() => handleSelect(1)}
          isActive={selected === 1}
          src={image2}
        />
        <HeroImage
          quantity={600}
          category="Guest Room"
          onClick={() => handleSelect(2)}
          isActive={selected === 2}
          src={image3}
        />
      </div>

      <div className="flex gap-6">
        <Button
          onClick={handlePrev}
          className={`${selected !== 0 ? "bg-action hover:bg-card-action" : "bg-background-light"} w-20 rounded-full px-4 py-2`}
          disabled={selected === 0}
        >
          <HiArrowLongLeft />
        </Button>
        <Button
          onClick={handleNext}
          className={`${selected !== 2 ? "bg-action hover:bg-card-action" : "bg-background-light"} w-20 rounded-full px-4 py-2`}
          disabled={selected === 2}
        >
          <HiArrowLongRight />
        </Button>
      </div>
    </div>
  );
}

export default HeroGallery;
