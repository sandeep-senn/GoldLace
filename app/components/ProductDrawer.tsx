"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlFor } from "@/app/lib/client";
import Image from "next/image";
import { X } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  image: any;
  description?: string;
  availability?: string;
  delivery?: string;
}

interface DrawerProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export default function ProductDrawer({ product, open, onClose }: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-full sm:w-[90%] md:w-[500px] bg-white z-50 shadow-xl overflow-y-auto">

          {/* Accessibility Title for Screen Readers */}
          <Dialog.Title className="sr-only">{product.title}</Dialog.Title>

          {/* Close Button */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>
            <Dialog.Close asChild>
              <button className="text-gray-600 hover:text-gray-800">
                <X size={22} />
              </button>
            </Dialog.Close>
          </div>

          {/* Image Carousel */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-[300px]"
          >
            <SwiperSlide>
              <Image
                src={urlFor(product.image).width(600).url()}
                alt={product.title}
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            {/* TODO: If multiple images available, map through them */}
          </Swiper>

          {/* Details */}
          <div className="p-4 space-y-3">
            {product.description && (
              <p className="text-sm text-gray-600">{product.description}</p>
            )}

            {product.availability && (
              <p className="text-sm text-green-600">{product.availability}</p>
            )}

            {product.delivery && (
              <p className="text-sm text-gray-700">
                Delivery: {product.delivery}
              </p>
            )}
            <p className="text-sm text-gray-600">
              Category: {product.category}
            </p>
            <p className="text-xl font-bold text-pink-700">₹{product.price}</p>

            <a
              href={`https://wa.me/917222939004?text=Hi! I want to order: ${product.title} (₹${product.price})`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white text-center py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Order Now on WhatsApp
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
