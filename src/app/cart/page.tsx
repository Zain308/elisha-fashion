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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag size={40} className="text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/">
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ArrowLeft size={20} />
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} item(s) in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-gray-900">Rs. {item.price.toLocaleString()}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping}`}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>Rs. {tax.toLocaleString()}</span>
                </div>

                {shipping === 0 && (
                  <div className="flex items-center text-green-600 text-sm">
                    <Truck size={16} className="mr-2" />
                    Free shipping on orders over Rs. 3,000!
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-4">
                <CreditCard size={20} />
                Proceed to Checkout
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Shield size={16} className="mr-2" />
                Secure checkout guaranteed
              </div>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Truck size={16} className="mr-3 text-green-600" />
                    Free shipping on orders over Rs. 3,000
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="mr-3 text-blue-600" />
                    30-day return policy
                  </div>
                  <div className="flex items-center">
                    <CreditCard size={16} className="mr-3 text-purple-600" />
                    Secure payment processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
