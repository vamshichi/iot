"use client"

import { Building2, Target, Lightbulb, Handshake } from "lucide-react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const reasons = [
  {
    icon: Building2,
    title: "Government-Led, Policy-Driven",
    description: "Engage with Abu Dhabi Digital Authority, UAE Cyber Security Council, and key government stakeholders shaping national cybersecurity policy.",
  },
  {
    icon: Target,
    title: "Multi-Billion Dollar Market Access",
    description: "Direct access to budget owners and regulators in the world's fastest-growing IoT security market.",
  },
  {
    icon: Lightbulb,
    title: "Real Problems. Real Solutions.",
    description: "Connect with enterprises solving mission-critical vulnerabilities across energy, healthcare, logistics, and smart cities.",
  },
  {
    icon: Handshake,
    title: "Built for Impact & Deal-Making",
    description: "Pre-scheduled 1:1 business meetings, dedicated networking sessions, and solution showcases designed for real outcomes.",
  },
]

export function WhyAttendSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/smart-city.jpg"
          alt="Smart city visualization"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="absolute inset-0 cyber-grid z-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-shimmer bg-primary/10 px-4 py-1 rounded-full">
            Why This Event Matters
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Where Nations Secure the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A high-impact global platform where government authorities, critical infrastructure leaders, and cybersecurity innovators converge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 card-hover group relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}
