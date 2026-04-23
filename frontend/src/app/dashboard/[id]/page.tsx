"use client";
import AdditionalInfoModal from "@/features/dashboards/components/additional-info-modal";
import {
  dashProductSchema,
  DashProductType,
  ProductAdditionalInfo,
  ProductImage,
} from "@/features/dashboards/schemas/dashboard-product-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, MoreHorizontal, Plus, X } from "lucide-react";
import React, { useState } from "react";
import {
  FormProvider,
  Resolver,
  useFieldArray,
  useForm,
} from "react-hook-form";

const AdminProduct = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const form = useForm<DashProductType>({
    resolver: zodResolver(dashProductSchema) as Resolver<DashProductType>,
    defaultValues: {
      name: "",
      imgs: [],
      description: "",
      additionalInfo: [],
      price: 0,
      productOptions: [],
      productVarients: [],
    },
  });
  const { register, handleSubmit, control, setValue, watch } = form;

  // Img useFieldArray
  const {
    fields: imgFields,
    append: appendImg,
    remove: removeImg,
  } = useFieldArray({
    control,
    name: "imgs",
  });

  //  additon info usefiledarry
  const {
    fields: infoFields,
    append: appendInfo,
    remove: removeInfo,
  } = useFieldArray({
    control,
    name: "additionalInfo",
  });

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Convert File to preview URL (for demo) or handle upload to S3/Cloudinary
      Array.from(files).forEach((file) => {
        const previewUrl = URL.createObjectURL(file);
        appendImg({ url: previewUrl });
      });
    }
  };

  console.log("fileds ", imgFields);
  const onSubmit = (data: DashProductType) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-gray-100 relative">
<div
        
        className={` h-screen w-full overflow-hidden
            fixed inset-0 z-10 bg-black/50 transition-opacity duration-500
            ${showInfoModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
      />
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <div className="bg-white rounded-xl  p-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Images
            </h3>

            <div className="flex flex-wrap gap-4">
              {/* Existing Previews */}{" "}
              {imgFields.map((field: ProductImage, index: number) => (
                <div key={index} className="relative w-32 h-32 group">
                  <img
                    src={field.url}
                    className="w-full h-full object-cover rounded-lg border border-slate-100"
                    alt="Product"
                  />
                  <button
                    type="button"
                    onClick={() => removeImg(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              {/* The "Add" Button Square */}
              <label className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed border-cyan-200 bg-cyan-50/50 rounded-lg cursor-pointer hover:bg-cyan-50 transition-colors">
                <Plus className="text-cyan-500" size={32} strokeWidth={1} />
                <input
                  type="file"
                  multiple
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          {/* product Info  */}
          <div className="bg-white p-6 mt-6 rounded-xl">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Product Info
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-4 bg-white">
              <label>Name</label>
              <input
                {...register("name")}
                placeholder="Product Name"
                className="p-3  border border-slate-300 rounded-lg focus:outline-cyan-500"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 bg-white">
              <label htmlFor=""> Description</label>
              <input
                {...register("description")}
                placeholder="Product description"
                className="p-3 py-10 border border-slate-300 rounded-lg focus:outline-cyan-500"
              />
            </div>

            {/* Additional info inside product info  */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                Additional Info Section
              </h3>
              {infoFields.map((info: ProductAdditionalInfo, index) => {
                return (
                  <div
                    key={index}
                    className="flex items center justify-between"
                  >
                    <span>{info.title}</span>
                    <p>{info.description}</p>
                  </div>
                );
              })}
              <button className="text-blue-500 cursor-pointer" onClick={()=>setShowInfoModal(true)}>
                + Add additional info modal
              </button>

              {showInfoModal && (
                <div className="fixed z-12 top-[50%] left-[50%] translate-[-50%] w-[600px]">
                  <AdditionalInfoModal setShowInfoModal={setShowInfoModal} />
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="py-[6px] mt-6 px-4 border border-gray-600 rounded-md"
          >
            {" "}
            submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
export default AdminProduct;
