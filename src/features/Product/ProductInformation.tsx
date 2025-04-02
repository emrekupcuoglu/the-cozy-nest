"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductTechnicalDetails from "./ProductTechnicalDetails";
import { Tables } from "@/lib/supabase/database.types";

function ProductInformation({ product }: { product: Tables<"Product"> }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="flex justify-center gap-2 pb-8">
        <Button
          onClick={() => setActiveTab("description")}
          className="border-card-action text-card-action hover:bg-card-action rounded-full border bg-white px-8 py-4 text-xl hover:text-white"
          size="lg"
        >
          Description
        </Button>
        <Button
          onClick={() => setActiveTab("technical-information")}
          className="border-card-action text-card-action hover:bg-card-action rounded-full border bg-white px-8 py-4 text-xl hover:text-white"
          size="lg"
        >
          Technical Information
        </Button>
      </div>

      {activeTab === "description" && <ProductDescription />}
      {activeTab === "technical-information" && <ProductTechnicalDetails />}
    </div>
  );
}

export default ProductInformation;
