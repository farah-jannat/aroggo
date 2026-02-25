"use client";
import { FileText, MessageCircle, Store } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/productCard";
import DealsHeader from "@/components/dealsHeader";

interface ProductSectionProps {
  title: string;
  textColor: string; // Optional prop
}

const ProductSection = ({ title, textColor }: ProductSectionProps) => {
  return (
    <div className="w-full py-[32px] px-[16px] ">
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
        slidesPerView={1} // Show a peek of the next slide on mobile
        spaceBetween={20}
        centeredSlides={false} // Usually better for this layout unless you have many items
        navigation={true}
        breakpoints={{
          // Responsive breakpoints
          300: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper px-4 "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSection;
