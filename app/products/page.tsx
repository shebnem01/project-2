import { getAPI } from '@/services/fetchApi'
import FilterProducts from '../_components/FilterProducts'
const ProductsPage =async () => {
    const {data} =await getAPI(`/product`);

  return (
   <FilterProducts products={data}/>
  )
}

export default ProductsPage