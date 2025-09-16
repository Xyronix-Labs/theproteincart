"use client";

import Image from "next/image";

export default function HeroSection() {
  const brands = [
    "/topBrands/musceltech.png",
    "/topBrands/musceltech.png",
    "/topBrands/musceltech.png",
    "/topBrands/musceltech.png",
    "/topBrands/musceltech.png",
  ];

  // Duplicate logos for continuous scroll
  const marqueeLogos = [...brands, ...brands];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HERO SECTION */}
      <div className="relative w-full h-[50vh] min-h-[300px] mt-8 sm:min-h-[380px] md:min-h-[420px] lg:min-h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
        {/* Background image */}
        <Image
          src="https://framerusercontent.com/images/NolpSKdxxdwOXCzjLds8o5o.jpg"
          alt="Premium fitness supplements"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay with content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex flex-col md:flex-row items-center justify-center md:justify-between p-4 sm:p-6 md:p-8 lg:p-12 text-white gap-4 sm:gap-6">
          {/* Left side (text + CTA) */}
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-tight">
              Elevate Your Performance with{" "}
              <span className="text-amber-400">Premium Supplements</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-gray-200 md:hidden">
              Scientifically formulated with clean ingredients. No fillers, no
              shortcuts — just pure performance.
            </p>

            <button className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white text-lg sm:text-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95">
              Shop Now - 30% Off
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Right side panel (desktop only) */}
          <div className="hidden md:block max-w-xs bg-black/50 p-5 lg:p-7 rounded-xl backdrop-blur-sm border border-amber-500/20">
            <p className="text-base md:text-lg leading-relaxed font-light text-amber-50">
              Scientifically formulated with clean ingredients. No fillers, no
              shortcuts — just pure performance.
            </p>
          </div>
        </div>
      </div>

      {/* BRANDS MARQUEE */}
      <div className="mt-8 sm:mt-10">
        <div className="text-center mb-4 sm:mb-5">
          <h2 className="text-gray-700 text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider">
            Trusted By Professionals Worldwide
          </h2>
        </div>

        {/* Continuous marquee */}
        <div className="relative w-300 overflow-hidden shadow-md py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8"
                style={{ height: "60px" }}
              >
                <div className="relative w-[120px] h-[200]">
                  <Image
                    src={logo}
                    alt={`Brand ${i % brands.length + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
