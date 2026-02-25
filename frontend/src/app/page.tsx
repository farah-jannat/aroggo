import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductSection from "@/components/productSection";
import PromoSection from "@/components/promoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white">
      <Navbar />
      <Hero />
      <PromoSection />

      <div className="bg-[#F0F9F9]">
        <ProductSection title={"Unilever: Deals you can't miss"}  textColor={"#56C1D0"}/>
      </div>

      <div className="bg-[#FDF0F8]">
        <ProductSection title={"skin'O X innsaei: Steal the Deal"} textColor={"#E959B4"} />
      </div>


      <div className="bg-[#F3E9E2]">
        <ProductSection title={"Ramadan Hydration Picks"} textColor={"#963E0A"} />
      </div>
    </div>
  );
}
