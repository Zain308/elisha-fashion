"use client"

import { useState } from "react"
import { sizes } from "@/lib/data"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FilterSection {
  title: string
  isOpen: boolean
}

export default function ProductFilter() {
  const [filterSections, setFilterSections] = useState<FilterSection[]>([
    { title: "Ready & Ship", isOpen: true },
    { title: "Size", isOpen: true },
    { title: "Price", isOpen: true },
    { title: "Discount", isOpen: true },
  ])

  const [priceRange, setPriceRange] = useState<[number, number]>([2000, 10000])

  const toggleSection = (index: number) => {
    setFilterSections((prev) =>
      prev.map((section, i) => (i === index ? { ...section, isOpen: !section.isOpen } : section)),
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-lg">Filter</h3>

      {filterSections.map((section, index) => (
        <div key={section.title} className="border-b pb-4">
          <button className="flex items-center justify-between w-full font-medium" onClick={() => toggleSection(index)}>
            {section.title}
            {section.isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {section.isOpen && (
            <div className="mt-3">
              {section.title === "Size" && (
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              )}

              {section.title === "Price" && (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Rs. {priceRange[0]}</span>
                    <span>Rs. {priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={10000}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              )}

              {section.title === "Discount" && (
                <div className="space-y-2">
                  {[30, 40, 50, 70].map((discount) => (
                    <label key={discount} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{discount}% and above</span>
                    </label>
                  ))}
                </div>
              )}

              {section.title === "Ready & Ship" && (
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Ready to ship</span>
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="border-b pb-4">
        <button className="flex items-center justify-between w-full font-medium">
          Color
          <ChevronDown size={18} />
        </button>
      </div>

      <div>
        <h3 className="font-medium mb-2">Sort By</h3>
        <select className="w-full border rounded p-2">
          <option>Best Selling</option>
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}
