"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedButton } from "@/components/animated-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    try {
      // Create FormData object to send
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("subject", formData.subject)
      formDataToSend.append("message", formData.message)

      // Send the form data using our server action
      const result = await sendContactEmail(formDataToSend)

      if (result.success) {
        setFormStatus({
          type: "success",
          message: result.message,
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setFormStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again or contact me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus.type && (
        <Alert
          className={`${formStatus.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
        >
          <AlertDescription className={`${formStatus.type === "success" ? "text-green-800" : "text-red-800"}`}>
            {formStatus.message}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
            className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            required
            className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
          />
        </div>

        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="What is your message about?"
            className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            required
            className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
            rows={6}
          />
        </div>
      </div>

      <AnimatedButton
        type="submit"
        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        disabled={isSubmitting}
        animationStyle="shine"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </AnimatedButton>
    </form>
  )
}
