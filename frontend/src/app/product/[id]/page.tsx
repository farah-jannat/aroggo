"use client";
import Carousel from "@/components/carousel";
import React from "react";
import { bannerImages, products } from "@/constants";
import Navbar from "@/components/navbar";
import RecursiveSidebar from "@/components/recursiveSidebar";
import { useSidebarStore } from "@/store/useSidebarStore";
import ProductDesc from "@/components/productDesc";
import RatingReviews from "@/components/ratingReviews";
import FaqSection from "@/components/faqSection";
import ProductSection from "@/components/productSection";
import ProductGallery from "@/components/productGallery";
import Footer from "@/components/footer";
import ProductDetailsRight from "@/components/product-details-right";

const Product = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <div className="bg-white h-full w-full">
      <div
        onClick={toggleSidebar}
        className={` h-screen w-full overflow-hidden
            fixed inset-0 z-40 bg-black/50 transition-opacity duration-500
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
      />
      <Navbar />

      {/* // --- *Left* (sidebar)--- */}

      <div
        className={`
            fixed  top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl
            transition-transform duration-500 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <RecursiveSidebar />
      </div>

      {/* // --- *Right* (main contant) --- */}
      <div className="mx-[16px] mt-[32px] flex flex-col lg:grid lg:grid-cols-5 lg:gap-6">
        {/* 1. Photo Gallery (Always Order 1) */}
        <div className="order-1 lg:col-span-3">
          <ProductGallery />
        </div>

        {/* 2. Product Details Right (Always Order 2) */}
        {/* We use lg:row-span-2 so it spans the height of both left sections */}
        <div className="order-2 lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2 self-start">
          <ProductDetailsRight />
        </div>

        {/* 3. Description/Reviews (Always Order 3) */}
        {/* On Desktop, this will tuck directly under the Gallery */}
        <div className="order-3 lg:col-span-3 lg:col-start-1">
          <ProductDesc />
          <RatingReviews />
          <FaqSection />
        </div>
      </div>


      <div className="bg-[#F0F9F9]">
        <ProductSection title="Similar Product" textColor={"#56C1D0"} />
      </div>
      <Footer />
    </div>
  );
};

export default Product;

