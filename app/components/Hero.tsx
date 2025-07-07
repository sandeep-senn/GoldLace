"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full h-auto min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-[#fff5f9] to-[#ffecef]"
    >
      <Header />

      {/* Left Text Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-800 leading-tight">
          Elevate Your Elegance <br />
          with Timeless Jewelry
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover handcrafted pieces designed to dazzle, curated with love and luxury.
        </p>
        <a
          href="#products"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Explore Collection
        </a>
      </motion.div>

      {/* Right Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <Image
          src="/j1.jpg"
          alt="Featured Jewelry"
          className="max-w-sm w-full rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
