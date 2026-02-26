"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductSection from "@/components/productSection";
import PromoSection from "@/components/promoSection";
import RecursiveSidebar from "@/components/recursiveSidebar";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function Home() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <div className=" bg-white ">

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
            fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl
            transition-transform duration-500 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}

      >
        <RecursiveSidebar />
      </div>

      {/* // --- *Right* (main contant) --- */}

      <div className="h-full w-full overflow-y-auto">
        <Hero />
        <PromoSection />
        {/* // --- all product sections here */}
        <div className="bg-[#F0F9F9]">
          <ProductSection
            title={"Unilever: Deals you can't miss"}
            textColor={"#56C1D0"}
          />
        </div>
        <div className="bg-[#FDF0F8]">
          <ProductSection
            title={"skin'O X innsaei: Steal the Deal"}
            textColor={"#E959B4"}
          />
        </div>
        <div className="bg-[#F3E9E2]">
          <ProductSection
            title={"Ramadan Hydration Picks"}
            textColor={"#963E0A"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
