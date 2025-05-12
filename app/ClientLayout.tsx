"use client"

import type React from "react"

import "./globals.css"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Instagram, Mail, MapPin, X, Menu, Phone } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button"
import LoadingScreen from "@/components/loading-screen"
import AnnouncementBar from "@/components/announcement-bar"
import InfoModal from "@/components/info-modal"
import { ModalProvider, useModal } from "@/context/modal-context"

const inter = Inter({ subsets: ["latin"] })

// Base URL for the website
const baseUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BASE_URL || "https://muradwadirum.com"

function MainLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { isModalOpen, closeModal } = useModal()

  useEffect(() => {
    // Set isLoaded to true after the loading screen completes
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <html lang="en">
      <head>
        <title>Murad Wadi Rum - Authentic Bedouin Desert Experiences</title>
        <meta
          name="description"
          content="Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content="Murad Wadi Rum - Authentic Bedouin Desert Experiences" />
        <meta
          property="og:description"
          content="Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping."
        />
        <meta property="og:image" content={`${baseUrl}/social-share.png`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={baseUrl} />
        <meta property="twitter:title" content="Murad Wadi Rum - Authentic Bedouin Desert Experiences" />
        <meta
          property="twitter:description"
          content="Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping."
        />
        <meta property="twitter:image" content={`${baseUrl}/social-share.png`} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingScreen />

          <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <AnnouncementBar />

            <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-amber-600">
                  Murad Wadi Rum
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-sm font-medium hover:text-amber-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-amber-600 transition-colors">
                    About
                  </Link>
                  <Link href="/tours" className="text-sm font-medium hover:text-amber-600 transition-colors">
                    Tours
                  </Link>
                  <Link href="/camping" className="text-sm font-medium hover:text-amber-600 transition-colors">
                    Camping
                  </Link>
                  <Link href="/information" className="text-sm font-medium hover:text-amber-600 transition-colors">
                    Useful Information
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700"
                  >
                    Book Now
                  </Link>
                  <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile menu */}
              {mobileMenuOpen && (
                <div className="md:hidden bg-white border-b shadow-lg">
                  <div className="container px-4 py-4 mx-auto">
                    <nav className="flex flex-col space-y-4">
                      <Link
                        href="/"
                        className="text-sm font-medium py-2 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-sm font-medium py-2 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/tours"
                        className="text-sm font-medium py-2 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tours
                      </Link>
                      <Link
                        href="/camping"
                        className="text-sm font-medium py-2 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Camping
                      </Link>
                      <Link
                        href="/information"
                        className="text-sm font-medium py-2 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Useful Information
                      </Link>
                      <Link
                        href="/contact"
                        className="text-sm font-medium py-2 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book Now
                      </Link>
                    </nav>
                  </div>
                </div>
              )}
            </header>

            <main>{children}</main>

            <footer className="bg-stone-900 text-white py-12">
              <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Murad Wadi Rum</h3>
                    <p className="text-stone-300 mb-4">
                      Authentic Bedouin desert experiences in the heart of Jordan's Wadi Rum.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/murad_wadirum/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-amber-400 transition-colors"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-stone-300 hover:text-white transition-colors">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                          About Me
                        </Link>
                      </li>
                      <li>
                        <Link href="/tours" className="text-stone-300 hover:text-white transition-colors">
                          Tours & Experiences
                        </Link>
                      </li>
                      <li>
                        <Link href="/camping" className="text-stone-300 hover:text-white transition-colors">
                          Camping
                        </Link>
                      </li>
                      <li>
                        <Link href="/information" className="text-stone-300 hover:text-white transition-colors">
                          Useful Information
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-stone-300 hover:text-white transition-colors">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Contact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-stone-300">
                        <Phone className="h-4 w-4 mr-2" />
                        +962776558930
                      </li>
                      <li className="flex items-center text-stone-300">
                        <Mail className="h-4 w-4 mr-2" />
                        muradwadirum@gmail.com
                      </li>
                      <li className="flex items-center text-stone-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        Wadi Rum Village, Jordan
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400 text-sm">
                  <p>© {new Date().getFullYear()} Murad Wadi Rum. All rights reserved.</p>
                </div>
              </div>
            </footer>

            <WhatsAppButton />
            <InfoModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <MainLayout>{children}</MainLayout>
    </ModalProvider>
  )
}
