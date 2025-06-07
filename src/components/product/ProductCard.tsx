"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"
import { useCart } from "../../context/CartContext"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-[3/4] w-full relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold">
            Rs. {product.price.toLocaleString()}
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </p>
        </div>
        <button onClick={handleAddToCart} className="buy-btn w-full mt-2">
          Buy Now
        </button>
      </div>
    </div>
  )
}
