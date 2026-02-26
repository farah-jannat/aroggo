import React from "react";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/store/useCartStore";

const FloatingCart = () => {
  const cart = useCartStore((state) => state.cart);
  console.log("Current Cart in UI:", cart);
  let totalCount = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalCount += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return (
    <button className="flex flex-col items-center overflow-hidden rounded-l-2xl shadow-lg transition-transform hover:scale-105 active:scale-95">
      {/* Top Section: Icon and Item Count */}
      <div className="flex flex-col items-center justify-center bg-[#00796B] px-4 py-3 text-white min-w-[80px]">
        <ShoppingCart size={24} strokeWidth={2.5} />
        <span className="mt-1 text-sm font-bold">{totalCount} Item</span>
      </div>

      {/* Bottom Section: Currency/Price */}
      <div className="flex w-full items-center justify-center bg-[#C04820] py-2 text-white">
        <span className="text-lg font-bold">৳{totalPrice}</span>
      </div>
    </button>
  );
};

export default FloatingCart;
