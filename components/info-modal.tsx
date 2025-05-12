"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-md w-full mx-auto transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-amber-600">What's Included in Your Tour</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-700">
            All tours booked with Murad Wadi Rum include the following amenities at no extra cost:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 text-amber-600 mr-3 mt-0.5">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Accommodation</strong> in our traditional Bedouin camps
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 text-amber-600 mr-3 mt-0.5">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Meals</strong> including dinner and breakfast
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 text-amber-600 mr-3 mt-0.5">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Transfers</strong> to and from the visitor center
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 text-amber-600 mr-3 mt-0.5">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Refreshments</strong> including Bedouin tea and water along the way
              </span>
            </li>
          </ul>
          <button
            onClick={onClose}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
