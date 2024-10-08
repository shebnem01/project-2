import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { SlHandbag } from "react-icons/sl";

const BasketMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="text-gray-700 w-[50px] h-[50px] flex items-center rounded-full
            justify-center hover:bg-hoverColor"><SlHandbag size={23}/></DropdownMenuTrigger>
  
    <DropdownMenuContent>
      <DropdownMenuLabel>Shopping cart</DropdownMenuLabel>
      
      <DropdownMenuItem>
        <div className="flex justify-between "></div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
     
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default BasketMenu