import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">About Zain Fashion Studio</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Message From Owner:</h2>
          <p className="mb-4">Dear valued fashion enthusiasts,</p>
          <p className="mb-4">
            Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture - Zain Fashion
            Studio! We are on the verge of launching an online fashion emporium that will redefine your style, elegance,
            and individuality.
          </p>
          <p className="mb-4">
            At Zain Fashion Studio, we believe that fashion is more than just clothing; it's a form of self-expression
            and an art of embracing one's uniqueness. Our carefully curated collection will cater to all your fashion
            desires, ensuring you step into the spotlight wherever you go.
          </p>
          <p className="mb-4">
            Our team has worked tirelessly to bring you a diverse range of high-quality apparel and accessories that
            embody the latest trends and timeless classics. From chic casual wear to sophisticated formal ensembles, we
            have something special in store for every occasion and every taste.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Meet the Owner:</h3>
          <p className="mb-4">
            Allow me to introduce myself, Zain, the Owner and Full Stack Developer of Zain Fashion Studio. With an
            unwavering passion for both technology and fashion, I have combined my technical expertise with a vision to
            bring forth a brand that resonates with the modern generation. I am delighted to embark on this exciting
            journey with you.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Our Vision:</h3>
          <p className="mb-4">
            As both the technical architect and fashion curator of this platform, I ensure that every aspect of your
            shopping experience is seamless, from browsing our collections to secure checkout. Our website is built with
            the latest technology to provide you with the best possible user experience.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Stay Connected:</h3>
          <p className="mb-4">
            As the launch of our online store approaches rapidly, we encourage you to stay connected with us. Bookmark
            our website and be the first to experience our exclusive collection. Additionally, you can reach out to us
            through the provided contact details for any inquiries or to join our mailing list.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Visit Our Office:</h3>
          <p className="mb-4">
            For our patrons in Islamabad, Pakistan, we invite you to our office located at Landmark Plaza, H-9. Come
            and get a sneak peek into the world of Zain Fashion Studio while we prepare to unveil our digital
            wonderland.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Get Ready for Zain Fashion Studio:</h3>
          <p className="mb-4">
            We are counting down the days until our grand opening, and we cannot wait to share the Zain Fashion Studio
            experience with all of you. Your unwavering support will be our guiding light as we embark on this exciting
            journey together.
          </p>
          <p className="mb-4">
            Fashion forward, trendsetters - the future belongs to Zain Fashion Studio! Be a part of this captivating
            venture, and let's redefine fashion in Pakistan and beyond.
          </p>
          <p className="mb-4">With fashionable regards,</p>
          <p className="mb-4">
            Zain
            <br />
            Owner & Full Stack Developer
            <br />
            Zain Fashion Studio
            <br />
            Contact: +92 123 4567891
            <br />
            Email: zain@gmail.com
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">Meet Our Owner</h2>
        <div className="flex justify-center">
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gold">
              
            </div>
            <h3 className="font-bold text-xl">Zain</h3>
            <p className="text-lg text-gray-600">Owner & Full Stack Developer</p>
            <p className="text-sm text-gray-500 mt-2">Passionate about fashion and technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}
