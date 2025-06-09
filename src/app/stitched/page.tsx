"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function StitchedPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const stitchedProducts = [
    {
      id: 1,
      name: "Embroidered Silk Dress",
      description: "Luxury Silk with Gold Embroidery",
      price: 5490,
      originalPrice: 7000,
      discount: 22,
      image:
        "https://fashionflare.pk/cdn/shop/files/AIZ00509_d58b55fa-079c-45d2-84c6-82af7c13a042.webp?v=1729330531",
      category: "3pcs",
      isNew: true,
    },
    {
      id: 2,
      name: "Classic Kameez",
      description: "Printed Cambric Cotton",
      price: 2690,
      image:
        "https://nameerabridal.com/wp-content/uploads/2025/02/4-3.jpg",
      category: "2pcs",
      isNew: true,
    },
    {
      id: 3,
      name: "Designer Kurta",
      description: "Hand-woven Cotton Blend",
      price: 2190,
      image:
        "https://assets0.mirraw.com/images/12109514/BLACK_CORD_SET_-1_long_webp.webp?1702367319",
      category: "1pcs",
      isTopSelling: true,
    },
    {
      id: 4,
      name: "Formal Suit Set",
      description: "Premium Cotton with Dupatta",
      price: 3590,
      image:
        "https://i0.wp.com/www.hamroshringar.com/wp-content/uploads/2023/12/ladies-formal-suit-cream-3-pcs-set.webp?fit=600%2C900&ssl=1",
      category: "3pcs",
    },
    {
      id: 5,
      name: "Wedding Dress",
      description: "Premium Bridal Collection",
      price: 8500,
      originalPrice: 12000,
      discount: 29,
      image:
        "https://www.faizasaqlain.pk/cdn/shop/products/1_8b6ebc25-ff55-4d3b-8da6-0fc15311e392_360x.jpg?v=1661153170",
      category: "3pcs",
    },
    {
      id: 6,
      name: "Casual Wear",
      description: "Comfortable Daily Collection",
      price: 2500,
      image: "https://shopatvelour.com/cdn/shop/files/DSC5734.jpg?v=1738239795&width=533",
      category: "2pcs",
    },
  ]

  const categories = [
    { id: "all", name: "All Products" },
    { id: "1pcs", name: "1 Piece" },
    { id: "2pcs", name: "2 Piece" },
    { id: "3pcs", name: "3 Piece" },
  ]

  const filteredProducts =
    selectedCategory === "all"
      ? stitchedProducts
      : stitchedProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="women-page">
      {/* Hero Section */}
      <div className="women-hero">
        <div className="women-hero-content">
          <h1>STITCHED COLLECTION</h1>
          <p>
            Ready-to-wear stitched suits and dresses. Perfect fit, premium quality, and elegant designs for every
            occasion.
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
                  <h4>Categories</h4>
                  <div className="category-options">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`category-btn ${selectedCategory === category.id ? "selected" : ""}`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Size</h4>
                  <div className="size-options">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button key={size} className="size-btn">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Price Range</h4>
                  <div className="price-range">
                    <div className="price-labels">
                      <span>Rs. 2,000</span>
                      <span>Rs. 10,000</span>
                    </div>
                    <input type="range" min="2000" max="10000" className="price-slider" />
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Sort By</h4>
                  <select className="sort-select">
                    <option>Best Selling</option>
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="products-section">
              <div className="products-header">
                <h2>Stitched Products ({filteredProducts.length})</h2>
              </div>

              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
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
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
