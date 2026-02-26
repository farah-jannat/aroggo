"use client";
import PromoCard, { PromoVariant } from "@/components/promoCard";
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
import { promoData } from "@/constants";

const PromoSection = () => {
  return (
    <div className="w-full relative px-[16px] py-10">
      <p className="text-center font-bold mb-4 text-[14px] md:text-[20px] text-black">
        Especially For You
      </p>
      <Swiper
        navigation={{
          prevEl: ".custom-prev-promo",
          nextEl: ".custom-next-promo",
        }}
        slidesPerView={1.5} // Show a peek of the next slide on mobile
        spaceBetween={10}
        centeredSlides={false} // Usually better for this layout unless you have many items
        // navigation={true}
        breakpoints={{
          // Responsive breakpoints

          398: { slidesPerView: 2 },
          578: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper px-4"
      >
        {/* SLIDE 1 */}

        {promoData.map((promo, index) => (
          <SwiperSlide key={index}>
            <PromoCard
              variant={promo.variant as PromoVariant}
              title={promo.title}
              subtitle={promo.subtitle}
              detail={promo.detail}
              buttonText={promo.buttonText}
              icon={promo.icon} // This now passes the image path
            />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
      {/* --- CUSTOM ARROWS --- */}
      {/* Previous Arrow */}
      <button className="custom-prev-promo absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 disabled:opacity-0">
        <ChevronLeft size={20} className="text-[#008080]" />
      </button>
      {/* Next Arrow */}
      <button className="custom-next-promo absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 disabled:opacity-0">
        <ChevronRight size={20} className="text-[#008080]" />
      </button>
    </div>
  );
};

export default PromoSection;

// <SwiperSlide>
//   <PromoCard
//     variant="green"
//     title="Order"
//     subtitle="Via WhatsApp"
//     detail="01810117100"
//     buttonText="Call Now"
//     icon={MessageCircle}
//   />
// </SwiperSlide>

// {/* SLIDE 2 */}
// <SwiperSlide>
//   <PromoCard
//     variant="cyan"
//     title="UPTO"
//     subtitle="10% OFF"
//     detail="+ Cashback"
//     buttonText="Prescription"
//     icon={FileText}
//   />
// </SwiperSlide>

// {/* SLIDE 3 */}
// <SwiperSlide>
//   <PromoCard
//     variant="lime"
//     title="UPTO"
//     subtitle="14% OFF"
//     detail="+ Cashback"
//     buttonText="Register"
//     icon={Store}
//   />
// </SwiperSlide>

// <SwiperSlide>
//   <PromoCard
//     variant="lime"
//     title="UPTO"
//     subtitle="14% OFF"
//     detail="+ Cashback"
//     buttonText="Register"
//     icon={Store}
//   />
// </SwiperSlide>

// <SwiperSlide>
//   <PromoCard
//     variant="lime"
//     title="UPTO"
//     subtitle="14% OFF"
//     detail="+ Cashback"
//     buttonText="Register"
//     icon={Store}
//   />
// </SwiperSlide>

// <SwiperSlide>
//   <PromoCard
//     variant="lime"
//     title="UPTO"
//     subtitle="14% OFF"
//     detail="+ Cashback"
//     buttonText="Register"
//     icon={Store}
//   />
// </SwiperSlide>
