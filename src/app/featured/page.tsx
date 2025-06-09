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
      isNew: true,
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
                src="https://www.blus.com/cdn/shop/articles/image0_f74fd588-8bd8-45b5-8841-131fff4fa645.png?v=1733974484&width=1000"
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

                  {/* Badges - Only show one badge per product */}
                  <div className="featured-badges">
                    {product.isBestseller && <span className="badge bestseller">Bestseller</span>}
                    {product.isNew && !product.isBestseller && <span className="badge new">New</span>}
                    {product.discount && !product.isBestseller && !product.isNew && (
                      <span className="badge discount">{product.discount}% OFF</span>
                    )}
                    {product.isExclusive && !product.isBestseller && !product.isNew && !product.discount && (
                      <span className="badge exclusive">Exclusive</span>
                    )}
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

      <style jsx>{`
        .featured-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .featured-hero {
          position: relative;
          height: 70vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          margin-bottom: 4rem;
        }
        
        .featured-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80") center / cover;
          opacity: 0.3;
        }
        
        .featured-hero-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        .featured-hero-content {
          text-align: center;
          color: white;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .featured-hero-content h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          letter-spacing: 2px;
        }
        
        .featured-hero-content p {
          font-size: 1.3rem;
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .featured-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: #d4af37;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .featured-filters {
          padding: 4rem 0 2rem;
          text-align: center;
        }
        
        .featured-filters h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #333;
        }
        
        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .category-tab {
          background: white;
          border: 2px solid #e5e7eb;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .category-tab:hover {
          border-color: #d4af37;
          background: #f8f9fa;
          transform: translateY(-2px);
        }
        
        .category-tab.active {
          background: linear-gradient(45deg, #d4af37, #f4d03f);
          border-color: #d4af37;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
        }
        
        .category-count {
          background: rgba(0, 0, 0, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }
        
        .category-tab.active .category-count {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .featured-highlight {
          margin: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .highlight-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 400px;
        }
        
        .highlight-text {
          padding: 3rem;
        }
        
        .highlight-text h3 {
          color: #d4af37;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }
        
        .highlight-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .highlight-text p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .highlight-btn {
          background: linear-gradient(45deg, #333, #555);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .highlight-btn:hover {
          background: linear-gradient(45deg, #555, #777);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .highlight-image {
          height: 400px;
          overflow: hidden;
        }
        
        .highlight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .highlight-image:hover img {
          transform: scale(1.05);
        }
        
        .featured-products {
          padding: 4rem 0;
        }
        
        .products-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .products-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .products-header p {
          color: #666;
          font-size: 1.1rem;
        }
        
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .featured-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          position: relative;
        }
        
        .featured-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .featured-image {
          position: relative;
          height: 350px;
          overflow: hidden;
        }
        
        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .featured-card:hover .featured-image img {
          transform: scale(1.08);
        }
        
        .featured-badges {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 3;
        }
        
        .badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .badge.exclusive {
          background: linear-gradient(45deg, #8e44ad, #9b59b6);
          color: white;
        }
        
        .badge.new {
          background: linear-gradient(45deg, #2ed573, #17c0eb);
          color: white;
        }
        
        .badge.bestseller {
          background: linear-gradient(45deg, #ffa502, #ff6348);
          color: white;
        }
        
        .badge.discount {
          background: linear-gradient(45deg, #ff4757, #ff3742);
          color: white;
        }
        
        .quick-actions {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .featured-card:hover .quick-actions {
          opacity: 1;
        }
        
        .quick-btn {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .quick-btn:hover {
          background: #d4af37;
          color: white;
          transform: scale(1.1);
        }
        
        .featured-info {
          padding: 1.5rem;
        }
        
        .rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .stars {
          display: flex;
          gap: 0.2rem;
        }
        
        .stars .filled {
          color: #ffd700;
          fill: currentColor;
        }
        
        .stars .empty {
          color: #e9ecef;
        }
        
        .rating-text {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }
        
        .featured-info h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .featured-info p {
          color: #666;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        
        .price-section {
          margin-bottom: 1.5rem;
        }
        
        .current-price {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
        }
        
        .original-price {
          font-size: 1rem;
          color: #999;
          text-decoration: line-through;
          margin-left: 0.5rem;
        }
        
        .add-to-cart {
          width: 100%;
          background: linear-gradient(45deg, #333, #555);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .add-to-cart:hover {
          background: linear-gradient(45deg, #555, #777);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .featured-newsletter {
          padding: 4rem 0;
        }
        
        .newsletter-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 3rem;
          border-radius: 25px;
          text-align: center;
          color: white;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        .newsletter-card h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .newsletter-card p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }
        
        .newsletter-input {
          display: flex;
          max-width: 400px;
          margin: 0 auto;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .newsletter-input input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          font-size: 1rem;
          outline: none;
        }
        
        .newsletter-input button {
          background: linear-gradient(45deg, #d4af37, #f4d03f);
          color: #333;
          border: none;
          padding: 1rem 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .newsletter-input button:hover {
          background: linear-gradient(45deg, #f4d03f, #d4af37);
        }
        
        @media (max-width: 1024px) {
          .highlight-content {
            grid-template-columns: 1fr;
          }
          
          .highlight-image {
            order: -1;
            height: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .featured-hero-content h1 {
            font-size: 2.5rem;
          }
          
          .featured-stats {
            gap: 2rem;
          }
          
          .category-tabs {
            gap: 0.5rem;
          }
          
          .category-tab {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .newsletter-input {
            flex-direction: column;
            border-radius: 15px;
          }
          
          .newsletter-input input,
          .newsletter-input button {
            border-radius: 0;
          }
        }
        
        @media (max-width: 480px) {
          .featured-hero-content h1 {
            font-size: 2rem;
          }
          
          .featured-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .highlight-text h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}