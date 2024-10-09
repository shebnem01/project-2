
import { z } from "zod" 
export const productFormSchema = z.object({
    name: z.string().min(2, { message: "Product name must be at least 2 characters." }),
    description: z.string().min(2, { message: "Product description must be at least 2 characters." }),
    price: z.string()
        .regex(/^\d+(\.\d{1,2})?$/, { message: "Product price must be a valid number." })
        .min(1, { message: "Product price must be at least 1 character." }),
    brand: z.string().min(2, { message: "Product brand must be at least 2 characters." }),
    category: z.string().min(2, { message: "Product category must be at least 2 characters." }),
    inStock: z.boolean(),
    image: z.string().url({ message: "Product image must be a valid URL." }),
})