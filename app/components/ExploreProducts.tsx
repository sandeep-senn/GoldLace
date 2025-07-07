"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { fetchProducts } from "@/app/lib/fetchProducts";

const categories = [
  "Necklaces",
  "Earrings",
  "Finger Rings",
  "Mangalsutra",
  "Chains",
  "Bangles",
  "Bracelets",
];

type Product = {
  _id: string;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function ExploreProducts() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
  fetchProducts().then((data) => {
    setProducts(data);
  });
}, []);


  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-4 md:px-12 py-12 bg-[#fffafc]"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl font-bold text-center text-pink-700 mb-10"
      >
        Explore Our Products
      </motion.h2>

      {categories.map((category) => {
        const isExpanded = expanded[category];
        const filtered = products.filter((p) => p.category === category);
        const visible = isExpanded ? filtered : filtered.slice(0, 5);
        if (filtered.length === 0) return null;

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Section Header */}
            <div className="flex flex-col items-center justify-between md:flex-row md:items-center mb-4 px-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-pink-800 text-center w-full md:w-auto mb-2 md:mb-7">
                {category}
              </h3>

              {!isExpanded && filtered.length > 5 && (
                <button
                  onClick={() =>
                    setExpanded({ ...expanded, [category]: true })
                  }
                  className="text-sm text-pink-600 hover:underline"
                >
                  View All →
                </button>
              )}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {visible.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ProductCard {...item} />
                </motion.div>
              ))}
            </div>

            {/* Collapse Button */}
            {isExpanded && (
              <div className="text-center mt-6">
                <button
                  onClick={() =>
                    setExpanded({ ...expanded, [category]: false })
                  }
                  className="inline-block bg-pink-100 text-pink-700 px-6 py-2 rounded-full font-medium hover:bg-pink-200 transition"
                >
                  Collapse
                </button>
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.section>
  );
}
