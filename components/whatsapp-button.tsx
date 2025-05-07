"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // Initialize visibility
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <a
      href="https://wa.me/962776558930"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      } hover:scale-110 animate-float`}
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative w-16 h-16 drop-shadow-lg">
        <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={64} height={64} className="w-full h-full" />
      </div>
    </a>
  )
}
