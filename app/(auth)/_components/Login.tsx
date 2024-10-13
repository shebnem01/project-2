"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginFormSchema } from "@/lib/zod"
import Link from "next/link"
import { postAPI } from "@/services/fetchApi"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const Login = () => {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const onSubmit = async (data: any) => {
        const res = await postAPI('/login', data);
        if (res.status === 'success') {
            console.log(res);
            router.push('/');
        }else{
            toast.error(res.error)
        }
    }
    return (
        <div className="container mx-auto mb-24 lg:mb-32">
            <div className="text-neutral-900 font-semibold text-3xl justify-center flex items-center my-20 ">Login</div>
            <div className="max-w-md mx-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-3xl h-[45px]" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input className="rounded-3xl h-[45px]" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full rounded-3xl h-[45px]" type="submit">Submit</Button>
                        <div className="grid gap-1 text-center">
                            <Link className="text-sm text-green-600" href='forgot-password'>Forgot password?</Link>

                            <div className="text-sm">Create an account
                                <Link className="text-green-600" href='/register'> Sign up</Link></div>

                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Login