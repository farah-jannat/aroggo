import { Weight } from "lucide-react";
import { z } from "zod";

const imgSchema = z.object({
  url: z.string().url({ message: "Invalid URL format for image." }),
});

// imgs: z.array(z.string());

const additionalInfoSchema = z.object({
  title: z.string().min(1, { message: "Product name is required" }),
  description: z.string().max(70),
});

const productOptionSchema = z.object({
  name: z.string(),
  type: z.string(),
  choices: z.string(),
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
