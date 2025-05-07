"use client"

export default function AnnouncementBar() {
  // Fixed the announcements to ensure proper spacing
  const announcements = [
    "      All camps I have partnership with have Wi-Fi",
    "For groups there is discount",
    "Sunset and sunrise jeep tours available     •",
  ]

  // Join announcements with a black bullet point and more spacing
  const marqueeText = announcements.join(" 　•　 ")

  return (
    <div className="bg-amber-600 py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-white font-medium">{marqueeText}</span>
          <span className="text-white font-medium">{marqueeText}</span>
        </div>
      </div>
    </div>
  )
}
