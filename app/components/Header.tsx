"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile menu icon

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center px-4 py-4 fixed top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between gap-4 px-4 py-4 bg-white/10 shadow-lg rounded-full w-full max-w-5xl backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#633c01] text-2xl tracking-wide">Jewelo</span>
        </div>

        {/* Center Nav Items (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <li><a href="#" className="hover:text-[#633c01]">Home</a></li>
          <li><a href="#products" className="hover:text-[#633c01]">Products</a></li>
          <li><a href="#about" className="hover:text-[#633c01]">About</a></li>
          <li><a href="#testimonials" className="hover:text-[#633c01]">Testimonials</a></li>
          <li><a href="#gallery" className="hover:text-[#633c01]">Gallery</a></li>
          <li><a href="#contact" className="hover:text-[#633c01]">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <a
          href="#products"
          className="hidden md:inline-block bg-[#633c01] text-white text-sm px-4 py-2 rounded-full hover:bg-pink-700 transition"
        >
          Explore Now
        </a>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="absolute top-[80px] w-full px-4 md:hidden">
          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg px-6 py-4 text-sm text-gray-700 font-medium">
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#633c01]">Home</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-[#633c01]">Products</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#633c01]">About</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-[#633c01]">Testimonials</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-[#633c01]">Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#633c01]">Contact</a>
            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#633c01] text-white text-center px-4 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Explore Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
