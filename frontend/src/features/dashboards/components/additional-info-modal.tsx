import {
  DashProductType,
  ProductAdditionalInfo,
} from "@/features/dashboards/schemas/dashboard-product-form.schema";
import { X } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";
interface AdditionalInfoModalProps {
  setShowInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
  // add more props here later
}

const AdditionalInfoModal = ({
  setShowInfoModal,
}: AdditionalInfoModalProps) => {
  const { register } = useFormContext<ProductAdditionalInfo>();
  return (
    <div className=" bg-white rounded-xl">
      <div className="flex rounded-t-xl items-center justify-between p-4  bg-blue-400 ">
        <h3 className="text-lg font-semibold text-white">Add an Info Section</h3>
        <X onClick={() => setShowInfoModal(false)} color="white" />
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-4">
          <label>Info section Title</label>
          <input
            {...register("title")}
            placeholder="title"
            className="p-3  border border-slate-300 rounded-lg focus:outline-cyan-500"
          />
        </div>

        <div className="flex my-6 flex-col gap-4">
          <label>Description</label>
          <input
            {...register("description")}
            placeholder="Description"
            className="p-10  border border-slate-300 rounded-lg focus:outline-cyan-500"
          />
        </div>
        <div className="flex justify-end">
          <button className="py-[6px] cursor-pointer px-4 text-blue-400" 
          
          onClick={()=>setShowInfoModal(false)}
          >
            cancel
          </button>
          <button className="py-[6px] cursor-pointer px-4 bg-blue-400 rounded-2xl text-white"
          
          
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoModal;
