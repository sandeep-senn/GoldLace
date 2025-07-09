"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { urlFor } from "@/app/lib/client";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";

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

interface ModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export default function ProductDrawer({ product, open, onClose }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 max-w-md w-[95%] bg-white text-black rounded-2xl shadow-2xl transform translate-x-1 translate-y-1 animate-fadeZoom overflow-hidden">

          {/* Hidden for screen readers */}
          <Dialog.Title className="sr-only">{product.title}</Dialog.Title>

          {/* Close Button */}
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-black hover:text-red-500 p-1.5 rounded-full transition hover:bg-gray-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </Dialog.Close>

          {/* Image */}
          <div className="relative w-full h-[280px] sm:h-[320px]">
            <Image
              src={urlFor(product.image).width(700).url()}
              alt={product.title}
              fill
              className="object-cover rounded-t-2xl"
            />
          </div>

          {/* Info */}
          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">{product.title}</h2>

            {product.description && (
              <p className="text-sm text-gray-700">{product.description}</p>
            )}

            <div className="text-sm space-y-1">
              {product.availability && (
                <p className="text-green-700 font-medium">{product.availability}</p>
              )}
              {product.delivery && (
                <p className="text-gray-700">Delivery: {product.delivery}</p>
              )}
              <p className="text-gray-500">Category: {product.category}</p>
            </div>

            <p className="text-2xl font-bold text-black">₹{product.price}</p>

            <a
              href={`https://wa.me/919981416552?text=Hi! I want to order: ${product.title} (₹${product.price})`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-md hover:bg-gray-900 transition w-full"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
