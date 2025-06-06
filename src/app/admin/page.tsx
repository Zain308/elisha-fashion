"use client"

import { useState } from "react"
import { products } from "@/lib/data"
import { Pencil, Trash2, Plus } from "lucide-react"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Export</button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 p-4 rounded-l-lg">
          <nav className="space-y-2">
            <a href="#" className="block py-2 px-4 bg-blue-600 text-white rounded">
              Dashboard
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Products
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Add Products
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Products List
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Categories
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Brands
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-r-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Products Grid</h2>

            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded px-3 py-2 w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover mb-3 rounded"
                />
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{product.description}</p>
                <p className="font-bold text-sm">Rs. {product.price.toLocaleString()}</p>

                <div className="flex justify-between mt-3">
                  <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                    <Pencil className="w-3 h-3 mr-1" />
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm flex items-center">
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="inline-flex">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border ${
                    currentPage === i + 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
