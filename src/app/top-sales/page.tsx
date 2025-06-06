export default function TopSalesPage() {
  const topSalesProducts = [
    {
      id: 1,
      name: "Ladies Suit AL 01",
      description: "Stitched 2pcs Premium",
      price: "1,800",
      originalPrice: "3,000",
      discount: "40%",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Embroidered Lawn",
      description: "3 Piece Designer Set",
      price: "4,190",
      originalPrice: "6,000",
      discount: "30%",
      image:
        "https://sjc.microlink.io/rwraWV1HtKS44EmqXOg8R8Zeu1KcsLpGWJXEwlDm3UQ2JzGznHKR29snlV_vMUy4eLC1tU51YqJ2k64i3iQYew.jpeg",
    },
    {
      id: 3,
      name: "Cotton Net Suit",
      description: "Unstitched Premium",
      price: "2,890",
      originalPrice: "4,500",
      discount: "35%",
      image: "https://images.unsplash.com/photo-1564257577-4a5e4b1b8b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Silk Dupatta Set",
      description: "Luxury Collection",
      price: "3,200",
      originalPrice: "5,000",
      discount: "36%",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Designer Kurta",
      description: "Hand-woven Cotton Blend",
      price: "2,190",
      originalPrice: "3,500",
      discount: "37%",
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Wedding Collection",
      description: "Premium Bridal Wear",
      price: "8,500",
      originalPrice: "12,000",
      discount: "29%",
      image:
        "https://sjc.microlink.io/rwraWV1HtKS44EmqXOg8R8Zeu1KcsLpGWJXEwlDm3UQ2JzGznHKR29snlV_vMUy4eLC1tU51YqJ2k64i3iQYew.jpeg",
    },
  ]

  return (
    <div className="container py-3">
      <div className="text-center mb-3">
        <h1 className="section-title">TOP SALES</h1>
        <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          Elisha offers a vast selection of women's clothing to shop. Each season finds a careful assortment of clothing
          no matter the season, trend-driven and classic pieces are available. Elisha is committed to helping shoppers
          be their most stylish selves.
        </p>
      </div>

      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        {/* Filter Sidebar */}
        <div style={{ width: "250px", flexShrink: 0 }}>
          <div className="bg-gray p-2" style={{ borderRadius: "10px" }}>
            <h3 className="font-bold mb-2">Filter</h3>

            <div className="mb-2">
              <h4 className="font-medium mb-1">Discount</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {["70%", "50%", "40%", "30%"].map((discount) => (
                  <label key={discount} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <input type="checkbox" />
                    <span className="text-sm">{discount} and above</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-2">
              <h4 className="font-medium mb-1">Size</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <label key={size} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <input type="checkbox" />
                    <span className="text-sm">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-2">
              <h4 className="font-medium mb-1">Price Range</h4>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span className="text-sm">Rs. 1,000</span>
                <span className="text-sm">Rs. 10,000</span>
              </div>
              <input type="range" min="1000" max="10000" style={{ width: "100%" }} />
            </div>

            <div className="mb-2">
              <h4 className="font-medium mb-1">Sort By</h4>
              <select style={{ width: "100%", padding: "0.5rem", border: "1px solid #ddd", borderRadius: "5px" }}>
                <option>Best Selling</option>
                <option>Highest Discount</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div style={{ flex: 1 }}>
          <div className="grid grid-3 gap-2">
            {topSalesProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div className="product-badge">{product.discount} OFF</div>
                </div>

                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">
                    Rs. {product.price}
                    <span className="product-price-original">Rs. {product.originalPrice}</span>
                  </div>
                  <button className="btn btn-primary btn-full">Buy Now</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="text-center mt-3">
            <div style={{ display: "inline-flex", gap: "0.5rem" }}>
              <button className="btn btn-secondary">1</button>
              <button className="btn" style={{ backgroundColor: "#f5f5f5" }}>
                2
              </button>
              <button className="btn" style={{ backgroundColor: "#f5f5f5" }}>
                3
              </button>
              <button className="btn" style={{ backgroundColor: "#f5f5f5" }}>
                4
              </button>
              <button className="btn" style={{ backgroundColor: "#f5f5f5" }}>
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
