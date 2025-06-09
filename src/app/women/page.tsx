"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter, Heart, Eye } from "lucide-react"
import { useCart } from "../../context/CartContext"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  category: string
  type: string
  fabric: string
  isNew?: boolean
  isTopSelling?: boolean
}

export default function WomenPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([2000, 10000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("best-selling")
  const [currentPage, setCurrentPage] = useState(1)
  const { addToCart } = useCart()

  const productsPerPage = 8

  const womenProducts: Product[] = [
    {
      id: "w1",
      name: "Embroidered Silk Dress",
      description: "Luxury Silk with Gold Embroidery",
      price: 5490,
      originalPrice: 7000,
      discount: 22,
      image: "https://fashionflare.pk/cdn/shop/files/AIZ00509_d58b55fa-079c-45d2-84c6-82af7c13a042.webp?v=1729330531",
      category: "women",
      type: "stitched",
      fabric: "Silk",
      isNew: true,
    },
    {
      id: "w2",
      name: "Classic Kameez",
      description: "Printed Cambric Cotton",
      price: 2690,
      image: "https://faashwear.com/wp-content/uploads/2025/05/IMG_0137.jpeg",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
      isNew: true,
    },
    {
      id: "w3",
      name: "Designer Kurta",
      description: "Hand-woven Cotton Blend",
      price: 2190,
      image: "https://i.pinimg.com/originals/40/b8/74/40b874a4118483466b672fdee0965d0f.jpg",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
      isTopSelling: true,
    },
    {
      id: "w4",
      name: "Formal Suit Set",
      description: "Premium Cotton with Dupatta",
      price: 3590,
      image:
        "https://i0.wp.com/www.hamroshringar.com/wp-content/uploads/2023/12/ladies-formal-suit-cream-3-pcs-set.webp?fit=600%2C900&ssl=1",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
    },
    {
      id: "w5",
      name: "Cotton Joggers",
      description: "Comfortable Daily Wear",
      price: 1890,
      image:
        "https://www.teentopsofficial.com/cdn/shop/products/image_0d4999c2-03be-46f8-9e11-491644781b8a.jpg?v=1654025397",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
      isTopSelling: true,
    },
    {
      id: "w6",
      name: "Embroidered Lawn",
      description: "3 Piece Designer Set",
      price: 4190,
      originalPrice: 6000,
      discount: 30,
      image:
        "https://rangolistore.pk/cdn/shop/files/batiqzink_2117bcca-5251-4fb9-b585-f75e47c204d3.jpg?v=1737198562&width=800",
      category: "women",
      type: "unstitched",
      fabric: "Lawn",
    },
    {
      id: "w7",
      name: "Wedding Collection",
      description: "Premium Bridal Wear",
      price: 8500,
      originalPrice: 12000,
      discount: 29,
      image: "https://www.farahtalibaziz.com.pk/images/thumbs/0019020_asel-aqua-lehenga-choli_700.jpeg",
      category: "women",
      type: "stitched",
      fabric: "Silk",
    },
    {
      id: "w8",
      name: "Casual Wear Set",
      description: "Comfortable Daily Collection",
      price: 2500,
      image: "https://i.pinimg.com/736x/1a/83/c4/1a83c4d58d9641377d811675274ce4f3.jpg",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
    },
  ]

  const sizes = ["XS", "S", "M", "L", "XL"]

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  // Apply filters and sorting
  const filteredProducts = womenProducts
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        case "discount":
          return (b.discount || 0) - (a.discount || 0)
        default:
          return (b.isTopSelling ? 1 : 0) - (a.isTopSelling ? 1 : 0)
      }
    })

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 })
  }

  return (
    <div className="women-page">
      {/* Hero Section */}
      <section className="women-hero">
        <div className="women-hero-content">
          <h1>Women's Collection</h1>
          <p>
            Discover Zain Fashion Studio's exquisite women's collection featuring premium fabrics, elegant designs, and
            contemporary styles. From traditional wear to modern fashion, find your perfect outfit for every occasion.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="women-content">
          {/* Mobile Filter Toggle */}
          <button
            className="mobile-filter-toggle"
            onClick={() => setFilterOpen(!filterOpen)}
            aria-label={filterOpen ? "Close filters" : "Open filters"}
          >
            <Filter size={20} />
            Filter & Sort
            {filterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <div className="women-layout">
            {/* Filter Sidebar */}
            <aside className={`filter-sidebar ${filterOpen ? "open" : ""}`}>
              <div className="filter-section">
                <h3>Filter</h3>

                <div className="filter-group">
                  <h4>Size</h4>
                  <div className="size-options">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSizes.includes(size) ? "selected" : ""}`}
                        onClick={() => toggleSize(size)}
                        aria-label={`Select size ${size}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Price Range</h4>
                  <div className="price-range">
                    <div className="price-labels">
                      <span>Rs. {priceRange[0].toLocaleString()}</span>
                      <span>Rs. {priceRange[1].toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="15000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="price-slider"
                      aria-label="Adjust maximum price"
                    />
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                    aria-label="Sort products"
                  >
                    <option value="best-selling">Best Selling</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="discount">Highest Discount</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <section className="products-section">
              <div className="products-header">
                <h2>All Products ({filteredProducts.length})</h2>
              </div>

              <div className="products-grid">
                {currentProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-img">
                      <Link href={`/product/${product.id}`}>
                        <img src={product.image || "/placeholder.svg"} alt={product.name} />
                      </Link>

                      {/* Product Actions Overlay */}
                      <div className="product-actions">
                        <Link href={`/product/${product.id}`} className="action-btn">
                          <Eye size={18} />
                        </Link>
                        <button className="action-btn" aria-label="Add to wishlist">
                          <Heart size={18} />
                        </button>
                      </div>

                      {/* Badges */}
                      {product.discount && <span className="badge sale">{product.discount}% OFF</span>}
                      {product.isNew && <span className="badge new">NEW</span>}
                      {product.isTopSelling && !product.isNew && <span className="badge trending">TRENDING</span>}
                    </div>

                    <div className="product-details">
                      <h3>
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p>{product.description}</p>
                      <div className="price">
                        Rs. {product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
                      onClick={() => setCurrentPage(index + 1)}
                      aria-label={`Go to page ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
