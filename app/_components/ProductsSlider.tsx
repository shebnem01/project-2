import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard"
interface ProductsSliderProps {
  title: string
}
const ProductsSlider: React.FC<ProductsSliderProps> = ({ title }) => {
  return (
    <div className="container mb-24 mx-auto">
   <div className="flex justify-between items-center mb-14">
   <div className="text-3xl font-semibold">{title}</div>
   </div>
      <Carousel 
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <ProductCard/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}



export default ProductsSlider