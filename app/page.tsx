import Link from "next/link"
import { ChevronRight, Mail, MapPin } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"
import TourCard from "@/components/tour-card"
import TestimonialCard from "@/components/testimonial-card"
import Gallery from "@/components/gallery"
import BookingForm from "@/components/booking-form"
import { Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-desert.png" alt="Wadi Rum Desert" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Murad Wadi Rum</h1>
          <p className="max-w-2xl mx-auto text-xl mb-8">
            Experience the magic of Jordan's desert with authentic Bedouin tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              animationStyle="expand"
            >
              <Link href="/contact">Book Your Adventure</Link>
            </AnimatedButton>
            <AnimatedButton
              asChild
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white/10 hover:text-white"
              animationStyle="default"
            >
              <Link href="/tours">Explore Tours</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="w-full md:w-1/2">
              <img src="/images/bedouin-guide.png" alt="Bedouin Guide" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">About Murad Wadi Rum</h2>
              <p className="text-lg text-stone-700 mb-6">
                Born and raised in the heart of Wadi Rum, Murad offers authentic desert experiences guided by
                generations of Bedouin knowledge and tradition. Our tours provide a unique glimpse into the stunning
                landscapes and rich culture of Jordan's most famous desert.
              </p>
              <p className="text-lg text-stone-700 mb-8">
                Whether you're seeking adventure, tranquility, or cultural immersion, our personalized tours cater to
                all travelers, from solo explorers to families and groups.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-amber-600 font-medium group transition-all duration-300"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Learn more about us</span>
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/about-small-1.png"
                alt="Bedouin hospitality"
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/about-small-2.png"
                alt="Desert landscape"
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/about-small-3.png"
                alt="Traditional camp"
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/about-small-4.png"
                alt="Desert adventure"
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Our Desert Experiences</h2>
            <p className="max-w-2xl mx-auto text-lg text-stone-600">
              Discover the magic of Wadi Rum through our carefully crafted experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard
              title="Full Day Jeep Tour"
              description="Explore the vast desert landscapes and hidden canyons in our 4x4 jeep tours."
              duration="7-8 hours"
              price="65"
              currency="JOD"
              imageSrc="/images/jeep-tour.png"
            />
            <TourCard
              title="Overnight Camping"
              description="Experience the starlit sky and traditional Bedouin hospitality in our desert camps."
              duration="24 hours"
              price="25"
              currency="JOD"
              imageSrc="/images/desert-camp.png"
            />
            <TourCard
              title="Camel Trekking"
              description="Journey through the desert the traditional way, guided by experienced Bedouin camel handlers."
              duration="1-3 hours"
              price="25"
              currency="JOD"
              imageSrc="/images/camel-trek.png"
            />
          </div>

          <div className="text-center mt-12">
            <AnimatedButton
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              animationStyle="shine"
            >
              <Link href="/tours">View All Experiences</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Wadi Rum Gallery</h2>
            <p className="max-w-2xl mx-auto text-lg text-stone-300">
              Glimpses of the breathtaking landscapes and experiences awaiting you
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">What Our Guests Say</h2>
            <p className="max-w-2xl mx-auto text-lg text-stone-600">
              Hear from travelers who have experienced the magic of Wadi Rum with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our tour with Murad was the highlight of our Jordan trip. The overnight camp under the stars was magical!"
              author="Sarah Johnson"
              location="United Kingdom"
              rating={5}
              imageSrc="/images/testimonial-1.png"
            />
            <TestimonialCard
              quote="Incredible experience with knowledgeable guides. They showed us hidden spots tourists usually don't see."
              author="Marco Rossi"
              location="Italy"
              rating={5}
              imageSrc="/images/testimonial-2.png"
            />
            <TestimonialCard
              quote="The sunset jeep tour was breathtaking. Our guide was friendly and shared fascinating stories about Bedouin life."
              author="Aisha Tanaka"
              location="Japan"
              rating={5}
              imageSrc="/images/testimonial-3.png"
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Follow Our Adventures</h2>
            <p className="max-w-2xl mx-auto text-lg text-stone-600 mb-6">
              Get inspired by our latest desert experiences on Instagram
            </p>
            <a
              href="https://www.instagram.com/murad_wadirum/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="group-hover:underline">@murad_wadirum</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              href="https://www.instagram.com/p/DIUdn6wu6aQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <img
                src="https://sjc.microlink.io/5HuYuBoQooR988Uc2I22G0-iknC6SyZI4ZF2W_iul6O62i7_oDVcXheQ41OLMK5YKvyCgkWVsakGhlcX8Q-wcw.jpeg"
                alt="Wadi Rum canyon"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </a>
            <a
              href="https://www.instagram.com/p/C14sMrgIrPN/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <img
                src="/images/instagram-desert-sunset.png"
                alt="Instagram post"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </a>
            <a
              href="https://www.instagram.com/p/CtqXEgkILkJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <img
                src="/images/instagram-bedouin-camp.png"
                alt="Instagram post"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </a>
            <a
              href="https://www.instagram.com/p/CqawPB9IpXP/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <img
                src="/images/instagram-camel-trek.png"
                alt="Instagram post"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </a>
            <a
              href="https://www.instagram.com/p/ChjqSe4ju3y/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <img
                src="/images/instagram-rock-formation.png"
                alt="Instagram post"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </a>
            <a
              href="https://www.instagram.com/p/C4a_YKhILMj/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <img
                src="/images/instagram-starry-night.png"
                alt="Instagram post"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </a>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/murad_wadirum/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 font-medium rounded-md hover:bg-amber-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">Book Your Desert Adventure</h2>
              <p className="text-lg text-stone-700 mb-8">
                Ready to experience the magic of Wadi Rum? Fill out the booking form to reserve your desert adventure.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-stone-800">Phone</h3>
                    <p className="text-stone-600">+962776558930</p>
                  </div>
                </div>

                <div className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-stone-800">Email</h3>
                    <p className="text-stone-600">muradwadirum@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium text-stone-800">Location</h3>
                    <p className="text-stone-600">Wadi Rum Village, Jordan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-stone-800">Book Now</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
