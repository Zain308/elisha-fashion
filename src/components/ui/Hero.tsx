import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export default function Hero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <Image src="/placeholder.svg?height=500&width=1200" alt="Hero Image" fill className="object-cover" />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elisha Fashion Studio</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover the latest trends in women's fashion. Elegant designs for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stitched">
              <Button variant="primary" size="lg">
                Shop Stitched
              </Button>
            </Link>
            <Link href="/unstitched">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                Shop Unstitched
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
