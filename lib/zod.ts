
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
export const loginFormSchema = z.object({
    email: z.string()
        .nonempty({ message: "Email is required." })
        .email({ message: "Must be a valid email address." }),
    password: z.string()
        .nonempty({ message: "Password is required." })
        .min(6, { message: "Password must be at least 6 characters." }),
});
export const registerFormSchema = z.object({
    name: z.string()
        .nonempty({ message: "Username is required." })
        .min(2, { message: "Username must be at least 2 characters." }),

    email: z.string()
        .nonempty({ message: "Email is required." })
        .email({ message: "Must be a valid email address." }),

    password: z.string()
        .nonempty({ message: "Password is required." })
        .min(6, { message: "Password must be at least 6 characters." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character." }),

});