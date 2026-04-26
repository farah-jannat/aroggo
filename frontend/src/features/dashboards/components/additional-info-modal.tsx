"use client";
import {
  DashProductType,
  ProductAdditionalInfo,
} from "@/features/dashboards/schemas/dashboard-product-form.schema";
import { X } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
interface AdditionalInfoModalProps {
  setShowInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
  appendInfo: (data: { title: string; description: string }) => void;
  // updateInfo: (data: { title: string; description: string }) => void;
  updateInfo: (data: { title: string; description: string }) => void;
  removeInfo: (index: number) => void;
  additionalInfoIdx: number | null;
  defaultValues: { title: string; description: string } | undefined;
  // add more props here later
}

const AdditionalInfoModal = ({
  setShowInfoModal,
  appendInfo,
  additionalInfoIdx,
  defaultValues,
  updateInfo,
  removeInfo,
}: AdditionalInfoModalProps) => {
  // const { register } = useFormContext<ProductAdditionalInfo>();
  const [infoInput, setInfoInput] = useState({
    title: defaultValues?.title || "",
    description: defaultValues?.description || "",
  });

  const handleOk = () => {
    if (
      additionalInfoIdx !== null &&
      infoInput.title &&
      infoInput.description
    ) {
      updateInfo(infoInput);
    } else {
      appendInfo(infoInput);
    }
    setInfoInput({ title: "", description: "" });
    setShowInfoModal(false);
  };

  console.log("infoinpt", infoInput);

  return (
    <div className=" bg-white rounded-xl">
      <div className="flex rounded-t-xl items-center justify-between p-4  bg-blue-400 ">
        <h3 className="text-lg font-semibold text-white">
          Add an Info Section
        </h3>
        <X onClick={() => setShowInfoModal(false)} color="white" />
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-4">
          <label>Info section Title</label>
          <input
            // {...register("title")}
            value={infoInput.title}
            placeholder="title"
            onChange={(e) =>
              setInfoInput({ ...infoInput, title: e.target.value })
            }
            className="p-3  border border-slate-300 rounded-lg focus:outline-cyan-500"
          />
        </div>

        <div className="flex my-6 flex-col gap-4">
          <label>Description</label>
          <input
            // {...register("description")}
            value={infoInput.description}
            onChange={(e) =>
              setInfoInput({ ...infoInput, description: e.target.value })
            }
            placeholder="Description"
            className="p-10  border border-slate-300 rounded-lg focus:outline-cyan-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="py-[6px] cursor-pointer px-4 text-red-400"
            onClick={() => {
              (setShowInfoModal(false), removeInfo(additionalInfoIdx!));
            }}
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
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoModal;
