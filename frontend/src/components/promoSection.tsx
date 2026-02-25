"use client";
import PromoCard from "@/components/promoCard";
import { FileText, MessageCircle, Store } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const PromoSection = () => {
  return (

    <div className="w-full py-10 px-[32px]">
      <h2 className="text-center font-bold mb-4 text-[14px] md:text-[20px] text-black">Especially For You</h2>
      <Swiper
        slidesPerView={2.5} // Show a peek of the next slide on mobile
        spaceBetween={10}
        centeredSlides={false} // Usually better for this layout unless you have many items
        navigation={true}
        breakpoints={{
          // Responsive breakpoints
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper px-4"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <PromoCard
            variant="green"
            title="Order"
            subtitle="Via WhatsApp"
            detail="01810117100"
            buttonText="Call Now"
            icon={MessageCircle}
          />
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <PromoCard
            variant="cyan"
            title="UPTO"
            subtitle="10% OFF"
            detail="+ Cashback"
            buttonText="Prescription"
            icon={FileText}
          />
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <PromoCard
            variant="lime"
            title="UPTO"
            subtitle="14% OFF"
            detail="+ Cashback"
            buttonText="Register Pharmacy"
            icon={Store}
          />
        </SwiperSlide>

        <SwiperSlide>
          <PromoCard
            variant="lime"
            title="UPTO"
            subtitle="14% OFF"
            detail="+ Cashback"
            buttonText="Register Pharmacy"
            icon={Store}
          />
        </SwiperSlide>

        <SwiperSlide>
          <PromoCard
            variant="lime"
            title="UPTO"
            subtitle="14% OFF"
            detail="+ Cashback"
            buttonText="Register Pharmacy"
            icon={Store}
          />
        </SwiperSlide>

        <SwiperSlide>
          <PromoCard
            variant="lime"
            title="UPTO"
            subtitle="14% OFF"
            detail="+ Cashback"
            buttonText="Register Pharmacy"
            icon={Store}
          />
        </SwiperSlide>
        {/* ADD MORE SLIDES HERE... */}
      </Swiper>{" "}
      {/* <--- Make sure Swiper closes AFTER all slides */}
    </div>
  );
};

export default PromoSection;
