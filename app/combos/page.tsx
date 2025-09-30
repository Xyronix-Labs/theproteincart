// app/combos/page.tsx
"use client";

import combos from "@/public/jsonFiles/combos.json";

type Product = {
  title: string;
  price: string;
  image: string;
  link: string;
};

type Combo = {
  brand: string;
  comboName: string;
  products: Product[];
  comboPrice: string;
};

export default function ComboPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Starter Combos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(combos as Combo[]).map((combo) => (
          <div
            key={combo.comboName}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col"
          >
            {/* Combo Title */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {combo.comboName}
              </h2>
              <p className="text-sm text-gray-500">{combo.brand}</p>
            </div>

            {/* Products List */}
            <ul className="flex-1 mb-4 space-y-3">
              {combo.products.map((p) => (
                <li
                  key={p.title}
                  className="flex items-center gap-3 border-b pb-2 last:border-0"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-1"
                  />
                  <div className="flex-1">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:underline"
                    >
                      {p.title}
                    </a>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t">
              <span className="font-bold text-lg text-blue-600">
                {combo.comboPrice}
              </span>
              <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
