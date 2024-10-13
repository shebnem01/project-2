import HeroSlider from "./_components/HeroSlider";
import ProductsSlider from "./_components/ProductsSlider/ProductsSlider";
import { getAPI } from "@/services/fetchApi";

export default async function Home() {
  const {data} = await getAPI('/product');
  return (
  <div>
    <HeroSlider/>
    <ProductsSlider products={data} title="New Arrivals"/>
  </div>
  );
}
