import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiOutlineDollar } from "react-icons/ai";
import { Slider } from "@/components/ui/slider"

const PriceFilterMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center border border-gray-100 rounded-3xl py-2 px-4">
        <AiOutlineDollar />
        <span className="text-sm font-medium">1$ -500$</span>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen max-w-xs rounded-xl shadow-lg p-0">
      <div className="p-4">
        <div className="text-lg my-3">Price range</div>
      <Slider defaultValue={[33]} min={0} max={100} step={2} />
        <div className="flex items-center justify-between my-5">
        <div>
          <span className="mb-2 block text-sm">Min price</span>
          <div className="rounded-2xl py-2 px-3 flex justify-between items-center border border-gray-400">
            <span>130</span>
            <span>$</span>
          </div>
        </div>
        <div>
          <span className="mb-2 block text-sm">Max price</span>
          <div className="rounded-2xl py-2 px-3 flex justify-between items-center border border-gray-400">
            <span>130</span>
            <span>$</span>
          </div>
        </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4 justify-between flex items-center">
     <button className="rounded-2xl bg-gray-200 border border-gray-300 py-2 px-3">Clear</button>
     <button className="rounded-2xl bg-neutral-800 text-white py-2 px-3">Apply</button>
      </div>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default PriceFilterMenu