"use client";


import HeroSection from "@/app/components/HeroSection";
import TrendingProducts from "@/app/components/TrendingProducts";
import TopBrands from "@/app/components/TopBrands";
import DealsSection from "@/app/components/DealsSection";
import BlogSection from "@/app/components/BlogSection";
import TopPick from "./components/topPicks";
import ProteinFarm from "./components/protienFarmExclusive";
import WhyUs from "./components/whyUs";
// import Brandmarque from "./components/brandMarquee"


export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      
      <HeroSection />
      <TrendingProducts />
      {/* <Brandmarque/> */}
      <TopBrands />
      <ProteinFarm />
      <DealsSection />
      <TopPick/>
      <BlogSection />
      <WhyUs/>
    
    </main>
  );
}
