"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Proteins", link: "/category/proteins" },
  { name: "Creatine", link: "/category/creatines" },
  { name: "Pre-Workout", link: "/category/preworkouts" },
  { name: "Gainers", link: "/category/gainers" },
  { name: "Multivitamins", link: "/category/multiv" },
];

// product images (place in /public/products/)
const products = [
  { id: 1, img: "/category/MBgold.png" },
  { id: 2, img: "/category/MassGainer.png" },
  { id: 3, img: "/category/FishOil.png" },
  { id: 4, img: "/category/Creatine.png" },
  { id: 5, img: "/category/Bcaa.png" },
  { id: 6, img: "/category/Preworkout.png" },
  { id: 7, img: "/category/FatBurner.png" },
  { id: 8, img: "/category/PeanutButter.png" },
  { id: 9, img: "/category/Multivitamins.png" },
  { id: 10, img: "/category/Collagen.png" },
];


export default function HeroSection() {
  const [active, setActive] = useState("Proteins");

  return (
    <section className="max-w-5xl mx-auto text-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "linear" }}
        className="text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 font-semibold text-black max-w-4xl mx-auto leading-tight"
      >
        Upgrade Your Fitness Fuel
      </motion.h1>

      {/* Categories */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "linear" }}
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black"
      >
        CATEGORY
      </motion.h2>

      {/* Category buttons and View All link */}
      {/* Category buttons and View All link */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.link}
            onClick={() => setActive(cat.name)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border font-medium text-xs sm:text-sm transition whitespace-nowrap ${active === cat.name
                ? "bg-black text-white border border-black"
                : "bg-white text-black border hover:bg-gray-100"
              }`}
          >
            {cat.name}
          </Link>
        ))}

        {/* View All button aligned right */}
        <Link
          href="/category/viewAll"
          className="ml-auto text-xs sm:text-sm font-medium border bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-black hover:text-white transition whitespace-nowrap"
        >
          View All →
        </Link>
      </div>



      {/* Product Images */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-full mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden flex items-center justify-center p-2"
            >
              <Image
                src={product.img}
                alt="Product Image"
                width={200}
                height={220}
                className="object-contain w-full h-auto max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
