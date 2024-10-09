import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";
import Button from "./Button";
import { HiStar } from "react-icons/hi2";
interface ProductProps {
    name: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    inStock: boolean,
    image: string,
    id:string,
}
const ProductCard:React.FC<ProductProps> = (product) => {
    return (
        <Link href='/product-detail' className="block mx-auto product-card w-[290px]">
            <div className="rounded-3xl relative bg-gray-200 mb-4 w-[290px] h-[320px]">
                <Image src={product.image} fill className="mx-auto" alt="product" />
                <button className="absolute z-1 right-2 top-2 rounded-full bg-white w-11 h-11 flex items-center justify-center">
                    {/* <HiOutlineHeart size={22} /> */}
                    <HiMiniHeart color="red" size={22} />
                </button>
                <div className="btn-group absolute w-full z-2 right-0 left-0 bottom-1 flex opacity-0  justify-center gap-3 items-center">
                    <Button title='Add to bag' background='bg-slate-900 hover:bg-slate-800' color='text-white' />
                    <Button title='Quick view' background='bg-white hover:bg-gray-100' color='text-slate-700' />
                </div>

            </div>
            <div>
                <div className="text-lg font-semibold mb-1">{product.name}</div>
                <div className="text-normal text-gray-600 mb-2">{product.brand}</div>
                <div className="flex justify-between items-center">
                    <div className="border-2 border-green-500 text-green-500 rounded-lg py-1 px-2 text-sm font-medium">${product.price}</div>
                <div className="flex items-center gap-1">
                   <span className="text-amber-500"> <HiStar/></span>
                   <span className="text-sm ms-1 text-slate-500 dark:text-slate-400">4.8(10 reviews)</span>
                </div>
                </div>

            </div>
        </Link>
    );
};

export default ProductCard;
