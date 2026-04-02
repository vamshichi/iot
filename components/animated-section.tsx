"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade" | "scale"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"
    
    if (!isVisible) {
      switch (animation) {
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-12`
        case "slide-left":
          return `${baseClasses} opacity-0 translate-x-12`
        case "slide-right":
          return `${baseClasses} opacity-0 -translate-x-12`
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        case "fade":
        default:
          return `${baseClasses} opacity-0`
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({ children, className = "", index = 0 }: AnimatedCardProps) {
  return (
    <AnimatedSection
      animation="slide-up"
      delay={index * 100}
      className={`card-hover ${className}`}
    >
      {children}
    </AnimatedSection>
  )
}
