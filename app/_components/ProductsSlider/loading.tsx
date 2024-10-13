import { Skeleton } from "@/components/ui/skeleton"

const ProductsLoading = () => {
  return (
    <div className="flex gap-10 mt-10">
    {Array(4)
      .fill(null)
      .map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
      ))}
  </div>
  )
}

export default ProductsLoading