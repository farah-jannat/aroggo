import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-[240px] border border-gray-200 rounded-xl  font-sans shadow-sm hover:shadow-md transition-shadow bg-white relative">
      {/* 83% OFF Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FF3B4E] text-white text-xs font-bold px-3 py-1 rounded-b-lg flex items-center gap-1">
        <span className="text-[10px]">⚡</span> 83% OFF
      </div>

      {/* Product Image */}
      <div className="flex bg-red-600 justify-center">
        <img
          src="/product1.avif"
          alt="HCG Pregnancy Test"
          className="h-48 w-full object-cover"
        />
      </div>

      <div className="p-[12px]">
        {/* Delivery Status Tag */}
        <div className="inline-flex items-center gap-2 bg-[#E9ECEF] px-3 py-1.5 rounded-md mb-4 ">
          <div className="bg-[#343A40] p-1 rounded-full">
            <svg
              className="w-3 h-3 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.13 2.188c-.37-.801-1.503-.801-1.873 0L8.414 8.447c-.15.32-.46.545-.81.597l-6.904.996c-.88.127-1.232 1.21-.595 1.83l5.003 4.862c.25.244.364.595.305.942l-1.18 6.865c-.15.875.767 1.54 1.554 1.127l6.177-3.243a1.06 1.06 0 01.986 0l6.177 3.243c.787.413 1.704-.252 1.554-1.127l-1.18-6.865a1.06 1.06 0 01.305-.942l5.003-4.862c.637-.62.285-1.703-.595-1.83l-6.904-.996a1.05 1.05 0 01-.81-.597l-2.843-6.259z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">
            12-24 HOURS
          </span>
        </div>

        <div className="flex flex-col gap-1 justify-between">
          {/* Title */}

          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 line-clamp-2">
            Pregnancy HCG Test Midstream Strip...
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 text-sm ml-1">(33)</span>
          </div>

          {/* Price and Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-gray-400 line-through text-sm">৳ 120</span>
              <span className="text-xl font-bold text-gray-900">৳ 20</span>
            </div>
            <button className="border-2 border-[#549B94] text-[#2D7069] font-bold py-2 px-4 rounded-lg hover:bg-[#F0F8F7] transition-colors">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
