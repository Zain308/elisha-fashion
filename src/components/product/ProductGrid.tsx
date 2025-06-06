import ProductCard from "./ProductCard"
import type { Product } from "@/lib/data"

interface ProductGridProps {
  products: Product[]
  title?: string
  description?: string
}

export default function ProductGrid({ products, title, description }: ProductGridProps) {
  return (
    <div className="py-8">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase">{title}</h2>
          {description && <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
