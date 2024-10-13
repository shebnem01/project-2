import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdOutlineCategory } from "react-icons/md"
const categories = [
  'Men', 'Women', 'Beauty', 'Sport'
]

const BrandFilterMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center border border-gray-100 rounded-3xl py-2 px-4">
        <MdOutlineCategory />Brands
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen max-w-xs rounded-xl shadow-lg p-0">
        <div className="items-center flex space-x-2 p-3">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              All Brands
            </label>

          </div>
        </div>
        <DropdownMenuSeparator />
        {categories.map((cat, _i) => (
          <div key={_i} className="items-center flex space-x-2 p-3">
            <Checkbox id={cat} />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={cat}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {cat}
              </label>

            </div>
          </div>
        ))}

        <div className="bg-gray-50 p-4 justify-between flex items-center">
          <button className="rounded-2xl bg-gray-200 border border-gray-300 py-2 px-3">Clear</button>
          <button className="rounded-2xl bg-neutral-800 text-white py-2 px-3">Apply</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default BrandFilterMenu