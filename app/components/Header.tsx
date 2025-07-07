"use client";

export default function Header() {
  return (
    <nav className="w-full flex justify-center px-4 py-4  absolute top-4 z-50 mb-[2rem]">
      <div className="flex items-center justify-between gap-8 px-6 py-6 bg-white/20 shadow-lg rounded-full max-w-5xl w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-pink-700 text-lg tracking-wide">Jewelo</span>
        </div>

        {/* Center Nav Items */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <li><a href="#" className="hover:text-pink-600">Home</a></li>
          <li><a href="#products" className="hover:text-pink-600">Products</a></li>
          <li><a href="#about" className="hover:text-pink-600">About</a></li>
          <li><a href="#testimonials" className="hover:text-pink-600">Testimonials</a></li>
          <li><a href="#gallery" className="hover:text-pink-600">Gallery</a></li>
          <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <a
          href="#products"
          className="bg-pink-600 text-white text-sm px-4 py-2 rounded-full hover:bg-pink-700 transition"
        >
          Explore Now
        </a>
      </div>
    </nav>
  );
}
