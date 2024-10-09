import Image from "next/image";
import MainBanner from "./_components/MainBanner";
import ProductsSlider from "./_components/ProductsSlider";

export default function Home() {
  return (
  <div>

    <MainBanner/>
    <ProductsSlider title="New Arrivals"/>
  </div>
  );
}
