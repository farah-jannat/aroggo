"use client";
import AddAddressModal from "@/components/add-address-modal";
import NewAddressModal from "@/components/new-address.modal";
import SelectAddressModal from "@/components/select-address.modal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  CheckCircle2,
  ChevronRight,
  Info,
  MapPin,
  Pencil,
  Rocket,
  ShoppingCart,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Product {
  //   id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice: number;
  discount: string;
  pack: string;
  image: string;
}

interface CartItemProps extends Product {
  quantity: number;
  onRemove: (id: string) => void;
  onQtyChange: (id: string, newQty: number) => void;
}

interface Props {
  setSelectAddressModal: Dispatch<SetStateAction<boolean>>;

  setIsDrawer: Dispatch<SetStateAction<boolean>>;
}

const Cart = (props: Props) => {
  // ** States
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  // ** Props
  const { setSelectAddressModal, setIsDrawer } = props;
  // const [selectAddressModal, setSelectAddressModal] = useState(false);
  // const [newAddressModal, setNewAddressModal] = useState(false);

  const handleOpenAddForm = () => {
    setIsAddAddressOpen(false); // Close first popup
    setIsAddFormOpen(true); // Open second popup
  };
  return (
    <>
      <div>
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100 max-h-[100vh] overflow-y-auto relative">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b sticky top-0 z-20 bg-white">
            <h2 className="text-lg font-bold text-gray-800 ">Shopping Cart</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          {/* Tabs */}
          <div className="p-4">
            <div className="flex bg-gray-50 rounded-full p-1 border border-gray-200">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#007A7C] text-white py-2 rounded-full font-medium transition-colors">
                Products{" "}
                <span className="bg-white text-[#007A7C] text-xs px-2 py-0.5 rounded-full">
                  2
                </span>
              </button>
              {/* <button className="flex-1 text-[#007A7C] py-2 font-medium">
              Lab Tests
            </button> */}
            </div>
          </div>

          {/* Product List */}
          <div className="px-4 space-y-3 max-h-[400px] overflow-y-auto">
            <CartItem
              name="Pregnancy HCG Test Midstream Strip..."
              brand="SmartCure Limited"
              price={20}
              oldPrice={120}
              discount="83% OFF"
              pack="1 x 1's Pack"
              image="/logo.avif" // Replace with your path
            />
            <CartItem
              name="Supermom Baby Pant Diaper Medium (6-12..."
              brand="Square Toiletries Limited"
              price={119}
              oldPrice={140}
              discount="15% OFF"
              pack="1 x 5 Pcs"
              image="/login-1.png" // Replace with your path
            />
          </div>

          {/* Home Address Section */}
          <div className="m-4 p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800">Home Address</h3>
              <button className="text-gray-500 flex items-center gap-1 text-sm font-medium">
                Change <Pencil size={14} />
              </button>
            </div>

            <div className="flex gap-3">
              <div className="bg-gray-100 p-3 rounded-full h-fit">
                <MapPin className="text-gray-600" size={20} />
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-bold text-gray-800">Farah Jannat</p>
                <p className="mb-1">+8801903709156</p>
                <p className="leading-tight">
                  address: House/Holding Number: 898, Purba Ashkona,
                  Dakshinkhan, Dhaka-1230, Dakshinkhan Bazar, Dakshin Khan,
                  Dhaka City, Dhaka
                </p>
              </div>
            </div>

            {/* Text Area */}
            <div className="mt-4">
              <textarea
                placeholder="Additional Info (If any)"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#007A7C] bg-gray-50"
                rows={2}
              />
              <div className="text-right text-xs text-gray-400 mt-1">0/120</div>
            </div>
          </div>

          {/* Add Address Section */}
          {/* <div className="max-w-sm rounded-lg border border-gray-100 bg-white shadow-sm overflow-hidden">
          
          <div className="border-b border-gray-100 px-4 py-3">
            <h3 className="text-[15px] font-bold text-slate-800">
              Shipping Address
            </h3>
          </div>

          
          <div className="p-4 flex flex-col gap-4">
            <p className="text-[15px] text-slate-500">
              You haven&apos;t added any address yet.
            </p>

           
            <button className="w-full rounded-lg bg-[#007A7C] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#006668] active:scale-[0.98]">
              Add New Address
            </button>
          </div>
        </div> */}

          <div className="max-w-md mx-auto bg-gray-50 p-4 space-y-4 font-sans">
            {/* 1. Main Pricing Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 space-y-4">
                <button className="text-[#007A7C] font-bold text-sm underline underline-offset-4">
                  Have coupon code?
                </button>

                {/* Savings Alert */}
                <div className="flex items-center gap-2 bg-[#F0F8F7] border border-dashed border-[#007A7C] rounded-lg px-3 py-2 text-[#007A7C] text-sm font-semibold">
                  <div className="bg-orange-500 rounded-full p-0.5">
                    <span className="text-white text-[10px]">৳</span>
                  </div>
                  You are saving ৳10 in this order.
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal (MRP)</span>
                    <span className="text-gray-900 font-medium">৳75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount applied</span>
                    <span className="text-pink-500">-৳10</span>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Delivery Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#007A7C]" size={18} />
                      <div className="flex items-center gap-1 bg-[#007A7C] text-white px-2 py-0.5 rounded text-xs font-bold uppercase tracking-tighter">
                        <Zap size={12} fill="white" /> Regular Delivery
                      </div>
                    </div>
                    <span className="text-[#007A7C] font-bold">Free</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-7">
                    Delivery Charge (First Order)
                  </p>

                  {/* Info Badge */}
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-[11px] font-medium leading-tight">
                    <Info size={14} className="flex-shrink-0" />
                    Free Delivery Above 1999 Taka Order
                  </div>
                </div>
              </div>

              {/* Amount Payable Footer */}
              <div className="bg-white border-t border-dashed border-gray-200 p-4 flex justify-between items-center">
                <span className="font-bold text-slate-800">Amount Payable</span>
                <span className="text-lg font-bold text-[#007A7C]">৳65</span>
              </div>
            </div>

            {/* 2. Subscription Checkbox */}
            <div className="flex items-center gap-2 px-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-gray-300 rounded accent-[#007A7C]"
              />
              <span className="text-sm text-gray-600 font-medium">
                আমি প্রতি মাসেই কিনতে চাই
              </span>
            </div>

            {/* 3. Terms Text */}
            <p className="text-[11px] text-gray-500 px-2 leading-relaxed">
              By continuing you agree to our{" "}
              <span className="text-[#007A7C] font-semibold cursor-pointer">
                Terms of services
              </span>
              ,{" "}
              <span className="text-[#007A7C] font-semibold cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-[#007A7C] font-semibold cursor-pointer">
                Return and Refund Policy
              </span>
              .
            </p>

            {/* 4. Flash Sale Banner */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Zap className="text-yellow-400 fill-yellow-400" size={24} />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="italic font-black text-black">FLASH</span>
                    <span className="italic font-black text-red-600">SALE</span>
                  </div>
                  <p className="text-xs font-bold text-gray-900">
                    Save up to <span className="text-red-500">83% 🔥</span>
                  </p>
                </div>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>

            <div
              className="bg-[#007A7C] rounded-xl p-3 flex items-center justify-between text-white shadow-lg cursor-pointer hover:bg-[#006668] transition-all active:scale-[0.98]"
              // onClick={() => setSelectAddressModal(true)}
              onClick={() => {
                setIsDrawer(false);
                setSelectAddressModal(true);
              }}
            >
              <div className="flex items-center gap-3 border-r border-white/20 pr-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-medium opacity-80 uppercase">
                    1 Items
                  </p>
                  <p className="text-lg font-bold">৳65</p>
                </div>
              </div>

              <span className="flex items-center gap-1 font-bold text-sm pl-4">
                Select Address <ChevronRight size={18} />
              </span>
            </div>

            {/* 5. Sticky Bottom Button */}
          </div>
        </div>
        );
      </div>
      {/* <SelectAddressModal
        showModal={selectAddressModal}
        setShowModal={setSelectAddressModal}
        setNewAddressModal={setNewAddressModal}
      />

      <NewAddressModal
        showModal={newAddressModal}
        setShowModal={setNewAddressModal}
      /> */}
    </>
  );
};

