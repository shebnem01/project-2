import BrandFilterMenu from "./BrandFilterMenu"
import CategoryFilterMenu from "./CategoryFilterMenu"
import PriceFilterMenu from "./PriceFilterMenu"
import SortMenu from "./SortMenu"

const FilterFields = () => {
    return (
        <div className="flex gap-4 justify-between">
            <div className="flex gap-5 items-center">
                <PriceFilterMenu />
                <CategoryFilterMenu />
                <BrandFilterMenu />

            </div>
            <SortMenu />
        </div>
    )
}

export default FilterFields