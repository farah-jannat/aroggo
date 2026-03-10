import React from "react";
import {
  TrendingUp,
  Share2,
  Globe,
  ChevronRight,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";

const ProductDetailsRight = () => {
  return (
    <div className="w-full  rounded-md mx-auto  border border-gray-200 bg-white min-h-screen font-sans relative">
        {/* Top Registration Banner */}
        <div className="bg-gray-800 p-4 rounded-t-lg flex justify-between items-center text-white">
          <p className="text-sm font-bold leading-tight">
            ব্যবসার জন্য পাইকারি দামে পণ্য কিনতে রেজিস্ট্রেশন করুন
          </p>
          <button className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-bold ml-2">
            Register
          </button>
        </div>

      <div className="px-4">

        {/* View Counter & Social Icons */}
        <div className="py-4  flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <TrendingUp size={18} className="text-purple-600" />
            <span>6076 people viewed this</span>
          </div>
          <div className="flex gap-3">
            <div className="p-1 border border-teal-500 rounded-full text-teal-500">
              <Globe size={16} />
            </div>
            <div className="p-1 border border-orange-200 rounded-full text-orange-400">
              <Share2 size={16} />
            </div>
          </div>
        </div>

        {/* Promotional Banners */}
        <div className=" space-y-8 my-[16px] ">
          <div className="w-full rounded-lg overflow-hidden h-[78px] lg:h-16 bg-blue-900 flex items-center justify-center text-white text-xs">
            {/* Replace with actual image */}
            <img
              src="https://www.arogga.com/_next/image?url=https%3A%2F%2Fcdn2.arogga.com%2FeyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJCbG9jay1iX2Jsb2NrX3BhZ2VfYmFubmVyXC84MTBcLzgxMC1SYW1hZGFuLUxPVFRJRS1wYXFodTAuZ2lmIiwiZWRpdHMiOltdfQ%3D%3D&w=375&q=75"
              alt="Promo 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden h-[78px] lg:h-16 bg-cyan-500 flex items-center justify-center text-white text-xs">
            {/* Replace with actual image */}
            <img
              src="https://www.arogga.com/_next/image?url=https%3A%2F%2Fcdn2.arogga.com%2FeyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJCbG9jay1iX2Jsb2NrX3BhZ2VfYmFubmVyXC85NDZcLzk0Ni1IVVRIQVQtTEFUVElFUy11ZXB4ZGwuZ2lmIiwiZWRpdHMiOltdfQ%3D%3D&w=375&q=75"
              alt="Promo 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Title & Rating */}
        <div className=" py-2 border-y border-gray-200">
          <h1 className="text-2xl mt-2 font-semibold text-black leading-tight">
            Lifebuoy Handwash Care Refill 170 ml
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-600 font-medium">4.73/5</span>
            <div className="flex text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-teal-600 text-sm ml-1 font-medium hover:underline cursor-pointer">
              (11) Ratings
            </span>
          </div>
        </div>

        {/* Brand Section */}
        <div className=" py-4 border-b border-gray-200 flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border rounded-md flex items-center justify-center p-1">
              <img
                src="https://www.arogga.com/_next/image?url=https%3A%2F%2Fcdn2.arogga.com%2FeyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0QnJhbmQtcGJfYmFubmVyXC8xMDEwMDNcLzEwMTAwMy1MaWZlYnVveS00bWd2aXkucG5nIiwiZWRpdHMiOltdfQ%3D%3D&w=48&q=75"
                alt="Lifebuoy"
                className="object-contain"
              />
            </div>
            <span className="text-teal-600 font-semibold text-lg">
              Lifebuoy
            </span>
          </div>
          <ChevronRight className="text-teal-600" size={20} />
        </div>

        {/* Pricing & CTA */}
        <div className=" flex py-2  border-b border-gray-200 justify-between items-end">
          <div>
            <p className="text-gray-700 font-medium text-[14px] mb-1 ">
              1 × 170ml Pack
            </p>
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-xl font-bold  text-gray-900">৳ 88.20</span>
              <span className="text-gray-400 line-through text-sm">৳ 90</span>
              <span className="bg-red-400 text-white text-[10px] px-4 py-1 font-bold rounded-sm ml-2 relative overflow-hidden">
                2% OFF
                <div className="absolute top-0 right-0 h-full w-2 bg-white rotate-12 translate-x-1"></div>
              </span>
            </div>
          </div>
          <button className="bg-[#007E7B] text-white p-2  rounded-md font-medium sm:text-[12px] text-sm cursor-pointer shadow-sm flex items-center gap-2">
            Add To Cart
          </button>
        </div>

        {/* About  */}

        <div>
          <div className="space-y-4 mt-4 text-black  text-[15px]">
            <h2 className="text-xl font-bold text-black">About this item</h2>
            <p >
              Hand washing with soap is the best way to avoid infections and
              keep your family healthy. However, ordinary soap may be harsh on
              skin and repeated hand washing may leave your hands dry and
              damaged. Your sensitive skin needs a cleanser that is tough on
              germs, but soft on your skin. That's why we created
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsRight;