const CartItem = ({
  name,
  brand,
  price,
  oldPrice,
  discount,
  pack,
  image,
}: Product) => (
  <div className="flex gap-3 p-3 border border-gray-100 rounded-xl relative hover:shadow-sm transition-shadow">
    {/* Product Image & Badge */}
    <div className="relative w-24 h-24 border rounded-lg overflow-hidden flex-shrink-0">
      <img src={image} alt={name} className="object-contain w-full h-full" />
      <div className="absolute top-0 left-0 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-lg flex items-center gap-0.5">
        ⚡ {discount}
      </div>
    </div>

    {/* Details */}
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <h4 className="text-sm font-bold text-gray-800 leading-snug truncate pr-4">
          {name}
        </h4>
        <div className="flex gap-2">
          <Rocket size={16} className="text-blue-500 cursor-pointer" />
          <Trash2
            size={16}
            className="text-gray-400 cursor-pointer hover:text-red-500"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500">{brand}</p>
      <p className="text-xs text-gray-400">{pack}</p>

      <div className="flex justify-between items-end mt-2">
        <div>
          <span className="text-xs text-gray-400 line-through mr-2">
            ৳ {oldPrice}
          </span>
          <span className="text-lg font-bold text-black font-serif">
            ৳ {price}
          </span>
        </div>

        {/* Quantity Dropdown */}
        <div className="relative">
          <select className="appearance-none bg-white border border-[#007A7C] text-[#007A7C] text-sm font-bold py-1 px-4 pr-8 rounded-lg focus:outline-none">
            <option>Qty: 1</option>
            <option>Qty: 2</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#007A7C]">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
