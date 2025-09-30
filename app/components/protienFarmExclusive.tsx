"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  flavors: string[];
};

type QuantitiesState = {
  [productId: number]: number;
};

const productsData: { products: Product[] } = {
  products: [
    {
      id: 1,
      name: "Whey Protein Isolate",
      description:
        "Premium 100% whey protein isolate with 25g protein per serving and minimal fat & carbs.",
      image: "/trendNowImage/box.png",
      price: 3499,
      category: "Proteins",
      rating: 4.8,
      flavors: ["Chocolate", "Vanilla", "Strawberry"],
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      description:
        "Micronized creatine monohydrate for improved strength and muscle performance.",
      image: "/trendNowImage/box.png",
      price: 1499,
      category: "Performance",
      rating: 4.7,
      flavors: ["Unflavored"],
    },
    {
      id: 3,
      name: "Pre-Workout Energizer",
      description:
        "Powerful pre-workout formula with caffeine, beta-alanine and nitric oxide boosters.",
      image: "/trendNowImage/box.png",
      price: 2499,
      category: "Pre-Workout",
      rating: 4.6,
      flavors: ["Blue Raspberry", "Fruit Punch", "Green Apple"],
    },
    {
      id: 4,
      name: "BCAA Amino Acids",
      description:
        "2:1:1 ratio of branched-chain amino acids to support muscle recovery and reduce fatigue.",
      image: "/trendNowImage/box.png",
      price: 1799,
      category: "Recovery",
      rating: 4.5,
      flavors: ["Watermelon", "Lemon Lime", "Orange"],
    },
    {
      id: 5,
      name: "Mass Gainer",
      description:
        "High-calorie mass gainer with complex carbs and protein for weight and muscle gain.",
      image: "/trendNowImage/box.png",
      price: 4299,
      category: "Weight Gain",
      rating: 4.4,
      flavors: ["Chocolate", "Vanilla", "Cookies & Cream"],
    },
    {
      id: 6,
      name: "Vegan Protein",
      description:
        "Plant-based protein blend with pea, brown rice and hemp proteins for complete amino profile.",
      image: "/trendNowImage/box.png",
      price: 2999,
      category: "Proteins",
      rating: 4.3,
      flavors: ["Chocolate", "Vanilla", "Berry"],
    },
  ],
};

export default function ProteinFarmExclusive() {
  const [quantities, setQuantities] = useState<QuantitiesState>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const addToCart = (product: Product) => {
    const qty = quantities[product.id] || 1;
    toast.success(`Added ${qty} ${product.name} to cart!`, { duration: 3000 });
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4 sm:px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-black">PROTEINFARM EXCLUSIVE</h2>
          <Link
            href="/trending"
            className="text-sm sm:text-base font-medium bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            View All
          </Link>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/10 rounded p-2 shadow-lg border border-gray-200 hidden md:flex items-center justify-center w-10 h-10"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/10 rounded p-2 shadow-lg border border-gray-200 hidden md:flex items-center justify-center w-10 h-10"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto pb-6 hide-scrollbar -mx-4 px-4">
            <div className="flex space-x-6">
              {productsData.products.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-72 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="p-5 flex flex-col h-full">
                    {/* Top */}
                    <div className="mb-0 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {product.category}
                        </span>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.flavors.slice(0, 3).map((flavor, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {flavor}
                          </span>
                        ))}
                        {product.flavors.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            +{product.flavors.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="mb-2 flex justify-center items-center h-60 bg-white rounded-sm overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={168}
                        height={240}
                        className="object-contain"
                      />
                    </div>

                    {/* Price & Add to Cart */}
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-3">
                        <p className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        `}</style>
      </div>
    </section>
  );
}
