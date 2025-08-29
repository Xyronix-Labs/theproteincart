"use client";


import HeroSection from "@/app/components/HeroSection";
import TrendingProducts from "@/app/components/TrendingProducts";
import TopBrands from "@/app/components/TopBrands";
import DealsSection from "@/app/components/DealsSection";
import BlogSection from "@/app/components/BlogSection";


export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      
      <HeroSection />
      <TrendingProducts />
      <TopBrands />
      <DealsSection />
      <BlogSection />
    
    </main>
  );
}
