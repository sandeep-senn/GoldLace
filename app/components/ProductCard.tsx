"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/app/lib/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProductProps {
  title: string;
  price: number;
  image: SanityImageSource;
  onClick?: () => void;
}

export default function ProductCard({ title, price, image, onClick}: ProductProps) {
  console.log(JSON.stringify(image, null, 2));

  const imageUrl = image ? urlFor(image).width(400).url() : "/j1.jpg";

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">₹{price}</p>
      
    </motion.div>
  );
}
