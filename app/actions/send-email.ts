"use server"

import { Resend } from "resend"

// Initialize Resend with your API key (this will be loaded from environment variables)
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the type for our form data
type BookingFormData = {
  name: string
  email: string
  phone: string
  date: Date | null
  persons: number
  accommodation: string
  tour: string
  message?: string
}

// Also update the sendBookingEmail function with similar error handling improvements

export async function sendBookingEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const dateString = formData.get("date") as string
    const persons = Number.parseInt(formData.get("persons") as string) || 1
    const accommodation = formData.get("accommodation") as string
    const tour = formData.get("tour") as string
    const message = (formData.get("message") as string) || "No special requests"

    // Validate required fields
    if (!name || !email || !phone) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Validate Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not defined in environment variables")
      return {
        success: false,
        message: "Server configuration error. Please contact the administrator.",
      }
    }

    // Format date if available
    const date = dateString ? new Date(dateString).toLocaleDateString() : "Not specified"

    // Format accommodation name for display
    const accommodationName =
      accommodation === "tented-camp"
        ? "Tented Camp"
        : accommodation === "bivouac-camping"
          ? "Bivouac Camping"
          : "Not specified"

    // Format tour name for display
    const tourName =
      tour === "none"
        ? "No tour"
        : tour === "full-day-jeep"
          ? "Full Day Jeep Tour"
          : tour === "half-day-jeep"
            ? "Half Day Jeep Tour"
            : tour === "camel-ride"
              ? "Camel Ride"
              : tour === "jebel-burdah"
                ? "Jebel Burdah"
                : tour === "jebel-khash"
                  ? "Jebel Khash"
                  : tour === "hot-air-balloon"
                    ? "Hot Air Balloon"
                    : tour === "jebel-um-addami"
                      ? "Jebel Um Addami"
                      : "Not specified"

    // Calculate price based on selection
    const prices = {
      accommodation: {
        "tented-camp": 25,
        "bivouac-camping": 40,
      },
      tours: {
        "full-day-jeep": 65,
        "half-day-jeep": 55,
        "camel-ride": 25,
        "jebel-burdah": 80,
        "jebel-khash": 110,
        "hot-air-balloon": 200,
        "jebel-um-addami": 95,
        none: 0,
      },
    }

    // Check if a jeep tour is selected
    const isJeepTour = ["full-day-jeep", "half-day-jeep"].includes(tour)

    // If jeep tour is selected and accommodation is tented camp, accommodation is free
    const accommodationPrice =
      isJeepTour && accommodation === "tented-camp"
        ? 0
        : prices.accommodation[accommodation as keyof typeof prices.accommodation] || 0

    const tourPrice = prices.tours[tour as keyof typeof prices.tours] || 0
    const totalPrice = (accommodationPrice + tourPrice) * persons

    // Add a note about the free tented camp if applicable
    let pricingNote = ""
    if (isJeepTour && accommodation === "tented-camp") {
      pricingNote = "<p><strong>Note:</strong> Tented camp accommodation is included free with your jeep tour.</p>"
    }

    // Create email content
    const emailHtml = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date of Arrival:</strong> ${date}</p>
      <p><strong>Number of Persons:</strong> ${persons}</p>
      <p><strong>Accommodation:</strong> ${accommodationName}</p>
      <p><strong>Tour:</strong> ${tourName}</p>
      <p><strong>Special Requests:</strong> ${message}</p>
      <p><strong>Estimated Total Price:</strong> ${totalPrice} JOD</p>
      ${pricingNote}
    `

    try {
      // Send email using Resend with default domain
      const { data, error } = await resend.emails.send({
        from: "Murad Wadi Rum <onboarding@resend.dev>",
        to: "muradwadirum@gmail.com",
        subject: `New Booking Request from ${name}`,
        html: emailHtml,
        reply_to: email,
      })

      if (error) {
        console.error("Error sending booking email:", error)
        return {
          success: false,
          message: "Failed to send your booking request. Please try again or contact us directly.",
        }
      }

      // Also send a confirmation email to the customer
      try {
        await resend.emails.send({
          from: "Murad Wadi Rum <onboarding@resend.dev>",
          to: email,
          subject: "Your Booking Request - Murad Wadi Rum",
          html: `
            <h2>Thank you for your booking request!</h2>
            <p>Dear ${name},</p>
            <p>We have received your booking request and will get back to you shortly to confirm your reservation.</p>
            <h3>Booking Details:</h3>
            <p><strong>Date of Arrival:</strong> ${date}</p>
            <p><strong>Number of Persons:</strong> ${persons}</p>
            <p><strong>Accommodation:</strong> ${accommodationName}</p>
            <p><strong>Tour:</strong> ${tourName}</p>
            <p><strong>Estimated Total Price:</strong> ${totalPrice} JOD</p>
            ${pricingNote}
            <p>If you have any questions, please don't hesitate to contact us at muradwadirum@gmail.com or +962776558930.</p>
            <p>We look forward to welcoming you to Wadi Rum!</p>
            <p>Best regards,<br>Murad Wadi Rum Team</p>
          `,
        })
      } catch (confirmationError) {
        console.error("Error sending confirmation email:", confirmationError)
        // We don't return an error here since the main booking email was sent successfully
      }

      return {
        success: true,
        message:
          "Your booking request has been sent successfully! We will contact you shortly to confirm your reservation.",
      }
    } catch (sendError) {
      console.error("Error in sendBookingEmail:", sendError)
      return {
        success: false,
        message: "Failed to send your booking request. Please try again or contact us directly.",
      }
    }
  } catch (error) {
    console.error("Error in sendBookingEmail:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again or contact us directly.",
    }
  }
}

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Validate Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not defined in environment variables")
      return {
        success: false,
        message: "Server configuration error. Please contact the administrator.",
      }
    }

    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "No subject"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    try {
      // Send email using Resend with default domain
      const { data, error } = await resend.emails.send({
        from: "Murad Wadi Rum <onboarding@resend.dev>",
        to: "muradwadirum@gmail.com",
        subject: `Contact Form: ${subject || "New message from website"}`,
        html: emailHtml,
        reply_to: email,
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to send your message. Please try again or contact us directly.",
        }
      }

      return {
        success: true,
        message: "Your message has been sent successfully! We will get back to you as soon as possible.",
      }
    } catch (sendError) {
      console.error("Error sending email with Resend:", sendError)
      return {
        success: false,
        message: "Failed to send your message. Please try again or contact us directly.",
      }
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again or contact us directly.",
    }
  }
}
