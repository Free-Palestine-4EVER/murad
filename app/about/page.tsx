import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import ImageLightbox from "@/components/image-lightbox"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Murad | Murad Wadi Rum",
  description:
    "Learn about Murad, a Bedouin guide with over 15 years of experience sharing the magic of Wadi Rum with visitors from around the world.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageLightbox src="/images/about-hero.png" alt="Murad in Wadi Rum" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About Murad</h1>
          <p className="max-w-2xl mx-auto text-xl mb-8">A lifetime of experience in the heart of Wadi Rum</p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <ImageLightbox
                src="/images/murad-portrait.png"
                alt="Murad, Bedouin guide"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">My Story</h2>
              <p className="text-lg text-stone-700 mb-6">
                As-salamu alaykum! I am Murad, born and raised in the heart of Wadi Rum, a place my Bedouin ancestors
                have called home for countless generations. My connection to this magnificent desert runs as deep as the
                ancient valleys that carve through our red sands.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                I began working with tourists at the age of 15, initially helping my father and uncles guide visitors
                through our beloved desert. What started as a young boy's excitement to share his homeland with
                strangers quickly grew into a lifelong passion and profession.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                For over 15 years now, I have had the privilege of introducing people from all corners of the world to
                the magic of Wadi Rum. Every rock formation, hidden canyon, and ancient inscription tells a story, and I
                consider it my calling to share these stories with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-stone-800">My Experience</h2>
            <p className="text-lg text-stone-700">
              From childhood adventures to professional guiding, my life has been shaped by the desert and the people
              I've met along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-amber-600">15</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-800">Started at Age 15</h3>
              <p className="text-stone-700">
                I began guiding tourists alongside my father and uncles, learning the traditional Bedouin ways of
                navigating and surviving in the desert.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-amber-600">100+</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-800">Hidden Spots</h3>
              <p className="text-stone-700">
                I know over 100 secret locations in Wadi Rum that most tourists never see - ancient inscriptions, hidden
                springs, and perfect sunset spots.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-amber-600">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-800">Countries</h3>
              <p className="text-stone-700">
                I've had the honor of guiding visitors from over 50 countries, sharing cultural exchanges and creating
                friendships across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="mb-4">
                <ImageLightbox
                  src="/images/murad-guiding.png"
                  alt="Murad guiding tourists"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/philosophy-1.png"
                    alt="Bedouin hospitality"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/philosophy-2.png"
                    alt="Desert sustainability"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ImageLightbox
                    src="/images/philosophy-3.png"
                    alt="Cultural exchange"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">My Philosophy</h2>
              <p className="text-lg text-stone-700 mb-6">
                I believe that true desert experiences go beyond sightseeing. When you visit Wadi Rum with me, you're
                not just a tourist – you become part of our story, if only for a brief moment.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                My approach combines traditional Bedouin hospitality with modern comforts. I want you to experience the
                authentic desert life while feeling safe and comfortable throughout your journey.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                Sustainability is at the heart of everything we do. This desert has sustained my people for thousands of
                years, and I am committed to preserving it for thousands more. We practice leave-no-trace tourism and
                support local communities in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Wadi Rum?</h2>
            <p className="text-xl mb-8">
              I would be honored to share my homeland with you and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-stone-100">
                <Link href="/tours">Book a Tour</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold mb-4 text-stone-800">A Personal Message</h3>
              <p className="text-lg text-stone-700 mb-6 italic">
                "The desert has taught me patience, resilience, and the true meaning of hospitality. It would be my
                greatest pleasure to share these lessons with you, along with the breathtaking beauty of Wadi Rum. I
                look forward to welcoming you to my home and showing you the desert through my eyes."
              </p>
              <p className="text-lg font-bold text-amber-600">- Murad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
