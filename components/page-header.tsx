"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{
    left: number
    top: number
    delay: number
    duration: number
    opacity: number
    size: number
  }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 3,
        opacity: 0.2 + Math.random() * 0.4,
        size: 2 + Math.random() * 3,
      }))
    )
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `particle-float ${p.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function PageHeader({ title, subtitle, description, backgroundImage }: PageHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
<section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 via-background/70 to-background" />
        </div>
      )}
      
      {/* Fallback gradient background */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-background to-background cyber-grid" />
      )}
      
      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[200px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <span 
              className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                {subtitle}
                <span className="w-8 h-px bg-primary" />
              </span>
            </span>
          )}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance text-glow transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {title}
          </h1>
          {description && (
            <p 
              className={`text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
