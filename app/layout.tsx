import type React from "react"
import ClientLayout from "./ClientLayout"
import type { Metadata } from "next"

// Base URL for the website
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://muradwadirum.com"

export const metadata: Metadata = {
  title: "Murad Wadi Rum - Authentic Bedouin Desert Experiences",
  description:
    "Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Murad Wadi Rum - Authentic Bedouin Desert Experiences",
    description:
      "Experience the magic of Jordan's Wadi Rum desert with authentic Bedouin tours, jeep safaris, camel trekking, and overnight camping.",
    images: [
      {
        url: `${baseUrl}/social-share.png`,
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
    images: [`${baseUrl}/social-share.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
