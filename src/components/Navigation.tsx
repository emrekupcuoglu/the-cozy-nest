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
        "flex w-full flex-col items-center justify-center max-lg:pl-8 max-md:pl-0 max-md:text-sm",
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
          "max-md:bg-overlay left-0 top-0 flex w-full flex-col items-center justify-center gap-16 p-4 opacity-100 transition-all duration-1000 max-lg:gap-8 max-md:absolute max-md:h-96 max-md:-translate-x-[200%] max-md:opacity-0 max-md:backdrop-blur-md",
          isMobileNavOpen && "translate-x-0 opacity-100",
        )}
      >
        <ul
          className={cn(
            "flex gap-16 p-4 max-lg:gap-8 max-md:flex-col max-md:text-base",
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
