export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Zain Fashion Studio</h1>
          <p>Discover the latest trends in women's fashion. Elegant designs for every occasion.</p>
          <div className="hero-buttons">
            <a href="/stitched" className="shop-btn primary">
              Shop Stitched
            </a>
            <a href="/unstitched" className="shop-btn outline">
              Shop Unstitched
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* New Arrivals */}
        <section className="product-section">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://iznikfashions.com/cdn/shop/files/131_8047a46b-bc20-433e-8719-a645b6f24c6d.png?v=1746065919&width=900"
                  alt="Embroidered Silk Dress"
                />
                <span className="badge new">NEW</span>
              </div>
              <div className="product-details">
                <h3>Embroidered Silk Dress</h3>
                <p>Luxury Silk with Gold Embroidery</p>
                <div className="price">Rs. 5,490</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://i.pinimg.com/736x/cc/15/b9/cc15b921a507a1ed42c87a8fd4022f79.jpg"
                  alt="Classic Kameez"
                />
                <span className="badge new">NEW</span>
              </div>
              <div className="product-details">
                <h3>Classic Kameez</h3>
                <p>Printed Cambric Cotton</p>
                <div className="price">Rs. 2,690</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://i.pinimg.com/originals/40/b8/74/40b874a4118483466b672fdee0965d0f.jpg"
                  alt="Designer Kurta"
                />
                <span className="badge new">NEW</span>
              </div>
              <div className="product-details">
                <h3>Designer Kurta</h3>
                <p>Hand-woven Cotton Blend</p>
                <div className="price">Rs. 2,190</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Formal Suit Set"
                />
                <span className="badge new">NEW</span>
              </div>
              <div className="product-details">
                <h3>Formal Suit Set</h3>
                <p>Premium Cotton with Dupatta</p>
                <div className="price">Rs. 3,590</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Shop By Category */}
        <section className="category-section">
          <h2 className="section-title">SHOP BY CATEGORY</h2>
          <div className="category-grid">
            <a href="/category/university-wear" className="category-card">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="University Wear"
              />
              <div className="category-overlay">
                <div className="discount">50% OFF</div>
                <h3>UNIVERSITY WEAR</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/category/wedding-wear" className="category-card">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wedding Wear"
              />
              <div className="category-overlay">
                <div className="discount">40% OFF</div>
                <h3>WEDDING WEAR</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/category/abayas" className="category-card">
              <img
                src="https://blackcamels.com.pk/cdn/shop/products/MIZKA-CLASSIC-MAXI-ABAYA2-1.jpg?v=1748963407"
                alt="Abayas"
              />
              <div className="category-overlay">
                <div className="discount">30% OFF</div>
                <h3>ABAYAS</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/category/desi-wear" className="category-card">
              <img src="https://i.pinimg.com/736x/bc/d9/0b/bcd90ba9f7216e0878c8262439061c1f.jpg" alt="Desi Wear" />
              <div className="category-overlay">
                <div className="discount">70% OFF</div>
                <h3>DESI WEAR</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>
          </div>
        </section>

        {/* Shop By Fabric */}
        <section className="fabric-section">
          <h2 className="section-title">SHOP BY FABRIC</h2>
          <div className="fabric-grid">
            <a href="/fabric/silk" className="fabric-card">
              <img
                src="https://www.mushq.pk/cdn/shop/files/MPLSU240102-1.jpg?v=1703242637&width=493"
                alt="Silk Fabric"
              />
              <div className="fabric-overlay">
                <h3>SILK</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/fabric/organza" className="fabric-card">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Organza Fabric"
              />
              <div className="fabric-overlay">
                <h3>ORGANZA</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/fabric/cotton" className="fabric-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkPjnqHUIJuI7L92ExjonZhKwBang46fUVw&s"
                alt="Cotton Fabric"
              />
              <div className="fabric-overlay">
                <h3>COTTON</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/fabric/net" className="fabric-card">
              <img
                src="https://easternfashion.pk/cdn/shop/files/22_6696dc19-e1f8-41af-ac5f-4037919606b8_800x.jpg?v=1724509487"
                alt="Net Fabric"
              />
              <div className="fabric-overlay">
                <h3>NET</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>

            <a href="/fabric/lawn" className="fabric-card">
              <img
                src="https://easternfashion.pk/cdn/shop/files/MARIA_B_luxery_lawn_collection_-_Design_No_1678_-_Eastern_Fashion.jpg?v=1739285039"
                alt="Lawn Fabric"
              />
              <div className="fabric-overlay">
                <h3>LAWN</h3>
                <span className="shop-now">SHOP NOW</span>
              </div>
            </a>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="featured-section">
          <h2 className="section-title">FEATURED COLLECTION</h2>
          <div className="featured-banner-grid">
            <div className="featured-banner main-banner">
              <img
                src="https://media.istockphoto.com/id/831656828/photo/luxury-clothing-store-for-men.jpg?s=612x612&w=0&k=20&c=r9vD1Nvv_W0uco8RN7jPKx2HJ7zxj3ISrnbP5XhGszg="
                alt="Featured Collection"
              />
              <div className="featured-content">
                <h3>Exclusive Collection</h3>
                <p>Discover our latest casual wear collection with premium comfort and style</p>
                <a href="/featured" className="featured-btn">
                  Shop Collection
                </a>
              </div>
            </div>

            <div className="featured-side-banners">
              <div className="featured-banner side-banner">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Premium Silk"
                />
                <div className="featured-content-small">
                  <h4>Premium Silk</h4>
                  <span className="shop-link">Shop Now →</span>
                </div>
              </div>

              <div className="featured-banner side-banner">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Designer Wear"
                />
                <div className="featured-content-small">
                  <h4>Designer Wear</h4>
                  <span className="shop-link">Shop Now →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Sales */}
        <section className="top-sales-section">
          <h2 className="section-title">TOP SALES</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ladies Suit"
                />
                <span className="badge sale">40% OFF</span>
              </div>
              <div className="product-details">
                <h3>Ladies Suit AL 01</h3>
                <p>Stitched 2pcs Premium</p>
                <div className="price">
                  Rs. 1,800
                  <span className="original-price">Rs. 3,000</span>
                </div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://images.unsplash.com/photo-1506629905607-d405b7a30db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Embroidered Lawn"
                />
                <span className="badge sale">30% OFF</span>
              </div>
              <div className="product-details">
                <h3>Embroidered Lawn</h3>
                <p>3 Piece Designer Set</p>
                <div className="price">
                  Rs. 4,190
                  <span className="original-price">Rs. 6,000</span>
                </div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cotton Net Suit"
                />
                <span className="badge sale">35% OFF</span>
              </div>
              <div className="product-details">
                <h3>Cotton Net Suit</h3>
                <p>Unstitched Premium</p>
                <div className="price">
                  Rs. 2,890
                  <span className="original-price">Rs. 4,500</span>
                </div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Silk Dupatta Set"
                />
                <span className="badge sale">36% OFF</span>
              </div>
              <div className="product-details">
                <h3>Silk Dupatta Set</h3>
                <p>Luxury Collection</p>
                <div className="price">
                  Rs. 3,200
                  <span className="original-price">Rs. 5,000</span>
                </div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated with Latest Fashion</h2>
            <p>Subscribe to our newsletter and get 10% off on your first order</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
