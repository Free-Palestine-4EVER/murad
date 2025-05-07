import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
  imageSrc: string
}

export default function TestimonialCard({ quote, author, location, rating, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-amber-500 fill-amber-500" : "text-stone-300"}`} />
          ))}
        </div>

        <blockquote className="text-stone-700 mb-6 flex-grow">"{quote}"</blockquote>

        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img src={imageSrc || "/placeholder.svg"} alt={author} className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="font-medium text-stone-800">{author}</p>
            <p className="text-sm text-stone-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
