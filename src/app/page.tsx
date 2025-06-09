"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Home() {
  const { addToCart } = useCart();

  const newArrivals = [
    {
      id: "n1",
      name: "Embroidered Silk",
      description: "Luxury Silk with Gold",
      price: 5490,
      image: "https://iznikfashions.com/cdn/shop/files/131_8047a46b-bc20-433e-8719-a645b6f24c6d.png?v=1746065919&width=900",
      isNew: true,
    },
    {
      id: "n2",
      name: "Classic Kameez",
      description: "Printed Cambric Cotton",
      price: 2690,
      image: "https://i.pinimg.com/736x/cc/15/b9/cc15b921a507a1ed42c87a8fd4022f79.jpg",
      isNew: true,
    },
    {
      id: "n3",
      name: "Designer Kurta",
      description: "Hand-woven Cotton Blend",
      price: 2190,
      image: "https://i.pinimg.com/originals/40/b8/74/40b874a4118483466b672fdee0965d0f.jpg",
      isNew: true,
    },
    {
      id: "n4",
      name: "Formal Suit Set",
      description: "Premium Cotton with Dupatta",
      price: 3590,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true,
    },
  ];

  const topSales = [
    {
      id: "t1",
      name: "Ladies Suit AL 01",
      description: "Stitched 2pcs Premium",
      price: 1800,
      originalPrice: 3000,
      discount: 40,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "t2",
      name: "Embroidered Lawn",
      description: "3 Piece Designer Set",
      price: 4190,
      originalPrice: 6000,
      discount: 30,
      image: "https://www.alzawiah.com/cdn/shop/files/Bano-2B-800x1200.jpg?v=1709501637",
    },
    {
      id: "t3",
      name: "Cotton Net Suit",
      description: "Unstitched Premium",
      price: 2890,
      originalPrice: 4500,
      discount: 35,
      image: "https://zeenwoman.com/cdn/shop/files/WUM33209.jpg?v=1701929428&width=600",
    },
    {
      id: "t4",
      name: "Silk Dupatta Set",
      description: "Luxury Collection",
      price: 3200,
      originalPrice: 5000,
      discount: 36,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Zain Fashion Studio</h1>
          <p>Discover the latest trends in women's fashion. Elegant designs for every occasion.</p>
          <div className="hero-buttons">
            <a href="/stitched" className="shop-btn primary" aria-label="Shop Stitched Collection">
              Shop Stitched
            </a>
            <a href="/unstitched" className="shop-btn outline" aria-label="Shop Unstitched Collection">
              Shop Unstitched
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* New Arrivals */}
        <section className="product-section">
          <h2 className="section-title">New Arrivals</h2>
          <div className="product-grid">
            {newArrivals.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={320}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                  {product.isNew && <span className="badge new">NEW</span>}
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price">Rs. {product.price.toLocaleString()}</div>
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
        </section>

        {/* Shop By Category */}
        <section className="category-section">
          <h2 className="section-title">Shop By Category</h2>
          <div className="category-grid">
            {[
              { href: "/category/university-wear", name: "University Wear", discount: "50% OFF", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { href: "/category/wedding-wear", name: "Wedding Wear", discount: "40% OFF", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { href: "/category/abayas", name: "Abayas", discount: "30% OFF", image: "https://blackcamels.com.pk/cdn/shop/products/MIZKA-CLASSIC-MAXI-ABAYA2-1.jpg?v=1748963407" },
              { href: "/category/desi-wear", name: "Desi Wear", discount: "70% OFF", image: "https://i.pinimg.com/736x/bc/d9/0b/bcd90ba9f7216e0878c8262439061c1f.jpg" },
            ].map((category) => (
              <a key={category.href} href={category.href} className="category-card" aria-label={`Shop ${category.name}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={280}
                  height={280}
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL="/placeholder.svg"
                />
                <div className="category-overlay">
                  <div className="discount">{category.discount}</div>
                  <h3>{category.name}</h3>
                  <span className="shop-now">Shop Now</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Shop By Fabric */}
        <section className="fabric-section">
          <h2 className="section-title">Shop By Fabric</h2>
          <div className="fabric-grid">
            {[
              { href: "/fabric/silk", name: "Silk", image: "https://www.mushq.pk/cdn/shop/files/MPLSU240102-1.jpg?v=1703242637&width=493" },
              { href: "/fabric/organza", name: "Organza", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { href: "/fabric/cotton", name: "Cotton", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkPjnqHUIJuI7L92ExjonZhKwBang46fUVw&s" },
              { href: "/fabric/net", name: "Net", image: "https://easternfashion.pk/cdn/shop/files/22_6696dc19-e1f8-41af-ac5f-4037919606b8_800x.jpg?v=1724509487" },
              { href: "/fabric/lawn", name: "Lawn", image: "https://easternfashion.pk/cdn/shop/files/MARIA_B_luxery_lawn_collection_-_Design_No_1678_-_Eastern_Fashion.jpg?v=1739285039" },
            ].map((fabric) => (
              <a key={fabric.href} href={fabric.href} className="fabric-card" aria-label={`Shop ${fabric.name}`}>
                <Image
                  src={fabric.image}
                  alt={fabric.name}
                  width={220}
                  height={220}
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL="/placeholder.svg"
                />
                <div className="fabric-overlay">
                  <h3>{fabric.name}</h3>
                  <span className="shop-now">Shop Now</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Collection */}
        <section className="featured-section">
          <h2 className="section-title">Featured Collection</h2>
          <div className="featured-banner-grid">
            <div className="featured-banner main-banner">
              <Image
                src="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2024/08/bigstock-SINGAPORE-APRIL-in-356650835.jpg"
                alt="Featured Collection"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/placeholder.svg"
              />
              <div className="featured-content">
                <h3>Exclusive Collection</h3>
                <p>Discover our latest casual wear collection with premium comfort and style</p>
                <a href="/featured" className="featured-btn" aria-label="Shop Featured Collection">
                  Shop Collection
                </a>
              </div>
            </div>
            <div className="featured-side-banners">
              {[
                { name: "Premium Silk", image: "https://www.nameerabyfarooq.com/cdn/shop/products/RawSilkKameezTrouserPakistaniEidDressinBlack_720x.jpg?v=1649069996" },
                { name: "Designer Wear", image: "https://www.shamaeelansari.com/images/thumbs/0005116_ee-02.jpeg" },
              ].map((banner) => (
                <div key={banner.name} className="featured-banner side-banner">
                  <Image
                    src={banner.image}
                    alt={banner.name}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                  <div className="featured-content-small">
                    <h4>{banner.name}</h4>
                    <span className="shop-link" aria-label={`Shop ${banner.name}`}>Shop Now →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Sales */}
        <section className="top-sales-section">
          <h2 className="section-title">Top Sales</h2>
          <div className="product-grid">
            {topSales.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={320}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                  {product.discount && <span className="badge sale">{product.discount}% OFF</span>}
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price">
                    Rs. {product.price.toLocaleString()}
                    {product.originalPrice && (
                      <span className="original-price">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
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
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated with Latest Fashion</h2>
            <p>Subscribe to our newsletter and get 10% off on your first order</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address for newsletter"
              />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
