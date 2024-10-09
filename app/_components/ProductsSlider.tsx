
'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard"
import { getAPI } from "@/services/fetchApi"
import { useEffect, useState } from "react"
interface ProductsSliderProps {
  title: string
}
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
const ProductsSlider: React.FC<ProductsSliderProps> = ({ title }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const getProducts = async () => {
    try {
      const res = await getAPI('/product');
      console.log(res)
      if (res.status === 'success') {
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  console.log(products)
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
           
              products?.map((product)=>(
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <ProductCard key={product.id} {...product} />
            </CarouselItem>
              ))
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}



export default ProductsSlider