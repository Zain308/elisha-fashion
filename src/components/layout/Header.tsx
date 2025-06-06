"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      {/* Announcement bar */}
      <div className="announcement-bar">Avail free shipping National Worldwide for orders above PRK 3000!</div>

      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="logo">
            Elisha
            <span className="logo-subtitle">fashion studio</span>
          </Link>

          {/* Mobile menu button */}
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link href="/">Home</Link>
            <Link href="/women">Women</Link>
            <Link href="/stitched">Stitched</Link>
            <Link href="/unstitched">Unstitched</Link>
            <Link href="/top-sales">Top Sales</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          {/* Cart Icon */}
          <Link href="/cart" className="cart-icon">
            <ShoppingBag size={24} />
            <span style={{ marginLeft: "0.5rem" }}>0</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMenuOpen ? "active" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/women">Women</Link>
        <Link href="/stitched">Stitched</Link>
        <Link href="/unstitched">Unstitched</Link>
        <Link href="/top-sales">Top Sales</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
    </header>
  )
}
