import {
  ChevronDown,
  MapPin,
  Menu,
  MessageCircleCheck,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white text-[14px]">
      <div className="border-b py-[12px]">
        {/* <div className="mx-auto  flex items-center justify-between gap-4 md:gap-8 "> */}
        <div className="mx-auto  grid grid-cols-12 gap-2.5">
          <div className="flex items-center order-1 gap-2 col-span-6 max-[320px]:col-span-full sm:col-span-4 lg:col-span-2 lg:gap-2 ">
            <Menu size={24} className="text-black xl:hidden" />
            <Link href="/" className="flex-shrink-0">
              <img src={"/logo.avif"} width={106} height={48} />
            </Link>
          </div>

          <div className=" text-black hidden md:flex items-center gap-3 col-span-4 order-2 lg:col-span-2 ">
            <MapPin size={24} />
            <p className="">
              Delivary to <br />
              <span className="font-bold">Bangladesh</span>
            </p>
            <ChevronDown />
          </div>

          <div className="md:hidden flex items-center gap-3 text-black col-span-4 order-3 col-span-12 md:order-2 lg:col-span-2 ">
            <p className="">
              Delivary to
              <span className="font-bold">choose</span>
            </p>
            <ChevronDown />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-[full] lg:max-w-3xl relative group col-span-12 order-4  lg:order-3 lg:col-span-5">
            <div className="flex items-center border-2 border-gray-100 group-focus-within:border-teal-600 rounded-lg overflow-hidden transition-colors">
              <div className="flex items-center px-3 border-r text-sm text-gray-600 gap-1 cursor-pointer">
                All <ChevronDown size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for producs"
                className=" text-gray-700 w-full p-3  bg-[#d1e7e7] outline-none text-sm"
              />
              <button className="bg-teal-600 p-[13px] text-white  hover:bg-teal-700 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 font-sans col-span-6 max-[320]:justify-start max-[320px]:col-span-full  sm:col-span-8 order-2 md:col-span-4 lg:order-4 lg:col-span-3">
            {/* Account */}
            <div className="flex items-center justify-center xl:hidden rounded-lg border-1 border-[#F97316] bg-[#FFF7ED] px-[8px] py-[4px] text-[14px] font-medium text-[#C2410C]">
              ৳ 0
            </div>

            {/* User Icon Circle */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500 ">
              <User size={24} />
            </div>

            {/* Account Text */}
            <div className="hidden xl:block flex flex-col leading-tight font-bold text-black text-center">
              Hello, Sign in
              <br />
              Account & Orders
            </div>

            {/* Messenger Icon */}
            <div className=" cursor-pointer transition-opacity hover:opacity-80">
              <MessageCircleCheck size={24} className="text-black" />
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative cursor-pointer">
              <ShoppingCart
                size={28}
                className="text-gray-600"
                strokeWidth={1.5}
              />
              {/* Red Notification Badge */}
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
