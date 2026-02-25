import React from 'react';

const DealsHeader = ({title:string}) => {
  return (
    <div className="bg-[#F0F9F9] px-4 py-3 flex items-center justify-between rounded-t-lg">
      {/* Left Side: Title */}
      <h2 className="text-[#56C1D0] font-bold text-lg md:text-xl tracking-tight">
        {title}
      </h2>

      {/* Right Side: See All Link */}
      <a 
        href="#" 
        className="text-[#56C1D0] text-sm font-semibold hover:underline transition-all"
      >
        see all
      </a>
    </div>
  );
};

export default DealsHeader;