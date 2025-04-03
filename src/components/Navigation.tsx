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
        aria-label="Open menu"
        className="bg-background-light hover:bg-card-action z-50 hidden self-start rounded-full p-3 text-white hover:text-black max-md:flex"
      >
        <Menu />
      </Button>
      <div
        className={cn(
          "max-md:bg-overlay duration-400 left-0 top-0 flex w-full flex-col items-center justify-center gap-16 p-4 opacity-100 transition-all max-lg:gap-8 max-md:absolute max-md:h-96 max-md:-translate-x-[200%] max-md:opacity-0 max-md:backdrop-blur-md",
          isMobileNavOpen && "max-md:translate-x-0 max-md:opacity-100",
        )}
      >
        <ul
          className={cn(
            "z-50 flex gap-16 p-4 max-lg:gap-8 max-md:flex-col max-md:text-base",
          )}
        >
          <li onClick={() => setIsMobileNavOpen(false)}>
            <Navlink href="/">Home</Navlink>
          </li>
          <li onClick={() => setIsMobileNavOpen(false)}>
            <Navlink href="/products">Products</Navlink>
          </li>
          <li onClick={() => setIsMobileNavOpen(false)}>
            <Navlink href="/">Categories</Navlink>
          </li>
          <li onClick={() => setIsMobileNavOpen(false)}>
            <Navlink href="/">About Us</Navlink>
          </li>
          <li onClick={() => setIsMobileNavOpen(false)}>
            <Navlink href="/">Contact Us</Navlink>
          </li>
          <li onClick={() => setIsMobileNavOpen(false)}>
            <Navlink href="/">Blog</Navlink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
