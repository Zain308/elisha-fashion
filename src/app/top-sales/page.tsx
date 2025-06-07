"use client";

import { useState, useEffect } from "react";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

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
      name: "Ladies Suit AL 01",
      description: "Stitched 2pcs Premium Cotton",
      price: 1800,
      originalPrice: 3000,
      discount: 40,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Embroidered Lawn",
      description: "3 Piece Designer Set",
      price: 4190,
      originalPrice: 6000,
      discount: 30,
      image: "https://easternfashion.pk/cdn/shop/files/MARIA_B_luxery_lawn_collection_-_Design_No_1678_-_Eastern_Fashion.jpg?v=1739285039",
    },
    {
      id: 3,
      name: "Cotton Net Suit",
      description: "Unstitched Premium Net",
      price: 2890,
      originalPrice: 4500,
      discount: 35,
      image: "https://easternfashion.pk/cdn/shop/files/22_6696dc19-e1f8-41af-ac5f-4037919606b8_800x.jpg?v=1724509487",
    },
    {
      id: 4,
      name: "Silk Dupatta Set",
      description: "Luxury Silk Collection",
      price: 3200,
      originalPrice: 5000,
      discount: 36,
      image: "https://www.mushq.pk/cdn/shop/files/MPLSU240102-1.jpg?v=1703242637&width=900",
    },
    {
      id: 5,
      name: "Designer Kurta",
      description: "Hand-woven Cotton Blend",
      price: 2190,
      originalPrice: 3500,
      discount: 37,
      image: "https://i.pinimg.com/originals/40/b8/74/40b874a4118483466b672fdee0965d0f.jpg",
    },
    {
      id: 6,
      name: "Wedding Collection",
      description: "Premium Bridal Wear",
      price: 8500,
      originalPrice: 12000,
      discount: 29,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Classic Kameez",
      description: "Printed Cambric Cotton",
      price: 2690,
      originalPrice: 4000,
      discount: 33,
      image: "https://i.pinimg.com/736x/cc/15/b9/cc15b921a507a1ed42c87a8fd4022f79.jpg",
    },
    {
      id: 8,
      name: "Formal Suit Set",
      description: "Premium Cotton with Dupatta",
      price: 3590,
      originalPrice: 5000,
      discount: 28,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Premium Abaya",
      description: "Elegant Black with Embellishments",
      price: 3890,
      originalPrice: 5500,
      discount: 29,
      image: "https://blackcamels.com.pk/cdn/shop/products/MIZKA-CLASSIC-MAXI-ABAYA2-1.jpg?v=1748963407",
    },
  ];

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount) ? prev.filter((d) => d !== discount) : [...prev, discount]
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
      selectedDiscounts.includes(product.discount.toString())
    )
    .filter((product) => 
      priceRange[0] <= product.price && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Highest Discount") return b.discount - a.discount;
      return 0; // Best Selling
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Reset page if out of bounds
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts, currentPage, totalPages]);

  return (
    <div className="top-sales-page bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section - Fixed the overlapping issue */}
      <section className="relative">
        <div className="hero-container h-[450px] w-full overflow-hidden">
          <img
            src="https://www.mushq.pk/cdn/shop/files/MPLSU240102-1.jpg?v=1703242637&width=1200"
            alt="Fashion Hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
              Exclusive Top Sales
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-light">
              Discover Zain Fashion Studio's best-selling women's fashion with luxurious designs and unbeatable discounts.
            </p>
            <div className="hero-buttons flex justify-center gap-4">
              <a
                href="/stitched"
                className="bg-amber-500 text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-amber-600 transition duration-300 shadow-lg"
              >
                Shop Stitched
              </a>
              <a
                href="/unstitched"
                className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full text-base font-semibold hover:bg-amber-500 hover:text-black transition duration-300"
              >
                Shop Unstitched
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Top Sales Collection</h1>
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed text-base">
            Handpicked best-sellers crafted for elegance, comfort, and style. Shop now to elevate your wardrobe.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Improved layout */}
          <aside className="lg:w-72 w-full order-first">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">Refine Your Selection</h3>

              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3 text-sm">Discount</h4>
                <div className="flex flex-col gap-3">
                  {["70", "50", "40", "30"].map((discount) => (
                    <label key={discount} className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer hover:text-gray-900">
                      <input
                        type="checkbox"
                        checked={selectedDiscounts.includes(discount)}
                        onChange={() => handleDiscountChange(discount)}
                        className="h-4 w-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500 focus:ring-offset-0"
                      />
                      <span>{discount}% and above</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3 text-sm">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleSizeChange(size)}
                      className={`px-3 py-1.5 rounded-md text-sm ${selectedSizes.includes(size) ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3 text-sm">Price Range</h4>
                <div className="flex justify-between mb-3 text-xs text-gray-600">
                  <span>Rs. {priceRange[0].toLocaleString()}</span>
                  <span>Rs. {priceRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([1000, parseInt(e.target.value)])}
                  className="w-full h-1.5 bg-gray-200 rounded-full cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-3 text-sm">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full p-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option>Best Selling</option>
                  <option>Highest Discount</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid - Improved card styling */}
          <div className="flex-1">
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 text-lg">No products match your filters. Try adjusting your selection.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="product-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300 group"
                    >
                      <div className="product-img relative aspect-[3/4]">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded text-xs font-semibold shadow-sm">
                          {product.discount}% OFF
                        </div>
                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                          <button
                            className="p-2 bg-white rounded-full shadow hover:bg-amber-100 transition"
                            aria-label={`Add ${product.name} to Wishlist`}
                          >
                            <Heart size={18} className="text-gray-700 hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-base font-bold text-gray-900">Rs. {product.price.toLocaleString()}</span>
                          <span className="text-xs text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString()}</span>
                        </div>
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center justify-center gap-2">
                          <ShoppingBag size={16} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination - Improved styling */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-full text-sm font-medium ${page === currentPage ? "bg-amber-500 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-amber-50"} transition duration-200`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                      aria-label="Next Page"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Newsletter Section - Improved spacing */}
        <section className="bg-white py-16 rounded-xl mt-16 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Join Our Fashion Community</h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">Subscribe for exclusive deals and a 10% off welcome offer on your first order.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                aria-label="Email Address"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-lg text-sm font-medium transition duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .hero-container {
          position: relative;
          z-index: 0;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}