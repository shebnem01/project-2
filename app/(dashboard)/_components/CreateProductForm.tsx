
"use client"
import { z } from "zod"
import { Button } from "@/components/ui/button"

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

const formSchema = z.object({
    productName: z.string().min(2, {
        message: "Product name must be at least 2 characters.",
    }),
    productDescription: z.string().min(2, {
        message: "Product description must be at least 2 characters.",
    }),
    productPrice: z
        .string()
        .regex(/^\d+(\.\d{1,2})?$/, { message: "Product price must be a valid number." })
        .min(1, { message: "Product price must be at least 1 character." }),

    productImage: z
        .string()
        .url({ message: "Product image must be a valid URL." }),
})

const CreateProductForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productImage: "",
            productName: "",
            productPrice: "",
            productCategory: "",
            productDescription: "",
        }
    })
    const onSubmit = (data: any) => {
        console.log("Form data", data)
    }
    return (
        <div className="shadow-md m-10  p-10 bg-gray-50 rounded-md">
            <h1 className="text-center my-6 text-4xl">Create product</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="productImage"
                        render={({ field }) => (
                            <FormItem>
                              
                                <FormControl className="hidden">
                                <FileUpload endpoint='productImage' onChange={(url) => {
                                    if (url) {
                                        onSubmit({ productImage: url })
                                    }
                                }} />
                                </FormControl>
                              
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="productName"
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
                    <FormField
                        control={form.control}
                        name="productCategory"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Category</FormLabel>
                                <FormControl>
                                    <Select >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="productPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="Product price" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="productDescription"
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>


        </div>
    )
}

export default CreateProductForm