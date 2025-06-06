import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star } from "lucide-react"
import { products } from "@/lib/data"
import Button from "@/components/ui/Button"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Get related products (same category but different ID)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-black">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href={`/${product.category}`} className="text-gray-500 hover:text-black">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="aspect-square relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-1">{product.description}</p>

          <div className="flex items-center mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-yellow-400" : "fill-gray-200"}`} />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">4.0 (12 reviews)</span>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold">PKR {product.price.toLocaleString()}</h2>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">PKR {product.originalPrice.toLocaleString()}</p>
            )}
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Availability:</h3>
            <p className="text-green-600">In stock</p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">SKU:</h3>
            <p>ICA230601</p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Quality:</h3>
            <div className="flex items-center space-x-4">
              <button className="border rounded-md p-2 w-10 h-10 flex items-center justify-center">-</button>
              <span>1</span>
              <button className="border rounded-md p-2 w-10 h-10 flex items-center justify-center">+</button>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="primary" size="lg" className="w-full">
              ADD TO BAG
            </Button>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="font-medium mb-2">Details:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Top Fabric: Digital Printed Embroidered {product.fabric} | 3m</li>
              <li>Bottom Fabric: Digital Printed {product.fabric} | 2.5m</li>
              <li>Technique: Printed Embroidered</li>
              <li>Fabric Content: 100% Cotton</li>
              <li>Description: Essentials Printed Embroidered Top Bottoms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">REVIEWS</h2>

        <div className="border p-6 rounded-md">
          <h3 className="font-medium mb-4">Your Reviewing:</h3>
          <p className="mb-4">
            {product.name} | {product.description}
          </p>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Your Rating:</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gray-300 cursor-pointer hover:text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="nickname" className="block mb-1 font-medium">
                Nickname
              </label>
              <input type="text" id="nickname" className="w-full border rounded p-2" />
            </div>

            <div>
              <label htmlFor="summary" className="block mb-1 font-medium">
                Summary
              </label>
              <input type="text" id="summary" className="w-full border rounded p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="review" className="block mb-1 font-medium">
              Review
            </label>
            <textarea id="review" rows={5} className="w-full border rounded p-2" />
          </div>

          <Button variant="primary">SUBMIT REVIEW</Button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">RELATED PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="group">
              <div className="relative overflow-hidden">
                <Link href={`/product/${relatedProduct.id}`}>
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="font-medium">{relatedProduct.name}</h3>
                <p className="text-sm text-gray-500">{relatedProduct.description}</p>
                <p className="font-bold">PKR {relatedProduct.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
