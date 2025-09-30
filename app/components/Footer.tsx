"use client";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-1 sm:px-12 text-sm">
      <div className="w-full border-t-2 border-black pr-0 pl-0 mr-0 ml-0 mb-0" />
      <div>
        <img src="/logo.png" alt="The Protein Cart Logo" className="w-auto"/>
      </div>
      {/* Main Grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Help & Support */}
        <div>
          <h3 className="text-base mb-3">Help & Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Contact Us</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">FAQ</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Privacy Policy</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Shipping & Return</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div className="ml-0 sm:ml-10">
          <h3 className="font-medium text-base mb-3">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">My Account</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">My Orders</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">My Addresses</a></li>
          </ul>
        </div>

        {/* The Protein Cart */}
        <div className="ml-0 sm:ml-10">
          <h3 className="font-medium text-base mb-3">The Protein Cart</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">About Us</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Authenticity Check</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Delivery</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Store Locator</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Sell on HealthXP</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">Sitemap</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium text-base mb-3">Contact Us</h3>
          <p className="text-xs">
            Email:{" "}
            <a href="mailto:care@Theproteincart.in" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">
              care@Theproteincart.in
            </a>
          </p>
          <p className="mb-4 text-xs">
            Phone:{" "}
            <a href="tel:+911234567890" className="hover:shadow-md hover:shadow-gray-500 transition text-xs">
              +91-1234567890
            </a>
          </p>
          <p className="mb-4 text-xs">Address: 123, New Delhi, India</p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-500 text-lg mt-5">
            <a href="https://facebook.com" target="_blank" className="hover:text-black transition"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-black transition"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" className="hover:text-black transition"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-black transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-600 mt-8 pt-6 text-xs">
        © {new Date().getFullYear()} The Protein Cart. All rights reserved.
      </div>
    </footer>
  );
}
