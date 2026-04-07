import { Dispatch, SetStateAction } from "react";
import { BaseModal } from "@/components/base-modal";
import { Check, ChevronDown, X } from "lucide-react";
import React from "react";

interface ModalProps {
  orderModal?: boolean;
  setOrderModal: Dispatch<SetStateAction<boolean>>;
}

const OrderConfirmModal = (props: ModalProps) => {
  const { orderModal, setOrderModal } = props;
  return (
    <BaseModal
      setShowModal={() => setOrderModal(false)}
      showModal={orderModal}
      className="max-w-md  bg-blue-900 p-8 zz-100!"
    >
      {/* Modal Container */}
      <div className=" zz-50 h-[70vh] overflow-y-auto  ">
        <div className="w-full max-w-md  rounded-xl bg-white my-[16px] shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-bold text-slate-800">Payment</h2>
          </div>

          {/* Content Body */}
          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              {/* Big Success Check */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-600">
                <Check className="h-10 w-10 text-white stroke-[3px]" />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-slate-800">
                Congratulations!
              </h3>
              <p className="mb-8 text-slate-600">
                Order placed successfully by{" "}
                <span className="font-semibold text-slate-800">
                  "Cash on delivery"
                </span>
              </p>

              {/* Stepper / Progress Bar */}
              <div className="relative mb-10 flex w-full max-w-[280px] items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-gray-200"></div>

                {/* Step 1: Order Placed (Completed) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white ring-4 ring-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="absolute top-10 whitespace-nowrap text-sm font-medium text-teal-600">
                    Order Placed
                  </span>
                </div>

                {/* Step 2: Pay Online (Pending) */}
                <div className="relative cursor-pointer z-10 flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-teal-600 ring-4 ring-white"></div>
                  <span className="absolute top-10 whitespace-nowrap text-sm font-medium text-slate-500">
                    Pay Online
                  </span>
                </div>
              </div>

              {/* View Details Toggle */}
              <button className="mt-4 flex items-center gap-1 text-teal-600 font-semibold hover:underline">
                View details
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full my-[16px] max-w-md rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-800">
              Payment Details
            </h2>
          </div>

          <div className="p-6">
            {/* Savings Alert */}
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-dashed border-blue-200 bg-orange-50/50 px-4 py-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-[10px] font-bold text-white">
                ৳
              </div>
              <p className="text-sm font-medium text-slate-700">
                You are saving ৳100 in this order
              </p>
            </div>

            {/* Details List */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 font-medium">Order ID</span>
                <span className="font-bold text-slate-800">#4520372</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-600 font-medium">Order At</span>
                <span className="font-semibold text-slate-800">
                  Apr 05, 2026, 08:22 PM
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-600 font-medium">
                  Subtotal (MRP)
                </span>
                <span className="font-semibold text-slate-800">৳120</span>
              </div>

              <hr className="border-gray-100" />

              <div className="flex justify-between text-sm">
                <span className="text-slate-600 font-medium">
                  Discount applied
                </span>
                <span className="font-bold text-teal-600">- ৳100</span>
              </div>

              {/* Dotted Divider */}
              <div className="border-t border-dashed border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span className="text-base font-bold text-slate-800">
                    Amount Payable
                  </span>
                  <span className="text-base font-bold text-slate-800">
                    ৳20
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-base font-bold text-slate-800">
                  Amount Paid
                </span>
                <span className="text-base font-bold text-slate-800">৳0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-gray-50 rounded-full  w-full">
          <button className="flex-1 border border-gray-200 text-[#007A7C] py-2 font-medium cursor-pointer">
            Track Order
          </button>

          <button className="flex-1 cursor-pointer flex items-center justify-center gap-2 bg-[#007A7C] text-white py-2 rounded-md font-medium transition-colors">
            Show Products
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default OrderConfirmModal;
