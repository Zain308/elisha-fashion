"use client"

import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About Zain Fashion Studio</h1>
          <p className="hero-subtitle">Where Fashion Meets Innovation</p>
        </div>
      </div>

      <div className="container">
        {/* Main Content */}
        <div className="about-content">
          <div className="owner-message">
            <div className="section-header">
              <h2>Message From Owner</h2>
              <div className="divider"></div>
            </div>
            
            <div className="message-card">
              <p className="greeting">Dear valued fashion enthusiasts,</p>
              <p>
                Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture - Zain Fashion
                Studio! We are on the verge of launching an online fashion emporium that will redefine your style, elegance,
                and individuality.
              </p>
              <p>
                At Zain Fashion Studio, we believe that fashion is more than just clothing; it's a form of self-expression
                and an art of embracing one's uniqueness. Our carefully curated collection will cater to all your fashion
                desires, ensuring you step into the spotlight wherever you go.
              </p>
              <p>
                Our team has worked tirelessly to bring you a diverse range of high-quality apparel and accessories that
                embody the latest trends and timeless classics. From chic casual wear to sophisticated formal ensembles, we
                have something special in store for every occasion and every taste.
              </p>
            </div>
          </div>

          {/* Owner Profile */}
          <div className="owner-profile">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-wrapper">
                  <Image
                    src="https://avatars.githubusercontent.com/u/140058199?v=4" 
                    alt="Zain - Owner"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="profile-details">
                <h3>Meet Zain</h3>
                <p className="title">Owner & Full Stack Developer</p>
                <p className="bio">
                  With an unwavering passion for both technology and fashion, I have combined my technical expertise with 
                  a vision to bring forth a brand that resonates with the modern generation.
                </p>
                <div className="contact-info">
                  <p><span>Phone:</span> +92 123 4567891</p>
                  <p><span>Email:</span> zain@gmail.com</p>
                  <p><span>Location:</span> Landmark Plaza, H-9, Islamabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="vision-section">
            <div className="section-header">
              <h2>Our Vision</h2>
              <div className="divider"></div>
            </div>
            <div className="vision-content">
              <p>
                As both the technical architect and fashion curator of this platform, I ensure that every aspect of your
                shopping experience is seamless, from browsing our collections to secure checkout. Our website is built with
                the latest technology to provide you with the best possible user experience.
              </p>
              <div className="vision-features">
                <div className="feature">
                  <div className="feature-icon">✨</div>
                  <h4>Quality Fashion</h4>
                  <p>Curated collections that blend style and comfort</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🚀</div>
                  <h4>Tech-Driven</h4>
                  <p>Cutting-edge platform for seamless shopping</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">❤️</div>
                  <h4>Customer Focus</h4>
                  <p>Your satisfaction is our top priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Us Section */}
          <div className="visit-section">
            <div className="section-header">
              <h2>Visit Our Studio</h2>
              <div className="divider"></div>
            </div>
            <div className="visit-content">
              <div className="map-placeholder">
                {/* Replace with actual map component */}
                <div className="map-image">
                  <Image
                    src="https://images.adsttc.com/media/images/6149/456d/f91c/8149/d300/0048/newsletter/IAA128600.jpg?1632191846" // Replace with your actual map image
                    alt="Our Location"
                    width={600}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="visit-details">
                <h4>Landmark Plaza, H-9, Islamabad</h4>
                <p>Monday - Saturday: 10AM - 8PM</p>
                <p>Sunday: 12PM - 6PM</p>
                <button className="contact-btn">Get Directions</button>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="closing-message">
            <h3>Get Ready for Zain Fashion Studio</h3>
            <p>
              We are counting down the days until our grand opening, and we cannot wait to share the Zain Fashion Studio
              experience with all of you. Your unwavering support will be our guiding light as we embark on this exciting
              journey together.
            </p>
            <p className="signature">
              With fashionable regards,
              <br />
              <span>Zain</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-us-page {
          color: #333;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Hero Section */
        .about-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          margin-bottom: 60px;
        }
        
        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          opacity: 0.9;
        }
        
        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .section-header h2 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }
        
        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #d4af37, #f4d03f);
          margin: 0 auto;
          border-radius: 2px;
        }
        
        /* Owner Message */
        .owner-message {
          margin-bottom: 60px;
        }
        
        .message-card {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .greeting {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #444;
        }
        
        /* Owner Profile */
        .owner-profile {
          margin: 80px 0;
        }
        
        .profile-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        @media (min-width: 768px) {
          .profile-card {
            flex-direction: row;
          }
        }
        
        .profile-image {
          padding: 30px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
        }
        
        .image-wrapper {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .profile-details {
          padding: 30px;
          flex: 1;
        }
        
        .profile-details h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #222;
        }
        
        .title {
          font-size: 1.1rem;
          color: #d4af37;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .bio {
          margin-bottom: 25px;
          color: #555;
        }
        
        .contact-info {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
        }
        
        .contact-info p {
          margin-bottom: 8px;
        }
        
        .contact-info span {
          font-weight: 600;
          color: #333;
          display: inline-block;
          min-width: 70px;
        }
        
        /* Vision Section */
        .vision-section {
          margin: 80px 0;
        }
        
        .vision-content {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .vision-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .feature {
          text-align: center;
          padding: 30px 20px;
          background: #f9f9f9;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }
        
        .feature:hover {
          transform: translateY(-5px);
        }
        
        .feature-icon {
          font-size: 2rem;
          margin-bottom: 15px;
        }
        
        .feature h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #222;
        }
        
        /* Visit Section */
        .visit-section {
          margin: 80px 0;
        }
        
        .visit-content {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        @media (min-width: 768px) {
          .visit-content {
            flex-direction: row;
          }
        }
        
        .map-placeholder {
          flex: 2;
        }
        
        .map-image {
          width: 100%;
          height: 100%;
          min-height: 300px;
        }
        
        .visit-details {
          flex: 1;
          padding: 30px;
          background: #f9f9f9;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .visit-details h4 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #222;
        }
        
        .visit-details p {
          margin-bottom: 10px;
          color: #555;
        }
        
        .contact-btn {
          margin-top: 20px;
          background: #222;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          align-self: flex-start;
        }
        
        .contact-btn:hover {
          background: #d4af37;
        }
        
        /* Closing Message */
        .closing-message {
          text-align: center;
          margin: 80px 0 40px;
          padding: 40px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .closing-message h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #222;
        }
        
        .signature {
          margin-top: 30px;
          font-style: italic;
          font-size: 1.1rem;
        }
        
        .signature span {
          font-weight: 600;
          display: block;
          margin-top: 5px;
          font-style: normal;
          font-size: 1.3rem;
          color: #d4af37;
        }
      `}</style>
    </div>
  )
}