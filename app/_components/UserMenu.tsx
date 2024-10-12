'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
import { VscOutput } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import { LuLayoutDashboard } from "react-icons/lu";

const UserMenu = () => {
  const {auth,handleLogout}= useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-700 w-[50px] h-[50px] flex items-center rounded-full
            justify-center hover:bg-hoverColor"><RiUser3Line size={24} /></DropdownMenuTrigger>
      {auth ? (
        <DropdownMenuContent className='w-[260px] rounded-3xl shadow-lg py-7 px-6 '>

          <DropdownMenuLabel>
            <div className="flex items-center gap-3">
              <Avatar className="flex-shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4 className="capitalize text-lg text-slate-900">{auth.name}</h4>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="flex text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700" href='/profile'><RiUser3Line className="text-neutral-500" size={24} /> My account</Link>
          </DropdownMenuItem>
          {auth.role === 'ADMIN' && (
            <DropdownMenuItem>
              <Link className="flex text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700" href='/profile'><LuLayoutDashboard className="text-neutral-500" size={24} /> My account</Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <Link className="flex text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700" href='/my-order'><VscOutput className="text-neutral-500" size={24} /> My Order</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700" href='/wishlist'>
              <BsHeart className="text-neutral-500" size={24} /> Wishlist</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex cursor-pointer text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <FaRegLightbulb className="text-neutral-500" size={24} /> Dark theme <Switch className="ml-4" /></div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div onClick={handleLogout} className="flex cursor-pointer text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <RiLogoutCircleLine className="text-neutral-500" size={24} /> Log out</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className='w-[260px] rounded-3xl shadow-lg py-7 px-6 '>


          <DropdownMenuItem>
            <Link className="flex text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 " href='/login'>Sign in</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex text-sm font-medium  items-center w-full p-2 rounded-lg gap-x-2 transition
           duration-150 hover:bg-neutral-100 " href='/register'>Sign up</Link>
          </DropdownMenuItem>

        </DropdownMenuContent>
      )}
    </DropdownMenu>

  )
}

export default UserMenu