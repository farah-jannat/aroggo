import { useSidebarStore } from "@/store/useSidebarStore";
import {
  ChevronRight,
  Croissant,
  CrossIcon,
  Phone,
  Upload,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SidebarHeader = () => {
  const { toggleSidebar } = useSidebarStore();
  return (
    <div className="flex flex-col w-full max-w-md p-4 bg-white space-y-4 border-b">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img src={"/logo.avif"} width={106} height={48} />
        </Link>


        <span onClick={toggleSidebar} className="text-black font-bold cursor-pointer">
          {" "}
          X{" "}
        </span>
      </div>

      {/* Top Buttons Row */}
      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 border border-red-500 rounded-lg text-red-500 hover:bg-red-50 to-transparent transition-colors">
          <div className="bg-red-100 p-1 rounded-full">
            <Phone size={14} fill="currentColor" />
          </div>
          <span className="font-medium text-[11px]">Call for Order</span>
        </button>

        <button className="flex items-center justify-center gap-[2px] flex-1 border border-teal-600 rounded-lg p-1 text-teal-700 hover:bg-teal-50 transition-colors">
          <div className="bg-teal-100 p-1 rounded-full">
            <Upload size={14} />
          </div>
          <span className="font-medium text-[11px]">Upload Prescription</span>
        </button>
      </div>

      <hr className="border-gray-100" />

      {/* Flash Sale Row */}
      <div className="flex items-center justify-between cursor-pointer group ">
        <div className="flex items-center gap-4">
          <Zap className="text-yellow-500 fill-yellow-500" size={24} />
          <div className="flex items-center italic font-black text-[18px] tracking-tighter">
            <span className="text-black">F</span>
            <span className="text-red-500 underline decoration-2 underline-offset-4">
              LASH
            </span>
            <span className="ml-2 text-black">SALE</span>
          </div>
          <div className="ml-2 border-1 border-black rounded px-[4px] py-[2px] font-bold text-[12px] text-black">
            1000
          </div>
        </div>

        <ChevronRight className="text-gray-500 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default SidebarHeader;
