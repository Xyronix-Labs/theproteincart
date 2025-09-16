"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // <-- import Link

const categories = ["Proteins", "Creatine", "Pre-Workout", "Gainers", "Multivitamins"];

//product images (place them in /public/products/)
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
    <section className="max-w-5xl mx-auto text-center py-12 px-4 sm:px-8 lg:px-8 bg-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "linear" }}
        className="text-3xl sm:text-5xl lg:text-5xl mb-5 font-semibold text-black max-w-4xl mx-auto leading-tight mt-5"
      >
        Upgrade Your Fitness Fuel
      </motion.h1>


      {/* Categories */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "linear" }}
        className="text-2xl sm:text-3xl lg:text-5x1 font-[800] mb-6 text-black "
      >
        CATEGORY
      </motion.h1>

      {/* <div className="mb-10">
        <Link
          href="/trending"
          className="inline-block mt-4 text-sm sm:text-base font-medium bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          View All →
        </Link>
      </div> */}

      {/* product button  */}
      <div className="flex justify-start gap-0 sm:gap-3 flex-wrap mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-2 sm:px-3 py-0 rounded-lg border font-medium text-xs sm:text-sm transition ${
              active === cat
                ? "bg-black text-white border border-black"
                : "bg-white text-black border hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
        <Link
          href="/trending"
          className=" text-sm sm:text-base font-medium bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          View All →
        </Link>
      </div>

      {/* Product Images */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-full mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden flex items-center justify-center"
            >
              <Image
                src={product.img}
                alt="Product Image"
                width={600}
                height={400}
                className="object-contain w-[200px] h-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
