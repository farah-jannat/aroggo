"use client";
import { X } from "lucide-react";
import React, { useState } from "react";

interface ProductOptionModalProps {
  setOpenOptionModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductOptionModal = ({
  setOpenOptionModal,
}: ProductOptionModalProps) => {
  const [currentInput, setCurrentInput] = useState("");
  const [productOptions, setProductOptions] = useState({
    name: "",
    type: "",
    choices: [] as { value: string }[],
  });

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = currentInput.trim().replace(",", "");
      if (val) {
        setProductOptions({
          ...productOptions,
          choices: [...productOptions.choices, { value: val }],
        });
      }
    }
  };
  console.log("product-opitons", productOptions);

  return (
    <div className=" bg-white rounded-xl">
      <div className="flex rounded-t-xl items-center justify-between p-4  bg-blue-400 ">
        <h3 className="text-lg font-semibold text-white">
          Add an Info Section
        </h3>
        <X onClick={() => setOpenOptionModal(false)} color="white" />
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-4">
          <label>Type in an option name</label>
          <input
            // {...register("title")}
            value={productOptions.name}
            placeholder="Size, Weights etc"
            onChange={(e) =>
              setProductOptions({ ...productOptions, name: e.target.value })
            }
            className="p-3  border border-slate-300 rounded-lg focus:outline-cyan-500"
          />
        </div>

        <div className="flex flex-col gap-4 my-6">
          <label>Field Type</label>
          <select
            // {(`productOptions.${index}.type`)}
            className="p-3 border border-slate-300 rounded-lg focus:outline-cyan-500 bg-white"
          >
            <option value="Text">Text</option>
            <option value="Color">Color</option>
          </select>
        </div>
        <div>
          <div className="flex my-6 flex-col gap-4">
            <label>Choices</label>
            <input
              value={currentInput}
              onChange={(e) =>
                // setProductOptions({
                //   ...productOptions,
                //   choices: e.target.value,
                // })
                setCurrentInput(e.target.value)
              }
              onKeyDown={handleEnter}
              placeholder="e.g. Small, Large"
              className="p-3  border border-slate-300 rounded-lg focus:outline-cyan-500"
            />
          </div>
        </div>

        {/* <div className="flex justify-end">
          <button
            className="py-[6px] cursor-pointer px-4 text-red-400"
            onClick={() => {setShowInfoModal(false), removeInfo(additionalInfoIdx!)}}
          >
            Delete this info
          </button>
          <button
            className="py-[6px] cursor-pointer px-4 text-blue-400"
            onClick={() => setShowInfoModal(false)}
          >
            cancel
          </button>
          <button
            className="py-[6px] cursor-pointer px-4 bg-blue-400 rounded-2xl text-white"
            onClick={handleOk}
          >
            Ok
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductOptionModal;
