"use client";

import { useCart } from "@/app/cart/cartcontext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQty, removeFromCart } = useCart();

  // ✅ useMemo to calculate totals
  const { total, shipping, grandTotal } = useMemo(() => {
    const t = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const s = t > 2000 ? 0 : 99;
    return { total: t, shipping: s, grandTotal: t + s };
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Continue Shopping
          </button>
          <h1 className="text-3xl font-bold text-gray-900 ml-8">
            Shopping Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                  2.293c-.63.63-.184 1.707.707 1.707H17m0 
                  0a2 2 0 100 4 2 2 0 000-4zm-8 
                  2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Cart Items ({cart.length})
                  </h2>
                </div>
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex items-center space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                          <Image
                            src={item.image || "/placeholder-product.jpg"}
                            alt={item.name || "Product"}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center mt-3 space-x-3">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQty(item.id, Math.max(1, item.qty - 1))
                                }
                                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                              >
                                −
                              </button>
                              <span className="px-3 py-2 text-gray-900 font-medium min-w-[2rem] text-center">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQty(item.id, item.qty + 1)}
                                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              item.price * item.qty
                            )}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">
                      ₹{new Intl.NumberFormat("en-IN").format(total)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900 font-medium">
                      {shipping === 0
                        ? "Free"
                        : `₹${new Intl.NumberFormat("en-IN").format(shipping)}`}
                    </span>
                  </div>

                  {total < 2000 && (
                    <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                      Add ₹
                      {new Intl.NumberFormat("en-IN").format(2000 - total)} more
                      for free shipping!
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>
                        ₹{new Intl.NumberFormat("en-IN").format(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6">
                  Proceed to Checkout
                </button>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => router.push("/")}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
