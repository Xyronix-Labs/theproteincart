import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { CartProvider } from "@/app/cart/cartcontext"; 
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Protein Cart",
  description: "Your trusted partner for authentic health supplements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <CartProvider>
          <Header />      {/* ✅ Always on top */}
          <main>{children}</main>
          <Footer />      {/* ✅ Always at bottom */}
        </CartProvider>
      </body>
    </html>
  );
}
