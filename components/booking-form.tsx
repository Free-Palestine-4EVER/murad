"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/animated-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { sendBookingEmail } from "@/app/actions/send-email"

// Pricing data
const PRICES = {
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

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null as Date | null,
    persons: 1,
    accommodation: "tented-camp",
    tour: "none",
    message: "",
  })

  const [totalPrice, setTotalPrice] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  // State for the date picker
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  // Calculate total price whenever form data changes
  useEffect(() => {
    // Check if a jeep tour is selected
    const isJeepTour = ["full-day-jeep", "half-day-jeep"].includes(formData.tour)

    // If jeep tour is selected and accommodation is tented camp, accommodation is free
    const accommodationPrice =
      isJeepTour && formData.accommodation === "tented-camp"
        ? 0
        : PRICES.accommodation[formData.accommodation as keyof typeof PRICES.accommodation] || 0

    const tourPrice = PRICES.tours[formData.tour as keyof typeof PRICES.tours] || 0
    const persons = formData.persons || 1

    const total = (accommodationPrice + tourPrice) * persons
    setTotalPrice(total)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numValue = Number.parseInt(value)
    if (!isNaN(numValue) && numValue > 0) {
      setFormData((prev) => ({ ...prev, [name]: numValue }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, date }))
    // Close the calendar after selecting a date
    setIsCalendarOpen(false)
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
      formDataToSend.append("phone", formData.phone)
      if (formData.date) {
        formDataToSend.append("date", formData.date.toISOString())
      }
      formDataToSend.append("persons", formData.persons.toString())
      formDataToSend.append("accommodation", formData.accommodation)
      formDataToSend.append("tour", formData.tour)
      formDataToSend.append("message", formData.message)

      // Send the form data using our server action
      const result = await sendBookingEmail(formDataToSend)

      if (result.success) {
        setFormStatus({
          type: "success",
          message: result.message,
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: null,
          persons: 1,
          accommodation: "tented-camp",
          tour: "none",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1234567890"
              required
              className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Date of Arrival</Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full mt-1 justify-start text-left font-normal transition-all duration-300 hover:border-amber-500 hover:bg-amber-50",
                    !formData.date && "text-muted-foreground",
                  )}
                  onClick={() => setIsCalendarOpen(true)}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(formData.date, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.date || undefined}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="persons">Number of Persons</Label>
            <Input
              id="persons"
              name="persons"
              type="number"
              min="1"
              value={formData.persons}
              onChange={handleNumberChange}
              className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="accommodation">Accommodation Type</Label>
          <Select value={formData.accommodation} onValueChange={(value) => handleSelectChange("accommodation", value)}>
            <SelectTrigger className="mt-1 transition-all duration-300 hover:border-amber-500 focus:border-amber-500">
              <SelectValue placeholder="Select accommodation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tented-camp">Tented Camp (25 JOD per person)</SelectItem>
              <SelectItem value="bivouac-camping">Bivouac Camping (40 JOD per person)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tour">Tour (Optional)</Label>
          <Select value={formData.tour} onValueChange={(value) => handleSelectChange("tour", value)}>
            <SelectTrigger className="mt-1 transition-all duration-300 hover:border-amber-500 focus:border-amber-500">
              <SelectValue placeholder="Select tour (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No tour</SelectItem>
              <SelectItem value="full-day-jeep">Full Day Jeep Tour (65 JOD per person)</SelectItem>
              <SelectItem value="half-day-jeep">Half Day Jeep Tour (55 JOD per person)</SelectItem>
              <SelectItem value="camel-ride">Camel Ride (25 JOD per person)</SelectItem>
              <SelectItem value="jebel-burdah">Jebel Burdah (80 JOD per person)</SelectItem>
              <SelectItem value="jebel-khash">Jebel Khash (110 JOD per person)</SelectItem>
              <SelectItem value="hot-air-balloon">Hot Air Balloon (200 JOD per person)</SelectItem>
              <SelectItem value="jebel-um-addami">Jebel Um Addami (95 JOD per person)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Special Requests (Optional)</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any special requests or questions?"
            className="mt-1 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
            rows={3}
          />
        </div>
      </div>

      <div className="bg-amber-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Price:</span>
          <span className="text-xl font-bold text-amber-600">{totalPrice} JOD</span>
        </div>
        <p className="text-sm text-stone-500 mt-2">
          Price includes accommodation and selected tour (if any) for {formData.persons}{" "}
          {formData.persons === 1 ? "person" : "people"}.
          {formData.tour !== "none" && formData.tour.includes("jeep") && formData.accommodation === "tented-camp" && (
            <span className="block mt-1 text-amber-600">
              Note: Tented camp accommodation is included free with your jeep tour.
            </span>
          )}
        </p>
      </div>

      <AnimatedButton
        type="submit"
        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        disabled={isSubmitting}
        animationStyle="shine"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          "Book Now"
        )}
      </AnimatedButton>
    </form>
  )
}
