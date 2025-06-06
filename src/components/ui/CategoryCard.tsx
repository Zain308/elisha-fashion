import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  name: string
  image: string
  href: string
}

export default function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden">
        <div className="aspect-square w-full relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <span className="inline-block mt-2 text-white border border-white px-4 py-1 text-sm">SHOP NOW</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
