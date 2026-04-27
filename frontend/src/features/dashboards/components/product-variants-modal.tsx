// import { DashProductType } from "@/features/dashboards/schemas/dashboard-product-form.schema";
// import { ChevronDown, Eye, X } from "lucide-react";
// import React, { useEffect, useMemo } from "react";
// import { useFieldArray, useFormContext } from "react-hook-form";

// const ProductVariantsModal = () => {
//   const { control, watch, register } = useFormContext<DashProductType>();

//   // Watch base price and options to calculate combinations and final prices
//   const basePrice = watch("price") || 0;
//   const productOptions = watch("productOptions");

//   const { fields, append, remove, replace, update } = useFieldArray({
//     control,
//     name: "productVarients",
//   });

//   // Helper: Generate Cartesian Product strings (e.g., "Red / XL")
//   const generateVariants = useMemo(() => {
//     if (!productOptions || productOptions.length === 0) return [];

//     return productOptions.reduce((acc, option) => {
//       const choices = option.choices;
//       if (acc.length === 0) return choices.map((c) => c.name);

//       const result: string[] = [];
//       acc.forEach((prev) => {
//         choices.forEach((curr) => {
//           result.push(`${prev} / ${curr.name}`);
//         });
//       });
//       return result;
//     }, [] as string[]);
//   }, [productOptions]);

//   // Sync Cartesian product with the field array whenever options change
//   useEffect(() => {
//     const newVariants = generateVariants.map((variantName) => ({
//       name: variantName,
//       priceDifference: 0,
//       cost: 0,
//       sku: "",
//       status: "In Stock" as const,
//       shippingWeight: 0,
//       visibility: true,
//     }));

//     replace(newVariants);
//   }, [generateVariants, replace]);

//   return (
//     <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden font-sans">
//       {/* Header */}
//       <div className="p-6 border-b border-gray-100 relative">
//         <button
//           type="button"
//           className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//         >
//           <X size={20} />
//         </button>
//         <h2 className="text-xl font-bold text-slate-800">Product variants</h2>
//         <p className="text-sm text-slate-500 mt-1">
//           Generated {fields.length} variants based on your options.
//         </p>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto max-h-[60vh]">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-sky-50 border-y border-sky-100 text-[13px] font-medium text-slate-600">
//               <th className="px-6 py-3">Variant</th>
//               <th className="px-3 py-3">Price difference (+/-)</th>
//               <th className="px-3 py-3">Variant price</th>
//               <th className="px-3 py-3">Cost of goods</th>
//               <th className="px-3 py-3">SKU</th>
//               <th className="px-3 py-3">Status</th>
//               <th className="px-3 py-3">Shipping weight</th>
//               <th className="px-3 py-3 text-center">Visibility</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {fields.map((field, index) => {
//               // Watch specific field values to update "Variant Price" in real-time
//               const priceDiff =
//                 watch(`productVarients.${index}.priceDifference`) || 0;
//               const variantPrice = Number(basePrice) + Number(priceDiff);

//               return (
//                 <tr
//                   key={field.id}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="px-6 py-4">
//                     <span className="text-sm text-slate-700 font-medium">
//                       {/* Register hidden name field to ensure it's in the form data */}
//                       <input
//                         type="hidden"
//                         {...register(`productVarients.${index}.name`)}
//                       />
//                       {watch(`productVarients.${index}.name`)}
//                     </span>
//                   </td>
//                   <td className="px-3 py-4">
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
//                         ৳
//                       </span>
//                       <input
//                         type="number"
//                         {...register(
//                           `productVarients.${index}.priceDifference`,
//                           { valueAsNumber: true },
//                         )}
//                         className="w-24 pl-6 pr-2 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
//                       />
//                     </div>
//                   </td>
//                   <td className="px-3 py-4 text-sm text-slate-700 font-medium">
//                     ৳{variantPrice.toFixed(2)}
//                   </td>
//                   <td className="px-3 py-4">
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
//                         ৳
//                       </span>
//                       <input
//                         type="number"
//                         {...register(`productVarients.${index}.cost`, {
//                           valueAsNumber: true,
//                         })}
//                         className="w-20 pl-6 pr-2 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
//                       />
//                     </div>
//                   </td>
//                   <td className="px-3 py-4">
//                     <input
//                       type="text"
//                       {...register(`productVarients.${index}.sku`)}
//                       className="w-32 px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
//                     />
//                   </td>
//                   <td className="px-3 py-4">
//                     <div className="relative inline-block w-full">
//                       <select
//                         {...register(`productVarients.${index}.status`)}
//                         className="appearance-none w-full px-3 py-1.5 border border-gray-200 rounded-md text-sm bg-white focus:ring-1 focus:ring-sky-500 outline-none pr-8"
//                       >
//                         <option value="In Stock">In Stock</option>
//                         <option value="Out of Stock">Out of Stock</option>
//                       </select>
//                       <ChevronDown
//                         size={14}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-sky-500 pointer-events-none"
//                       />
//                     </div>
//                   </td>
//                   <td className="px-3 py-4">
//                     <div className="flex items-center gap-1">
//                       <input
//                         type="number"
//                         {...register(
//                           `productVarients.${index}.shippingWeight`,
//                           { valueAsNumber: true },
//                         )}
//                         className="w-16 px-2 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
//                       />
//                       <span className="text-xs text-slate-500">lb</span>
//                     </div>
//                   </td>
//                   <td className="px-3 py-4 text-center">
//                     <input
//                       type="checkbox"
//                       {...register(`productVarients.${index}.visibility`)}
//                       className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
//                     />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer */}
//       <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
//         <button
//           type="button"
//           className="px-6 py-2 border border-sky-500 text-sky-500 font-medium rounded-full hover:bg-sky-50 transition-colors text-sm"
//         >
//           Cancel
//         </button>
//         <button
//           type="button"
//           className="px-6 py-2 bg-sky-500 text-white font-medium rounded-full text-sm hover:bg-sky-600"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductVariantsModal;

