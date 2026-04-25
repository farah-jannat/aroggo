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
    type: "text",
    choices: [] as { name: string }[],
  });

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = currentInput.trim().replace(",", "");
      if (val) {
        setProductOptions({
          ...productOptions,
          choices: [...productOptions.choices, { name: val }],
        });
        setCurrentInput(" ");
      }
    }
  };
  console.log("product-opitons", productOptions);

  return (
    <div className=" bg-white rounded-xl w-[500px]">
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
            onChange={(e) =>
              setProductOptions({ ...productOptions, type: e.target.value })
            }
          >
            <option value="Text">Text</option>
            <option value="Color">Color</option>
          </select>
        </div>
        <div>
          <div className="flex my-6 flex-col gap-4">
            <label>Choices</label>

            <div className="flex items-center p-3 gap-2 border border-slate-300 rounded-lg focus:outline-cyan-500">
              {productOptions.type === "Text"
                ? productOptions.choices.map((choice, idx) => (
                    <button
                      className="bg-blue-200 rounded-md py-[2px] px-[4px]"
                      key={idx}
                    >
                      {choice.name}
                    </button>
                  ))
                : productOptions.choices.map((choice, idx) => (
                    <div
                      className="flex items-center gap-2 bg-blue-200 rounded-md py-[2px] px-[4px] "
                      key={idx}
                    >
                      <input
                      type="color"
                      onClick={()=> {
                        console.log("index", idx)
                      }}
                        className={`border-0 outline-0 w-4 h-4 rounded-full cursor-pointer `}
                        // style={{ backgroundColor: choice.name }}
                        // value={}
                      />
                      <button className=" " key={idx}>
                        {choice.name}
                      </button>
                    </div>
                  ))}
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
                // className="p-3  border border-slate-300 rounded-lg focus:outline-cyan-500"
                className=" outline-none"
              />
            </div>
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
