
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { BiSort } from "react-icons/bi";

const SortMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center border border-gray-100 rounded-3xl py-2 px-4">
        <BiSort />Sort
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen max-w-xs rounded-xl shadow-lg p-0">
        <RadioGroup defaultValue="option-one " className="p-4 py-6">
          <div className="flex items-center space-x-2 pb-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Most popular</Label>
          </div>
          <div className="flex items-center space-x-2 pb-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Best rating</Label>
          </div>
          <div className="flex items-center space-x-2 pb-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Newest</Label>
          </div>
          <div className="flex items-center space-x-2 pb-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Newest</Label>
          </div>
          <div className="flex items-center space-x-2 pb-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Price Low -Hight</Label>
          </div>
          <div className="flex items-center space-x-2 pb-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Price Hight - Low</Label>
          </div>
        </RadioGroup>





        <div className="bg-gray-50 p-4 justify-between flex items-center">
          <button className="rounded-2xl bg-gray-200 border border-gray-300 py-2 px-3">Clear</button>
          <button className="rounded-2xl bg-neutral-800 text-white py-2 px-3">Apply</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default SortMenu