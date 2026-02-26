"use client";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  MessageCircle,
  Store,
} from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/productCard";
import DealsHeader from "@/components/dealsHeader";
import { products } from "@/constants";

interface ProductSectionProps {
  title: string;
  textColor: string;
}

const ProductSection = ({ title, textColor }: ProductSectionProps) => {
  return (
    <div className="w-full relative py-[32px] px-[16px] ">
      <div className=" pb-[12px] flex items-center justify-between rounded-t-lg">
        {/* Left Side: Title */}
        <h2
          className="font-bold text:[14px] md:text-xl tracking-tight"
          style={{ color: textColor }}
        >
          {title}
        </h2>

        {/* Right Side: See All Link */}
        <a
          href="#"
          className="text-[#56C1D0] text:[14px] md:text-[18px] font-semibold hover:underline transition-all whitespace-nowrap"
          style={{ color: textColor }}
        >
          see all
        </a>
      </div>

      <Swiper
        navigation={{
          prevEl: ".custom-prev-product",
          nextEl: ".custom-next-product",
        }}
        slidesPerView={1.5} // Show a peek of the next slide on mobile
        spaceBetween={20}
        centeredSlides={false} // Usually better for this layout unless you have many item
        breakpoints={{
          398: { slidesPerView: 2 },
          578: { slidesPerView: 3 },
          850: { slidesPerView: 4 },
          1115: { slidesPerView: 5 },
          // 1280: { slidesPerView: 5 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper px-4 "
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev-product cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 disabled:opacity-0">
        <ChevronLeft size={20} className="text-[#008080]" />
      </button>
      {/* Next Arrow */}
      <button className="custom-next-product cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 disabled:opacity-0">
        <ChevronRight size={20} className="text-[#008080]" />
      </button>
    </div>
  );
};

export default ProductSection;
