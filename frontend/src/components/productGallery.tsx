import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Zap } from "lucide-react";
import ProductCarousel from "@/components/product-carousel";

const ProductGallery = () => {
  // Replace these with your actual image paths
  const images = [
    "https://www.arogga.com/_next/image?url=https%3A%2F%2Fcdn2.arogga.com%2FeyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTNcLzUzMjc1LUxpZmVidW95LUhhbmR3YXNoLU1pbGQtQ2FyZS1SZWZpbGwtMTcwbWwtMTcwbWwtYThibC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0Ijoib3V0c2lkZSJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtaXNjXC93bS5wbmciLCJhbHBoYSI6OTB9fX0%3D&w=1280&q=75",
    "https://www.arogga.com/_next/image?url=https%3A%2F%2Fcdn2.arogga.com%2FeyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC81MzI3NVwvNTMyNzUtMS1taXZ4ZjcucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Im91dHNpZGUifSwib3ZlcmxheVdpdGgiOnsiYnVja2V0IjoiYXJvZ2dhIiwia2V5IjoibWlzY1wvd20ucG5nIiwiYWxwaGEiOjkwfX19&w=1280&q=75",
    "https://www.arogga.com/_next/image?url=https%3A%2F%2Fcdn2.arogga.com%2FeyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC81MzI3NVwvNTMyNzUtMi02ZW5qODQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Im91dHNpZGUifSwib3ZlcmxheVdpdGgiOnsiYnVja2V0IjoiYXJvZ2dhIiwia2V5IjoibWlzY1wvd20ucG5nIiwiYWxwaGEiOjkwfX19&w=1280&q=75",
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="w-full px-[16px] p-4 bg-white rounded-xl border border-gray-100 shadow-sm font-sans">
      <div className="relative flex flex-col md:flex-row gap-6 items-center">
        {/* Thumbnails - Left Side */}
        <div className="flex md:flex-col gap-3 order-2 md:order-1">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-16 border-2 rounded-md overflow-hidden transition-all ${
                currentIndex === index ? "border-green-500" : "border-gray-200"
              }`}
            >
              <img
                src={img}
                alt={`Thumb ${index}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Main Image Display */}
        <div className="relative flex-1 flex justify-center items-center bg-white order-1 md:order-2 group">
          {/* Navigation Arrows */}
          <button className="custom-prev-productDetails absolute left-0 z-10 p-1 bg-gray-800/50 text-white rounded-full hover:bg-gray-700 transition">
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-[280px] sm:max-w-sm h-[360px] flex items-center justify-center">
            <ProductCarousel
              images={images}
              arrowPrevButton=".custom-prev-productDetails"
              arrowNextButton=".custom-next-productDetails"
              activeIndex={currentIndex}
              onSlideChange={setCurrentIndex}
            />
          
          </div>

          <button className=" custom-next-productDetails absolute right-0 z-10 p-1 bg-gray-800/50 text-white rounded-full hover:bg-gray-700 transition">
            <ChevronRight size={24} />
          </button>
        </div>

       
      </div>

      {/* Footer Info */}
      <div className="mt-6 flex justify-between items-center px-2">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700">
          <Zap size={16} className="fill-yellow-500 text-yellow-500" />
          <span>12-24 HOURS</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 hover:text-red-500 cursor-pointer transition">
          <Heart size={20} />
          <span className="text-lg font-semibold">15</span>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
