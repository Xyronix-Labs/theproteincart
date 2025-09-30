"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/cart/cartcontext";

type Product = {
  title: string;
  price: string;
  image: string;
};

function ProductCard({
  title,
  price,
  image,
  onAddToCart,
}: Product & { onAddToCart: (p: Product) => void }) {
  return (
    <div className="w-full sm:w-[280px] md:w-[320px] h-[380px] md:h-[400px] rounded-xl shadow-md border-1 border-black flex flex-col items-center justify-center p-4 text-center bg-red-100 hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={160}
        height={160}
        className="object-contain"
      />
      <h3 className="text-base font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">₹{price}</p>
      <button
        onClick={() => onAddToCart({ title, price, image })}
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function TrendingPage({
  jsonFile = "/jsonFiles/trendingProduct.json", // ✅ default file
  heading = "All Trending Products", // ✅ default heading
}: {
  jsonFile?: string;
  heading?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(jsonFile)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, [jsonFile]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: Date.now(),
      name: product.title,
      price: Number(product.price),
      image: product.image,
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        {heading}
      </h1>

      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
}
