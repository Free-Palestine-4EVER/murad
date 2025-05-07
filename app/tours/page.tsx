import { Button } from "@/components/ui/button"
import TourCard from "@/components/tour-card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tours & Experiences | Murad Wadi Rum",
  description:
    "Discover our authentic Bedouin desert experiences in Wadi Rum, from jeep safaris to overnight camping under the stars.",
}

export default function ToursPage() {
  // Featured tours
  const featuredTours = [
    {
      title: "Full Day Jeep Tour",
      description:
        "Explore the vast desert landscapes and hidden canyons in our 4x4 jeep tours. Visit ancient rock inscriptions, natural arches, and breathtaking viewpoints on this comprehensive tour.",
      duration: "7-8 hours",
      price: "65",
      currency: "JOD",
      imageSrc: "/images/jeep-tour.png",
      featured: true,
    },
    {
      title: "Half Day Jeep Tour",
      description:
        "Perfect for those with limited time. Experience the highlights of Wadi Rum including major attractions and stunning viewpoints in a compact tour.",
      duration: "4 hours",
      price: "55",
      currency: "JOD",
      imageSrc: "/images/half-day-tour.png",
      featured: true,
    },
    {
      title: "Camel Rides",
      description:
        "Journey through the desert the traditional way, guided by experienced Bedouin camel handlers. Perfect for experiencing the desert at a slower, more peaceful pace.",
      duration: "1 hour",
      price: "25",
      currency: "JOD",
      imageSrc: "/images/camel-trek.png",
      featured: true,
    },
  ]

  // Additional tours
  const additionalTours = [
    {
      title: "Jebel Burdah Rock Bridge",
      description:
        "Hike to the famous rock bridge of Wadi Rum, one of the highest natural arches in the world. Enjoy breathtaking panoramic views of the surrounding desert landscape.",
      duration: "Full day",
      price: "80",
      currency: "JOD",
      imageSrc: "/images/jebel-burdah.png",
    },
    {
      title: "Jebel Khash",
      description:
        "Challenge yourself with this demanding hike to one of Wadi Rum's highest mountains. The summit offers spectacular views across the desert and into Saudi Arabia.",
      duration: "Full day",
      price: "110",
      currency: "JOD",
      imageSrc: "/images/jebel-khash.png",
    },
    {
      title: "Hot Air Balloon Experience",
      description:
        "Witness the breathtaking beauty of Wadi Rum from above with our unforgettable hot air balloon experience. Float peacefully over the desert at sunrise.",
      duration: "3-4 hours (30-60 min flight)",
      price: "200",
      currency: "JOD",
      imageSrc: "/images/hot-air-balloon.png",
    },
    {
      title: "Jebel Um Addami",
      description:
        "Conquer Jordan's highest mountain at 1,854m. This challenging hike rewards you with unparalleled views across Wadi Rum and into Saudi Arabia.",
      duration: "Full day",
      price: "95",
      currency: "JOD",
      imageSrc: "/images/jebel-um-addami.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/tours-hero.png" alt="Wadi Rum Tours" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Desert Experiences</h1>
          <p className="max-w-2xl mx-auto text-xl mb-8">
            Discover the magic of Wadi Rum through our authentic Bedouin tours
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-stone-800">Explore Wadi Rum With Us</h2>
            <p className="text-lg text-stone-700 mb-6">
              Our tours are led by local Bedouin guides who have lived in Wadi Rum their entire lives. We offer a range
              of experiences to suit all interests, from adrenaline-filled adventures to peaceful cultural immersions.
            </p>
            <p className="text-lg text-stone-700 mb-8">
              All our tours can be customized to meet your specific needs and preferences. Whether you're a solo
              traveler, a couple, or a family, we'll ensure your Wadi Rum experience is unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Our Most Popular Experiences</h2>
            <p className="max-w-2xl mx-auto text-lg text-stone-600">The perfect introduction to Wadi Rum</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                price={tour.price}
                currency={tour.currency}
                imageSrc={tour.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Tours */}
      <section className="py-16 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Adventure Experiences</h2>
            <p className="max-w-2xl mx-auto text-lg text-stone-600">For those seeking excitement and challenge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalTours.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                price={tour.price}
                currency={tour.currency}
                imageSrc={tour.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tours */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">Create Your Perfect Desert Experience</h2>
              <p className="text-lg text-stone-700 mb-6">
                Can't find exactly what you're looking for? We specialize in creating custom experiences tailored to
                your interests, schedule, and group size.
              </p>
              <p className="text-lg text-stone-700 mb-8">
                Whether you want tocombine elements from different tours, add special requests, or create something
                entirely unique, our team is here to help design your perfect Wadi Rum adventure.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Contact Me for Custom Tours</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/custom-experience.png"
                alt="Custom Desert Experience"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-stone-800">Booking Information</h2>
              <p className="text-lg text-stone-600">Everything you need to know before booking your desert adventure</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-stone-800">What to Bring</h3>
                <ul className="list-disc pl-5 text-stone-700 space-y-2">
                  <li>Comfortable clothing suitable for the season</li>
                  <li>Sturdy walking shoes or sandals</li>
                  <li>Sun protection (hat, sunglasses, sunscreen)</li>
                  <li>Camera</li>
                  <li>Water bottle (we provide additional water)</li>
                  <li>Light jacket or sweater (for evenings, even in summer)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-stone-800">Payment & Cancellation</h3>
                <ul className="list-disc pl-5 text-stone-700 space-y-2">
                  <li>20% deposit required to secure booking</li>
                  <li>Full payment due 24 hours before tour</li>
                  <li>Free cancellation up to 48 hours before tour</li>
                  <li>50% refund for cancellations 24-48 hours before tour</li>
                  <li>No refund for cancellations less than 24 hours before tour</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-stone-800">Group Discounts</h3>
                <p className="text-stone-700 mb-4">We offer special rates for groups:</p>
                <ul className="list-disc pl-5 text-stone-700 space-y-2">
                  <li>5-10 people: 10% discount</li>
                  <li>11-20 people: 15% discount</li>
                  <li>21+ people: 20% discount</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Book Your Adventure Now</Link>
              </Button>
              <p className="mt-4 text-stone-600">
                Have questions?{" "}
                <Link href="/contact" className="text-amber-600 hover:underline">
                  Contact me
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
