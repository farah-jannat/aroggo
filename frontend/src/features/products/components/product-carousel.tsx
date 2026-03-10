"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; // Import the type

// 1. Import Autoplay styles and the module itself
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// import required modules
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
  arrowPrevButton: string;
  arrowNextButton: string;
  activeIndex: number;
  onSlideChange: (index: number) => void;
}
const ProductCarousel = ({
  images,
  arrowNextButton,
  arrowPrevButton,
  activeIndex,
  onSlideChange,
}: ProductCarouselProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Sync Swiper position when activeIndex prop changes
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(activeIndex);
    }
  }, [activeIndex, swiperInstance]);
  return (
    <div className="w-full h-full relative ">
      <Swiper
      
        // 2. Add Autoplay configuration
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        // navigation={true}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
        navigation={{
          prevEl: arrowPrevButton,
          nextEl: arrowNextButton,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // 3. Include Autoplay in the modules array
        modules={[ Autoplay, Navigation]}
        className="mySwiper h-full w-full "
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
            className="flex  w-full items-center justify-center rounded-2xl"
          >
            <img
              src={imageUrl}
              alt={`Banner ${index + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <button className="absolute left-0 z-10 top-1/2 p-2 bg-gray-800/50 text-white rounded-full hover:bg-gray-700 transition">
        <ChevronLeft size={24} />
      </button>

      <button className="absolute right-0 z-10 top-1/2 p-2 bg-gray-800/50 text-white rounded-full hover:bg-gray-700 transition">
        <ChevronRight size={24} />
      </button> */}
    </div>
  );
};

export default ProductCarousel;
