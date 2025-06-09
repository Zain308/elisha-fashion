"use client"

import { useCart } from "../../context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 3000 ? 0 : 200
  const tax = Math.round(subtotal * 0.05) // 5% tax
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link href="/">
            <button className="continue-shopping-btn">
              <ArrowLeft size={20} />
              Continue Shopping
            </button>
          </Link>
        </div>

        <style jsx>{`
          .empty-cart-container {
            min-height: 100vh;
            background-color: #f9fafb;
            padding: 3rem 1rem;
          }
          .empty-cart-content {
            max-width: 28rem;
            margin: 0 auto;
            text-align: center;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 2rem;
          }
          .empty-cart-icon {
            width: 6rem;
            height: 6rem;
            margin: 0 auto 1.5rem;
            background-color: #f3f4f6;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .empty-cart-content h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
          }
          .empty-cart-content p {
            color: #6b7280;
            margin-bottom: 2rem;
          }
          .continue-shopping-btn {
            width: 100%;
            background: #000;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: background-color 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          .continue-shopping-btn:hover {
            background-color: #1a1a1a;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="cart-page-container">
      <div className="cart-page-inner">
        {/* Header */}
        <div className="cart-header">
          <Link href="/" className="back-link">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} item(s) in your cart</p>
        </div>

        <div className="cart-grid">
          {/* Cart Items */}
          <div className="cart-items-section">
            <div className="cart-items-card">
              <div className="cart-items-header">
                <h2>Cart Items</h2>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-content">
                      {/* Product Image */}
                      <div className="cart-item-image">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className="price-container">
                          <span className="current-price">Rs. {item.price.toLocaleString()}</span>
                          {item.originalPrice && (
                            <span className="original-price">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="quantity-controls">
                        <div className="quantity-selector">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary-section">
            <div className="order-summary-card">
              <h2>Order Summary</h2>

              {/* Price Breakdown */}
              <div className="price-breakdown">
                <div className="price-row">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                <div className="price-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping}`}</span>
                </div>

                <div className="price-row">
                  <span>Tax</span>
                  <span>Rs. {tax.toLocaleString()}</span>
                </div>

                {shipping === 0 && (
                  <div className="free-shipping-banner">
                    <Truck size={16} className="mr-2" />
                    Free shipping on orders over Rs. 3,000!
                  </div>
                )}
              </div>

              <div className="total-section">
                <div className="total-row">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="checkout-btn">
                <CreditCard size={20} />
                Proceed to Checkout
              </button>

              {/* Security Badge */}
              <div className="security-badge">
                <Shield size={16} className="mr-2" />
                Secure checkout guaranteed
              </div>

              {/* Features */}
              <div className="features-section">
                <div className="feature-list">
                  <div className="feature-item">
                    <Truck size={16} className="feature-icon" />
                    Free shipping on orders over Rs. 3,000
                  </div>
                  <div className="feature-item">
                    <Shield size={16} className="feature-icon" />
                    30-day return policy
                  </div>
                  <div className="feature-item">
                    <CreditCard size={16} className="feature-icon" />
                    Secure payment processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart-page-container {
          min-height: 100vh;
          background-color: #f9fafb;
          padding: 2rem 1rem;
        }
        
        .cart-page-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .cart-header {
          margin-bottom: 2rem;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          color: #6b7280;
          margin-bottom: 1rem;
          transition: color 0.2s;
        }
        
        .back-link:hover {
          color: #000;
        }
        
        .cart-header h1 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111827;
        }
        
        .cart-header p {
          color: #6b7280;
          margin-top: 0.5rem;
        }
        
        .cart-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 1024px) {
          .cart-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
        
        .cart-items-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .cart-items-header {
          padding: 1.5rem;
          border-bottom: 1px solid #f3f4f6;
        }
        
        .cart-items-header h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
        }
        
        .cart-items-list {
          display: flex;
          flex-direction: column;
        }
        
        .cart-item {
          padding: 1.5rem;
          transition: background-color 0.2s;
        }
        
        .cart-item:hover {
          background-color: #f9fafb;
        }
        
        .cart-item-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .cart-item-image {
          width: 6rem;
          height: 6rem;
          flex-shrink: 0;
          background-color: #f3f4f6;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        .cart-item-details {
          flex: 1;
          min-width: 0;
        }
        
        .cart-item-details h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.25rem;
        }
        
        .cart-item-details p {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        
        .price-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .current-price {
          font-size: 1.125rem;
          font-weight: 700;
          color: #111827;
        }
        
        .original-price {
          font-size: 0.875rem;
          color: #9ca3af;
          text-decoration: line-through;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
        }
        
        .quantity-btn {
          padding: 0.5rem;
          transition: background-color 0.2s;
        }
        
        .quantity-btn:hover {
          background-color: #f3f4f6;
        }
        
        .quantity-value {
          padding: 0.5rem 1rem;
          font-weight: 600;
          min-width: 3rem;
          text-align: center;
        }
        
        .remove-btn {
          padding: 0.5rem;
          color: #ef4444;
          transition: background-color 0.2s;
          border-radius: 0.5rem;
        }
        
        .remove-btn:hover {
          background-color: #fee2e2;
        }
        
        .order-summary-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          position: sticky;
          top: 1rem;
        }
        
        .order-summary-card h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1.5rem;
        }
        
        .price-breakdown {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .price-row {
          display: flex;
          justify-content: space-between;
          color: #6b7280;
        }
        
        .free-shipping-banner {
          display: flex;
          align-items: center;
          color: #10b981;
          font-size: 0.875rem;
        }
        
        .total-section {
          border-top: 1px solid #e5e7eb;
          padding-top: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: 1.125rem;
          font-weight: 700;
          color: #111827;
        }
        
        .checkout-btn {
          width: 100%;
          background: #000;
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .checkout-btn:hover {
          background-color: #1a1a1a;
        }
        
        .security-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .features-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
        }
        
        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
        }
        
        .feature-icon {
          margin-right: 0.75rem;
          color: #3b82f6;
        }
        
        .feature-item:nth-child(2) .feature-icon {
          color: #10b981;
        }
        
        .feature-item:nth-child(3) .feature-icon {
          color: #8b5cf6;
        }
      `}</style>
    </div>
  )
}