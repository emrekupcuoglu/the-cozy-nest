"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import Navlink from "./Navlink";
import { Button } from "./ui/button";

function Navigation({ className }: { className?: string }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav
      className={cn(
        "flex flex-col items-center justify-center max-lg:pl-8 max-md:pl-0 max-md:text-sm",
        className,
      )}
    >
      <Button
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
        className="bg-background-light hover:bg-card-action z-50 hidden rounded-full p-3 text-white hover:text-black max-md:ml-4 max-md:flex"
      >
        <Menu />
      </Button>
      <div
        className={cn(
          "max-md:bg-overlay flex items-center justify-center gap-16 bg-transparent transition-all max-lg:gap-8 max-md:absolute max-md:-translate-x-[200%] max-md:p-4",
          isMobileNavOpen && "inset-0 max-md:translate-x-0 max-md:flex-col",
        )}
      >
        <ul
          // className={cn(
          //   "bg-overlay flex gap-16 transition-all max-lg:gap-8 max-md:absolute max-md:-translate-x-[200%] max-md:p-4",
          //   isMobileNavOpen && "inset-0 max-md:translate-x-0 max-md:flex-col",
          // )}
          className={cn(
            "flex gap-16 p-4 max-lg:gap-8",
            isMobileNavOpen && "max-md:flex-col",
          )}
        >
          <li className="">
            <Navlink href="/">Home</Navlink>
          </li>
          <li>
            <Navlink href="/products">Products</Navlink>
          </li>
          <li>
            <Navlink href="/">Categories</Navlink>
          </li>
          <li>
            <Navlink href="/">About Us</Navlink>
          </li>
          <li>
            <Navlink href="/">Contact Us</Navlink>
          </li>
          <li>
            <Navlink href="/">Blog</Navlink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
