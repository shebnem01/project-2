import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
  

const MainBanner = () => {
  return (
<Carousel>
  <CarouselContent className="h-[600px]">
    <CarouselItem className="bg-hoverColor">
      <div className="container mx-auto px-[100px] flex flex-col justify-center h-full ">
      <h5 className="text-lg mb-2 font-medium">in this season find the best</h5>
      <h1 className="text-[50px] font-medium ">  Explore our collection</h1>
      <Button className="w-[250px] rounded-[60px] h-[50px]  "><Link className="flex items-center gap-2 text-lg" href='/'>Explore now <SearchIcon/></Link></Button>
      </div>
    </CarouselItem>
    <CarouselItem className="bg-hoverColor">
      <div className="container mx-auto px-[100px] flex flex-col justify-center h-full ">
      <h5 className="text-lg mb-2 font-medium">in this season find the best</h5>
      <h1 className="text-[50px] font-medium ">  Explore our collection</h1>
      <Button className="w-[250px] rounded-[60px] h-[50px]  "><Link className="flex items-center gap-2 text-lg" href='/'>Explore now <SearchIcon/></Link></Button>
      </div>
    </CarouselItem>
    <CarouselItem className="bg-hoverColor">
      <div className="container mx-auto px-[100px] flex flex-col justify-center h-full ">
      <h5 className="text-lg mb-2 font-medium">in this season find the best</h5>
      <h1 className="text-[50px] font-medium ">  Explore our collection</h1>
      <Button className="w-[250px] rounded-[60px] h-[50px]  "><Link className="flex items-center gap-2 text-lg" href='/'>Explore now <SearchIcon/></Link></Button>
      </div>
    </CarouselItem>
   
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
}

export default MainBanner