import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import { CartProvider } from "../context/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zain Fashion Studio",
  description: "Discover the latest fashion trends at Zain Fashion Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
