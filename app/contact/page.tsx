import { Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"
import BookingForm from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Contact & Booking | Murad Wadi Rum",
  description:
    "Book your desert adventure with Murad Wadi Rum. Experience authentic Bedouin hospitality in Jordan's Wadi Rum desert.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/contact-hero.png" alt="Contact Murad Wadi Rum" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Book Your Adventure</h1>
          <p className="max-w-2xl mx-auto text-xl mb-8">Reserve your perfect desert experience in Wadi Rum</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-stone-800">Phone</h3>
                <p className="text-stone-600 mb-2">Call or WhatsApp us</p>
                <p className="text-lg font-medium text-amber-600">+962776558930</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-stone-800">Email</h3>
                <p className="text-stone-600 mb-2">Send us a message anytime</p>
                <p className="text-lg font-medium text-amber-600">muradwadirum@gmail.com</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-stone-800">Location</h3>
                <p className="text-stone-600 mb-2">Find us in Wadi Rum Village</p>
                <p className="text-lg font-medium text-amber-600">Wadi Rum Village, Jordan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6 text-stone-800">Book Your Desert Experience</h2>
              <p className="text-lg text-stone-700">
                Ready to experience the magic of Wadi Rum? Fill out the booking form to reserve your desert adventure.
                We'll confirm your booking within 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <BookingForm />
            </div>

            <div className="mt-8 text-center text-stone-600">
              <p>
                If you have any questions or special requests, please don't hesitate to contact me directly at{" "}
                <a href="mailto:muradwadirum@gmail.com" className="text-amber-600 hover:underline">
                  muradwadirum@gmail.com
                </a>{" "}
                or via WhatsApp at{" "}
                <a href="https://wa.me/962776558930" className="text-amber-600 hover:underline">
                  +962 776 558 930
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-stone-800">Find Us</h2>
              <p className="text-lg text-stone-600">Located in the heart of Wadi Rum Village, Jordan</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108896.30351489517!2d35.35766565820313!3d29.583599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15007cec7f02f677%3A0x5bfe2c16b0e9e1e3!2sWadi%20Rum%20Village%2C%20Jordan!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
