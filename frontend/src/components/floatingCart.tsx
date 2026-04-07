// import React, { Dispatch, forwardRef, SetStateAction } from "react";
// import { ShoppingCart } from "lucide-react";
// import useCartStore from "@/store/useCartStore";

// const FloatingCart = forwardRef<
//   HTMLButtonElement,
//   React.ButtonHTMLAttributes<HTMLButtonElement>
// >((props, ref) => {
//   const cart = useCartStore((state) => state.cart);

//   let totalCount = 0;
//   let totalPrice = 0;

//   cart.forEach((item) => {
//     totalCount += item.quantity;
//     totalPrice += item.price * item.quantity;
//   });

//   return (
//     <button
//       {...props} // Spreads DrawerTrigger's onClick and aria-attributes
//       ref={ref} // Connects the reference
//       id="cart-icon"
//       className="flex flex-col items-center overflow-hidden rounded-l-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
//     >
//       <div className="flex flex-col items-center justify-center bg-[#00796B] px-4 py-3 text-white min-w-[80px]">
//         <ShoppingCart size={24} strokeWidth={2.5} />
//         <span className="mt-1 text-sm font-bold">{totalCount} Item</span>
//       </div>

//       <div className="flex w-full items-center justify-center bg-[#C04820] py-2 text-white">
//         <span className="text-lg font-bold">৳{totalPrice}</span>
//       </div>
//     </button>
//   );
// });

// FloatingCart.displayName = "FloatingCart";

// export default FloatingCart;

// ====  new

import React, { Dispatch, SetStateAction } from "react";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/store/useCartStore";

// 1. Define an interface that includes your custom props + standard button props
interface FloatingCartProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setIsDrawer: Dispatch<SetStateAction<boolean>>;
}

// 2. Use the interface in the forwardRef generic
const FloatingCart = (props: FloatingCartProps) => {
  const { setIsDrawer } = props;

  const cart = useCartStore((state) => state.cart);

  let totalCount = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalCount += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return (
    <div
      onClick={() => setIsDrawer(true)}
      id="cart-icon"
      // Example: You can now use setIsDrawer in an onClick if needed,
      // though DrawerTrigger usually handles the toggle itself.
      className="
fixed top-34 right-0  z-50 
      
      flex flex-col items-center overflow-hidden rounded-l-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <div className="flex flex-col items-center justify-center bg-[#00796B] px-4 py-3 text-white min-w-[80px]">
        <ShoppingCart size={24} strokeWidth={2.5} />
        <span className="mt-1 text-sm font-bold">{totalCount} Item</span>
      </div>

      <div className="flex w-full items-center justify-center bg-[#C04820] py-2 text-white">
        <span className="text-lg font-bold">৳{totalPrice}</span>
      </div>
    </div>
  );
};

export default FloatingCart;
