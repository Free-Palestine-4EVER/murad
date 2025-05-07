import { Clock } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface TourCardProps {
  title: string
  description: string
  duration: string
  price: string
  imageSrc: string
  currency?: string
}

export default function TourCard({ title, description, duration, price, imageSrc, currency = "USD" }: TourCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-stone-800 group-hover:text-amber-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-stone-600 mb-4">{description}</p>
        <div className="flex items-center text-stone-500 mb-1 group-hover:translate-x-1 transition-transform duration-300">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center text-amber-600 font-medium">
          <span>
            From {price} {currency} per person
          </span>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <AnimatedButton asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white" animationStyle="default">
          <Link href="/contact">Book Now</Link>
        </AnimatedButton>
      </CardFooter>
    </Card>
  )
}
