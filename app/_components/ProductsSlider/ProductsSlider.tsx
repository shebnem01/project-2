
'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../ProductCard"
import { Product } from "@prisma/client"

interface ProductsSliderProps {
  title: string
  products: Product[]
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ title, products }) => {

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
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
              <ProductCard {...product} />
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