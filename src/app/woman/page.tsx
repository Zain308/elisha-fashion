"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"
import { useCart } from "../../context/CartContext"

export default function WomenPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([2000, 10000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("best-selling")
  const [currentPage, setCurrentPage] = useState(1)
  const { addToCart } = useCart()

  const productsPerPage = 8

  const womenProducts = [
    {
      id: "w1",
      name: "Embroidered Silk Dress",
      description: "Luxury Silk with Gold Embroidery",
      price: 5490,
      originalPrice: 7000,
      discount: 22,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1506629905607-d405b7a30db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
    },
    {
      id: "w5",
      name: "Cotton Joggers",
      description: "Comfortable Daily Wear",
      price: 1890,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CkzkyZXDoBggbRz4kXI8H9jrulg7dw.png",
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
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "women",
      type: "stitched",
      fabric: "Silk",
    },
    {
      id: "w8",
      name: "Casual Wear Set",
      description: "Comfortable Daily Collection",
      price: 2500,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "women",
      type: "stitched",
      fabric: "Cotton",
    },
  ]

  const sizes = ["XS", "S", "M", "L", "XL"]

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = womenProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(womenProducts.length / productsPerPage)

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  return (
    <div className="women-page">
      {/* Hero Section */}
      <div className="women-hero">
        <div className="women-hero-content">
          <h1>WOMEN'S COLLECTION</h1>
          <p>
            Zain offers a vast selection of women's clothing to shop. Each season finds a careful assortment of clothing
            no matter the season, trend-driven and classic pieces are available.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="women-content">
          {/* Mobile Filter Toggle */}
          <button className="mobile-filter-toggle" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter size={20} />
            Filter & Sort
            {filterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <div className="women-layout">
            {/* Filter Sidebar */}
            <div className={`filter-sidebar ${filterOpen ? "open" : ""}`}>
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
                    />
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Sort By</h4>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                    <option value="best-selling">Best Selling</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="discount">Highest Discount</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="products-section">
              <div className="products-header">
                <h2>All Products ({womenProducts.length})</h2>
              </div>

              <div className="products-grid">
                {currentProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <a href={`/product/${product.id}`}>
                        <img src={product.image || "/placeholder.svg"} alt={product.name} />
                      </a>
                      {product.discount && <div className="product-badge sale">{product.discount}% OFF</div>}
                      {product.isNew && <div className="product-badge new">NEW</div>}
                      {product.isTopSelling && !product.isNew && <div className="product-badge trending">TRENDING</div>}
                    </div>

                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="product-price">
                        Rs. {product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
