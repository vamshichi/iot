"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Calendar, MapPin, Users } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const eventInfo = [
  { icon: Calendar, value: "9th July 2026", label: "Date" },
  { icon: MapPin, value: "Abu Dhabi, UAE", label: "Location" },
  { icon: Users, value: "500+", label: "Expected Attendees" },
]

export function CTASection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/security-shield.jpg"
          alt="Security shield"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/40 to-background" />
      </div>
      <div className="absolute inset-0 cyber-grid z-5" />

      {/* Animated glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-6">
              Take Action Now
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Join the Movement Securing the{" "}
              <span className="gradient-text text-glow">UAE&apos;s Future</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Be part of the UAE&apos;s national security transformation. Register today and secure your spot at the most impactful cybersecurity event of 2026.
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold animate-pulse-glow card-hover"
            >
              <Link href="/contact">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg font-semibold card-hover"
            >
              <Link href="/sponsors">
                Become a Sponsor
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="ghost" 
              className="hover:bg-secondary px-8 py-6 text-lg font-semibold card-hover"
            >
              <Link href="#brochure">
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </Link>
            </Button>
          </div>

          {/* Event Info Cards */}
          <div
            className={`glass rounded-2xl p-8 inline-flex flex-wrap gap-8 lg:gap-12 justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {eventInfo.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <item.icon className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-primary group-hover:text-glow transition-all">
                    {item.value}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
