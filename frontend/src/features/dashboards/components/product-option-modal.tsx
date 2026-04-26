// === new ===

"use client";
import { productOptionType } from "@/features/dashboards/schemas/dashboard-product-form.schema";
import { X } from "lucide-react";
import React, { useState } from "react";

// Standard HTML color names to Hex mapping
const colorMap: Record<string, string> = {
  blue: "#0000FF",
  red: "#FF0000",
  green: "#008000",
  yellow: "#FFFF00",
  black: "#000000",
  white: "#FFFFFF",
  pink: "#FFC0CB",
  orange: "#FFA500",
  purple: "#800080",
  grey: "#808080",
  silver: "#C0C0C0",
  gold: "#FFD700",
};

interface ProductOptionModalProps {
  setOpenOptionModal: React.Dispatch<React.SetStateAction<boolean>>;
  appendProductOption: (data: productOptionType) => void;
  defaultValues: productOptionType | undefined;
  productOptionIdx: number | null;
  updateProductOption: (data: productOptionType) => void;
}

type AllowedTypes = "Text" | "Color";

const ProductOptionModal = ({
  setOpenOptionModal,
  appendProductOption,
  defaultValues,
  productOptionIdx,
  updateProductOption,
}: ProductOptionModalProps) => {
  const [currentInput, setCurrentInput] = useState("");
  const [productOptions, setProductOptions] = useState<productOptionType>({
    name: defaultValues?.name || "",
    type: defaultValues?.type || "Text", // Match your <select> values
    choices:
      defaultValues?.choices || ([] as { name: string; value: string }[]),
  });

  const handleOk = () => {
    if (
      productOptionIdx !== null &&
      productOptions.name &&
      productOptions.type &&
      productOptions.choices.length
    ) {
      updateProductOption(productOptions);
    } else {
      appendProductOption(productOptions);
    }
    setCurrentInput("");
    setProductOptions({
      name: "",
      type: "Text",
      choices: [],
    });
    setOpenOptionModal(false);
  };

  const handleColorChange = (index: number, newColor: string) => {
    console.log("here the color", index, newColor);
    const updatedChoices = [...productOptions.choices];
    updatedChoices[index].value = newColor;
    setProductOptions({ ...productOptions, choices: updatedChoices });
  };
  console.log("updatedx choise", productOptions);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = currentInput.trim().toLowerCase().replace(",", "");

      if (val) {
        // Wix-style logic: Check if name is a color, otherwise default black
        let initialHex = "#000000";
        if (productOptions.type === "Color") {
          if (/^#([0-9A-F]{3}){1,2}$/i.test(val)) initialHex = val;
          else if (colorMap[val]) initialHex = colorMap[val];
        }

        setProductOptions({
          ...productOptions,
          choices: [
            ...productOptions.choices,
            {
              name: val.charAt(0).toUpperCase() + val.slice(1), // Capitalize
              value: productOptions.type === "Color" ? initialHex : val,
            },
          ],
        });
        setCurrentInput("");
      }
    }
  };

  return (
    <div className="bg-white rounded-xl w-[500px] shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-blue-400">
        <h3 className="text-lg font-semibold text-white">
          Add an Info Section
        </h3>
        <X
          className="cursor-pointer"
          onClick={() => setOpenOptionModal(false)}
          color="white"
        />
      </div>

      <div className="p-8">
        <div className="flex flex-col gap-4">
          <label className="font-medium">Type in an option name</label>
          <input
            value={productOptions.name}
            placeholder="Size, Color, etc."
            onChange={(e) =>
              setProductOptions({ ...productOptions, name: e.target.value })
            }
            className="p-3 border border-slate-300 rounded-lg focus:outline-cyan-500"
          />
        </div>

        <div className="flex flex-col gap-4 my-6">
          <label className="font-medium">Field Type</label>
          <select
            value={productOptions.type}
            className="p-3 border border-slate-300 rounded-lg focus:outline-cyan-500 bg-white"
            onChange={(e) =>
              setProductOptions({
                ...productOptions,
                type: e.target.value as AllowedTypes,
              })
            }
          >
            <option value="Text">Text</option>
            <option value="Color">Color</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <label className="font-medium">Choices</label>
          <div className="flex flex-wrap items-center p-3 gap-2 border border-slate-300 rounded-lg min-h-[50px] focus-within:border-cyan-500 transition-colors">
            {productOptions.choices.map((choice, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-blue-100 rounded-md py-1 px-2 border border-blue-200"
              >
                {productOptions.type === "Color" && (
                  <div className="relative w-5 h-5 ">
                    {/* Hidden actual color input */}
                    <input
                      type="color"
                      id={`picker-${idx}`}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      value={choice.value}
                      onChange={(e) => handleColorChange(idx, e.target.value)}
                    />
                    {/* The circle preview */}
                    <div
                      className="w-5 h-5 rounded-full border border-gray-300 pointer-events-none"
                      style={{ backgroundColor: choice.value }}
                    />
                  </div>
                )}
                <span className="text-sm font-medium">{choice.name}</span>
                <X
                  size={14}
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => {
                    const filtered = productOptions.choices.filter(
                      (_, i) => i !== idx,
                    );
                    setProductOptions({ ...productOptions, choices: filtered });
                  }}
                />
              </div>
            ))}

            <input
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleEnter}
              placeholder="e.g. Small, Blue"
              className="outline-none flex-1 min-w-[100px] text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <button
            className="py-[6px] cursor-pointer px-4 rounded-2xl text-blue-400 text-end mt-6"
            onClick={() => setOpenOptionModal(false)}
          >
            Cancel
          </button>
          <button
            className="py-[6px] cursor-pointer px-4 bg-blue-400 rounded-2xl text-white text-end mt-6"
            onClick={handleOk}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionModal;
