import { Weight } from "lucide-react";
import { z } from "zod";

export const imgSchema = z.object({
  // id:z.string(),
  url: z.string()
});

// imgs: z.array(z.string());

const additionalInfoSchema = z.object({
  title: z.string().min(1, { message: "Product name is required" }),
  description: z.string().max(70),
});

const productOptionSchema = z.object({
  name: z.string(),
  type: z.string(),
  choices: z
    .array(
      z.object({
        value: z
          .string()
          .trim()
          .min(1, "Choice cannot be empty")
          .max(50, "Keep it under 50 characters"),
      }),
    )
    .min(1, "Please add at least one choice")
    // Custom refinement to check for duplicates across the object values
    .refine(
      (items) => {
        const values = items.map((item) => item.value.toLowerCase());
        return new Set(values).size === values.length;
      },
      { message: "Each choice must be unique" },
    ),
});

const productVarientsSchema = z.object({
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