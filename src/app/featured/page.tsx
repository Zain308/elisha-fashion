"use client"

import { useState } from "react"
import { Star, Heart, ShoppingBag } from "lucide-react"

export default function FeaturedPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const featuredProducts = [
    {
      id: 1,
      name: "Embroidered Silk Dress",
      description: "Luxury silk with intricate gold embroidery work",
      price: 5490,
      originalPrice: 7200,
      discount: 24,
      image: "https://www.mushq.pk/cdn/shop/files/MPLSU240102-1.jpg?v=1703242637&width=900",
      category: "luxury",
      rating: 4.8,
      isExclusive: true,
    },
    {
      id: 2,
      name: "Classic Kameez",
      description: "Traditional printed cambric cotton with modern cut",
      price: 2690,
      image: "https://i.pinimg.com/736x/cc/15/b9/cc15b921a507a1ed42c87a8fd4022f79.jpg",
      category: "traditional",
      rating: 4.6,
      isNew: true,
    },
    {
      id: 3,
      name: "Designer Kurta",
      description: "Hand-woven cotton blend with contemporary design",
      price: 2190,
      image: "https://i.pinimg.com/originals/40/b8/74/40b874a4118483466b672fdee0965d0f.jpg",
      category: "casual",
      rating: 4.7,
      isBestseller: true,
    },
    {
      id: 4,
      name: "Premium Abayas",
      description: "Elegant black abaya with subtle embellishments",
      price: 3890,
      image: "https://blackcamels.com.pk/cdn/shop/products/MIZKA-CLASSIC-MAXI-ABAYA2-1.jpg?v=1748963407",
      category: "modest",
      rating: 4.9,
      isExclusive: true,
    },
    {
      id: 5,
      name: "Desi Wear Collection",
      description: "Traditional Pakistani outfit with modern styling",
      price: 4200,
      originalPrice: 5500,
      discount: 24,
      image: "https://i.pinimg.com/736x/bc/d9/0b/bcd90ba9f7216e0878c8262439061c1f.jpg",
      category: "traditional",
      rating: 4.5,
      isNew: true,
    },
    {
      id: 6,
      name: "Silk Fabric Collection",
      description: "Premium silk fabric with rich texture and shine",
      price: 3200,
      image:
        "https://easternfashion.pk/cdn/shop/files/MARIA_B_luxery_lawn_collection_-_Design_No_1678_-_Eastern_Fashion.jpg?v=1739285039",
      category: "luxury",
      rating: 4.8,
      isExclusive: true,
    },
  ]

  const categories = [
    { id: "all", name: "All Collections", count: featuredProducts.length },
    { id: "luxury", name: "Luxury", count: featuredProducts.filter((p) => p.category === "luxury").length },
    {
      id: "traditional",
      name: "Traditional",
      count: featuredProducts.filter((p) => p.category === "traditional").length,
    },
    { id: "casual", name: "Casual", count: featuredProducts.filter((p) => p.category === "casual").length },
    { id: "modest", name: "Modest Wear", count: featuredProducts.filter((p) => p.category === "modest").length },
  ]

  const filteredProducts =
    selectedCategory === "all"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="featured-page">
      {/* Hero Section */}
      <div className="featured-hero">
        <div className="featured-hero-overlay">
          <div className="container">
            <div className="featured-hero-content">
              <h1>Exclusive Collection</h1>
              <p>
                Discover our handpicked selection of premium fashion pieces, crafted with attention to detail and
                designed for the modern woman.
              </p>
              <div className="featured-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Exclusive Pieces</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4.8★</span>
                  <span className="stat-label">Average Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="featured-filters">
          <h2>Browse Collections</h2>
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Banner */}
        <div className="featured-highlight">
          <div className="highlight-content">
            <div className="highlight-text">
              <h3>Limited Edition</h3>
              <h2>Casual Comfort Collection</h2>
              <p>
                Experience ultimate comfort with our premium cotton joggers and casual wear. Perfect for everyday
                elegance.
              </p>
              <button className="highlight-btn">
                <ShoppingBag size={20} />
                Shop Now
              </button>
            </div>
            <div className="highlight-image">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CkzkyZXDoBggbRz4kXI8H9jrulg7dw.png"
                alt="Casual Comfort Collection"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="featured-products">
          <div className="products-header">
            <h2>Featured Products</h2>
            <p>Showing {filteredProducts.length} exclusive items</p>
          </div>

          <div className="featured-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="featured-card">
                <div className="featured-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />

                  {/* Badges */}
                  <div className="featured-badges">
                    {product.isExclusive && <span className="badge exclusive">Exclusive</span>}
                    {product.isNew && <span className="badge new">New</span>}
                    {product.isBestseller && <span className="badge bestseller">Bestseller</span>}
                    {product.discount && <span className="badge discount">{product.discount}% OFF</span>}
                  </div>

                  {/* Quick Actions */}
                  <div className="quick-actions">
                    <button className="quick-btn">
                      <Heart size={18} />
                    </button>
                    <button className="quick-btn">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                <div className="featured-info">
                  <div className="rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "filled" : "empty"} />
                      ))}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                  </div>

                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="price-section">
                    <span className="current-price">Rs. {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="featured-newsletter">
          <div className="newsletter-card">
            <h3>Stay Updated</h3>
            <p>Be the first to know about new exclusive collections and special offers</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
