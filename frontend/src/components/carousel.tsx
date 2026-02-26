"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// 1. Import Autoplay styles and the module itself
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { bannerImages } from "@/constants";

const Carousel = () => {
  return (
    <div className="w-full [h-40]">

      <Swiper
        // 2. Add Autoplay configuration
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // 3. Include Autoplay in the modules array
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {bannerImages.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center rounded-2xl"
          >
            <img
              src={imageUrl}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
