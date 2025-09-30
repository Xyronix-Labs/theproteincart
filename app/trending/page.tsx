"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/cart/cartcontext";

type Product = {
  title: string;
  price: string;
  image: string;
};

type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function ProductCard({
  title,
  price,
  image,
  onAddToCart,
}: Product & { onAddToCart: (p: Product) => void }) {
  return (
    <div
      className="w-full sm:w-[280px] md:w-[320px] h-[380px] md:h-[400px] rounded-xl shadow-md border border-black flex flex-col items-center justify-center p-4 text-center bg-white hover:shadow-lg transition-shadow duration-300"
      role="group"
    >
      <Image
        src={image}
        alt={title}
        width={160}
        height={160}
        className="object-contain"
        priority={true} // ensures popular images load faster
      />
      <h3 className="text-base font-semibold mt-3 text-black">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">₹{price}</p>
      <button
        onClick={() => onAddToCart({ title, price, image })}
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        aria-label={`Add ${title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function TrendingPage({
  jsonFile = "/jsonFiles/trendingProduct.json",
  heading = "All Trending Products",
}: {
  jsonFile?: string;
  heading?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(jsonFile);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err: any) {
        console.error("Error loading products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [jsonFile]);

  const handleAddToCart = (product: Product) => {
    const cartItem: CartProduct = {
      id: Date.now(), // simple unique id
      name: product.title,
      price: Number(product.price),
      image: product.image,
    };
    addToCart(cartItem);
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-red-500">
        <p>{error}</p>
      </section>
    );
  }

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
