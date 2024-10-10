import MainBanner from "./_components/MainBanner";
import ProductsSlider from "./_components/ProductsSection/ProductsSlider";
import { getAPI } from "@/services/fetchApi";

export default async function Home() {
  const {data} = await getAPI('/product');
  return (
  <div>

    <MainBanner/>
    <ProductsSlider products={data} title="New Arrivals"/>
  </div>
  );
}
