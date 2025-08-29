"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  discountPrice: number;
}

export default function NutritionPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/jsonFiles/products.json");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);

        const uniqueBrands = Array.from(new Set(data.map((p: Product) => p.brand))) as string[];
        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedBrand !== "All") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    result = result.filter((p) => p.discountPrice <= maxPrice);

    if (sortOption === "priceLowHigh") {
      result = [...result].sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (sortOption === "priceHighLow") {
      result = [...result].sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (sortOption === "az") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "za") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(result);
  }, [search, selectedBrand, maxPrice, sortOption, products]);

  return (
    <div className="bg-white min-h-screen py-12 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nutrition Products</h1>
          <p className="text-gray-700">
            Choose from our wide range of authentic supplements and health
            products
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 bg-gray-100 p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="All">All Brands</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <div className="flex flex-col w-full md:w-1/4">
            <label htmlFor="price" className="text-gray-700 text-sm mb-2">
              Max Price: ₹{maxPrice}
            </label>
            <input
              type="range"
              id="price"
              min="500"
              max="10000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="cursor-pointer"
            />
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="default">Sort By</option>
            <option value="priceLowHigh">Price: Low → High</option>
            <option value="priceHighLow">Price: High → Low</option>
            <option value="az">Name: A → Z</option>
            <option value="za">Name: Z → A</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border p-6 rounded-2xl shadow-md hover:shadow-xl transition text-left flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <div className="mt-auto">
                  <p className="text-lg font-bold mb-2">
                    ₹{product.discountPrice}{" "}
                    <span className="text-gray-500 line-through text-sm ml-2">
                      ₹{product.price}
                    </span>
                  </p>
                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
