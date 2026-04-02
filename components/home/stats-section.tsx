"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: 35.5, suffix: "B", prefix: "$", label: "IoT Market by 2028", icon: "" },
  { value: 24.6, suffix: "B", prefix: "$", label: "IoT Security Market by 2031", icon: "" },
  { value: 25, suffix: "+", prefix: "", label: "Elite Speakers", icon: "" },
  { value: 10, suffix: "+", prefix: "", label: "Strategic Sessions", icon: "" },
]

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-glow">
      {prefix}{count.toFixed(count % 1 !== 0 ? 1 : 0)}{suffix}
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cyber-network.jpg"
          alt="Cyber network visualization"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            The World&apos;s Fastest Growing{" "}
            <span className="gradient-text">IoT Security Market</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Growth driven by smart cities, government mandates & 5G infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 md:p-8 text-center card-hover animate-border-glow transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative">
                <div className="absolute -top-2 -right-2 text-2xl opacity-20">
                  {stat.icon}
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-muted-foreground mt-3 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  )
}
