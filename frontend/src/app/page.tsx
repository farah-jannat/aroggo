import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PromoSection from "@/components/promoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[16px] bg-white">
      <Navbar />
      <Hero />
      <PromoSection />
    </div>
  );
}
