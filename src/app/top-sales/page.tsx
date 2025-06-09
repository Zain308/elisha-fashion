"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

export default function TopSalesPage() {
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [sortBy, setSortBy] = useState("Best Selling");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const topSalesProducts = [
    {
      id: 1,
      name: "Elegant Embroidered Suit",
      price: 3990,
      originalPrice: 6990,
      discount: 43,
      sizes: ["S", "M", "L"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlLa3FRygFDVS_PvVJwFtBza-K-42RNFxdA&s",
      description: "Unstitched, Lawn, Summer Collection"
    },
    {
      id: 2,
      name: "Luxury Pret Kurti",
      price: 2590,
      originalPrice: 3990,
      discount: 35,
      sizes: ["XS", "S", "M"],
      image: "https://qaaf.com.pk/cdn/shop/files/6I5A8163.jpg?v=1716362327",
      description: "Ready-to-Wear, Cotton"
    },
    {
      id: 3,
      name: "Festive Net Dress",
      price: 8990,
      originalPrice: 11990,
      discount: 25,
      sizes: ["M", "L", "XL"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogCPZ2-h76ZugoI28BTINEGIccWBh9OKp6w&s",
      description: "Formal, Net, Eid Collection"
    }
  ];

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount]
    );
    setCurrentPage(1);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
    setCurrentPage(1);
  };

  const filteredProducts = topSalesProducts
    .filter((product) =>
      selectedDiscounts.length === 0 ||
      selectedDiscounts.some((d) => product.discount >= parseInt(d))
    )
    .filter((product) =>
      selectedSizes.length === 0 ||
      product.sizes.some((s) => selectedSizes.includes(s))
    )
    .filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Highest Discount") return b.discount - a.discount;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts, currentPage, totalPages]);

  return (
    <div className="top-sales-wrapper">
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src="https://www.relaistoscana.com/wp-content/uploads/2018/07/boutiquenadine4-1.jpg"
            alt="Fashion Hero"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Exclusive Top Sales</h1>
            <p>
              Discover Zain Fashion Studio's best-selling women's fashion with
              luxurious designs and unbeatable discounts.
            </p>
            <div className="hero-buttons">
              <a href="/stitched" className="btn-primary">Shop Stitched</a>
              <a href="/unstitched" className="btn-outline">Shop Unstitched</a>
            </div>
          </div>
        </div>
      </section>

      <div className="main-container">
        <div className="collection-header">
          <h2>Top Sales Collection</h2>
          <p>
            Handpicked best‑sellers crafted for elegance, comfort, and style.
          </p>
        </div>

        <div className="main-content">
          <aside className="filters-panel">
            <h3>Refine Your Selection</h3>

            <div className="filter-group">
              <h4>Discount</h4>
              {['70', '50', '40', '30'].map((d) => (
                <label key={d} className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.includes(d)}
                    onChange={() => handleDiscountChange(d)}
                    aria-label={`${d}% and above discount`}
                  />
                  <span className="checkmark"></span>
                  {d}% and above
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h4>Size</h4>
              <div className="size-options">
                {['XS', 'S', 'M', 'L', 'XL'].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => handleSizeChange(sz)}
                    className={`size-btn ${selectedSizes.includes(sz) ? 'active-size' : ''}`}
                    aria-pressed={selectedSizes.includes(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4>Price Range</h4>
              <div className="price-range-labels">
                <span>Rs. {priceRange[0].toLocaleString()}</span>
                <span>Rs. {priceRange[1].toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([1000, +e.target.value])}
                aria-label="Price range maximum"
                aria-valuenow={priceRange[1]}
                aria-valuemin={1000}
                aria-valuemax={10000}
              />
            </div>

            <div className="filter-group">
              <h4>Sort By</h4>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                aria-label="Sort products by"
              >
                <option>Best Selling</option>
                <option>Highest Discount</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </aside>

          <main className="products-panel">
            {paginatedProducts.length === 0 ? (
              <div className="no-products">No products match your filters.</div>
            ) : (
              <>
                <div className="product-grid">
                  {paginatedProducts.map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                        <div className="product-badge">{product.discount}% OFF</div>
                      </div>
                      <div className="product-details">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <div className="price-section">
                          <span className="price">Rs. {product.price.toLocaleString()}</span>
                          <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
                        </div>
                        <button className="btn-add-to-cart">
                          <ShoppingBag size={16} /> Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pagination-controls">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  >
                    Previous
                  </button>
                  <span>Page {currentPage} of {totalPages}</span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </main>
        </div>
      </div>

      <style jsx>{`
        .top-sales-wrapper {
          font-family: sans-serif;
        }

        .hero-section {
          position: relative;
          height: 60vh;
          overflow: hidden;
        }

        .hero-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-text {
          text-align: center;
          color: white;
        }

        .btn-primary, .btn-outline {
          padding: 10px 20px;
          margin: 10px;
          border: 2px solid white;
          text-decoration: none;
          font-weight: bold;
        }

        .btn-primary {
          background-color: white;
          color: black;
        }

        .btn-outline {
          background-color: transparent;
          color: white;
        }

        .main-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .collection-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .main-content {
          display: flex;
          gap: 2rem;
        }

        .filters-panel {
          flex: 1;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          position: sticky;
          top: 20px;
          max-height: calc(100vh - 40px);
          overflow-y: auto;
        }

        .filters-panel h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .filter-group {
          margin-bottom: 1.5rem;
        }

        .filter-group h4 {
          font-size: 1rem;
          font-weight: 500;
          color: #555;
          margin-bottom: 0.75rem;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #333;
          cursor: pointer;
        }

        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 1px solid #999;
          border-radius: 3px;
          margin-right: 8px;
          position: relative;
          transition: all 0.2s;
        }

        .checkbox-container input:checked ~ .checkmark {
          background: #000;
          border-color: #000;
        }

        .checkbox-container input:checked ~ .checkmark:after {
          content: '';
          position: absolute;
          width: 5px;
          height: 10px;
          border: solid #fff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          top: 2px;
          left: 6px;
        }

        .size-options {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .size-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #ddd;
          border-radius: 50%;
          background: #fff;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .size-btn:hover {
          border-color: #000;
        }

        .active-size {
          background: #000;
          color: #fff;
          border-color: #000;
        }

        .price-range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #555;
          margin-bottom: 0.5rem;
        }

        .filter-group input[type="range"] {
          width: 100%;
          -webkit-appearance: none;
          height: 6px;
          background: #ddd;
          border-radius: 3px;
          outline: none;
        }

        .filter-group input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }

        .filter-group input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }

        .filter-group select {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.9rem;
          color: #333;
          cursor: pointer;
        }

        .products-panel {
          flex: 3;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          border: 1px solid #ddd;
          padding: 1rem;
        }

        .product-image {
          position: relative;
        }

        .product-image img {
          width: 100%;
        }

        .product-badge {
          background: crimson;
          color: white;
          padding: 2px 6px;
          position: absolute;
          top: 10px;
          left: 10px;
        }

        .price-section {
          margin-top: 10px;
        }

        .price {
          font-weight: bold;
          color: green;
        }

        .original-price {
          text-decoration: line-through;
          color: grey;
          margin-left: 10px;
        }

        .btn-add-to-cart {
          background: #000;
          color: white;
          padding: 8px 10px;
          margin-top: 10px;
          border: none;
          cursor: pointer;
        }

        .pagination-controls {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }

        .pagination-controls button {
          padding: 8px 16px;
          border: none;
          background: #000;
          color: white;
          cursor: pointer;
        }

        .pagination-controls button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
          }

          .filters-panel {
            position: static;
            max-height: none;
            padding: 1rem;
          }

          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}