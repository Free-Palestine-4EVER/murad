"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Gallery categories
  const categories = [
    { id: "landscapes", name: "Landscapes" },
    { id: "activities", name: "Activities" },
    { id: "camps", name: "Camps" },
    { id: "people", name: "People & Culture" },
  ]

  // Gallery images by category
  const galleryImages = {
    landscapes: [
      { src: "/images/gallery-1.png", alt: "Desert landscape with mountains", caption: "The Seven Pillars of Wisdom" },
      { src: "/images/gallery-2.png", alt: "Sunset over the desert", caption: "Sunset over the red dunes" },
      { src: "/images/gallery-3.png", alt: "Rock formations in Wadi Rum", caption: "Ancient rock formations" },
      { src: "/images/gallery-4.png", alt: "Desert valley panorama", caption: "Valley of the Moon panorama" },
      { src: "/images/gallery-5.png", alt: "Sand dunes", caption: "Red sand dunes at dawn" },
      { src: "/images/gallery-6.png", alt: "Desert canyon", caption: "Khazali Canyon" },
      { src: "/images/landscape-7.png", alt: "Desert mountains", caption: "Jebel Umm Fruth Bridge" },
      { src: "/images/landscape-8.png", alt: "Desert plains", caption: "The vast desert plains" },
    ],
    activities: [
      { src: "/images/jeep-tour.png", alt: "Jeep safari in the desert", caption: "Exploring by 4x4 jeep" },
      { src: "/images/camel-trek.png", alt: "Camel trekking", caption: "Traditional camel caravan" },
      { src: "/images/hiking-tour.png", alt: "Hiking in Wadi Rum", caption: "Hiking through the canyons" },
      { src: "/images/activity-4.png", alt: "Rock climbing", caption: "Rock climbing adventure" },
      { src: "/images/activity-5.png", alt: "Stargazing", caption: "Stargazing under the clear desert sky" },
      { src: "/images/activity-6.png", alt: "Hot air balloon", caption: "Hot air balloon over Wadi Rum" },
    ],
    camps: [
      { src: "/images/desert-camp.png", alt: "Bedouin camp at sunset", caption: "Traditional Bedouin camp" },
      { src: "/images/camp-2.png", alt: "Inside a Bedouin tent", caption: "Inside our comfortable tents" },
      { src: "/images/camp-3.png", alt: "Campfire in the desert", caption: "Evening campfire gatherings" },
      { src: "/images/camp-4.png", alt: "Dining area in camp", caption: "Dining under the stars" },
      { src: "/images/camp-5.png", alt: "Luxury desert camp", caption: "Luxury desert accommodation" },
      { src: "/images/camp-6.png", alt: "Sunrise at camp", caption: "Sunrise view from our camp" },
    ],
    people: [
      { src: "/images/people-1.png", alt: "Bedouin guide", caption: "Our experienced local guides" },
      { src: "/images/people-2.png", alt: "Traditional tea ceremony", caption: "Traditional Bedouin tea ceremony" },
      { src: "/images/people-3.png", alt: "Bedouin music", caption: "Evening music around the fire" },
      { src: "/images/people-4.png", alt: "Local crafts", caption: "Local handicrafts and traditions" },
      { src: "/images/people-5.png", alt: "Bedouin cooking", caption: "Traditional desert cooking" },
      { src: "/images/people-6.png", alt: "Bedouin family", caption: "Generations of desert knowledge" },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery-hero.png" alt="Wadi Rum Gallery" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Gallery</h1>
          <p className="max-w-2xl mx-auto text-xl mb-8">Explore the beauty of Wadi Rum through our eyes</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-stone-800">Our Desert Gallery</h2>
            <p className="text-lg text-stone-700">
              Browse through our collection of images showcasing the stunning landscapes, activities, and culture of
              Wadi Rum. Click on any image to view it in full size.
            </p>
          </div>

          <Tabs defaultValue="landscapes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                      <div className="aspect-square cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Removed the hover caption div */}
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center">
            <p className="text-lg text-stone-700 mb-6">
              Want to experience Wadi Rum for yourself? Book one of our tours and create your own memories.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/tours">Explore Our Tours</Link>
            </Button>
          </div>
        </div>
      </section>

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
    </div>
  )
}
