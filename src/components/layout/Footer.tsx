import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Currency and Assistance */}
          <div className="footer-section">
            <h3>CURRENCY</h3>
            <p>PRK</p>

            <h3 style={{ marginTop: "2rem" }}>FOR ASSISTANCE</h3>
            <p>Whatsapp: 0322 6773534</p>
            <p>Email: zain@gmail.com</p>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>COMPANY</h3>
            <Link href="/about-us">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/store-locator">Store Locator</Link>
            <Link href="/store-addresses">Store Addresses</Link>
          </div>

          {/* Customer Services */}
          <div className="footer-section">
            <h3>CUSTOMER SERVICES</h3>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/delivery-orders">Delivery & Orders</Link>
            <Link href="/returns-exchanges">Returns & Exchanges</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/track-order">Track My Order</Link>
            <Link href="/payment-guides">Payment Guides</Link>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>STAY CONNECTED</h3>
            <p>Subscribe to our newsletter for latest updates</p>
            <div style={{ display: "flex", marginTop: "1rem" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "5px 0 0 5px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#d4af37",
                  color: "#000",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "0 5px 5px 0",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zain Fashion Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