// === new ===

import { DashProductType } from "@/features/dashboards/schemas/dashboard-product-form.schema";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useMemo } from "react";
import {
  FieldArrayWithId,
  useFieldArray,
  UseFieldArrayReplace,
  useFormContext,
} from "react-hook-form";

// interface Props {
// onClose : React.Dispatch<React.SetStateAction<boolean>>
// }

interface Props {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  // "productVarients" must match the key in your Zod schema exactly
  variantFields: FieldArrayWithId<DashProductType, "productVarients">[];
  replaceVariants: UseFieldArrayReplace<DashProductType, "productVarients">;
}

const ProductVariantsModal = (props: Props) => {
  // ** Props
  const { onClose, replaceVariants: replace, variantFields: fields } = props;

  // ** States

  const { control, watch, register, getValues } =
    useFormContext<DashProductType>();

  const basePrice = watch("price") || 0;
  const productOptions = watch("productOptions");
  const variations= watch("productVarients");

  // const { fields, replace } = useFieldArray({
  //   control,
  //   name: "productVarients",
  // });

  // Helper: Generate Cartesian Product
  const generateVariants = useMemo(() => {
    if (!productOptions || productOptions.length === 0) return [];
    return productOptions.reduce((acc, option) => {
      const choices = option.choices;
      if (acc.length === 0) return choices.map((c) => c.name);
      return acc.flatMap((prev) =>
        choices.map((curr) => `${prev} / ${curr.name}`),
      );
    }, [] as string[]);
  }, [productOptions]);

  // Sync Logic: Only run this when the component mounts or options change,
  // but PRESERVE existing data if the name matches.
  useEffect(() => {
    const existingVariants = getValues("productVarients") || [];

    const syncedVariants = generateVariants.map((name) => {
      const existing = existingVariants.find((v) => v.name === name);
      if (existing) return existing; // Keep existing data (SKU, Price, etc.)

      return {
        name,
        priceDifference: 0,
        cost: 0,
        sku: "",
        status: "In Stock" as const,
        shippingWeight: 0,
        visibility: true,
      };
    });

    replace(syncedVariants);
  }, [generateVariants, replace, getValues]);

  return (
    // ... your JSX ...
    // In the "Apply" button, call onClose()
    <div>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden font-sans">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 relative">
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold text-slate-800">Product variants</h2>
          <p className="text-sm text-slate-500 mt-1">
            Generated {fields.length} variants based on your options.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-sky-50 border-y border-sky-100 text-[13px] font-medium text-slate-600">
                <th className="px-6 py-3">Variant</th>
                <th className="px-3 py-3">Price difference (+/-)</th>
                <th className="px-3 py-3">Variant price</th>
                <th className="px-3 py-3">Cost of goods</th>
                <th className="px-3 py-3">SKU</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Shipping weight</th>
                <th className="px-3 py-3 text-center">Visibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fields.map((field, index) => {
                // Watch specific field values to update "Variant Price" in real-time
                const priceDiff =
                  watch(`productVarients.${index}.priceDifference`) || 0;
                const variantPrice = Number(basePrice) + Number(priceDiff);

                return (
                  <tr
                    key={field.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-700 font-medium">
                        {/* Register hidden name field to ensure it's in the form data */}
                        <input
                          type="hidden"
                          {...register(`productVarients.${index}.name`)}
                        />
                        {watch(`productVarients.${index}.name`)}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                          ৳
                        </span>
                        <input
                          type="number"
                          {...register(
                            `productVarients.${index}.priceDifference`,
                            { valueAsNumber: true },
                          )}
                          className="w-24 pl-6 pr-2 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                        />
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-slate-700 font-medium">
                      ৳{variantPrice.toFixed(2)}
                    </td>
                    <td className="px-3 py-4">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                          ৳
                        </span>
                        <input
                          type="number"
                          {...register(`productVarients.${index}.cost`, {
                            valueAsNumber: true,
                          })}
                          className="w-20 pl-6 pr-2 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                        />
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <input
                        type="text"
                        {...register(`productVarients.${index}.sku`)}
                        className="w-32 px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className="relative inline-block w-full">
                        <select
                          {...register(`productVarients.${index}.status`)}
                          className="appearance-none w-full px-3 py-1.5 border border-gray-200 rounded-md text-sm bg-white focus:ring-1 focus:ring-sky-500 outline-none pr-8"
                        >
                          <option value="In Stock">In Stock</option>
                          <option value="Out of Stock">Out of Stock</option>
                        </select>
                        <ChevronDown
                          size={14}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-sky-500 pointer-events-none"
                        />
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          {...register(
                            `productVarients.${index}.shippingWeight`,
                            { valueAsNumber: true },
                          )}
                          className="w-16 px-2 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                        />
                        <span className="text-xs text-slate-500">lb</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        {...register(`productVarients.${index}.visibility`)}
                        className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
          <button
            type="button"
            className="px-6 py-2 border border-sky-500 text-sky-500 font-medium rounded-full hover:bg-sky-50 transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-sky-500 text-white font-medium rounded-full text-sm hover:bg-sky-600"
          >
            Apply
          </button>
        </div>
      </div>

      <button
        type="button"
        // onClick={() => onClose(false)}
        onClick={()=>{
          console.log("!!!!!!!!!!!!!!!!!!!!! ", variations)

        }}
        className="px-6 py-2 bg-sky-500 text-white font-medium rounded-full"
      >
        Apply & Close
      </button>
    </div>
  );
};

export default ProductVariantsModal;
