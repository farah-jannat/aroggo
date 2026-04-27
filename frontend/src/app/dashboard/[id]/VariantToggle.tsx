import React, { useState } from "react";
import { boolean } from "zod";

interface Props {
  isEnabled: boolean;
//   setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSwitch: () => void;
}

const VariantToggle = (props: Props) => {
  const { isEnabled, toggleSwitch } = props;

//   const toggleSwitch = () => {
//     setIsEnabled((prev) => !prev);
//   };

  return (
    <div className="flex items-center gap-3 font-sans">
      {/* Switch Container */}
      <label className="relative inline-flex items-center cursor-pointer select-none">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isEnabled}
          onChange={toggleSwitch}
        />

        {/* Track */}
        <div
          className={`
          w-14 h-7 rounded-full transition-colors duration-200 ease-in-out
          ${isEnabled ? "bg-[#BEE3F8]" : "bg-gray-200"}
          peer-focus:ring-2 peer-focus:ring-blue-300
        `}
        ></div>

        {/* Thumb (The Circle) */}
        <div
          className={`
          absolute left-1 top-1 bg-white w-5 h-5 rounded-full 
          shadow-sm flex items-center justify-center
          transition-transform duration-200 ease-in-out
          ${isEnabled ? "translate-x-7" : "translate-x-0"}
        `}
        >
          {/* Minus icon (visible when off, matching your image) */}
          {!isEnabled && <div className="w-2 h-[2px] bg-[#BEE3F8]"></div>}
        </div>
      </label>

      {/* Label Text */}
      <span className="text-[#1A365D] text-lg font-medium">
        Manage pricing and inventory for each product variant
      </span>

      {/* Info Icon (Optional) */}
      <div className="text-[#3182CE] cursor-help">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default VariantToggle;
