import { LucideIcon } from "lucide-react";
import React from "react";

export type PromoVariant = "green" | "cyan" | "lime";

export interface PromoCardTypes {
  title: string;

  subtitle: string;

  detail: string;

  buttonText: string;

  icon: LucideIcon;

  variant: PromoVariant;
}

const PromoCard = ({
  title,
  subtitle,
  detail,
  buttonText,
  icon: Icon,
  variant,
}: PromoCardTypes) => {
  const variants = {
    green: "from-green-50 to-emerald-500 text-emerald-900",
    cyan: "from-cyan-50 to-cyan-500 text-cyan-900",
    lime: "from-lime-50 to-lime-600 text-lime-900",
  };

  const buttonColors = {
    green: "text-emerald-600",
    cyan: "text-cyan-600",
    lime: "text-lime-600",
  };

  return (
    <div
      className={`relative w-full max-w-[180px]  md:max-w-[200px] p-4 rounded-2xl rounded-tr-[70px] bg-gradient-to-b ${variants[variant]} flex flex-col justify-between min-h-[200px] shadow-sm `}
    >
      <div className="rounded-lg  absolute left-auto right-0 h-full flex ">
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 bg-inherit brightness-90 p-2 rounded-full border-4 border-white">
          <Icon size={30} className="text-white" fill="currentColor" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 text-black">
        <h3 className="text:[14px] md:text-lg font-bold uppercase tracking-tight">
          {title}
        </h3>
        <p className="text:[14px] md:text-lg font-bold mt-4 leading-tight">
          {subtitle}
        </p>
        <p className="text:[14px] md:text-lg font-medium">{detail}</p>
      </div>

      {/* Action Button */}
      <button
        className={`mt-6 whitespace-nowrap text:[14px] md:text-lg; bg-white p-2 rounded-xl font-bold text-center`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PromoCard;
