export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  category: string
  type: string
  fabric: string
  isNew?: boolean
  isTopSelling?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Drop Shoulder",
    description: "Yarn Dyed Embroidered | Raw Silk",
    price: 5490,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "stitched",
    fabric: "Raw Silk",
    isNew: true,
    isTopSelling: true,
  },
  {
    id: "2",
    name: "Classic Kameez",
    description: "Printed | Cambric",
    price: 2690,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "stitched",
    fabric: "Cambric",
    isNew: true,
  },
  {
    id: "3",
    name: "Classic Kurta",
    description: "Printed | Cambric",
    price: 2190,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "stitched",
    fabric: "Cambric",
    isTopSelling: true,
  },
  {
    id: "4",
    name: "Drop Shoulder",
    description: "Dyed Embroidered | Wave Jacquard",
    price: 4490,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "unstitched",
    fabric: "Wave Jacquard",
  },
  {
    id: "5",
    name: "Fabrics 2 Piece",
    description: "Printed Embroidered Cambric | Top Bottoms",
    price: 3590,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "unstitched",
    fabric: "Cambric",
  },
  {
    id: "6",
    name: "Fabrics 3 Piece Suit",
    description: "Printed Embroidered Pima Lawn | Top Bottoms Dupatta",
    price: 5390,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "unstitched",
    fabric: "Pima Lawn",
  },
  {
    id: "7",
    name: "Ladies Suit AL 01",
    description: "Stitched 2pcs",
    price: 1800,
    originalPrice: 3000,
    discount: 40,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "stitched",
    fabric: "Cotton",
    isTopSelling: true,
  },
  {
    id: "8",
    name: "Fabrics 2 Piece",
    description: "Printed Embroidered Lawn | Top Dupatta",
    price: 4190,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    type: "unstitched",
    fabric: "Lawn",
  },
]

export const categories = [
  { name: "University Wear", image: "/placeholder.svg?height=300&width=300" },
  { name: "Shaddi Baya Wear", image: "/placeholder.svg?height=300&width=300" },
  { name: "Abayas", image: "/placeholder.svg?height=300&width=300" },
  { name: "Desi Wear", image: "/placeholder.svg?height=300&width=300" },
]

export const fabricTypes = ["Silk", "Organza", "Cotton", "Net", "Lawn"]

export const clothingTypes = [
  "Short shirts",
  "Long shirts",
  "Froks",
  "Gowns",
  "Sharara",
  "Lengha",
  "Maxi",
  "Angharakha",
  "Shalwar Kameez",
  "Patyala",
  "Tulip",
  "Trousers",
  "Kurta",
]

export const colors = [
  "White",
  "Red",
  "Cyan",
  "Navy",
  "Vermillion",
  "Orange",
  "Black",
  "Yellow",
  "Green",
  "Magenta",
  "Brown",
  "Grey",
  "Blue",
  "Beige",
  "Purple",
  "Pink",
]

export const sizes = ["XS", "S", "M", "L", "XL"]

export const teamMembers = [
  {
    name: "Mehak Tarik",
    role: "Managing Director",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "M. Mazz",
    role: "Web Developer",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "M. Waleed",
    role: "Business Partner",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Danial Manzor",
    role: "Backend Developer",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "M. Jamal",
    role: "Logo & UI Design",
    image: "/placeholder.svg?height=200&width=200",
  },
]
