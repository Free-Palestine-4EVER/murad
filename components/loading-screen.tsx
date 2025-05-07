"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Gathering the equipment")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    // Update progress and message
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1

        // Update message based on progress
        if (newProgress === 33) {
          setMessage("Starting the fire")
        } else if (newProgress === 66) {
          setMessage("Preparing the tea")
        }

        return newProgress > 100 ? 100 : newProgress
      })
    }, 40) // 4000ms / 100 steps = 40ms per step

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-amber-600"
      style={{
        backgroundImage: 'url("/images/hero-desert.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent white overlay to make the background subtle */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold mb-8">Murad Wadi Rum</h1>
        <p className="text-xl mb-8">{message}...</p>
        <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-amber-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
