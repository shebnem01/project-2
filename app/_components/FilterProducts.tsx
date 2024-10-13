import FilterFields from "./FilterFields"
import { Product } from '@prisma/client';
import ProductCard from "./ProductCard";
interface FilteredProductProps{
    products:Product[]
}
const FilterProducts = ({products}:FilteredProductProps) => {
    return (
        <div className="container mx-auto">
            <div className="my-10 border-b border-gray-200 pb-10 text-4xl font-semibold">Man collection</div>
            <FilterFields />
            <div className="flex gap-3 flex-wrap items-center my-10">
                {products?.map((product)=>(
                    <ProductCard {...product}/>
                ))}
            </div>
        </div>
    )
}

export default FilterProducts