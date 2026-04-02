"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight, Shield, Lock, Wifi, Cpu, Server, Globe } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date("2026-07-09T09:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div 
          key={unit} 
          className="text-center animate-scale-in"
          style={{ animationDelay: `${800 + index * 100}ms` }}
        >
          <div className="glass rounded-xl px-3 md:px-5 py-3 md:py-4 min-w-[60px] md:min-w-[80px] animate-pulse-glow relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
            <span className="relative text-2xl md:text-4xl font-bold text-primary text-glow">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 block capitalize font-medium">{unit}</span>
        </div>
      ))}
    </div>
  )
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
      Array.from({ length: 30 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.5,
        size: 2 + Math.random() * 4,
      }))
    )
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="particle-container">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  )
}

function DataStreams() {
  const [streams, setStreams] = useState<number[]>([])

  useEffect(() => {
    setStreams(Array.from({ length: 8 }).map(() => 2 + Math.random() * 2))
  }, [])

  if (streams.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((duration, i) => (
        <div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-data-stream"
          style={{
            left: `${10 + i * 12}%`,
            height: '200px',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  )
}

function FloatingIcons() {
  const [durations, setDurations] = useState<number[]>([])
  
  const icons = [
    { Icon: Shield, size: 48, top: '15%', left: '8%', delay: 0 },
    { Icon: Lock, size: 36, top: '25%', right: '12%', delay: 1 },
    { Icon: Wifi, size: 42, bottom: '30%', left: '15%', delay: 2 },
    { Icon: Cpu, size: 40, top: '60%', right: '8%', delay: 3 },
    { Icon: Server, size: 38, bottom: '20%', right: '20%', delay: 4 },
    { Icon: Globe, size: 44, top: '40%', left: '5%', delay: 5 },
  ]

  useEffect(() => {
    setDurations(icons.map(() => 5 + Math.random() * 3))
  }, [])

  if (durations.length === 0) return null

  return (
    <>
      {icons.map(({ Icon, size, delay, ...position }, i) => (
        <div
          key={i}
          className="absolute text-primary/20 animate-float hidden lg:block"
          style={{
            ...position,
            animationDelay: `${delay}s`,
            animationDuration: `${durations[i]}s`,
          }}
        >
          <Icon size={size} />
        </div>
      ))}
    </>
  )
}

function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan"
      />
    </div>
  )
}

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Futuristic cybersecurity cityscape"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid z-10" />

      {/* Animated Effects */}
      <FloatingParticles />
      <DataStreams />
      <ScanLine />
      <FloatingIcons />

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full animate-glow-pulse blur-3xl z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full animate-glow-pulse blur-3xl z-10" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-glow/5 rounded-full animate-glow-pulse blur-[100px] z-10" style={{ animationDelay: "0.75s" }} />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Event Badge */}
          <div 
            className={`inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-border-glow ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground/80 font-medium">Abu Dhabi&apos;s Premier Cybersecurity Event</span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="text-foreground block animate-blur-in" style={{ animationDelay: '200ms' }}>
              IoT Security
            </span>
            <span 
              className="gradient-text text-glow block animate-blur-in" 
              style={{ animationDelay: '400ms' }}
            >
              World Summit
            </span>
            <span 
              className="text-foreground block animate-blur-in text-3xl md:text-5xl lg:text-6xl mt-2"
              style={{ animationDelay: '600ms' }}
            >
              Abu Dhabi 2026
            </span>
          </h1>

          {/* Tagline */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-3 font-medium ${isLoaded ? 'animate-slide-up delay-300' : 'opacity-0'}`}
          >
            Leading the Global Charge Against Next-Gen IoT Threats
          </p>
          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl lg:max-w-3xl ${isLoaded ? 'animate-slide-up delay-400' : 'opacity-0'}`}
          >
            Where Nations Secure the Future. Where Deals Get Done.
          </p>

          {/* Event Details */}
          <div 
            className={`flex flex-wrap gap-6 justify-center lg:justify-start mb-10 ${isLoaded ? 'animate-slide-up delay-500' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3 glass rounded-full px-5 py-2.5 card-hover">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">9th July 2026</span>
            </div>
            <div className="flex items-center gap-3 glass rounded-full px-5 py-2.5 card-hover">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Countdown */}
          <div className={`mb-12 ${isLoaded ? 'animate-slide-up delay-600' : 'opacity-0'}`}>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Event starts in:</p>
            <CountdownTimer />
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap gap-4 justify-center lg:justify-start ${isLoaded ? 'animate-slide-up delay-700' : 'opacity-0'}`}
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
              <Link href="/sponsors">Become a Sponsor</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="ghost" 
              className="hover:bg-secondary px-8 py-6 text-lg font-semibold card-hover"
            >
              <Link href="/partner-with-us">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />

      {/* Scroll indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ${isLoaded ? 'animate-slide-up delay-1000' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div> */}
    </section>
  )
}
