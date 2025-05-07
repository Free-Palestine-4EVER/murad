"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function ImageLightbox({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`cursor-pointer ${className || ""}`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <img src={src || "/placeholder.svg"} alt={alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </>
  )
}
