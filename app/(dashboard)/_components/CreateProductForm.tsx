"use client"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FileUpload from "./file-upload";
import { postAPI } from "@/services/fetchApi"
import toast from "react-hot-toast"

const formSchema = z.object({
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
interface productProps{
    name: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    inStock: boolean,
    image: string,
}
const CreateProductForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            brand: "",
            category: "",
            inStock: true,
            image: "",
        }
    })

    const onSubmit = async (data: productProps) => {
   try {
    const res=await postAPI('/product/create',data);
    if(res.status==='success'){
     toast.success(res.message);
    }
   } catch (error) {
    
   }
    }

    return (
        <div className="shadow-md m-10 p-10 bg-gray-50 rounded-md">
            <h1 className="text-center my-6 text-4xl">Create Product</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Image Upload Field */}
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Image</FormLabel>
                                <FormControl>
                                    <FileUpload endpoint='productImage' onChange={(url) => {
                                        if (url) {
                                            form.setValue('image', url, { shouldValidate: true });
                                        }
                                    }} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Name Field */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Product name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description Field */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Product description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Price Field */}
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Price</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Product price" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Brand Field */}
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Brand</FormLabel>
                                <FormControl>
                                    <Input placeholder="Product brand" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Category Field */}
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Category</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Categories</SelectLabel>
                                                <SelectItem value="men">Men</SelectItem>
                                                <SelectItem value="women">Women</SelectItem>
                                                <SelectItem value="sport">Sport</SelectItem>
                                                <SelectItem value="beauty">Beauty</SelectItem>
                                                <SelectItem value="footwear">Footwear</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* In-Stock Checkbox */}
                    <FormField
                        control={form.control}
                        name="inStock"
                        render={({ field }) => (
                            <FormItem className="flex items-center gap-2">
                                <FormLabel className="mt-2" htmlFor="inStock">In Stock</FormLabel>
                                <Checkbox id="inStock" checked={field.value} onCheckedChange={(checked) => field.onChange(checked)} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateProductForm
