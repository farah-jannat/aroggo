"use client";
import VariantToggle from "@/app/dashboard/[id]/VariantToggle";
import AdditionalInfoModal from "@/features/dashboards/components/additional-info-modal";
import ProductOptionModal from "@/features/dashboards/components/product-option-modal";
import ProductVariantsModal from "@/features/dashboards/components/product-variants-modal";
import {
  dashProductSchema,
  DashProductType,
  ProductAdditionalInfo,
  ProductImage,
} from "@/features/dashboards/schemas/dashboard-product-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronLeft,
  Delete,
  Edit2,
  MoreHorizontal,
  Plus,
  X,
} from "lucide-react";
import React, { useState } from "react";
import {
  FormProvider,
  Resolver,
  useFieldArray,
  useForm,
} from "react-hook-form";

const AdminProduct = () => {
  // states
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [additionalInfoIdx, setAdditionalInfoIdx] = useState<number | null>(
    null,
  );
  const [openOptionModal, setOpenOptionModal] = useState(false);
  const [productOptionIdx, setProductOptionIdx] = useState<number | null>(null);

  const [isVariant, setIsVariant] = useState(false);

  const form = useForm<DashProductType>({
    resolver: zodResolver(dashProductSchema) as Resolver<DashProductType>,
    defaultValues: {
      name: "",
      imgs: [],
      description: "",
      additionalInfo: [],
      price: 0,
      // productOptions: [],
      productOptions: [
        {
          name: "Color",
          type: "Color",
          choices: [
            { name: "red", value: "#FF0000" },
            { name: "green", value: "#008000" },
          ],
        },
      ],
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
    update: updateInfo,
  } = useFieldArray({
    control,
    name: "additionalInfo",
  });

  //  product options usefiledarry
  const {
    fields: productOptionFields,
    append: appendProductOption,
    remove: removeProductOption,
    update: updateProductOption,
  } = useFieldArray({
    control,
    name: "productOptions",
  });

  const {
    fields: productVarientFields,
    append: appendProductVarient,
    remove: removeProductVarient,
    update: updateProductVarient,
  } = useFieldArray({
    control,
    name: "productVarients",
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

  const onSubmit = (data: DashProductType) => {
    console.log("Form Data:", data);
  };


  console.log("############### ", productVarientFields)

  return (
    <div className="bg-gray-100 relative">
      <div
        className={` h-screen w-full overflow-hidden
            fixed inset-0 z-0 bg-black/50 transition-opacity duration-500
            ${showInfoModal || openOptionModal || isVariant ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
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
                    className="flex items center justify-between hover:bg-blue-100 py-2 px-4"
                    onClick={() => {
                      (setShowInfoModal(true), setAdditionalInfoIdx(index));
                    }}
                  >
                    <span>{info.title}</span>
                    <p>{info.description}</p>
                  </div>
                );
              })}
              <button
                className="text-blue-500 cursor-pointer"
                onClick={() => setShowInfoModal(true)}
              >
                + Add additional info modal
              </button>

              {showInfoModal && (
                <div className="fixed z-12 top-[50%] left-[50%] translate-[-50%] w-[600px]">
                  <AdditionalInfoModal
                    setShowInfoModal={setShowInfoModal}
                    appendInfo={appendInfo}
                    additionalInfoIdx={additionalInfoIdx}
                    defaultValues={
                      additionalInfoIdx !== null
                        ? infoFields[additionalInfoIdx]
                        : undefined
                    }
                    updateInfo={(data) => {
                      if (additionalInfoIdx !== null) {
                        updateInfo(additionalInfoIdx, data);
                      }
                    }}
                    removeInfo={removeInfo}
                  />
                </div>
              )}
            </div>
          </div>

          {/* product Options  */}
          <div className="bg-white p-6 mt-6 rounded-xl">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Product Options
            </h3>
            <p>Manage the options this product comes in.</p>
            <div className="border boder-gray-200 rounded-xl my-6">
              {productOptionFields.map((option, index) => (
                // <div>
                <div
                  key={index}
                  className="flex items-center gap-16 border-b border-gray-200 p-6 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    (setOpenOptionModal(true), setProductOptionIdx(index));
                  }}
                >
                  <span>{option.name}</span>
                  <div className="flex items-center gap-6">
                    {option.type === "Text"
                      ? option.choices.map((choice, idx) => (
                          <span key={idx}>{choice.name}</span>
                        ))
                      : option.choices.map((choice, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-[6px]"
                          >
                            <div
                              className=" w-4 h-4 rounded-full"
                              style={{ backgroundColor: choice.value }}
                            ></div>
                            <span>{choice.name}</span>
                          </div>
                        ))}

                    {/* </div> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">
                      <Edit2 size={18} />
                    </span>
                    <span
                      className="text-blue-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProductOption(index);
                      }}
                    >
                      <Delete size={20} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpenOptionModal(true)}
              className="text-blue-400 cursor-pointer"
            >
              +Add Another Options
            </button>

            {productOptionFields.length > 0 && (
              <VariantToggle
                isEnabled={isVariant}
                setIsEnabled={setIsVariant}
              />
            )}

            {openOptionModal && (
              <div className="fixed top-[50%] left-[50%] translate-[-50%]">
                <ProductOptionModal
                  setOpenOptionModal={setOpenOptionModal}
                  appendProductOption={appendProductOption}
                  defaultValues={
                    productOptionIdx !== null
                      ? productOptionFields[productOptionIdx]
                      : undefined
                  }
                  productOptionIdx={productOptionIdx}
                  updateProductOption={(data) => {
                    if (productOptionIdx !== null) {
                      updateProductOption(productOptionIdx, data);
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* product varients  */}

          {isVariant && (
            // <ProductVariantsModal isOpen={isVariant} onClose={setIsVariant} />

            <div className="fixed top-[50%] left-[50%] translate-[-50%]">
              <ProductVariantsModal />
            </div>
          )}
          {productVarientFields.length && (
            <div className="bg-white p-6 mt-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                Product Varients
              </h3>

              {/* here we show the varients  */}

              <div className="mt-8">
                <h2 className="text-xl font-bold">Manage Variants</h2>
                <table className="w-full border-collapse mt-4">
                  <thead>
                    <tr className="bg-blue-50 text-left">
                      <th className="p-2">Variant</th>
                      <th className="p-2">Price Diff</th>
                      <th className="p-2">Variant price</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Visibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productVarientFields.map((field, index) => (
                      <tr key={field.id} className="border-b">
                        <td className="p-2 font-medium">{/* {field.} */}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

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
