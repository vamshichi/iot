"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Egypt",
  "Jordan",
  "Lebanon",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Singapore",
  "Australia",
  "Other",
]

const interestTypes = [
  { value: "delegate", label: "Register as Delegate" },
  { value: "sponsor", label: "Become a Sponsor" },
  { value: "partner", label: "Partner With Us" },
  { value: "speaker", label: "Apply to Speak" },
  { value: "media", label: "Media Enquiry" },
  { value: "general", label: "General Enquiry" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    jobTitle: "",
    country: "",
    interestType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="glass rounded-xl p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your enquiry has been submitted successfully. Our team will get back to you within 24-48 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="bg-secondary/50 border-border"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground">
            Company <span className="text-destructive">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Your Company"
            className="bg-secondary/50 border-border"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="bg-secondary/50 border-border"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+971 50 123 4567"
            className="bg-secondary/50 border-border"
          />
        </div>

        {/* Job Title */}
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-foreground">
            Job Title <span className="text-destructive">*</span>
          </Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            placeholder="Chief Information Security Officer"
            className="bg-secondary/50 border-border"
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country" className="text-foreground">
            Country <span className="text-destructive">*</span>
          </Label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Interest Type */}
      <div className="space-y-2">
        <Label htmlFor="interestType" className="text-foreground">
          Interest Type <span className="text-destructive">*</span>
        </Label>
        <select
          id="interestType"
          name="interestType"
          value={formData.interestType}
          onChange={handleChange}
          required
          className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select your interest</option>
          {interestTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">
          Additional Message
        </Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about your requirements..."
          className="w-full px-3 py-2 rounded-md bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to receive communications about IoT Security World Summit 2026.
      </p>
    </form>
  )
}
