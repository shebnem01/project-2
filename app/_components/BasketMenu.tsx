import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/useAuth";
import { getAPI } from "@/services/fetchApi";
import Image from "next/image";
import Link from "next/link";
import { SlHandbag } from "react-icons/sl";


const BasketMenu = async () => {
  const auth = await useAuth.fromServer();
  const id = auth && auth.userId;
  const res = await getAPI(`/cart/${id}`);

  return (
    <DropdownMenu>
     {auth? (
        <>
              <DropdownMenuTrigger className="text-gray-700 w-[50px] h-[50px] flex items-center rounded-full justify-center hover:bg-hoverColor"><SlHandbag size={23} /></DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen max-w-xs sm:max-w-md  shadow-lg ring-1 ring-black/5 bg-white dark:bg-neutral-800 p-0 rounded-2xl  max-h-[60vh] overflow-y-auto">
          <h3 className="text-xl font-semibold mt-5 mb-3 ms-5">Shopping Cart</h3>

          {res?.items.map((item: any) => (
            <DropdownMenuItem>
              <div className="flex w-full p-5">
                <Image src={item.product.image} width={100} height={100} alt="Product" className="h-20 w-20 object-contain rounded-xl bg-slate-100" />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium"><a href="/product-detail">{item.product.name}</a></h3>
                    <span className="text-green-500 border-2 p-1 text-sm font-medium border-green-500 rounded-md">${item.product.price}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.product.brand}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="text-gray-500 dark:text-slate-400">Qty {item.quantity}</div>
                    <button className="text-red-600 text-sm ">Remove</button>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />
          <div className="p-5 bg-gray-100">
            <p className="font-semibold flex justify-between">
              <span>Subtotal</span>
              <span>$299.00</span>
            </p>
            <div className="mt-5 flex space-x-2">
              <Link href="/cart" className="
                h-auto inline-flex items-center justify-center
                rounded-full transition-colors text-sm sm:text-base
                 font-medium py-3 px-4 sm:py-3.5 sm:px-6  
                  bg-white text-slate-700
                  hover:bg-gray-100 border border-slate-200 flex-1">View Cart</Link>

              <Link href="/checkout" className="
                h-auto inline-flex items-center justify-center
                rounded-full transition-colors text-sm sm:text-base
                 font-medium py-3 px-4 sm:py-3.5 sm:px-6  
                  bg-slate-900 
                  hover:bg-slate-800 text-slate-50
                   shadow-xl flex-1">Checkout</Link>
            </div>
          </div>
        </DropdownMenuContent>
        
        </>
        
      ):(
        <DropdownMenuTrigger 
        className="text-gray-700 w-[50px] h-[50px] flex items-center rounded-full justify-center hover:bg-hoverColor"><Link href='/login'><SlHandbag size={23} /></Link></DropdownMenuTrigger>
        
      )}
    </DropdownMenu>
  )
}


export default BasketMenu