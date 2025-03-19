import Featured from "@/features/HomePage/featured-categories/Featured";
import NewCollection from "@/features/HomePage/new-collection/NewCollection";
import TrendingProducts from "@/features/HomePage/trending-products/TrendingProducts";
import { Metadata } from "next";
import { Suspense } from "react";
import Hero from "../features/HomePage/hero/Hero";

import BlogShowcase from "@/features/HomePage/blog-showcase/BlogShowcase";
import FAQ from "@/features/HomePage/faq/FAQ";
import FlashSale from "@/features/HomePage/flash-sale/FlashSale";
import NewsletterBanner from "@/features/HomePage/newsletter-banner/NewsletterBanner";
import Testimonials from "@/features/HomePage/testimonials/Testimonials";

export const metadata: Metadata = { title: "Cozy Nest | Build your dream" };
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="mx-auto flex max-w-7xl flex-col">
        <NewCollection />
        <Featured />
        <Suspense fallback={<div>Loading...</div>}>
          <TrendingProducts />
        </Suspense>
        <FlashSale />
        <Testimonials />
        <BlogShowcase />
        <FAQ />
        <NewsletterBanner />
      </div>
    </div>
  );
}
