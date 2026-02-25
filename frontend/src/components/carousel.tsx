"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// 1. Import Autoplay styles and the module itself
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="w-full max-[h-70]:">
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
        <SwiperSlide className="flex items-center justify-center rounded-2xl">
          <img
            src={"/hero1.avif"}
            alt=""
            className=" w-full h-full object-cover  rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          <img
            src={"/hero2.avif"}
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          <img
            src={"/hero1.avif"}
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          <img
            src={"/hero3.avif"}
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
