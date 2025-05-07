"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import ImageLightbox from "@/components/image-lightbox"
import Link from "next/link"

export default function CampingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageLightbox src="/images/camping-hero.png" alt="Wadi Rum Camping" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Desert Camping</h1>
          <p className="max-w-2xl mx-auto text-xl mb-8">
            Experience the magic of Wadi Rum nights under the starlit sky
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-stone-800">Sleep in the Heart of the Desert</h2>
            <p className="text-lg text-stone-700 mb-6">
              There's nothing quite like spending the night in Wadi Rum. As the sun sets, the desert transforms into a
              magical landscape of deep shadows and golden light, followed by a night sky filled with more stars than
              you've ever seen.
            </p>
            <p className="text-lg text-stone-700 mb-8">
              We offer two authentic ways to experience the desert at night, each providing a unique connection to this
              ancient landscape and the Bedouin way of life.
            </p>
          </div>
        </div>
      </section>

      {/* Tented Bedouin Camp */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="mb-4">
                <ImageLightbox
                  src="/images/tented-camp.png"
                  alt="Tented Bedouin Camp"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/tented-camp-1.png"
                    alt="Inside of Bedouin tent"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/tented-camp-2.png"
                    alt="Bedouin camp at sunset"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/tented-camp-3.png"
                    alt="Campfire at Bedouin camp"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">Tented Bedouin Camp</h2>
              <p className="text-lg text-stone-700 mb-6">
                Our traditional Bedouin camp offers the perfect balance of comfort and authenticity. Nestled against
                towering rock formations that provide natural shelter, the camp features hand-woven goat hair tents in
                the traditional Bedouin style.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                Inside, you'll find comfortable mattresses with clean bedding, traditional rugs, and simple furnishings.
                The camp includes shared bathroom facilities with running water, a communal dining area, and a central
                fire pit where we gather in the evening for tea, music, and stories under the stars.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-stone-800">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Comfortable sleeping accommodations with mattresses, pillows, and blankets
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Traditional Bedouin dinner cooked in the sand (zarb) and breakfast
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlimited tea, coffee, and water
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Shared bathroom facilities with running water
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Evening entertainment with traditional Bedouin music
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-amber-600">25 JOD</p>
                  <p className="text-sm text-stone-600">per person / night</p>
                </div>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside Camping */}
      <section className="py-16 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="mb-4">
                <ImageLightbox
                  src="/images/outside-camping.png"
                  alt="Outside Camping"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/outside-camping-1.png"
                    alt="Stargazing in Wadi Rum"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/outside-camping-2.png"
                    alt="Bedouin preparing dinner"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/outside-camping-3.png"
                    alt="Morning view from camp"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">Outside Camping</h2>
              <p className="text-lg text-stone-700 mb-6">
                For the true adventurer seeking an authentic connection with the desert, our outside camping experience
                offers the chance to sleep directly under the vast starry sky of Wadi Rum, just as Bedouins have done
                for centuries.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                We'll set up a simple camp in a secluded location, far from light pollution and surrounded by the
                majestic silence of the desert. You'll sleep on comfortable mattresses with quality bedding, with
                nothing between you and the incredible canopy of stars above.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-stone-800">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Comfortable mattresses with warm blankets and pillows
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Traditional Bedouin dinner cooked over an open fire and breakfast
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlimited tea, coffee, and water
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Basic washing facilities (we provide water for washing)
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Stargazing guidance from your Bedouin host
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-amber-600">40 JOD</p>
                  <p className="text-sm text-stone-600">per person / night</p>
                </div>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-stone-800 text-center">Good to Know</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-stone-800">What to Bring</h3>
                <ul className="list-disc pl-5 text-stone-700 space-y-2">
                  <li>Warm clothing for the night (desert temperatures drop significantly after sunset)</li>
                  <li>Personal toiletries</li>
                  <li>Camera for the stunning sunset, sunrise, and stars</li>
                  <li>Flashlight or headlamp</li>
                  <li>Any personal medications you might need</li>
                  <li>A sense of adventure!</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-stone-800">Camping Schedule</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-amber-600">Afternoon:</p>
                    <p className="text-stone-700">
                      Arrival at the camp after your desert tour (or direct transfer from Wadi Rum village)
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-amber-600">Evening:</p>
                    <p className="text-stone-700">
                      Watch the sunset, enjoy traditional Bedouin tea, followed by dinner and music around the campfire
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-amber-600">Night:</p>
                    <p className="text-stone-700">Stargazing and relaxing in the peaceful desert environment</p>
                  </div>
                  <div>
                    <p className="font-bold text-amber-600">Morning:</p>
                    <p className="text-stone-700">
                      Sunrise viewing opportunity, followed by breakfast before departure
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-stone-800">Booking Information</h3>
                <ul className="list-disc pl-5 text-stone-700 space-y-2">
                  <li>Advance booking recommended, especially during high season (March-May and September-November)</li>
                  <li>20% deposit required to secure your booking</li>
                  <li>Free cancellation up to 48 hours before your stay</li>
                  <li>Camping experiences can be combined with our day tours for a complete Wadi Rum adventure</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-stone-700 mb-6">
                Have questions about our camping experiences? We're happy to help!
              </p>
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for any image */}
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
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  )
}
