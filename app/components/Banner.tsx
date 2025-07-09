"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlFor } from "@/app/lib/client";
interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: "image";
}

interface BannerProps {
  images: string[] | SanityImage[];
}

export default function Banner({ images }: BannerProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-[500px] sm:h-[600px] md:h-[700px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={url}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
