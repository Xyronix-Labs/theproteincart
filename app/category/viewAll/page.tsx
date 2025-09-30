"use client";

import { useState } from "react";
import productsData from "@/public/jsonFiles/allproduct.json"; // ✅ import JSON

// ✅ Product type with multiple categories
type Product = {
    id: number;
    name: string;
    price: number;
    categories: string[]; // multiple categories
    image: string;
};

const products: Product[] = productsData;

// ✅ Extract main categories dynamically from all products
const mainCategories = [
    "All",
    ...Array.from(new Set(products.flatMap((p) => p.categories))),
];

export default function ViewAllPage() {
    const [selectedMainCategory, setSelectedMainCategory] = useState("All");
    const [search, setSearch] = useState("");

    // ✅ Filtering
    const filteredProducts = products.filter((p) => {
        const matchMainCategory =
            selectedMainCategory === "All" ||
            p.categories.includes(selectedMainCategory);
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        return matchMainCategory && matchSearch;
    });

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">View All Products</h1>

            {/* Category Filter Buttons */}
            <div className="flex gap-3 mb-6 flex-wrap">
                {mainCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedMainCategory(cat)}
                        className={`px-4 py-2 rounded-lg border transition ${selectedMainCategory === cat
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-black hover:bg-gray-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full mb-6"
            />

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-contain mb-4"
                        />
                        <h2 className="font-semibold text-lg">{product.name}</h2>
                        <p className="text-gray-600">
                            {product.categories.join(", ")}
                        </p>
                        <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
                        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p className="text-gray-500 mt-6">No products found.</p>
            )}
        </div>
    );
}
