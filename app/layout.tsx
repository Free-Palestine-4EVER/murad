import type React from "react"
import ClientLayout from "./ClientLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Murad Wadi Rum - Authentic Bedouin Desert Experiences",
  description:
    "Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://muradwadirum.com/",
    title: "Murad Wadi Rum - Authentic Bedouin Desert Experiences",
    description:
      "Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping.",
    images: [
      {
        url: "/social-share.png",
        width: 1200,
        height: 630,
        alt: "Murad Wadi Rum Desert Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Wadi Rum - Authentic Bedouin Desert Experiences",
    description:
      "Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping.",
    images: ["/social-share.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'