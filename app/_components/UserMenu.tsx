import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";
  import { RiUser3Line } from "react-icons/ri";


const UserMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="text-gray-700 w-[50px] h-[50px] flex items-center rounded-full
            justify-center hover:bg-hoverColor"><RiUser3Line size={24}/></DropdownMenuTrigger>
    <DropdownMenuContent>
      
      <DropdownMenuItem><Link href='/login'>Sign in</Link></DropdownMenuItem>
      <DropdownMenuItem><Link href='/register'>Sign up</Link></DropdownMenuItem>
    </DropdownMenuContent>
    {/* <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent> */}
  </DropdownMenu>
  
  )
}

export default UserMenu