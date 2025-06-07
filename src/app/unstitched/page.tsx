"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function UnstitchedPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedFabric, setSelectedFabric] = useState("all")

  const unstitchedProducts = [
    {
      id: 1,
      name: "Fabric 3 Piece Suit",
      description: "Printed Embroidered Pima Lawn",
      price: 5390,
      image:
        "https://prettyrobe.com/cdn/shop/files/PR-2688-1-copy.webp?v=1734525533&width=533",
      fabric: "lawn",
      category: "3pcs",
    },
    {
      id: 2,
      name: "Fabric 2 Piece",
      description: "Printed Embroidered Cambric",
      price: 3590,
      image:
        "https://shop.aghanoorofficial.com/cdn/shop/files/WhatsAppImage2024-11-06at19.33.16.jpg?v=1730903823",
      fabric: "cotton",
      category: "2pcs",
    },
    {
      id: 3,
      name: "Lawn Collection",
      description: "Digital Print with Dupatta",
      price: 4190,
      image:
        "https://ramsha.pk/cdn/shop/files/DSF2036.jpg?v=1736926763",
      fabric: "lawn",
      category: "3pcs",
    },
    {
      id: 4,
      name: "Cotton Net Suit",
      description: "Unstitched Premium Quality",
      price: 2890,
      image:
        "https://www.limelight.pk/cdn/shop/files/LP052ST-XSL-582_6_2PieceCottonNetSuit-Embellished_Pret.jpg?v=1735564138&width=1946",
      fabric: "cotton",
      category: "2pcs",
    },
    {
      id: 5,
      name: "Silk Collection",
      description: "Luxury Unstitched Fabric",
      price: 6200,
      image:
        "https://mahekamil.pk/cdn/shop/products/9A-1-min.jpg?v=1679859104",
      fabric: "silk",
      category: "3pcs",
    },
    {
      id: 6,
      name: "Organza Set",
      description: "Premium Unstitched Material",
      price: 4500,
      image: "https://www.zainabjees.com/cdn/shop/files/6_d6c67138-8aee-4987-8921-a187cf468f38a.jpg?v=1736173841&width=600",
      fabric: "organza",
      category: "2pcs",
    },
  ]

  const fabrics = [
    { id: "all", name: "All Fabrics" },
    { id: "lawn", name: "Lawn" },
    { id: "cotton", name: "Cotton" },
    { id: "silk", name: "Silk" },
    { id: "organza", name: "Organza" },
  ]

  const filteredProducts =
    selectedFabric === "all"
      ? unstitchedProducts
      : unstitchedProducts.filter((product) => product.fabric === selectedFabric)

  return (
    <div className="women-page">
      {/* Hero Section */}
      <div className="women-hero">
        <div className="women-hero-content">
          <h1>UNSTITCHED COLLECTION</h1>
          <p>
            Premium unstitched fabrics for custom tailoring. Choose from our finest selection of lawn, cotton, silk, and
            organza materials.
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
                  <h4>Fabric Type</h4>
                  <div className="category-options">
                    {fabrics.map((fabric) => (
                      <button
                        key={fabric.id}
                        className={`category-btn ${selectedFabric === fabric.id ? "selected" : ""}`}
                        onClick={() => setSelectedFabric(fabric.id)}
                      >
                        {fabric.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Categories</h4>
                  <div className="size-options">
                    <button className="size-btn">1 PCS</button>
                    <button className="size-btn">2 PCS</button>
                    <button className="size-btn">3 PCS</button>
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
                <h2>Unstitched Products ({filteredProducts.length})</h2>
              </div>

              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
                    </div>

                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="product-price">Rs. {product.price.toLocaleString()}</div>
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
