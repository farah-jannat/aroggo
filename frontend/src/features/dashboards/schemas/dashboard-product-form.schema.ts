import { Weight } from "lucide-react";
import { z } from "zod";

export const imgSchema = z.object({
  // id:z.string(),
  url: z.string(),
});

// imgs: z.array(z.string());

const additionalInfoSchema = z.object({
  title: z.string().min(1, { message: "Product name is required" }),
  description: z.string().max(70),
});

const valueSchema = z.object({
  name: z.string(),
  value: z.string(),
});

const productOptionSchema = z.object({
  name: z.string(),
  type: z.enum(["Text", "Color"]),
  choices: z
    .array(valueSchema)
    .min(1, "Please add at least one choice")
    // Custom refinement to check for duplicates across the object values
    .refine(
      (items) => {
        const values = items.map((item) => item.name.toLowerCase());
        return new Set(values).size === values.length;
      },
      { message: "Each choice must be unique" },
    ),
});

const productVarientsSchema = z.object({
  name: z.string(),
  priceDifference: z.number(),
  cost: z.number(),
  sku: z.string(),
  status: z.enum(["In Stock", "Out of Stock"]),
  shippingWeight: z.number(),
  visibility: z.boolean(),
});

export const dashProductSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  imgs: z.array(imgSchema).min(1, {
    message: "atleast 1 picture or vedio should be added",
  }),
  description: z.string().max(70),
  additionalInfo: z.array(additionalInfoSchema),
  price: z.number(),
  productOptions: z.array(productOptionSchema),
  productVarients: z.array(productVarientsSchema),
});

export type DashProductType = z.infer<typeof dashProductSchema>;
export type ProductImage = z.infer<typeof imgSchema>;
export type ProductAdditionalInfo = z.infer<typeof additionalInfoSchema>;
export type productOptionType = z.infer<typeof productOptionSchema>;

// the product struct when submit

// const product = {
//   name: "t-shirt",
//   description: "this is tshirt",
//   imgs: [
//     { url: "http:image1 or base64 string" },
//     { url: "http:image1 or base64 string" },
//   ],
//   options: [
//     {
//       name: "color",
//       isColor: true,
//       values: [{ name: "Red" }, { name: "Green" }],
//     },
//     {
//       name: "size",
//       isColor: false,
//       values: [{ name: "X" }, { name: "m" }],
//     },
//   ],
// };
