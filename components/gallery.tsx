"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { src: "/images/gallery-1.png", alt: "Desert landscape with mountains" },
    { src: "/images/gallery-2.png", alt: "Bedouin camp at sunset" },
    { src: "/images/gallery-3.png", alt: "Rock formations in Wadi Rum" },
    { src: "/images/gallery-4.png", alt: "Starry night sky over the desert" },
    { src: "/images/gallery-5.png", alt: "Camel caravan in the desert" },
    { src: "/images/gallery-6.png", alt: "Traditional Bedouin tea ceremony" },
  ]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  )
}
