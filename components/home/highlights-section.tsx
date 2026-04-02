"use client"

import { Users, MessageSquare, Presentation, Coffee, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const highlights = [
  { icon: Users, label: "25+ Elite Speakers", description: "Industry-leading experts" },
  { icon: Presentation, label: "10+ Strategic Sessions", description: "Deep-dive workshops" },
  { icon: MessageSquare, label: "Panel Discussions", description: "Expert debates" },
  { icon: Coffee, label: "Networking Sessions", description: "Build connections" },
  { icon: Calendar, label: "1:1 Business Meetings", description: "Pre-scheduled meetings" },
  { icon: Sparkles, label: "Innovation Spotlights", description: "Latest solutions" },
]

export function HighlightsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/conference-hall.jpg"
          alt="Conference hall"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Event Highlights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Designed for <span className="gradient-text">Real-World</span> Problem Solving
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 text-center card-hover group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
