"use client";

import { useState } from "react";
import productsData from "@/public/jsonFiles/proteins.json"; // ✅ import JSON

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const categories = ["All", "Muscletech", "Muscelblaze", "KEVIN LEVORONE", "BSN Syntha 6"];
const sortOptions = [
  { value: "default", label: "Sort By" },
  { value: "lowHigh", label: "Price: Low → High" },
  { value: "highLow", label: "Price: High → Low" },
];

export default function EcommercePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(Math.max(...productsData.map((p) => p.price)));
  const [sortOption, setSortOption] = useState("default");

  const minPrice = Math.min(...productsData.map((p) => p.price));
  const maxPrice = Math.max(...productsData.map((p) => p.price));

  // Filtered products
  let filteredProducts = productsData.filter((p: Product) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchPrice = p.price <= price;
    return matchCategory && matchSearch && matchPrice;
  });

  // Apply sorting
  if (sortOption === "lowHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "highLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">PROTEINS</h1>

      {/* Category Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === cat
                ? "bg-blue-800 text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search, Sort & Price Slider */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/3"
        />

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/3"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Price Slider */}
        <div className="w-full md:w-1/3">
          <label className="block font-semibold mb-1">
            Max Price: <span className="text-blue-600">₹{price}</span>
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-6 col-span-full text-center">
            No products match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
