"use client";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "Is the product authentic?",
      answer:
        "Yes. Arogga sources all medicines and health products directly from trusted suppliers, distributors, or manufacturers. Every product is verified before delivery.",
    },
    {
      question: "Does Arogga deliver all over Bangladesh?",
      answer:
        "Yes, Arogga delivers nationwide. You can order from anywhere in Bangladesh.",
    },
    {
      question: "Is Cash on Delivery(COD) available?",
      answer:
        "Yes, Cash on Delivery is available across Bangladesh for most products.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 24–48 hours inside Dhaka and 3–5 days outside Dhaka, depending on location and courier load.",
    },
    {
      question: "Can I return or replace the product?",
      answer: (
        <>
          If the product is damaged, incorrect, or expired, you can request a
          replacement or refund according to{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Arogga's return policy
          </a>
          .
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-3x py-4">
      <div className="bg-white border border-gray-200 rounded-lg  p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Frequently Questions & Answers
        </h2>

        <div className="divide-y divide-gray-200">
          {faqData.map((item, index) => (
            <div
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              key={index}
              className="py-4 cursor-pointer"
            >
              <button className="flex w-full items-center justify-between text-left group">
                <span className="text-[14px] font-semibold text-black">
                  {item.question}
                </span>
                <ChevronUp
                  className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${
                    openIndex === index ? "" : "rotate-180"
                  }`}
                />
              </button>

              {/* Animation/Visibility Logic */}
              <div
                className={`mt-2 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
