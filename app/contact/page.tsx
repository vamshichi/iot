import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Register as a delegate, become a sponsor, or partner with IoT Security World Summit Abu Dhabi 2026. Contact us today.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: [
      { label: "General Enquiries", value: "info@iotsecuritysummit.ae" },
      { label: "Sponsorship", value: "sponsors@iotsecuritysummit.ae" },
      { label: "Delegate Registration", value: "register@iotsecuritysummit.ae" },
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      { label: "Main Office", value: "+971 2 678 9000" },
      { label: "Sponsorship", value: "+971 2 678 9001" },
    ],
  },
  {
    icon: MapPin,
    title: "Event Venue",
    details: [
      { label: "Location", value: "Abu Dhabi, UAE" },
      { label: "Venue details to be announced", value: "" },
    ],
  },
  {
    icon: Clock,
    title: "Event Date",
    details: [
      { label: "Date", value: "9th July 2026" },
      { label: "Full day conference", value: "" },
    ],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Contact Us"
        title="Get in Touch"
        description="Register, sponsor, or partner with us. We'd love to hear from you."
        backgroundImage="/images/contact-hero.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.details.map((detail, i) => (
                      <li key={i} className="text-sm">
                        <span className="text-muted-foreground">{detail.label}</span>
                        {detail.value && (
                          <>
                            <br />
                            <span className="text-foreground font-medium">{detail.value}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Quick Links */}
              <div className="glass-light rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/agenda" className="text-primary hover:underline">View Agenda</a>
                  </li>
                  <li>
                    <a href="/speakers" className="text-primary hover:underline">Speaker Line-up</a>
                  </li>
                  <li>
                    <a href="/sponsors" className="text-primary hover:underline">Sponsorship Packages</a>
                  </li>
                  <li>
                    <a href="/partner-with-us" className="text-primary hover:underline">Partnership Opportunities</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Submit Your Enquiry</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24-48 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
